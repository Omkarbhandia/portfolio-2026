"use client";

import { motion } from "framer-motion";

export default function TechOrbit() {
    return (
        <div className="relative w-full h-full flex items-center justify-center min-h-[200px] overflow-hidden">
            {/* Center Node */}
            <div className="absolute z-20 w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.2)]">
                <span className="text-xl font-black text-electric-indigo">DEV</span>
            </div>

            {/* Orbit Paths */}
            <div className="absolute w-[140px] h-[140px] rounded-full border border-white/5" />
            <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-white/5 opacity-50" />

            {/* Orbiting Icons */}
            <motion.div
                className="absolute w-[140px] h-[140px] rounded-full z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                {/* React Icon equivalent (using a generic stylized node) */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0f0f12] border border-[#61DAFB]/50 flex items-center justify-center shadow-[0_0_15px_rgba(97,218,251,0.2)]">
                    <span className="text-[10px] font-bold text-[#61DAFB]">Re</span>
                </div>
            </motion.div>

            <motion.div
                className="absolute w-[220px] h-[220px] rounded-full z-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                {/* Next.js Icon equivalent */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f0f12] border border-white/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <span className="text-[10px] font-bold text-white">Nx</span>
                </div>

                {/* Node.js Icon equivalent */}
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f0f12] border border-[#339933]/50 flex items-center justify-center shadow-[0_0_15px_rgba(51,153,51,0.2)]">
                    <span className="text-[10px] font-bold text-[#339933]">No</span>
                </div>
            </motion.div>
        </div>
    );
}
