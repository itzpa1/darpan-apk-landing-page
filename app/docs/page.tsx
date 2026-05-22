import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Download,
  Home,
  Chrome,
  Share2,
  PlusSquare,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PWA Installation Guide | DARPAN",
  description: "Step-by-step instructions to install DARPAN as a Progressive Web App (PWA) on Android (Chrome) and iOS (Safari) for an offline, full-screen classical dance learning experience.",
};

export default function Instructions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        {/* Back Button */}
        <Link id="docs-back-link" href="/">
          <Button
            id="docs-back-btn"
            variant="outline"
            className="mb-8 border-[#FF9933]/20 hover:bg-orange-50 cursor-pointer"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-mon font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-[#FF9933] via-[#B22222] to-[#8B0000] bg-clip-text text-transparent leading-tight pb-2">
            Installation Guide
          </h1>
          <p className="text-muted-foreground text-lg font-nun font-semibold">
            Install Darpan as a Progressive Web App for the best
            experience
          </p>
        </div>

        {/* Chrome Android Installation */}
        <Card className="p-8 mb-8 border-[#FF9933]/20 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF9933] to-[#B22222]">
              <Chrome className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-mon font-bold text-xl bg-gradient-to-r from-[#FF9933] to-[#B22222] bg-clip-text text-transparent">
                Chrome on Android
              </h2>
              <p className="text-muted-foreground text-sm font-nun font-semibold">
                Recommended method
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white font-mon font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-mon font-semibold text-lg text-zinc-800 mb-2">Open Darpan in Chrome</h3>
                <p className="text-muted-foreground font-nun font-semibold text-sm">
                  Navigate to the Darpan website using Chrome
                  browser on your Android device.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white font-mon font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-mon font-semibold text-lg text-zinc-800 mb-2">Tap the Install Banner</h3>
                <p className="text-muted-foreground font-nun font-semibold text-sm">
                  Look for the "Install app" banner at the
                  bottom of the screen or tap the three dots
                  menu (⋮) in the top-right corner.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white font-mon font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-mon font-semibold text-lg text-zinc-800 mb-2">
                  Select "Install App" or "Add to Home Screen"
                </h3>
                <p className="text-muted-foreground font-nun font-semibold text-sm">
                  From the menu, tap "Install app" or "Add to
                  Home screen". Chrome will prompt you to
                  confirm.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white font-mon font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-mon font-semibold text-lg text-zinc-800 mb-2">Confirm Installation</h3>
                <p className="text-muted-foreground font-nun font-semibold text-sm">
                  Tap "Install" in the confirmation dialog. The
                  app will be added to your home screen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white font-mon font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-mon font-semibold text-lg text-zinc-800 mb-2">
                  Launch from Home Screen
                </h3>
                <p className="text-muted-foreground font-nun font-semibold text-sm">
                  Find the Darpan icon on your home screen and
                  tap it to launch the app.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Safari iOS Installation */}
        <Card className="p-8 mb-8 border-[#FF9933]/20 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF9933] to-[#B22222]">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-mon font-bold text-xl bg-gradient-to-r from-[#FF9933] to-[#B22222] bg-clip-text text-transparent">
                Safari on iOS
              </h2>
              <p className="text-muted-foreground text-sm font-nun font-semibold">
                For iPhone users
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white font-mon font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-mon font-semibold text-lg text-zinc-800 mb-2">Open Darpan in Safari</h3>
                <p className="text-muted-foreground font-nun font-semibold text-sm">
                  Navigate to the Darpan website using Safari
                  browser on your iOS device.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white font-mon font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-mon font-semibold text-lg text-zinc-800 mb-2">Tap the Share Button</h3>
                <p className="text-muted-foreground font-nun font-semibold text-sm flex items-center gap-2">
                  Tap the Share button{" "}
                  <Share2 className="h-4 w-4 inline text-zinc-600" /> at the
                  bottom of the screen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white font-mon font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-mon font-semibold text-lg text-zinc-800 mb-2">
                  Select "Add to Home Screen"
                </h3>
                <p className="text-muted-foreground font-nun font-semibold text-sm flex items-center gap-2">
                  Scroll down and tap "Add to Home Screen"{" "}
                  <PlusSquare className="h-4 w-4 inline text-zinc-600" />{" "}
                  option.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white font-mon font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-mon font-semibold text-lg text-zinc-800 mb-2">Name and Add</h3>
                <p className="text-muted-foreground font-nun font-semibold text-sm">
                  You can customize the app name, then tap "Add"
                  in the top-right corner.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefits */}
        <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border-[#FF9933]/20 shadow-md">
          <h2 className="font-mon font-bold text-2xl mb-6 bg-gradient-to-r from-[#FF9933] to-[#B22222] bg-clip-text text-transparent">
            Why Install as PWA?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[#FF9933] mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground font-nun font-semibold text-sm md:text-base">
                Launch directly from your home screen
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[#FF9933] mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground font-nun font-semibold text-sm md:text-base">
                Full-screen experience without browser UI
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[#FF9933] mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground font-nun font-semibold text-sm md:text-base">
                Faster loading with offline support
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[#FF9933] mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground font-nun font-semibold text-sm md:text-base">
                Native app-like experience
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link id="docs-demo-link" href="/demo">
            <Button
              id="docs-demo-btn"
              size="lg"
              className="bg-gradient-to-r from-[#FF9933] to-[#B22222] hover:from-[#E68A2E] hover:to-[#A01F1F] text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              Try the Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}