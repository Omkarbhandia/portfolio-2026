"use client";

import CommandPalette from "@/components/ui/CommandPalette";
import { motion } from "framer-motion";

interface HeroProps {
    setActiveSection: (section: string | null) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
    const handleHomeClick = () => {
        setActiveSection(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section id="hero" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden z-10 w-full" style={{ transform: "translate3d(0,0,0)" }}>

            {/* Minimalist Fixed Branding as Home Button */}
            <button
                onClick={handleHomeClick}
                className="group fixed top-6 left-6 md:top-8 md:left-8 z-[100] font-mono tracking-widest flex flex-col gap-1 mix-blend-difference text-white text-left hover:scale-[1.02] transition-all duration-300 command-palette-trigger"
            >
                <span className="font-bold uppercase tracking-[0.2em] mb-1 text-base md:text-lg relative w-fit">
                    Omkar Bhandia
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </span>
                <span className="opacity-70 text-[10px] md:text-xs">[ 16.6975° N, 74.4578° E ]</span>
            </button>

            {/* Top Right Metadata: Status */}
            <div className="fixed top-8 right-8 z-30 font-mono text-xs tracking-widest hidden md:flex items-center gap-3 mix-blend-difference text-white/50 border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm pointer-events-none">
                <span className="uppercase text-white/80">STATUS: OPEN_FOR_HIRES</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            </div>

            {/* Bottom Left Metadata: Infinite Marquee */}
            <div className="fixed bottom-8 left-8 z-30 font-mono text-[10px] tracking-widest hidden md:flex mix-blend-difference text-white/40 max-w-[300px] overflow-hidden whitespace-nowrap mask-image:linear-gradient(to_right,white,transparent) pointer-events-none">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 15,
                        repeat: Infinity,
                    }}
                    className="flex gap-4 min-w-max"
                >
                    <span>REACT // NEXT.JS // NODE // MONGODB // TYPESCRIPT // </span>
                    <span>REACT // NEXT.JS // NODE // MONGODB // TYPESCRIPT // </span>
                </motion.div>
            </div>

            <div className="w-full h-full max-w-7xl mx-auto px-6 md:px-12 relative z-20 flex items-center justify-center">
                <CommandPalette setActiveSection={setActiveSection} />
            </div>
        </section>
    );
}
