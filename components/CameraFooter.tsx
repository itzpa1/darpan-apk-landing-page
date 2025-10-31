"use client";
import { assets } from "@/assets/assets";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function CameraFooter() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 400);
  }, [clicked]);
  return (
    <div className="flex items-end justify-between pb-8">
      <div className="bg-white p-0.5 rounded-full w-16 h-16 overflow-hidden">
        <Image
          src={assets.grain}
          alt="mini-gallery"
          className="w-full h-full object-cover rounded-full border-2 border-black"
        />
      </div>
      <div className="w-18 h-18 bg-white rounded-full border border-white p-0.5">
        <button
          onClick={() => setClicked(true)}
          className={`w-full h-full bg-white ${
            clicked ? "border-10" : "border-4"
          } border-black rounded-full duration-100`}
        ></button>
      </div>
      <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
        <Upload className="" />
      </div>
    </div>
  );
}
