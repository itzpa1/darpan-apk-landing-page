import Image from "next/image";
import { assets } from "../assets/assets";
import Link from "next/link";
import { Download } from "lucide-react";

const navlink = [
  { name: "Features", icon: "", link: "#features" },
  { name: "Download", icon: <Download />, link: "#download" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-[#f2c849] backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-center md:justify-between px-6 md:px-8">
        <Link href={"/"} className="flex w-[200px] ">
          <Image
            src={assets.headerLogo}
            alt="logo"
            className="object-contain w-full self-center"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navlink.map((items, index) => (
            <Link
              key={index}
              href={items.link}
              className={`
                flex font-hind items-center gap-2 text-black rounded-full px-4 py-2 border-2 border-black/70 hover:border-black/30 ${
                  items.name != "Features" ? "bg-[#FF9933]  " : ""
                }`}
            >
              {items.icon}
              <span className="relative font-hind font-semibold transition-colors hover:text-[#B22222] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#FF9933] after:to-[#B22222] after:transition-all hover:after:w-full">
                {items.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
