"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-28 px-6 md:px-8 max-w-4xl mx-auto w-full">
      <div className="flex flex-col items-center space-y-12">
        <h2 className="font-mon font-extrabold text-3xl md:text-4xl text-zinc-950 text-center tracking-tight max-w-2xl leading-tight">
          {t.faq?.heading || "Frequently Asked Questions"}
        </h2>

        <div className="w-full flex flex-col gap-4">
          {t.faq?.questions?.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-2 border-[#f2c849]/20 hover:border-[#f2c849]/40 rounded-2xl md:rounded-3xl bg-white/40 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none cursor-pointer group"
                >
                  <span className="font-mon font-bold text-base md:text-lg text-zinc-800 group-hover:text-zinc-950 transition-colors">
                    {item.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-[#f2c849]/10 group-hover:bg-[#f2c849]/20 text-zinc-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#f2c849]/30 text-black" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 border-t border-zinc-100" : "max-h-0"
                  }`}
                >
                  <div className="p-6 font-nun font-semibold text-zinc-600 text-sm md:text-base leading-relaxed bg-white/10">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
