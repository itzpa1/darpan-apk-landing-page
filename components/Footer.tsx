import { assets } from "@/assets/assets";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/itzpa1",
    label: "GitHub",
    color: "hover:text-[#333] hover:border-[#333]",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/itzpa1",
    label: "LinkedIn",
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    icon: Mail,
    href: "mailto:pawankumarfz12@gmail.com",
    label: "Email",
    color: "hover:text-[#FF9933] hover:border-[#FF9933]",
  },
];

const projectInfo = [
  { text: "Home", link: "/" },
  { text: "Try Demo", link: "/demo" },
  { text: "Our Team", link: "/team" },
  { text: "Download", link: "#download" },
];
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden flex flex-col">
      <Image
        src={assets.BottomBorder}
        className="w-full object-cover object-center"
        alt=""
      />
      <div className="container mx-auto px-6 md:px-8 pb-16 bg-[#f2c849]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/* Brand */}
          <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start lg:col-span-1">
            <div className="flex w-[200px] ">
              <Image
                src={assets.headerLogo}
                alt="logo"
                className="object-contain w-full self-center"
              />
            </div>
            <p className="max-w-sm leading-relaxed font-chi text-black text-center md:text-left">
              Preserving and promoting Bharat's rich dance heritage through
              innovative technology. A hackathon project celebrating cultural
              education.
            </p>
          </div>

          {/* Project Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-black font-mon font-semibold text-lg">
              Project Info
            </h4>
            <div className="flex flex-col gap-1">
              {projectInfo.map((items, index) => (
                <Link
                  key={index}
                  href={items.link}
                  className="text-black hover:underline font-semibold transition-colors inline-flex items-center gap-2 group font-nun"
                >
                  <span className="h-1 w-1 rounded-full bg-[#FF9933] group-hover:w-3 transition-all"></span>
                  {items.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-black font-mon font-semibold text-lg">
              Connect With Us
            </h4>
            <p className="font-nun font-semibold text-black text-sm md:text-base mb-4 text-center md:text-left">
              Get in touch with the team or contribute to the project
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-full text-black bg-amber-200 border-2 border-black ${social.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Language */}
        <LanguageSwitcher />

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left font-mon font-semibold text-black">
            <p className="font-chi text-sm">
              &copy; {currentYear} Darpan.
              <br />A tribute to Bharat's classical dance traditions.
            </p>
            <div className="flex items-center gap-2 font-chi font-semibold text-black text-sm">
              <span className="">Made with</span>
              <Heart
                size={16}
                className="text-[#B22222] fill-current animate-pulse self-center"
              />
              <span className="">by The_Visionary</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
