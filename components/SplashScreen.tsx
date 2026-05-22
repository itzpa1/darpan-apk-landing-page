"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Disable scrolling on body while splash screen is active
    if (!hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  useEffect(() => {
    // Phase 1: Fast initial load to 30%
    const t1 = setTimeout(() => setProgress(30), 100);
    // Phase 2: Crawl to 65%
    const t2 = setTimeout(() => setProgress(65), 450);
    // Phase 3: Crawl to 90%
    const t3 = setTimeout(() => setProgress(90), 950);
    // Phase 4: Complete to 100%
    const t4 = setTimeout(() => setProgress(100), 1400);

    // Trigger fade out / reveal transition after progress reaches 100%
    const t5 = setTimeout(() => setFadeOut(true), 1750);
    
    // Hide completely after transition finishes (1s transition duration)
    const t6 = setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 2750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden pointer-events-none">
      {/* Background Masked Layer using SVG Mask */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="splash-mask">
              {/* Entire screen is visible (white) */}
              <rect width="100%" height="100%" fill="white" />
              {/* Cutout circle (black) grows from the center */}
              <circle
                cx="50%"
                cy="50%"
                r="150vmax"
                fill="black"
                style={{
                  transformOrigin: "center",
                  transition: "transform 1000ms cubic-bezier(0.85, 0, 0.15, 1)",
                  transform: `scale(${fadeOut ? 1 : 0})`,
                }}
              />
            </mask>
          </defs>
          {/* Main Background color rect masked by our cutout */}
          <rect width="100%" height="100%" fill="#f2c849" mask="url(#splash-mask)" />
        </svg>
      </div>

      {/* Foreground Content Area (Logo & Progress Bar) */}
      <div 
        className={`flex flex-col items-center justify-center absolute inset-0 z-10 transition-all duration-500 ease-out ${
          fadeOut ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        {/* Background Subtle Grain Texture (fades out with foreground) */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none bg-repeat"
          style={{ backgroundImage: `url(${assets.grain.src})` }}
        ></div>

        <div className="flex flex-col items-center gap-8 relative z-20">
          {/* Bouncing/Pulsing Logo */}
          <div className="w-48 md:w-56">
            <Image
              src={assets.headerLogo}
              alt="DARPAN Logo"
              className="w-full object-contain"
              priority
            />
          </div>

          {/* Thin Progress Bar (dark theme bar on yellow bg) */}
          <div className="w-40 md:w-48 h-[3px] bg-black/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-zinc-900 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
