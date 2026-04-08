"use client";

import { motion } from "framer-motion";

export default function BackgroundMesh() {
    return (
        <div className="fixed top-0 left-0 z-[-20] w-[100vw] h-[100vh] overflow-hidden bg-[#030303] pointer-events-none">
            {/* Dark/Electric Indigo Blob */}
            <motion.div
                animate={{
                    x: [0, 150, -50, 0],
                    y: [0, -100, 100, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[10%] left-[20%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#4f46e5] rounded-full mix-blend-screen filter blur-[100px] opacity-30"
                style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            />

            {/* Slate Gray Blob */}
            <motion.div
                animate={{
                    x: [0, -100, 150, 0],
                    y: [0, 150, -100, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-[20%] right-[10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#252525] rounded-full mix-blend-screen filter blur-[120px] opacity-40"
                style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            />

            {/* Soft Midnight Blob */}
            <motion.div
                animate={{
                    x: [0, 50, -150, 0],
                    y: [0, 100, -50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-[#1a1a2e] rounded-full mix-blend-screen filter blur-[80px] opacity-50"
                style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            />
        </div>
    );
}
