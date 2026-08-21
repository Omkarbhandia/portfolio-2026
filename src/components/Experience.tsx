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
        <section id="experience" className="py-24 relative overflow-hidden z-10 w-full max-w-5xl mx-auto px-6 md:px-12 bg-ice-blue">
            <div className="mb-16 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="font-mono text-sm tracking-widest text-luxury-light uppercase block mb-2">03 // The Journey</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                        Experience.
                    </h2>
                    <p className="text-gray-500 text-base max-w-xl font-medium">
                        A concise timeline of my professional roles and technical contributions.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col gap-6" onMouseLeave={() => setHoveredId(null)}>
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
                            className={`p-8 rounded-2xl transition-all duration-300 relative border-2 ${isHovered
                                ? "bg-white border-luxury-blue shadow-[8px_8px_0px_0px_rgba(30,58,138,1)] -translate-x-1 -translate-y-1 z-10"
                                : "bg-white border-luxury-blue shadow-[0px_0px_0px_0px_rgba(30,58,138,1)]"
                                } ${isDimmed ? "opacity-50 grayscale-[50%]" : "opacity-100 grayscale-0"}`}
                        >
                            {/* Accent Bar */}
                            <div className={`absolute top-0 left-0 w-2 h-full bg-luxury-blue transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pl-4 md:pl-0">
                                <div className="space-y-2 max-w-2xl">
                                    <h3 className={`text-2xl font-bold transition-colors ${isHovered ? "text-luxury-blue" : "text-gray-900"}`}>
                                        {exp.role}
                                    </h3>
                                    <div className="text-lg font-bold text-gray-700">
                                        {exp.company}
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed mt-4 font-medium">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {exp.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 transition-colors ${isHovered
                                                    ? "text-white bg-luxury-blue"
                                                    : "text-luxury-blue bg-blue-50"
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-xs font-bold tracking-widest uppercase text-gray-500 shrink-0 md:mt-2">
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
