import { assets } from "@/assets/assets";
import Image, { StaticImageData } from "next/image";

interface FeatureProps {
  // Fixed typo and consistent naming
  title: string;
  desc: string;
  position: boolean;
  img: StaticImageData;
}

export function Features({ title, position, desc, img }: FeatureProps) {
  const TextPart = () => {
    return (
      <div className="flex flex-col gap-4 items-start justify-center px-20">
        <h1 className="font-chi text-4xl font-black text-[#ff9933]">
          {title}
        </h1>
        <p className="font-nun font-bold text-justify leading-tight text-gray-900">
          {desc}
        </p>
      </div>
    );
  };

  const ImagePart = () => {
    return (
      <div className="flex p-10">
        <div className="relative">
          <Image
            src={img}
            alt="img"
            className="object-contain w-full h-auto
                 [mask-image:linear-gradient(170deg,black_80%,transparent_98%)]
                 border border-white/20
                 shadow-xl rounded-lg"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
          {/* Optional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none rounded-lg" />
        </div>
      </div>
    );
  };

  return (
    <div className="max-h-screen h-[80vh] grid lg:grid-cols-2 justify-start px-6 md:px-8">
      {position ? (
        <>
          <TextPart />
          <ImagePart />
        </>
      ) : (
        <>
          <ImagePart />
          <TextPart />
        </>
      )}
    </div>
  );
}
