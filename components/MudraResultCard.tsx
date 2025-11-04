"use client";

import { useEffect, useRef } from "react";

interface MudraResultCardProps {
  imageSrc: string;
  mudraName: string;
  confidence: number;
  box?: { x: number; y: number; width: number; height: number };
  onClose?: () => void;
}

export default function MudraResultCard({
  imageSrc,
  mudraName,
  confidence,
  box,
  onClose,
}: MudraResultCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!box || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      // Draw bounding box
      ctx.strokeStyle = "#f2c849"; // green
      ctx.lineWidth = 4;
      ctx.strokeRect(
        box.x - box.width / 2,
        box.y - box.height / 2,
        box.width,
        box.height
      );

      // Draw label background
      ctx.fillStyle = "#f2c849";
      ctx.fillRect(
        box.x - box.width / 2,
        box.y - box.height / 2 - 28,
        ctx.measureText(mudraName).width + 40,
        28
      );

      // Draw text
      ctx.fillStyle = "#fff";
      ctx.font = "20px 'Nunito', sans-serif";
      ctx.fillText(
        `${mudraName} (${(confidence * 100).toFixed(1)}%)`,
        box.x - box.width / 2 + 10,
        box.y - box.height / 2 - 8
      );
    };
  }, [imageSrc, box, mudraName, confidence]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-4 w-[90%] max-w-md text-center relative border-2 border-[#f2c849]">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 hover:text-black bg-[#f2c849] w-10 h-10 rounded-full flex items-center justify-center"
        >
          <i className="fi fi-br-cross text-white"></i>
        </button>

        <canvas ref={canvasRef} className="w-full rounded-lg object-contain" />

        <p className="mt-4 text-xl uppercase font-semibold text-gray-800 font-family-mon">
          {mudraName}
        </p>
        <p className="text-gray-600 font-family-nun">
          Confidence: {(confidence * 100).toFixed(2)}%
        </p>
      </div>
    </div>
  );
}
