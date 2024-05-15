"use client"

import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { MidSection } from "@/components/MidSection";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="z-10 h-full relative flex flex-col">
      <Header />
      <MidSection />
      <div className="flex flex-col gap-5">
        <Projects />
        <Contact />
      </div>
    </div >
  );
}
