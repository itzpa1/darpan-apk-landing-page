import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export interface SocialLink {
  name: string;
  link: string;
}

export interface TeamCardProps {
  name: string;
  role: string;
  social: SocialLink[];
  course: string;
  year: string;
  avatar: StaticImageData; // or StaticImageData if importing from assets
}

export default function TeamCard({
  name,
  role,
  social,
  course,
  year,
  avatar,
}: TeamCardProps) {
  return (
    <div className="w-[250px] aspect-[4/5] rounded-lg border-2 border-gray-400/10 flex flex-col items-center p-4 shadow-md hover:bg-blue-400/10 duration-300 hover:scale-102 shrink-0">
      {/* Avatar */}
      <div className="rounded-full bg-blue-400 w-1/2 aspect-square flex items-center justify-center border-4 border-[#f2c849] inset-shadow shadow-md overflow-hidden">
        <Image
          src={avatar}
          alt={name}
          className="w-full h-full object-cover object-center rounded-full"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col items-center my-5 text-center">
        <p className="font-family-mon font-bold text-xl">{name}</p>
        <span className="font-family-nun text-gray-600">{role}</span>
        <span className="text-sm text-gray-500 mt-1">
          {course}, {year} Year
        </span>
      </div>

      {/* Social Section */}
      <div className="w-full">
        <p className="font-family-nun font-bold text-lg mb-1">
          Let&apos;s <span className="text-blue-400">Connect</span>
        </p>

        {social.map((item, index) => (
          <Link
            key={index}
            href={item.name === "mail" ? `mailto:${item.link}` : item.link}
            target={item.name === "mail" ? "_self" : "_blank"}
          >
            <Button className="text-white font-semibold w-full my-1 text-lg flex items-center justify-center gap-2">
              {item.name === "mail" ? (
                <i className="fi fi-br-envelope-dot"></i>
              ) : item.name === "linkedin" ? (
                <i className="fi fi-brands-linkedin"></i>
              ) : item.name === "github" ? (
                <i className="fi fi-brands-github"></i>
              ) : (
                <i className="fi fi-br-link"></i>
              )}
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
