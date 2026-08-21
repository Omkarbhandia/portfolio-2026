"use client";

import { motion, useInView } from "framer-motion";
import { Server, Database, Code2, Wrench, Mountain, Utensils, Headphones, Terminal } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const TypewriterTerminal = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [typed, setTyped] = useState("");
    const command = "> fetch_stack --omkar";
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i <= command.length) {
                    setTyped(command.slice(0, i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => setShowResults(true), 400);
                }
            }, 80);
            return () => clearInterval(typingInterval);
        }
    }, [isInView]);

    const digitalSkills = [
        { category: "FRONTEND", tech: "React.js, Next.js, Angular, TypeScript, JavaScript(ES6+), Redux, Tailwind" },
        { category: "BACKEND", tech: "Node.js, Express, PHP, RestAPI" },
        { category: "DATABASE", tech: "MongoDB, PostgreSQL, SQL" },
        { category: "DEVOPS", tech: "Git, Github, Vercel, Docker, CI/CD" }
    ];

    return (
        <div ref={ref} className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_-15px_rgba(30,58,138,0.08)] border border-blue-900/5 flex flex-col relative overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 font-mono text-xs text-gray-400 flex items-center gap-2">
                    <Terminal size={14} /> guest@omkar-portfolio ~
                </span>
            </div>

            {/* Terminal Body */}
            <div className="font-mono text-sm md:text-base flex flex-col gap-4">
                <div className="text-gray-800">
                    <span className="text-luxury-light font-bold">~</span> $ {typed}
                    {!showResults && <span className="animate-pulse bg-gray-400 w-2 h-4 inline-block ml-1 align-middle" />}
                </div>
                
                {showResults && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-3 mt-2"
                    >
                        {digitalSkills.map((skill, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                className="flex flex-col sm:flex-row gap-1 sm:gap-4"
                            >
                                <span className="text-luxury-light font-semibold w-24">[{skill.category}]</span>
                                <span className="text-gray-600">{skill.tech}</span>
                            </motion.div>
                        ))}
                        <div className="mt-4 text-green-600 font-bold">
                            ✔ Stack loaded successfully.
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default function About() {
    const analogTraits = [
        {
            title: "TREKKING",
            icon: <Mountain size={24} className="text-luxury-blue" />,
            desc: "Seeking perspective from the peaks."
        },
        {
            title: "EXPLORING",
            icon: <Utensils size={24} className="text-luxury-blue" />,
            desc: "Discovering regional flavors and hidden paths."
        },
        {
            title: "RHYTHM",
            icon: <Headphones size={24} className="text-luxury-blue" />,
            desc: "Deep melodic beats for deep focus."
        }
    ];

    return (
        <section id="about" className="relative z-10 w-full py-20 px-6 md:px-12 bg-ice-blue">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2"
                >
                    <span className="font-mono text-sm tracking-widest text-luxury-light uppercase">01 // The Engine</span>
                    <h2 className="text-4xl md:text-5xl font-display font-semibold text-gray-900 tracking-tight">
                        Digital DNA & <br />Analog Soul.
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Terminal Card (Spans 2 cols on lg) */}
                    <TypewriterTerminal />

                    {/* Analog Cards */}
                    <div className="col-span-1 flex flex-col gap-6">
                        {analogTraits.map((trait, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(30,58,138,0.05)] border border-blue-900/5 flex items-start gap-4 hover:shadow-[0_10px_40px_-15px_rgba(30,58,138,0.12)] transition-shadow duration-300"
                            >
                                <div className="p-3 bg-blue-50 rounded-2xl">
                                    {trait.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-sans font-bold text-gray-900 text-sm tracking-wide">{trait.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{trait.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
