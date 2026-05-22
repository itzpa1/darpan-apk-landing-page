"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Clock, Calendar, Check, Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { userData } from "@/assets/assets";

export default function UserCard() {
  const {
    name,
    role,
    mail,
    github,
    linkedin,
    portfolio,
    course,
    year,
    avatar,
    specialty,
    timeTaken,
    banner,
  } = userData;

  return (
    <div className="w-[310px] rounded-[2.2rem] bg-[#121212] border-2 border-[#f2c849]/20 flex flex-col p-4 shadow-2xl relative shrink-0 overflow-hidden font-nun select-none transition-all duration-300 hover:border-[#f2c849]/40">
      {/* Banner */}
      <div className={`w-full h-[115px] rounded-[1.6rem] relative bg-gradient-to-tr ${banner} overflow-hidden shadow-inner`}>
        {/* Floating badge bottom-right */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/50 border border-white/20 rounded-full py-1 px-3 flex items-center gap-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
          <div className="w-3.5 h-3.5 rounded-full bg-[#f2c849] flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-black stroke-[3px]" />
          </div>
          <span className="tracking-wide">{specialty}</span>
        </div>
      </div>

      {/* Overlapping Avatar */}
      <div className="absolute top-[80px] left-6 w-[70px] h-[70px] rounded-full border-4 border-[#121212] overflow-hidden bg-zinc-800 shadow-xl ring-2 ring-[#f2c849]/35">
        <Image
          src={avatar}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Info Row (No bookmark button) */}
      <div className="flex justify-between items-start w-full mt-10 mb-2 px-1.5">
        <div className="flex flex-col">
          <h3 id="modal-title" className="font-mon font-bold text-[19px] text-white tracking-wide leading-tight">
            {name}
          </h3>
          <span className="font-nun text-[12.5px] text-[#f2c849] font-semibold mt-0.5">
            {role}
          </span>
        </div>
      </div>

      {/* Developer Social Links */}
      <div className="flex gap-2.5 px-1.5 mb-4">
        <Link
          id="dev-card-github-link"
          href={github}
          target="_blank"
          className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#f2c849] hover:border-[#f2c849]/50 transition-all duration-300 hover:scale-105"
          title="GitHub Profile"
        >
          <Github className="w-4 h-4" />
        </Link>
        <Link
          id="dev-card-linkedin-link"
          href={linkedin}
          target="_blank"
          className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#f2c849] hover:border-[#f2c849]/50 transition-all duration-300 hover:scale-105"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
        </Link>
        <Link
          id="dev-card-mail-link"
          href={`mailto:${mail}`}
          className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#f2c849] hover:border-[#f2c849]/50 transition-all duration-300 hover:scale-105"
          title="Email Developer"
        >
          <Mail className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats Divider Line */}
      <div className="w-full border-t border-zinc-800/80 mb-4"></div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-1 w-full text-center px-1 mb-5">
        {/* Time Taken Column */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-1 mb-1.5 text-[#f2c849]">
            <Clock className="w-5 h-5" />
            <span className="text-[12px] font-bold text-white leading-tight">{timeTaken}</span>
          </div>
          <span className="text-[9.5px] text-zinc-500 font-bold uppercase tracking-wider">
            Build Time
          </span>
        </div>

        {/* Course Column (Replaced Hours) */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-1 mb-1.5 text-[#f2c849]">
            <GraduationCap className="w-5 h-5" />
            <span className="text-[11px] font-bold text-white leading-tight break-words max-w-full truncate px-0.5" title={course}>
              {course}
            </span>
          </div>
          <span className="text-[9.5px] text-zinc-500 font-bold uppercase tracking-wider">
            Course
          </span>
        </div>

        {/* Year Column (Replaced Months) */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-1 mb-1.5 text-[#f2c849]">
            <Calendar className="w-5 h-5" />
            <span className="text-[12px] font-bold text-white leading-tight">{year}</span>
          </div>
          <span className="text-[9.5px] text-zinc-500 font-bold uppercase tracking-wider">
            Year
          </span>
        </div>
      </div>

      {/* Developer Action Buttons */}
      <div className="flex gap-2 w-full mt-auto">
        <Link id="dev-card-portfolio-link" href={portfolio} target="_blank" className="flex-1">
          <button id="dev-card-portfolio-btn" className="w-full py-3 border border-[#f2c849]/50 hover:border-[#f2c849] hover:bg-[#f2c849]/5 text-[#f2c849] font-mon font-bold text-[12px] rounded-[1.2rem] transition-all duration-300 active:scale-[0.97] tracking-wider uppercase cursor-pointer">
            Portfolio
          </button>
        </Link>
        <Link id="dev-card-hire-link" href={`mailto:${mail}?subject=Hiring Inquiry`} className="flex-1">
          <button id="dev-card-hire-btn" className="w-full py-3 bg-[#f2c849] hover:bg-[#d9b23b] text-black font-mon font-bold text-[12px] rounded-[1.2rem] transition-all duration-300 shadow-md shadow-[#f2c849]/10 hover:shadow-[#f2c849]/20 active:scale-[0.97] tracking-wider uppercase cursor-pointer">
            Hire Me
          </button>
        </Link>
      </div>
    </div>
  );
}
