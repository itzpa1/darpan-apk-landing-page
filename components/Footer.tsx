"use client";

import React, { useState } from "react";
import { assets } from "@/assets/assets";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import UserModal from "./UserModal";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isUserOpen, setIsUserOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden flex flex-col bg-gradient-to-b from-white to-[#f2c849] from-20% to-20%">
      <Image
        src={assets.BottomBorder}
        className="w-full object-cover object-center"
        alt=""
      />
      <div className="bg-[#f2c849] pb-16 w-full">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-start max-w-5xl mx-auto">
            {/* Brand */}
            <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
              <div className="flex w-[200px] ">
                <Image
                  src={assets.headerLogo}
                  alt="DARPAN - Indian Classical Dance AI Learning Platform Logo"
                  className="object-contain w-full self-center"
                />
              </div>
              <p className="max-w-sm leading-relaxed font-chi text-black text-center md:text-left">
                {t.footer.tagline}
              </p>
            </div>

            {/* Meet the Developer */}
            <div className="space-y-4 flex flex-col items-center md:items-start md:pl-8 lg:pl-16">
              <h3 className="text-black font-mon font-semibold text-lg">
                {t.footer.meetDev}
              </h3>
              <div className="flex items-center gap-2 font-chi font-semibold text-black text-sm">
                <span>{t.footer.madeWith}</span>
                <Heart
                  size={16}
                  className="text-[#B22222] fill-current animate-pulse self-center"
                />
                <span>by <Link id="footer-dev-linkedin" href={'https://linkedin.com/in/itzpa1'} target="_blank" className="underline hover:no-underline">Code.Itzpa1</Link></span>
              </div>
              <button
                id="footer-show-profile-btn"
                onClick={() => setIsUserOpen(true)}
                className="border-2 border-b-4 border-black bg-white hover:bg-zinc-50 text-black px-5 py-2.5 rounded-xl font-mon font-bold text-sm transition-all duration-200 active:translate-y-[2px] active:border-b-2 outline-none cursor-pointer flex items-center gap-2 group w-fit"
              >
                {t.footer.showProfile}
              </button>
            </div>
          </div>

          {/* Language */}
          <LanguageSwitcher />

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left font-mon font-semibold text-black">
              <p className="font-chi text-sm">
                &copy; {currentYear} {t.footer.copyright}
                <br />{t.footer.tribute}
              </p>
            </div>
          </div>
        </div>
      </div>
      <UserModal isOpen={isUserOpen} onClose={() => setIsUserOpen(false)} />
    </footer>
  );
}
