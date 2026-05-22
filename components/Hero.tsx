"use client";
import {
  Download,
  Award,
  AlertTriangle,
  Check,
} from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { TbUserScan } from "react-icons/tb";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { assets, techStack } from "@/assets/assets";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const points = [t.hero.point1, t.hero.point2, t.hero.point3];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Animated Blurred Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#FF9933]/25 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#B22222]/15 to-transparent blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#FFD700]/15 to-transparent blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container flex flex-col space-y-6 mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:gap-8 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            {/* Hackathon Badge */}
            <div className="bg-[#f2c849]/10 border border-[#f2c849]/30 rounded-full py-1.5 px-4 flex items-center gap-2 text-sm font-semibold text-black backdrop-blur-md transition-all duration-300 hover:border-[#f2c849]/50 hover:bg-[#f2c849]/20 shadow-sm w-fit group select-none">
              <Award size={"16"} className="text-[#FF9933] group-hover:scale-110 transition-transform duration-300" />
              <span className="font-nun text-[13px] font-bold tracking-wide text-zinc-800">
                {t.hero.badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="bg-gradient-to-r from-amber-600 via-red-600 to-[#8B0000] bg-clip-text font-mon font-extrabold text-4xl md:text-5xl text-transparent tracking-tight leading-tight lg:leading-[1.1] text-center lg:text-left selection:bg-[#ff9933] selection:text-white">
              {t.hero.heading_line1} <br />
              <span className="text-black font-black">{t.hero.heading_line2}</span> <br />
              {t.hero.heading_line3}
            </h1>

            {/* Key Points */}
            <ul className="flex flex-col gap-3 text-left max-w-xl mx-auto lg:mx-0 font-nun font-semibold text-zinc-700 list-none p-0">
              {points.map((text, idx) => (
                <li className="flex items-center gap-3.5 group" key={idx}>
                  <div className="w-5 h-5 rounded-full bg-[#f2c849] flex items-center justify-center shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Check className="w-3.5 h-3.5 text-black stroke-[3px]" />
                  </div>
                  <span className="text-sm md:text-base text-zinc-700 font-bold font-nun leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div id="download" className="flex flex-col sm:flex-row gap-4 w-full md:max-w-md">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button id="hero-download-btn" className="flex-1 py-3.5 bg-[#f2c849] hover:bg-[#d9b23b] text-black font-mon font-bold text-[13px] md:text-[14px] rounded-xl transition-all duration-200 tracking-wider uppercase cursor-pointer flex items-center justify-center gap-2 border-2 border-b-4 border-black/80 active:translate-y-[2px] active:border-b-2 outline-none">
                    <Download className="w-5 h-5 stroke-[2.5px]" />
                    <span>{t.hero.downloadBtn}</span>
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="rounded-2xl border-2 border-[#f2c849]/30">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex gap-2 items-center font-mon text-black text-lg font-bold">
                      <AlertTriangle className="text-[#FF9933]" />
                      {t.hero.alertTitle}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="font-nun font-semibold text-zinc-600 text-left">
                      {t.hero.alertDesc}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel id="hero-alert-cancel" className="border-2 border-zinc-200 rounded-xl font-mon font-bold text-sm cursor-pointer">{t.hero.alertOk}</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Link id="hero-demo-link" href={"/demo"} className="flex-1">
                <button id="hero-demo-btn" className="w-full py-3.5 border-2 border-b-4 border-black bg-white hover:bg-zinc-50 text-black font-mon font-bold text-[13px] md:text-[14px] rounded-xl transition-all duration-200 tracking-wider uppercase cursor-pointer flex items-center justify-center gap-2 active:translate-y-[2px] active:border-b-2 outline-none shadow-[0_3px_0_#000] active:shadow-[0_1px_0_#000]">
                  <TbUserScan className="w-5 h-5 stroke-[2.5px]" />
                  <span>{t.hero.demoBtn}</span>
                </button>
              </Link>
            </div>

            {/* Tech Stack Slider */}
            <div className="w-full flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] border-2 border-[#f2c849]/20 rounded-[1.6rem] py-4 px-2 relative z-10 bg-white/40 backdrop-blur-md shadow-sm">
              <div className="flex gap-6 pr-6 flex-none animate-moveLeft [animation-duration:90s] hover:animation-paused">
                <Fragment>
                  {[...techStack, ...techStack, ...techStack].map(
                    (items, index) => {
                      const IconComponent = items.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 uppercase font-mon text-[12px] font-bold text-zinc-800 bg-[#f2c849]/10 hover:bg-[#f2c849]/20 border border-[#f2c849]/20 px-3.5 py-1.5 rounded-full transition-all duration-300 select-none cursor-default"
                        >
                          <IconComponent className="w-4 h-4 text-zinc-700" />
                          <span className="tracking-wide">
                            {items.name}
                          </span>
                        </div>
                      );
                    }
                  )}
                </Fragment>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center flex-1 bg-radial from-amber-300/30 via-amber-200/10 to-transparent to-70% animate-float">
            <Image 
              src={assets.DanceHero} 
              alt="DARPAN Mobile App Indian Classical Dance Mudra Pose AI Detection Showcase"
              className="w-full max-w-[460px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(242,200,73,0.3)] transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
