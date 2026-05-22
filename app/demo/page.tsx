"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import MudraResultCard from "@/components/MudraResultCard";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

// Import demo images
import alapadmaImg from "@/assets/demo/Alapadmam_1.jpg";
import anjaliImg from "@/assets/demo/Anjali_0.jpg";
import chakraImg from "@/assets/demo/Chakra_1.jpg";
import katrimukhaImg from "@/assets/demo/Katrimukha_0.jpg";
import patakaImg from "@/assets/demo/pataka_mudra.png";

const demoImages = [
  { name: "Alapadma", image: alapadmaImg },
  { name: "Anjali", image: anjaliImg },
  { name: "Chakra", image: chakraImg },
  { name: "Katrimukha", image: katrimukhaImg },
  { name: "Pataka", image: patakaImg },
];


interface DetectionBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface DetectionPrediction extends DetectionBox {
  confidence: number;
  class: string;
  class_id: number;
}

interface DetectionResult {
  predictions: DetectionPrediction[];
  image: { width: number; height: number };
  time: number;
}

interface DetectionResultState {
  imageSrc: string;
  mudraName: string;
  confidence: number;
  box?: DetectionBox;
}

const MudraPage = () => {
  const [cameraStatus, setCameraStatus] = useState<
    "loading" | "active" | "error"
  >("loading");
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [detectedResult, setDetectedResult] =
    useState<DetectionResultState | null>(null);

  // Detect device type
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();

      if (/mobile/.test(userAgent) || width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);



  // Start camera
  const startCamera = async () => {
    try {
      setCameraStatus("loading");
      setError(null);

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 30 },
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;

        videoRef.current.onloadedmetadata = () => {
          videoRef.current
            ?.play()
            .then(() => {
              setCameraStatus("active");
            })
            .catch((err) => {
              console.error("Play error:", err);
              setCameraStatus("error");
              setError("Failed to play camera stream");
            });
        };
      }
    } catch (err: any) {
      console.error("Camera error:", err);
      setCameraStatus("error");
      setError("Camera Not Available");
    }
  };

  // Convert file to base64
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // console.log(
        //   "File converted to base64, length:",
        //   (reader.result as string).length
        // );
        resolve(reader.result as string);
      };
      reader.onerror = (err) => {
        console.error("File conversion error:", err);
        reject(err);
      };
    });

  // Handle API result
  const handleResult = (result: DetectionResult, imageSrc: string) => {

    if (result?.predictions?.length) {
      const pred = result.predictions[0];

      setDetectedResult({
        imageSrc,
        mudraName: pred.class,
        confidence: pred.confidence,
        box: {
          x: pred.x,
          y: pred.y,
          width: pred.width,
          height: pred.height,
        },
      });
    } else {
      setError("No mudra detected. Please try again.");
    }
  };

  // Handle file upload
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const imageBase64 = await toBase64(file);
      const res = await axios.post("/api/detect-mudra", { imageBase64 });

      handleResult(res.data, imageBase64); // ✅ pass base64 as imageSrc
    } catch (err: any) {
      console.error("File upload error:", err);
      setError("Error detecting mudra. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle camera capture
  const handleCameraCapture = async () => {
    if (!videoRef.current || !canvasRef.current || cameraStatus !== "active") {
      setError("Camera not ready");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (!context) {
        setError("Failed to capture image");
        return;
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageBase64 = canvas.toDataURL("image/jpeg", 0.8);
      const res = await axios.post("/api/detect-mudra", { imageBase64 });

      handleResult(res.data, imageBase64); // ✅ pass captured image
    } catch (err: any) {
      console.error("Camera capture error:", err);
      setError("Error detecting mudra. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Trigger file input
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Handle selected preset demo image
  const handleSelectDemoImage = async (imgAsset: any, name: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(imgAsset.src);
      const blob = await response.blob();
      const file = new File([blob], `${name.toLowerCase()}.jpg`, {
        type: blob.type,
      });
      const imageBase64 = await toBase64(file);
      const res = await axios.post("/api/detect-mudra", { imageBase64 });
      handleResult(res.data, imageBase64);
    } catch (err: any) {
      console.error("Demo image select error:", err);
      setError("Error detecting mudra. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-start camera on component mount
  useEffect(() => {
    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="w-full h-screen relative bg-black">
      {/* Camera Feed */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
        style={{
          transform: deviceType === "mobile" ? "" : "scaleX(-1)",
        }}
      />

      {/* Title */}
      <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-white font-semibold font-family-mon bg-[#f4c849]/60 rounded-full px-6 py-2 backdrop-blur-md border-2 border-white/30">
        {loading ? "Processing..." : "Place on Target"}
      </h1>

      {/* Mudra Name */}
      {detectedResult && (
        <MudraResultCard
          imageSrc={detectedResult.imageSrc}
          mudraName={detectedResult.mudraName}
          confidence={detectedResult.confidence}
          box={detectedResult.box}
          onClose={() => setDetectedResult(null)}
        />
      )}

      {/* Controls UI */}
      <div className="absolute bottom-6 w-full flex justify-center z-30">
        <div className="grid grid-cols-3 items-center justify-center gap-6">
          {/* Upload Image Button */}
          <button
            id="demo-upload-btn"
            onClick={triggerFileInput}
            disabled={loading}
            className="w-16 h-16 bg-[#f2c849]/80 backdrop-blur-md rounded-xl flex items-center justify-center border-4 border-b-8 border-white/80 hover:bg-[#f2c849] active:translate-y-[4px] active:border-b-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            title="Upload Image"
          >
            <i className="fi fi-rr-images text-2xl text-white"></i>
          </button>

          {/* Capture Button */}
          <button
            id="demo-capture-btn"
            onClick={handleCameraCapture}
            disabled={loading || cameraStatus !== "active"}
            className="w-16 h-16 col-start-2 rounded-full bg-[#f2c849]/80 backdrop-blur-md flex items-center justify-center border-4 border-b-8 border-white/80 hover:bg-[#f2c849] active:translate-y-[4px] active:border-b-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all ease-out duration-200 p-3"
            title="Capture Image"
          >
            <div className="w-full h-full bg-white rounded-full transition-all duration-200 active:scale-90"></div>
          </button>

          {/* Try Demo Button Container */}
          <div className="relative">
            {cameraStatus === "error" && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 whitespace-nowrap animate-bounce">
                <div className="text-[10px] font-family-mon font-bold text-[#f2c849] uppercase tracking-wider bg-black px-3 py-1.5 rounded-full border border-[#f2c849] shadow-lg flex items-center gap-1.5">
                  Try Demo
                </div>
                <div className="w-2 h-2 bg-black border-r border-b border-[#f2c849] rotate-45 -mt-1"></div>
              </div>
            )}
            <button
              id="demo-try-btn"
              onClick={() => setIsDemoOpen(true)}
              disabled={loading}
              className="w-16 h-16 bg-[#f2c849]/80 backdrop-blur-md rounded-xl flex items-center justify-center border-4 border-b-8 border-white/80 hover:bg-[#f2c849] active:translate-y-[4px] active:border-b-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              title="Try Demo"
            >
              <i className="fi fi-rr-magic-wand text-2xl text-white"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Dialog for Try Demo */}
      <AlertDialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <AlertDialogContent className="bg-black/90 border border-white/20 text-white rounded-2xl max-w-sm p-6 backdrop-blur-lg z-50">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold font-family-mon text-[#f2c849] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f2c849] animate-pulse"></span>
              Try Demo Images
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white/60 text-sm font-family-nun">
              Select one of the preset mudra gestures to test the AI detection model.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="grid grid-cols-3 gap-3 my-4">
            {demoImages.map((demo, idx) => (
              <button
                id={`demo-preset-btn-${idx}`}
                key={idx}
                disabled={loading}
                onClick={() => {
                  handleSelectDemoImage(demo.image, demo.name);
                  setIsDemoOpen(false);
                }}
                className="relative aspect-square rounded-xl overflow-hidden border-2 border-b-4 border-white/10 hover:border-[#f2c849] active:translate-y-[2px] active:border-b-2 group focus:outline-none focus:ring-2 focus:ring-[#f2c849] disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-all duration-200"
              >
                <Image
                  src={demo.image}
                  alt={demo.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            ))}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel
              id="demo-dialog-cancel-btn"
              onClick={() => setIsDemoOpen(false)}
              className="w-full bg-white/10 border-2 border-b-4 border-white/20 hover:bg-white/20 text-white hover:text-white rounded-xl active:translate-y-[2px] active:border-b-2 transition-all duration-200"
            >
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Hidden File Input */}
      <input
        id="demo-file-input"
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Hidden Canvas for Capture */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Scanner Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
          {/* Broken Border Corners */}
          <div className="absolute -top-1 -left-1 w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-2 rounded-full bg-white"></div>
            <div className="absolute top-0 left-0 w-2 h-full rounded-full bg-white"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-16 h-16">
            <div className="absolute top-0 right-0 w-full h-2 rounded-full bg-white"></div>
            <div className="absolute top-0 right-0 w-2 h-full rounded-full bg-white"></div>
          </div>
          <div className="absolute -bottom-1 -left-1 w-16 h-16">
            <div className="absolute bottom-0 left-0 w-full h-2 rounded-full bg-white"></div>
            <div className="absolute bottom-0 left-0 w-2 h-full rounded-full bg-white"></div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-16 h-16">
            <div className="absolute bottom-0 right-0 w-full h-2 rounded-full bg-white"></div>
            <div className="absolute bottom-0 right-0 w-2 h-full rounded-full bg-white"></div>
          </div>
        </div>
      </div>

      {/* Header with Status */}
      <div className="absolute top-0 left-0 p-4 w-full flex justify-between items-center z-30">
        <div className="flex items-center gap-3">
          <Link
            id="demo-back-btn"
            href="/"
            className="flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white font-mon font-bold text-[12px] tracking-wider uppercase px-4 py-2 rounded-xl border-2 border-b-4 border-white/20 backdrop-blur-md active:translate-y-[2px] active:border-b-2 transition-all shadow-lg cursor-pointer"
          >
            <i className="fi fi-rr-arrow-small-left text-lg"></i>
            <span>Back</span>
          </Link>
          <div
            className={`w-3 h-3 rounded-full ${
              cameraStatus === "active"
                ? "bg-green-500 animate-pulse"
                : cameraStatus === "loading"
                ? "bg-yellow-500 animate-pulse"
                : "bg-red-500"
            }`}
            title={cameraStatus === "active" ? "Camera Active" : cameraStatus === "loading" ? "Camera Loading" : "Camera Error"}
          ></div>
        </div>

        {/* Logo with primary background */}
        <Link
          id="demo-logo-link"
          href="/"
          className="bg-[#f2c849] px-4 py-2 rounded-xl border-2 border-b-4 border-black/30 hover:bg-[#f2c849]/90 active:translate-y-[2px] active:border-b-2 transition-all shadow-lg flex items-center justify-center cursor-pointer"
        >
          <Image
            src={assets.headerLogo}
            alt="logo"
            className="w-16 object-contain"
          />
        </Link>
      </div>


      {/* Loading/Error Overlay */}
      {cameraStatus !== "active" && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
          <div className="text-white text-center">
            <div className="text-6xl mb-4 flex flex-col items-center">
              {cameraStatus === "loading" ? (
                <i className="fi fi-rr-camera"></i>
              ) : (
                <i className="fi fi-rr-camera-slash"></i>
              )}
              <p className="text-xl font-family-mon mt-4">
                {cameraStatus === "loading"
                  ? "Starting Camera..."
                  : "Camera Not Available"}
              </p>
            </div>
            {cameraStatus === "error" && (
              <Button
                id="demo-camera-retry-btn"
                variant={"outline"}
                onClick={startCamera}
                className="text-black font-family-mon font-semibold bg-white border-2 border-b-4 border-gray-400 hover:bg-gray-100 active:translate-y-[2px] active:border-b-2 transition-all duration-200"
              >
                Retry Camera
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MudraPage;
