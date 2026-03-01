"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        id: "aptara",
        role: "Jr. Software Engineer",
        company: "Aptara Media Pvt. Ltd",
        period: "March 2024 – Present",
        description: "Developing responsive front-end templates using React, integrating REST APIs for seamless data communication, and improving UI performance through structured state management.",
        techStack: ["React.js", "REST APIs", "Git", "Agile"]
    },
    {
        id: "dsmart",
        role: "Full Stack Developer Intern",
        company: "D-Smart Innovative Technologies",
        period: "Nov 2021 – Feb 2022",
        description: "Built dynamic web applications using the MERN stack, developed RESTful APIs, and participated in team-based internal project competitions.",
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js"]
    }
];

export default function Experience() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section id="experience" className="py-24 relative overflow-hidden z-10 w-full max-w-5xl mx-auto px-6 md:px-12 mt-10">
            <div className="mb-16 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-4">
                        Experience.
                    </h2>
                    <p className="text-zinc-500 text-base max-w-xl font-medium">
                        A concise timeline of my professional roles and technical contributions.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col gap-4" onMouseLeave={() => setHoveredId(null)}>
                {experiences.map((exp) => {
                    const isHovered = hoveredId === exp.id;
                    const isDimmed = hoveredId !== null && hoveredId !== exp.id;

                    return (
                        <motion.div
                            key={exp.id}
                            onMouseEnter={() => setHoveredId(exp.id)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`p-8 rounded-2xl transition-all duration-500 border ${isHovered
                                ? "bg-white/10 border-white/50 shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] scale-[1.01] z-10"
                                : "bg-transparent border-white/5 hover:border-white/10"
                                } ${isDimmed ? "opacity-30 blur-[2px]" : "opacity-100 blur-0"}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="space-y-2 max-w-2xl">
                                    <h3 className={`text-2xl font-bold transition-colors text-white`}>
                                        {exp.role}
                                    </h3>
                                    <div className="text-lg font-medium text-zinc-400">
                                        {exp.company}
                                    </div>
                                    <p className="text-sm text-zinc-500 leading-relaxed mt-4">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {exp.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-colors ${isHovered
                                                    ? "text-obsidian bg-white border-white"
                                                    : "text-zinc-500 bg-white/5 border-white/5"
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-xs font-bold tracking-widest uppercase text-zinc-500 shrink-0 md:mt-2">
                                    {exp.period}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
