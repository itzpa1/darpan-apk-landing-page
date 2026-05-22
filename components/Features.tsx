"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface FeatureProps {
  title: string;
  desc: string;
  position: boolean;
  img: StaticImageData;
  index: number;
}

export default function Features({ position, img, index }: FeatureProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const feature = t.features[index];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileRegex.test(userAgent));

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const TextPart = () => {
    return (
      <div className="flex flex-col gap-5 items-center lg:items-start justify-center lg:px-8 xl:px-16">
        <h2 className="bg-gradient-to-r from-amber-600 to-[#ff9933] bg-clip-text text-transparent font-mon font-black text-3xl md:text-4xl lg:text-5xl tracking-tight text-center lg:text-left leading-tight">
          {feature?.title}
        </h2>
        <p className="font-nun font-bold text-center lg:text-left leading-relaxed text-zinc-700 text-sm md:text-base max-w-xl">
          {feature?.desc}
        </p>
      </div>
    );
  };

  const ImagePart = () => {
    return (
      <div className="flex p-4 md:p-6 justify-center items-center w-full">
        {/* Double-rounded outer frame with gold border & soft shadow matching UserCard */}
        <div className="relative group rounded-[2.2rem] overflow-hidden border-2 border-[#f2c849]/20 hover:border-[#f2c849]/40 bg-white/40 backdrop-blur-sm p-3.5 shadow-2xl transition-all duration-500 hover:scale-[1.01] w-full max-w-[480px]">
          <Image
            src={img}
            alt={feature?.title || "Feature"}
            className="object-contain w-full h-auto rounded-[1.6rem] [mask-image:linear-gradient(170deg,black_93%,transparent_100%)]"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
          {/* Subtle gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f2c849]/10 via-transparent to-transparent pointer-events-none rounded-[1.6rem] m-3.5" />
        </div>
      </div>
    );
  };

  const shouldShowTextFirst = position || isMobile;

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-6 md:px-8 max-w-6xl mx-auto w-full">
      <div className={`grid lg:grid-cols-2 items-center gap-12 lg:gap-16 transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"
      }`}>
        {shouldShowTextFirst ? (
          <>
            <TextPart />
            <ImagePart />
          </>
        ) : (
          <>
            <ImagePart />
            <TextPart />
          </>
        )}
      </div>
    </section>
  );
}
