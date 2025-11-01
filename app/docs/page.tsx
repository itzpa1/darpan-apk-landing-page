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

export default function Instructions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="outline"
            className="mb-8 border-[#FF9933]/20 hover:bg-orange-50"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="bg-gradient-to-r from-[#FF9933] via-[#B22222] to-[#8B0000] bg-clip-text text-transparent">
            Installation Guide
          </h1>
          <p className="text-muted-foreground text-lg">
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
              <h3 className="bg-gradient-to-r from-[#FF9933] to-[#B22222] bg-clip-text text-transparent">
                Chrome on Android
              </h3>
              <p className="text-muted-foreground text-sm">
                Recommended method
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="mb-2">Open Darpan in Chrome</h4>
                <p className="text-muted-foreground">
                  Navigate to the Darpan website using Chrome
                  browser on your Android device.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="mb-2">Tap the Install Banner</h4>
                <p className="text-muted-foreground">
                  Look for the "Install app" banner at the
                  bottom of the screen or tap the three dots
                  menu (⋮) in the top-right corner.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="mb-2">
                  Select "Install App" or "Add to Home Screen"
                </h4>
                <p className="text-muted-foreground">
                  From the menu, tap "Install app" or "Add to
                  Home screen". Chrome will prompt you to
                  confirm.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="mb-2">Confirm Installation</h4>
                <p className="text-muted-foreground">
                  Tap "Install" in the confirmation dialog. The
                  app will be added to your home screen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white flex-shrink-0">
                5
              </div>
              <div>
                <h4 className="mb-2">
                  Launch from Home Screen
                </h4>
                <p className="text-muted-foreground">
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
              <h3 className="bg-gradient-to-r from-[#FF9933] to-[#B22222] bg-clip-text text-transparent">
                Safari on iOS
              </h3>
              <p className="text-muted-foreground text-sm">
                For iPhone users
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="mb-2">Open Darpan in Safari</h4>
                <p className="text-muted-foreground">
                  Navigate to the Darpan website using Safari
                  browser on your iOS device.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="mb-2">Tap the Share Button</h4>
                <p className="text-muted-foreground flex items-center gap-2">
                  Tap the Share button{" "}
                  <Share2 className="h-4 w-4 inline" /> at the
                  bottom of the screen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="mb-2">
                  Select "Add to Home Screen"
                </h4>
                <p className="text-muted-foreground flex items-center gap-2">
                  Scroll down and tap "Add to Home Screen"{" "}
                  <PlusSquare className="h-4 w-4 inline" />{" "}
                  option.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9933] to-[#B22222] text-white flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="mb-2">Name and Add</h4>
                <p className="text-muted-foreground">
                  You can customize the app name, then tap "Add"
                  in the top-right corner.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefits */}
        <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border-[#FF9933]/20">
          <h3 className="mb-6 bg-gradient-to-r from-[#FF9933] to-[#B22222] bg-clip-text text-transparent">
            Why Install as PWA?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[#FF9933] mt-2"></div>
              <p className="text-muted-foreground">
                Launch directly from your home screen
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[#FF9933] mt-2"></div>
              <p className="text-muted-foreground">
                Full-screen experience without browser UI
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[#FF9933] mt-2"></div>
              <p className="text-muted-foreground">
                Faster loading with offline support
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[#FF9933] mt-2"></div>
              <p className="text-muted-foreground">
                Native app-like experience
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/demo">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FF9933] to-[#B22222] hover:from-[#E68A2E] hover:to-[#A01F1F] text-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Try the Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}