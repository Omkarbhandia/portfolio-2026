"use client";

import Hero from "@/components/Hero";
import About from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-ice-blue selection:bg-luxury-light selection:text-white">
      <main className="flex-grow flex flex-col relative z-10 w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
