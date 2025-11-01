"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
        <TeamHeader />
      </main>
      <Footer />
    </div>
  );
}
