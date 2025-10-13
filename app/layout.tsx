import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Hind,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: ["400", "500", "700", "900"],
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const trio = Tiro_Devanagari_Hindi({
  variable: "--font-trio",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Darpan : Journey to soul",
  description: "Bharatia Traditional Dance E-learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${hind.variable} ${trio.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
