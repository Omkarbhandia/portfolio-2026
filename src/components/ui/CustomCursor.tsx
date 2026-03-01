"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isCommandHovered, setIsCommandHovered] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (target.closest('.command-palette-trigger')) {
                setIsCommandHovered(true);
                setIsHovered(false);
            } else if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovered(true);
                setIsCommandHovered(false);
            } else {
                setIsHovered(false);
                setIsCommandHovered(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Base sizes
    const baseSize = 32; // w-8 h-8
    const offset = baseSize / 2;

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:flex items-center justify-center mix-blend-difference"
            style={{ width: baseSize, height: baseSize }}
            animate={{
                x: mousePosition.x - offset,
                y: mousePosition.y - offset,
                scale: isCommandHovered ? 0.3 : isHovered ? 1.5 : 1,
            }}
            transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.15,
            }}
        >
            <motion.div
                className="w-full h-full rounded-full border-2"
                animate={{
                    borderColor: isCommandHovered ? "rgba(255, 255, 255, 1)" : isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.8)",
                    backgroundColor: isCommandHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)"
                }}
                transition={{ duration: 0.2 }}
            />
        </motion.div>
    );
}
