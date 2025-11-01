import Image from "next/image";
import { assets } from "../assets/assets";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
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
        <Link href={"/"} className="flex w-[200px] ">
          <Image
            src={assets.headerLogo}
            alt="logo"
            className="object-contain w-full self-center"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {scrolled && (
            <Link href={"/demo"}>
              <Button
                className="text-white text-lg flex items-center font-nun font-semibold "
                size={"lg"}
              >
                <TbUserScan className="size-6" />
                DEMO
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
