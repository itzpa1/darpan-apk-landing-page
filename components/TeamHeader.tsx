import { teamData } from "@/assets/assets";
import React from "react";
import { TeamCard } from "./TeamCard";

export function TeamHeader() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#FF9933]/30 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#B22222]/20 to-transparent blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#FFD700]/20 to-transparent blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* {teamData.map((items, index) => (
            <TeamCard data={items} key={index} />
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default TeamHeader;
