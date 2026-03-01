"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X, ArrowRight } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

interface CommandPaletteProps {
    setActiveSection: (section: string | null) => void;
}

export default function CommandPalette({ setActiveSection }: CommandPaletteProps) {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Toggle on Cmd+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleSelect = (section: string) => {
        setIsOpen(false);
        setActiveSection(section);
        setTimeout(() => {
            const el = document.getElementById(section);
            if (el) {
                const yOffset = -50;
                const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="flex items-center justify-center w-full h-full min-h-[60vh]">
            {/* The initial Magnetic Pill */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ willChange: "transform" }}
                    >
                        <MagneticWrapper strength={0.2}>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="command-palette-trigger group flex items-center justify-between w-[320px] sm:w-[500px] px-6 py-5 rounded-3xl safari-glass border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.2)]"
                            >
                                <div className="flex items-center gap-4 text-white/50 group-hover:text-white/90 transition-colors">
                                    <Search size={22} />
                                    <span className="font-mono text-sm tracking-wide">Find anything...</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/5 text-white/70 group-hover:text-white transition-colors">
                                    <Command size={14} />
                                    <span className="font-mono text-xs font-bold">K</span>
                                </div>
                            </button>
                        </MagneticWrapper>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Full Screen Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                        className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] md:pt-[25vh] px-4 bg-obsidian/40 backdrop-blur-[15px] transform-gpu"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setIsOpen(false);
                        }}
                    >
                        <motion.div
                            layout="position"
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: -20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            style={{ willChange: "transform" }}
                            className="w-full max-w-2xl bg-white/5 safari-glass border border-white/10 rounded-3xl shadow-2xl overflow-hidden glass"
                        >
                            <div className="flex items-center px-6 py-5 border-b border-white/5 relative">
                                <Search className="text-white/50 mr-4" size={24} />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Type a command or search..."
                                    className="w-full bg-transparent text-xl font-sans text-pure-white focus:outline-none placeholder:text-white/30"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors command-palette-trigger"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-4 space-y-2">
                                <div className="px-3 pb-2 pt-4 font-mono text-xs tracking-widest text-white/30 uppercase">
                                    Navigation
                                </div>
                                {[
                                    { id: "about", label: "About & Skills" },
                                    { id: "projects", label: "View Projects" },
                                    { id: "experience", label: "Read Experience" },
                                    { id: "contact", label: "Contact Me" }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleSelect(item.id)}
                                        className="w-full flex items-center justify-between px-4 py-4 rounded-xl hover:bg-white/10 text-pure-white/80 hover:text-pure-white transition-colors group command-palette-trigger"
                                    >
                                        <span className="font-sans text-lg font-medium">{item.label}</span>
                                        <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={20} />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
