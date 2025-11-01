"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type DetectionResult = {
  predictions: {
    class: string;
    confidence: number;
    x: number;
    y: number;
    width: number;
    height: number;
  }[];
};

const MudraPage = () => {
  const [cameraStatus, setCameraStatus] = useState<
    "loading" | "active" | "error"
  >("loading");
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLogoAreaDark, setIsLogoAreaDark] = useState(false); // New state for logo area darkness

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const detectionCanvasRef = useRef<HTMLCanvasElement>(null); // New canvas for darkness detection
  const animationFrameRef = useRef<number>(null); // Ref for animation frame
  const [mudras, setMudras] = useState<string | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Replace your alert() calls with this function
  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

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

  /**
   * Detects if the area around the logo (top-right corner) is dark
   * Uses luminance calculation to determine brightness
   */
  const detectLogoAreaDarkness = () => {
    if (
      !videoRef.current ||
      !detectionCanvasRef.current ||
      cameraStatus !== "active"
    )
      return;

    const video = videoRef.current;
    const canvas = detectionCanvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // Set canvas size to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Define logo area detection region (top-right corner)
    // Adjust these values based on where your logo is positioned
    const detectionWidth = canvas.width * 0.35; // 15% of width from right
    const detectionHeight = canvas.height * 0.3; // 10% of height from top
    const detectionX = canvas.width - detectionWidth; // Start from right edge
    const detectionY = 0; // Start from top edge

    // Draw only the logo area region
    ctx.drawImage(
      video,
      detectionX,
      detectionY,
      detectionWidth,
      detectionHeight,
      0,
      0,
      detectionWidth,
      detectionHeight
    );

    // Get image data from the detection area
    const imageData = ctx.getImageData(0, 0, detectionWidth, detectionHeight);
    const data = imageData.data;

    // Calculate average brightness using luminance formula
    let totalBrightness = 0;
    const pixelCount = detectionWidth * detectionHeight;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]; // Red channel
      const g = data[i + 1]; // Green channel
      const b = data[i + 2]; // Blue channel

      // Calculate luminance (perceived brightness)
      // Standard luminance formula: 0.299*R + 0.587*G + 0.114*B
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      totalBrightness += luminance;
    }

    const averageBrightness = totalBrightness / pixelCount;

    // Consider it dark if brightness is below 0.4 (40%)
    // You can adjust this threshold as needed
    const isDark = averageBrightness < 0.4;
    setIsLogoAreaDark(isDark);

    // Continue detection loop if camera is active
    if (cameraStatus === "active") {
      animationFrameRef.current = requestAnimationFrame(detectLogoAreaDarkness);
    }
  };

  // Start camera
  const startCamera = async () => {
    try {
      setCameraStatus("loading");
      setError(null);

      // Stop existing stream
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
              // Start darkness detection when camera becomes active
              animationFrameRef.current = requestAnimationFrame(
                detectLogoAreaDarkness
              );
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
      setError("Cannot access camera. Please check permissions.");
    }
  };

  // Convert file to base64
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });

  // Handle API result
  const handleResult = (result: DetectionResult) => {
    // Check if we have valid predictions
    console.log(result);
    if (
      result.predictions &&
      result.predictions.length > 0 &&
      result.predictions[0].class
    ) {
      const mudraClass = result.predictions[0].class;
      showAlert(`Detected Mudra: ${mudraClass}`);
    } else {
      setError("No mudra detected. Please try again with a clearer image.");
      setTimeout(() => {
        setError(null);
      }, 2000);
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
      handleResult(res.data);
    } catch (err) {
      console.error(err);
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

      // Set canvas size to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw current video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert to base64
      const imageBase64 = canvas.toDataURL("image/jpeg", 0.8);

      const res = await axios.post("/api/detect-mudra", { imageBase64 });
      handleResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Error detecting mudra. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Trigger file input
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Auto-start camera on component mount
  useEffect(() => {
    startCamera();

    // Cleanup on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className="bg-white rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#ff9933] font-family-mon flex items-center gap-2">
              Mudra Detected Successfully!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-black font-family-nun text-lg font-medium">
              {alertMessage.split("\n").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setAlertOpen(false)}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Controls UI */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="grid grid-cols-3 items-center justify-center gap-6 z-20">
          {/* Upload Image Button */}
          <button
            onClick={triggerFileInput}
            disabled={loading}
            className="w-16 h-16 bg-[#f2c849]/80 backdrop-blur-md rounded-xl flex items-center justify-center border-4 border-b-8 border-white/80 hover:bg-[#f2c849] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            title="Upload Image"
          >
            <i className="fi fi-rr-images text-2xl text-white"></i>
          </button>

          {/* Capture Button */}
          <button
            onClick={handleCameraCapture}
            disabled={loading || cameraStatus !== "active"}
            className="w-16 h-16 col-start-2 rounded-full bg-[#f2c849]/80 backdrop-blur-md flex items-center justify-center border-4 border-b-8 border-white/80 hover:bg-[#f2c849] active:scale-75 disabled:opacity-50 disabled:cursor-not-allowed transition-all ease-out duration-200 p-3"
            title="Capture Image"
          >
            <div className="w-full h-full bg-white rounded-full transition-all duration-200 active:scale-90"></div>
          </button>

          {/* Empty space for grid alignment */}
          <div className="w-16 h-16"></div>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Hidden Canvas for Capture */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Hidden Canvas for Darkness Detection */}
      <canvas ref={detectionCanvasRef} className="hidden" />

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
      <div className="absolute top-0 left-0 p-4 w-full flex justify-between items-center">
        <div
          className={`w-3 h-3 rounded-full ${
            cameraStatus === "active"
              ? "bg-green-500 animate-pulse"
              : cameraStatus === "loading"
              ? "bg-yellow-500 animate-pulse"
              : "bg-red-500"
          }`}
        ></div>

        {/* Logo with dynamic inversion based on background darkness */}
        <Image
          src={assets.headerLogo}
          alt="logo"
          className={`w-20 object-contain transition-all duration-300 ${
            isLogoAreaDark ? "invert" : ""
          }`}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/40 border-2 border-b-4 border-white text-white rounded-md backdrop-blur-sm font-family-mon leading-tight font-medium py-2 px-1 text-center">
          {error}
        </p>
      )}

      {/* Loading/Error Overlay */}
      {cameraStatus !== "active" && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
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
                variant={"outline"}
                onClick={startCamera}
                className=" text-black font-family-mon font-semibold"
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
