// components/LanguageSwitcher.tsx
"use client";
import { FaGlobeAmericas } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import type { Locale } from "@/lib/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="border-2 border-b-4 border-[#ff9933] bg-white rounded-md px-3 py-1 flex items-center gap-1">
        <FaGlobeAmericas color="#ff9933" />
        <select
          id="language-select"
          aria-label="Select Language"
          value={locale}
          onChange={(e) => setLocale(e.target.value as Locale)}
          className=" font-mon font-medium cursor-pointer outline-none bg-transparent"
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी (Hindi)</option>
          <option value="bn">বাংলা (Bengali)</option>
          <option value="ta">தமிழ் (Tamil)</option>
          <option value="te">తెలుగు (Telugu)</option>
          <option value="mr">मराठी (Marathi)</option>
        </select>
      </div>
    </div>
  );
}
