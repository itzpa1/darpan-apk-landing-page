import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import TeamHeader from "@/components/TeamHeader";
import React from "react";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TeamHeader />
      </main>
      <Footer />
    </div>
  );
}
