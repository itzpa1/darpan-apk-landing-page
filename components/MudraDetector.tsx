"use client";

import { useState } from "react";
import axios from "axios";
import CameraCapture from "./CameraCapture";

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

const MudraDetector: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [useCamera, setUseCamera] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);

    try {
      const imageBase64 = await toBase64(file);
      const res = await axios.post("/api/detect-mudra", { imageBase64 });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error detecting mudra");
    } finally {
      setLoading(false);
    }
  };

  const handleCameraCapture = async (imageBase64: string) => {
    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post("/api/detect-mudra", { imageBase64 });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error detecting mudra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      <h1 className="text-2xl font-bold">🪷 DARPAN – Mudra Detection</h1>

      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            !useCamera ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setUseCamera(false)}
        >
          Upload Image
        </button>

        <button
          className={`px-4 py-2 rounded-lg ${
            useCamera ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setUseCamera(true)}
        >
          Use Camera
        </button>
      </div>

      {!useCamera ? (
        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          <button
            onClick={handleUpload}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            {loading ? "Detecting..." : "Detect Mudra"}
          </button>
        </div>
      ) : (
        <CameraCapture onCapture={handleCameraCapture} />
      )}

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2 uppercase">Results:{JSON.stringify(result.predictions[0].class, null, 0)} </h2>
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default MudraDetector;
