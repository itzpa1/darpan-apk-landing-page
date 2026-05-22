"use client";
import { useEffect, useState, useRef } from "react";
import { tableData } from "@/assets/assets";
import { RxSlider } from "react-icons/rx";
import { useLanguage } from "@/lib/LanguageContext";

export default function Comparison() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const StatusBadge = ({ status }: { status: string }) => {
    const getStatusStyle = (status: string) => {
      switch (status.toLowerCase()) {
        case "yes":
          return "bg-green-50 text-green-700 border-green-200/60";
        case "planned":
          return "bg-amber-50 text-amber-700 border-amber-200/60";
        case "no":
          return "bg-rose-50 text-rose-700 border-rose-200/60";
        default:
          return "bg-zinc-50 text-zinc-700 border-zinc-200/60";
      }
    };

    return (
      <span
        className={`px-3 py-1 rounded-full border text-xs font-bold tracking-wider uppercase ${getStatusStyle(
          status
        )}`}
      >
        {status}
      </span>
    );
  };

  return (
    <section ref={sectionRef} id="comparison" className="py-16 md:py-28 flex flex-col items-center px-6 md:px-8 space-y-12 max-w-6xl mx-auto w-full">
      <div className={`w-full flex flex-col items-center space-y-12 transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"
      }`}>
        <h2 className="font-mon font-extrabold text-3xl md:text-4xl text-zinc-950 text-center tracking-tight max-w-2xl leading-tight">
          {t.comparison.heading}
        </h2>
        <span className="md:hidden uppercase text-[10px] font-mon font-bold text-zinc-500 text-center flex flex-col items-center gap-1">
          <RxSlider size={18} className="text-[#f2c849]" />
          {t.comparison.slideHint}
        </span>
        <div className="w-full lg:w-11/12 overflow-x-auto border-2 border-[#f2c849]/20 hover:border-[#f2c849]/40 rounded-[2.2rem] p-4 bg-white/40 backdrop-blur-sm shadow-2xl transition-all duration-300">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#f2c849]/20 font-mon text-xs md:text-sm uppercase tracking-wider text-zinc-500">
                <th scope="col" className="py-4 px-4 text-left font-bold text-zinc-700">{t.comparison.featureCol}</th>
                <th scope="col" className="py-4 px-4 bg-gradient-to-tr from-amber-600 via-yellow-500 to-[#f2c849] text-black font-black text-center rounded-[1.2rem] shadow-sm tracking-widest">
                  DARPAN
                </th>
                <th scope="col" className="py-4 px-4 text-center font-bold text-zinc-600">MudraMingle</th>
                <th scope="col" className="py-4 px-4 text-center font-bold text-zinc-600">YOLO V8</th>
                <th scope="col" className="py-4 px-4 text-center font-bold text-zinc-600">MediaPipe</th>
              </tr>
            </thead>
            <tbody className="font-nun text-sm md:text-base font-semibold text-zinc-700">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-zinc-100 hover:bg-[#f2c849]/5 transition-colors duration-200"
                >
                  <td className="py-4 px-4 font-bold text-zinc-800">
                    {t.comparison.features[index] || row.feature}
                  </td>
                  <td className="py-4 px-4 bg-amber-50/20 text-center font-bold">
                    <StatusBadge status={row.darpan} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <StatusBadge status={row.mudraMingle} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <StatusBadge status={row.yolo} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <StatusBadge status={row.mediapipe} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
