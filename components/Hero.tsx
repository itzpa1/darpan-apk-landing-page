// import { Button } from "./ui/button";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, Award, CheckCircle2, Smartphone } from "lucide-react";
import { SiFirebase, SiTensorflow } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const techStack = [
  { name: "React Native", icon: <TbBrandReactNative /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "& more..", icon: "" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Animated Blurred Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#FF9933]/30 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#B22222]/20 to-transparent blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#FFD700]/20 to-transparent blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            {/* Hackathon Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm w-fit mx-auto lg:mx-0 shadow-sm">
              <Award size={"16"} className="text-[#FF9933]" />
              <span className="text-sm text-transparent bg-gradient-to-r from-[#FF9933] via-[#B22222] to-[#8B0000] bg-clip-text font-hind font-semibold">
                SIH Project 2025
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="bg-gradient-to-r from-[#FF9933] via-[#B22222] to-[#8B0000] bg-clip-text font-hind font-semibold text-lg text-transparent leading-tight">
                Master Bharat's Traditional Dance Anytime, Anywhere
              </h1>
              <p className="font-trio font-normal text-black max-w-xl mx-auto lg:mx-0 text-lg">
                Darpan brings the rich heritage of Indian classical dance to
                your fingertips. Learn authentic dance forms from expert
                teachers with an immersive, structured learning experience.
              </p>
            </div>

            {/* Key Points for Moderators */}
            <div className="flex flex-col gap-3 text-left max-w-xl mx-auto lg:mx-0 font-hind font-medium text-black">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#FF9933] flex-shrink-0" />
                <span className="text-muted-foreground">
                  AI-powered personalized learning paths
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#FF9933] flex-shrink-0" />
                <span className="text-muted-foreground">
                  Interactive video tutorials with motion tracking
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#FF9933] flex-shrink-0" />
                <span className="text-muted-foreground">
                  Cultural context and historical insights
                </span>
              </div>
            </div>

            {/* Download APK Button */}
            <div id="download" className="flex flex-col gap-4">
              <button className="group relative bg-gradient-to-r from-[#FF9933] to-[#B22222] hover:from-[#E68A2E] hover:to-[#A01F1F] text-white shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(178,34,34,0.5)] transition-all duration-300 hover:scale-102 text-lg py-4 rounded-xl flex items-center justify-center gap-2 font-hind font-semibold ">
                <Download size={24} className="mr-2 animate-bounce" />
                <span>Download APK Now</span>
              </button>
              <p className="text-sm text-black font-hind font-medium flex flex-col md:flex-row items-center gap-1 text-muted-foreground text-center lg:text-left">
                <Smartphone size={20} /> Direct APK download • No App store
                required • Instant Access
              </p>
            </div>

            {/* Tech Stack Badge */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              {techStack.map((items, index) => (
                <div
                  key={index}
                  className="px-4 py-2 flex items-center gap-1 rounded-full bg-gradient-to-r from-[#FF9933] to-[#B22222] hover:from-[#E68A2E] hover:to-[#A01F1F] backdrop-blur-sm text-sm font-hind font-medium"
                >
                  {items.icon}
                  <span className="">{items.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:scale-110">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Decorative rings with animation */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full border-2 border-[#FF9933]/20 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[110%] w-[110%] rounded-full border border-[#B22222]/10 animate-spin-slow"></div>
              </div>

              {/* Main image container */}
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-orange-50 hover:scale-105 transition-transform duration-500">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF9933]/30 via-transparent to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute bottom-8 left-1/2 w-1/2 -translate-x-1/2 px-2 py-1 md:px-4 md:py-3 rounded-full bg-white/90 backdrop-blur-md shadow-lg border animate-bounce-slow border-white/20 ">
                  <p className="text-sm bg-gradient-to-r from-[#FF9933] to-[#B22222] bg-clip-text text-transparent font-hind font-semibold w-full text-center">
                    ✨ Experience Darpan Today
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#FFD700]/40 to-transparent blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-tr from-[#B22222]/30 to-transparent blur-2xl animate-pulse-slower"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
