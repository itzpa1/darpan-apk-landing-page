"use client";
import {
  Download,
  Award,
  CheckCircle2,
  Smartphone,
  AlertTriangle,
  SmilePlus,
} from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { SiFirebase, SiTensorflow } from "react-icons/si";
import { TbBrandReactNative, TbUserScan } from "react-icons/tb";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { assets, techStack } from "@/assets/assets";

const points = [
  { text: "AI-powered personalized learning paths" },
  { text: "Interactive video tutorials with motion tracking" },
  { text: "Cultural context and historical insights" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Blurred Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#FF9933]/30 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#B22222]/20 to-transparent blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#FFD700]/20 to-transparent blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container flex flex-col space-y-6 mx-auto px-6 md:px-8 py-16">
        <div className="grid lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            {/* Hackathon Badge */}
            <Button
              variant={"default"}
              className="flex items-center gap-2 bg-white backdrop-blur-sm w-fit group"
            >
              <Award
                size={"16"}
                className="text-[#FF9933] group-hover:text-white"
              />
              <span className="text-sm font-nun font-semibold text-transparent bg-gradient-to-r from-[#FF9933] via-[#B22222] to-[#8B0000] bg-clip-text group-hover:text-white">
                SIH Project 2025
              </span>
            </Button>

            <h1 className="bg-gradient-to-r from-[#FF9933] via-[#B22222] to-[#8B0000] bg-clip-text font-chi font-bold text-xl text-transparent leading-relaxed text-center w-fit selection:bg-[#ff9933] selection:text-white">
              Master Bharat's Traditional Dance <br /> Anytime, Anywhere!
            </h1>

            {/* Key Points for Moderators */}
            <div className="flex flex-col gap-3 text-left max-w-xl mx-auto lg:mx-0 font-nun font-medium text-black">
              {points.map((items, idx) => (
                <div className="flex items-center gap-3" key={idx}>
                  <CheckCircle2 className="h-5 w-5 text-[#FF9933] flex-shrink-0" />
                  <span className="text-muted-foreground">{items.text}</span>
                </div>
              ))}
            </div>

            {/* Download APK Button */}
            <div id="download" className="flex flex-col gap-4 w-1/2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  {/* <Button variant="outline">Show Dialog</Button> */}
                  <Button className="text-white transition-all duration-300 text-lg py-6 flex items-center justify-center gap-2 uppercase font-mon font-semibold">
                    <Download className="size-6" />
                    <span>Download APK Now</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex gap-1 font-hind text-black">
                      <AlertTriangle color="black" />
                      Work in Progress
                    </AlertDialogTitle>
                    <AlertDialogDescription className="font-hind text-gray-800 text-left">
                      Link will be updated soon!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="">Okay</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Link href={"/demo"} className="">
                <Button
                  className="py-6 text-lg uppercase w-full font-mon font-semibold"
                  variant={"outline"}
                >
                  <TbUserScan className="size-6" />
                  Demo
                </Button>
              </Link>
            </div>
            {/* Tech Stack Badge */}
            <div className="flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] border-t-3 border-b-3 border-gray-400/40 rounded-md py-4 relative z-10">
              {/* <div className="absolute top-0 left-0 w-full h-full border-t-2 border-b-2 rounded-md border-black z-40 "></div> */}
              <div className="flex gap-8 pr-8 flex-none animate-moveLeft [animation-duration:90s] hover:animation-paused">
                <Fragment>
                  {[...techStack, ...techStack, ...techStack].map(
                    (items, index) => {
                      const IconComponent = items.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 uppercase"
                        >
                          <IconComponent size={24} />
                          <span className="font-mon font-semibold tracking-wider">{items.name}</span>
                        </div>
                      );
                    }
                  )}
                </Fragment>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center flex-1 bg-radial from-amber-200 to-transparent to-60%">
            <Image src={assets.DanceHero} alt="heroImage" />
          </div>
        </div>
      </div>
    </section>
  );
}
