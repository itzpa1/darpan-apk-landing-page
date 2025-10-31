"use client";

import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

interface CameraCaptureProps {
  onCapture: (imageBase64: string) => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const webcamRef = useRef<Webcam>(null);
  const [captured, setCaptured] = useState<string | null>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCaptured(imageSrc);
      onCapture(imageSrc);
    }
  }, [webcamRef, onCapture]);

  return (
    <div className="flex flex-col items-center space-y-4">
      {!captured ? (
        <>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            className="rounded-lg shadow-md"
            videoConstraints={{
              facingMode: "user",
            }}
          />
          <button
            onClick={capture}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Capture
          </button>
        </>
      ) : (
        <>
          <img src={captured} alt="Captured" className="rounded-lg shadow-md" />
          <button
            onClick={() => setCaptured(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Retake
          </button>
        </>
      )}
    </div>
  );
};

export default CameraCapture;
