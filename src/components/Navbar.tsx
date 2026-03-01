"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Github, Linkedin, Menu, X } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#0f0f12]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-black text-xl tracking-widest uppercase italic group cursor-pointer">
                    <Terminal className="text-electric-indigo group-hover:text-cyber-lime transition-colors duration-300" size={24} />
                    <span>Omkar<span className="text-electric-indigo group-hover:text-cyber-lime transition-colors duration-300">.dev</span></span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-indigo group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <MagneticWrapper strength={0.2}>
                        <a
                            href="https://github.com/Omkarbhandia"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                        >
                            <Github size={18} />
                        </a>
                    </MagneticWrapper>
                    <MagneticWrapper strength={0.2}>
                        <a
                            href="https://www.linkedin.com/in/omkarbhandia/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all duration-300"
                        >
                            <Linkedin size={18} />
                        </a>
                    </MagneticWrapper>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-zinc-400 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-[#0f0f12]/95 backdrop-blur-xl border-t border-white/5 flex flex-col p-6 gap-6 md:hidden shadow-2xl overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xl font-black tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                            <a
                                href="https://github.com/Omkarbhandia"
                                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-bold tracking-widest uppercase text-sm"
                            >
                                <Github size={20} /> Github
                            </a>
                            <a
                                href="https://www.linkedin.com/in/omkarbhandia/"
                                className="text-zinc-400 hover:text-[#0A66C2] transition-colors flex items-center gap-2 font-bold tracking-widest uppercase text-sm"
                            >
                                <Linkedin size={20} /> LinkedIn
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
