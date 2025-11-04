// components/LanguageSwitcher.tsx
"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaGlobeAmericas } from "react-icons/fa";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    // Remove current locale from pathname
    const segments = pathname.split("/");
    segments[1] = locale; // Replace locale segment
    router.push(segments.join("/"));
  };

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="border-2 border-b-4 border-[#ff9933] bg-white rounded-md px-3 py-1 flex items-center gap-1">
        <FaGlobeAmericas color="#ff9933" />
        <select
          // onChange={(e) => changeLanguage(e.target.value)}
          className=" font-family-mon font-medium"
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
