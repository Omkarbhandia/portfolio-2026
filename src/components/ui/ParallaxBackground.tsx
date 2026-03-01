"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
            {/* Deep Charcoal Base */}
            <div className="absolute inset-0 bg-[#0f0f12]" />

            {/* Electric Indigo Orb */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4f46e5]/10 blur-[120px]"
            />

            {/* Cyber Lime Orb */}
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#ccff00]/5 blur-[100px]"
            />

            {/* Secondary Indigo Accent */}
            <motion.div
                style={{ y: y3 }}
                className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-[#6366f1]/5 blur-[90px]"
            />

            {/* Grid Overlay for Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
}
