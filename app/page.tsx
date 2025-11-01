"use client";
import { features } from "@/assets/assets";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

export default function Home() {
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
        <Hero />
        {features.map((items, idx) => (
          <Features key={idx} {...items} />
        ))}
        <Comparison />
      </main>
      <Footer />
    </div>
  );
}
