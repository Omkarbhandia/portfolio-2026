"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import CodeSpotlight from "@/components/ui/CodeSpotlight";

export default function Hero() {
    const mouseX = useMotionValue(500);
    const mouseY = useMotionValue(300);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
    };

    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 25 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 25 });
    
    // The spotlight gradient effect
    const backgroundGradient = useMotionTemplate`radial-gradient(circle 500px at ${smoothX}px ${smoothY}px, rgba(59, 130, 246, 0.95) 0%, rgba(30, 58, 138, 1) 100%)`;

    return (
        <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden w-full bg-ice-blue pt-20 pb-10 px-4 md:px-8">
            
            {/* The Code Spotlight Reveal Background */}
            <CodeSpotlight />

            {/* Faded blue gradient blobs in the background */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-luxury-blue/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3 z-0" />

            {/* The Main Hero Card */}
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-6xl aspect-square md:aspect-[21/9] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(30,58,138,0.3)] bg-luxury-blue flex flex-col justify-center p-8 md:p-20 z-10"
            >
                {/* Spotlight Background */}
                <motion.div 
                    className="absolute inset-0 z-0" 
                    style={{ background: backgroundGradient }} 
                />
                
                {/* Frosted Grain Overlay */}
                <div className="absolute inset-0 z-10 frosted-grain opacity-80 mix-blend-overlay pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-20 flex flex-col gap-3 text-white pointer-events-none w-full max-w-3xl">
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                        className="font-sans text-base md:text-2xl font-medium tracking-wide text-blue-100"
                    >
                        Hey, I'm Omkar Bhandia
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                        className="font-display text-[38px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter md:leading-[0.95] text-white"
                    >
                        Frontend and <br className="hidden md:block" /> Full Stack Developer
                    </motion.h1>
                </div>
                
                {/* Top Right Controls */}
                <div className="absolute top-8 right-8 md:top-12 md:right-12 z-30 flex items-center gap-4">
                    {/* Download Resume Button */}
                    <div className="relative group flex items-center justify-center">
                        <MagneticWrapper strength={0.3}>
                            <a 
                                href="/resume.pdf" 
                                download 
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-colors text-white"
                            >
                                <Download size={20} />
                            </a>
                        </MagneticWrapper>
                        
                        {/* Instant Tooltip */}
                        <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-luxury-blue text-white text-[10px] font-mono py-1.5 px-3 rounded whitespace-nowrap pointer-events-none shadow-lg border border-white/10">
                            Download Resume
                        </span>
                    </div>

                    {/* Hamburger Menu Mock */}
                    <div className="flex flex-col gap-2 cursor-pointer hover:opacity-70 transition-opacity p-2">
                        <div className="w-8 h-0.5 bg-white rounded-full" />
                        <div className="w-8 h-0.5 bg-white rounded-full" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
