import type { Metadata } from "next";
import { Nunito, Montserrat,Chivo } from "next/font/google";
import "@flaticon/flaticon-uicons/css/all/all.css";
// import type { Metadata } from "next";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800","900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Darpan",
  description: "Bharatia Traditional Dance E-learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${montserrat.variable} ${chivo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
