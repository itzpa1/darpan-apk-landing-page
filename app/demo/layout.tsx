import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Mudra AI Demo | DARPAN",
  description: "Try DARPAN's real-time computer vision demo. Test pose detection and hand gesture recognition on classical mudras (Alapadma, Anjali, Chakra, Katramukha, Pataka) directly in your browser.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
