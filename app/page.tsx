"use client";
import { features } from "@/assets/assets";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { LanguageProvider } from "@/lib/LanguageContext";
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
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header scrolled={scrolled} />
        <main className="flex-1">
          <Hero />
          {features.map((items, idx) => (
            <Features key={idx} index={idx} {...items} />
          ))}
          <Comparison />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
