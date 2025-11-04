"use client";
import { teamData } from "@/assets/assets";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TeamCard from "@/components/TeamCard";
import TeamHeader from "@/components/TeamHeader";
import React, { useEffect, useState } from "react";

export default function Team() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Header scrolled={scrolled} />
      <main className="flex-1">
        <div className="container flex flex-col space-y-6 mx-auto px-6 md:px-8 py-16">
          <p className="text-center text-lg lg:text-3xl font-family-chi font-bold mb-10 flex flex-col md:flex-row items-center justify-center gap-2">
            Our Super Squad of{" "}
            <span className="text-[#f2c849] rounded-full outline-dotted px-2 py-1">
              Creatives <i className="fi fi-rr-team-check"></i>
            </span>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 r place-items-center">
            {teamData.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
