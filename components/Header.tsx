import Image from "next/image";
import { assets } from "../assets/assets";
import Link from "next/link";
import { TbUserScan } from "react-icons/tb";

export default function Header({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 bg-[#f2c849] backdrop-blur-xl transition-all ${
        scrolled
          ? "border-b-2 border-b-gray-400/20 bg-white/50"
          : "border-b-2 border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-center md:justify-between px-6 md:px-8">
        <Link id="header-logo-link" href={"/"} className="flex w-[200px] ">
          <Image
            src={assets.headerLogo}
            alt="DARPAN - Indian Classical Dance AI Learning Platform Logo"
            className="object-contain w-full self-center"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {scrolled && (
            <Link id="header-demo-link" href={"/demo"}>
              <button id="header-demo-btn" className="px-5 py-2 border-2 border-black bg-[#f2c849] hover:bg-zinc-50 text-black rounded-xl font-mon font-bold text-xs uppercase tracking-wider transition-all duration-200 active:translate-y-[2px] outline-none cursor-pointer flex items-center gap-2 group shadow-[0_3px_0_#000] active:shadow-[0_1px_0_#000] active:translate-y-[2px]">
                <TbUserScan className="w-4 h-4 stroke-[2.5px]" />
                <span>Demo</span>
              </button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
