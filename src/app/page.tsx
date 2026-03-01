"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import GlassDock from "@/components/ui/GlassDock";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
      case "projects":
        return <Projects />;
      default:
        return null; // Empty when just Hero
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <main className="flex-grow flex flex-col relative z-10 pb-32">
        <Hero setActiveSection={setActiveSection} />

        <AnimatePresence mode="wait">
          {activeSection && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="w-full flex-grow flex items-center justify-center relative z-20"
              id={activeSection}
            >
              {renderSection()}
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <GlassDock activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}
