// import { Card } from './ui/card';
import { assets } from "@/assets/assets";
import {
  GraduationCap,
  BookOpen,
  Sparkles as SparklesIcon,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    description:
      "Learn from acclaimed Bharatanatyam, Kathak, and Odissi masters. Each lesson is crafted by professionals with decades of experience.",
    gradient: "from-[#FF9933] to-[#FF6B35]",
    iconBg: "from-[#FF9933]/10 to-[#FF6B35]/10",
    decorativeColor: "#FF9933",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Lessons",
    description:
      "Structured curriculum designed for all levels. Progressive learning paths with video tutorials, practice exercises, and performance feedback.",
    gradient: "from-[#B22222] to-[#8B0000]",
    iconBg: "from-[#B22222]/10 to-[#8B0000]/10",
    decorativeColor: "#B22222",
  },
  {
    icon: SparklesIcon,
    title: "Cultural Insights",
    description:
      "Deep dive into the mythology, history, and spiritual significance behind each dance form. Understand the stories each movement tells.",
    gradient: "from-[#FFD700] to-[#FFA500]",
    iconBg: "from-[#FFD700]/10 to-[#FFA500]/10",
    decorativeColor: "#FFD700",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-[#FF9933]/20 to-transparent"></div>
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute -0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#FF9933]/30 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#B22222]/20 to-transparent blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#FFD700]/20 to-transparent blur-3xl animate-float"></div>
      </div> */}

      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-red-50 w-fit mx-auto">
            <Zap className="h-4 w-4 text-[#FF9933]" />
            <span className="text-sm text-transparent bg-gradient-to-r from-[#FF9933] via-[#B22222] to-[#8B0000] bg-clip-text font-hind font-semibold">Core Features</span>
          </div>
          <h2 className="font-trio text-lg text-black font-medium">
            Why Darpan Stands Out
          </h2>
          <p className="text-muted-foreground font-hind font-medium text-black/70 max-w-2xl mx-auto text-lg">
            A comprehensive platform bridging ancient tradition with
            cutting-edge technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative shadow-lg hover:shadow-2xl transition-all duration-500 p-8 bg-white overflow-hidden hover:-translate-y-2 rounded-xl"
            >
              <Image src={assets.grain} alt="grain" className="absolute top-0 left-0 z-0 w-full h-full opacity-5 object-cover"/>
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Decorative element */}
              <div
                className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                style={{ backgroundColor: feature.decorativeColor }}
              ></div>

              <div className="relative flex flex-col gap-6">
                {/* Icon */}
                <div className="relative w-fit">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 blur-md rounded-2xl`}
                  ></div>
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="bg-gradient-to-r from-[#FF9933] to-[#B22222] bg-clip-text text-transparent font-hind font-semibold text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-trio text-black">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 border border-[#FF9933]/20 shadow-xl">
            <h3 className="mb-4 bg-gradient-to-r from-[#FF9933] to-[#B22222] bg-clip-text text-transparent font-hind font-semibold text-lg">
              Ready to Experience Darpan?
            </h3>
            <p className="text-muted-foreground mb-6 font-trio text-black">
              Download the APK and start your journey into the world of
              traditional Indian dance
            </p>
            <Link href="#download" className="inline-block font-hind font-semibold ">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF9933] to-[#B22222] hover:from-[#E68A2E] hover:to-[#A01F1F] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Download APK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
