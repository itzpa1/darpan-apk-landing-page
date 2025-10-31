"use client";
import { useState, useRef, useEffect } from "react";
import {
  Camera,
  Upload,
  X,
  ArrowLeft,
  Zap,
  MoreVertical,
  Smartphone,
  Image,
  AlertCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

// Mock mudra data
const mudraDatabase = [
  {
    name: "Anjali Mudra",
    description: "Prayer gesture symbolizing gratitude and respect",
    confidence: 95,
  },
  {
    name: "Pataka Mudra",
    description: "Flag gesture representing leaves, clouds, or wind",
    confidence: 92,
  },
];

export default function CameraPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [flashOn, setFlashOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const mobile =
        /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase()
        );
      setIsMobile(mobile);
    };

    checkMobile();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      setCameraError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      setCameraError(
        "Unable to access camera. Please ensure camera permissions are granted."
      );
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL("image/jpeg");
        setCapturedImage(imageData);
        stopCamera();
        analyzeMudra(imageData);
      }
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        setCapturedImage(imageData);
        analyzeMudra(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeMudra = async (imageData: string) => {
    setIsAnalyzing(true);
    setResult(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock result
    const randomMudra =
      mudraDatabase[Math.floor(Math.random() * mudraDatabase.length)];
    setResult(randomMudra);
    setIsAnalyzing(false);
  };

  const reset = () => {
    setCapturedImage(null);
    setResult(null);
    stopCamera();
    setCameraError(null);
  };

  // Desktop View
  if (!isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6">
        <div className="grid grid-cols-2 gap-2 px-10">
          <Card className="p-6 text-center border-gray-200 shadow-lg shrink-0">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 self-baseline"
              size="lg"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br  from-[#FF9933] to-[#B22222] hover:from-[#E68A2E] hover:to-[#A01F1F]">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 font-hind ">
              Mobile Camera Required
            </h2>
            <p className="text-gray-600 text-lg mb-6 font-trio">
              For the best camera experience,{"\n"} please open this page on
              your mobile device.
            </p>

            <div className="">
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gradient-to-r from-[#FF9933] to-[#B22222] hover:from-[#E68A2E] hover:to-[#A01F1F] text-white"
                size="lg"
              >
                <Upload className="h-5 w-5 mr-2" />
                {result ? "Upload Another" : "Upload Image"}
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            <Alert className="mt-6 p-4 rounded-lg bg-[#FF9933]/10 border border-[#FF9933]/20">
              <AlertDescription className="text-sm text-[#FF9933] font-trio">
                💡 You can still analyze mudras by uploading images from your
                computer.
              </AlertDescription>
            </Alert>
          </Card>

          {/* Results Section for Desktop */}
          {capturedImage && (
            <Card className="p-6 border-gray-200 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <img
                  src={capturedImage}
                  alt="Captured mudra"
                  className="w-full aspect-square object-center object-cover rounded-lg border-2 border-blue-500"
                />

                {isAnalyzing && (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    <p className="text-gray-600">Analyzing mudra...</p>
                  </div>
                )}

                {result && !isAnalyzing && (
                  <div className="flex flex-col h-fit">
                    <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {result.name}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-white text-sm text-blue-600 border border-blue-200">
                          {result.confidence}% match
                        </span>
                      </div>
                      <p className="text-gray-600">{result.description}</p>
                    </div>
                    <Button
                      onClick={reset}
                      variant="outline"
                      className="w-full mt-6 border-gray-300 hover:bg-gray-50"
                    >
                      Analyze Another
                    </Button>
                  </div>
                )}
              </div>
              <Alert className="flex-1 border">
                <AlertCircleIcon />
                <AlertDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet dolor asperiores repellat, culpa odio. Dolorum, nostrum optio iste ipsa, distinctio voluptates consequatur accusantium at a assumenda molestiae amet dolores? Soluta nobis facilis cum corporis quasi omnis animi, impedit praesentium ullam labore eos quo ab magni aspernatur aut eius quae distinctio illum a iure voluptatum commodi rem, officia dolorem. Molestias vitae eveniet fugiat sed cupiditate harum adipisci asperiores.
                </AlertDescription>
              </Alert>
            </Card>
          )}
        </div>
      </div>
    );
  }

  // Mobile View
  return (
    <div className="min-h-screen bg-black">
      {/* Camera Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <Link href="/">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>

          {/* Site Name */}
          <div className="text-white font-bold text-lg">Darpan</div>

          {/* More Options */}
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white/20"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Camera Preview */}
      <div className="fixed inset-0 flex items-center justify-center pt-16 pb-32">
        {!capturedImage ? (
          <div className="w-full h-full relative">
            {stream ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Camera className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-400">Camera not active</p>
                </div>
              </div>
            )}

            {/* Camera Overlay Grid */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="h-full w-full border-2 border-white/20 rounded-none m-0"></div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative">
            <img
              src={capturedImage}
              alt="Captured"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* Camera Footer Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {/* Gallery Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            onClick={() => fileInputRef.current?.click()}
          >
            <Image className="h-6 w-6" />
          </Button>

          {/* Capture Button */}
          {!capturedImage && stream && (
            <Button
              onClick={captureImage}
              className="h-16 w-16 rounded-full bg-white hover:bg-white/90 border-4 border-white/30"
              size="icon"
            >
              <div className="h-12 w-12 rounded-full bg-white"></div>
            </Button>
          )}

          {/* Flash Button */}
          {!capturedImage && (
            <Button
              variant="ghost"
              size="icon"
              className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              onClick={() => setFlashOn(!flashOn)}
            >
              <Zap
                className={`h-6 w-6 ${
                  flashOn ? "text-yellow-300 fill-yellow-300" : ""
                }`}
              />
            </Button>
          )}
        </div>

        {/* Upload Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* Error Display */}
      {cameraError && (
        <div className="fixed top-20 left-4 right-4 z-50">
          <Alert className="border-red-400 bg-red-50">
            <AlertDescription className="text-red-800">
              {cameraError}
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Results Overlay */}
      {capturedImage && (isAnalyzing || result) && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
            <img
              src={capturedImage}
              alt="Captured mudra"
              className="w-full aspect-square object-cover"
            />

            <div className="p-6">
              {isAnalyzing && (
                <div className="flex flex-col items-center gap-4 py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  <p className="text-gray-600">Analyzing mudra...</p>
                </div>
              )}

              {result && !isAnalyzing && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {result.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{result.description}</p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                      {result.confidence}% confidence
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <Button
                  onClick={reset}
                  variant="outline"
                  className="flex-1 border-gray-300"
                >
                  Retake
                </Button>
                <Button
                  onClick={reset}
                  className="flex-1 bg-blue-500 hover:bg-blue-600"
                >
                  Try Another
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Start Camera Button when not active */}
      {!stream && !capturedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <div className="text-center text-white p-6">
            <Camera className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-2">Camera</h2>
            <p className="text-gray-400 mb-6">
              Enable camera to capture mudra gestures
            </p>
            <Button
              onClick={startCamera}
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-semibold"
              size="lg"
            >
              Enable Camera
            </Button>

            <Button
              variant="ghost"
              className="w-full mt-4 text-white border-white/20 hover:bg-white/10"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Image Instead
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
