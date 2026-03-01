"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

export default function Projects() {
    const projects = [
        {
            title: "Hive Homes",
            description: "A full-scale Real Estate ecosystem built with the MERN stack. Features Redux for state management and Tailwind CSS for a fluid, responsive UI.",
            techStack: ["MERN", "REDUX", "TAILWIND"],
            demoUrl: "https://hivehomes.onrender.com",
        },
        {
            title: "AI Bot Clone",
            description: "An intelligent conversational interface powered by OpenAI APIs. Built on the MERN stack with a focus on real-time streaming responses.",
            techStack: ["MERN", "OPENAI_API", "REACT"],
            demoUrl: "https://ai-gpt-clone-ucxt.onrender.com/",
        },
        {
            title: "Elite Gym Landing",
            description: "A high-performance landing page for a fitness brand. Utilizes modern CSS techniques and React.js for ultra-smooth animations.",
            techStack: ["REACT", "MODERN_CSS", "FRAMER_MOTION"],
            demoUrl: "https://gymappomkarbhandia.pages.dev/",
        },
        {
            title: "OTT Clone",
            description: "A media discovery platform that catalogs web series and seamlessly redirects users to official OTT streaming providers.",
            techStack: ["REACT", "EXTERNAL_APIS", "UI_UX"],
            demoUrl: "https://ottclone.netlify.app/",
        },
        {
            title: "Text Utils",
            description: "A lightweight utility suite for text manipulation and formatting. A focused exercise in React state and Bootstrap grid systems.",
            techStack: ["REACT", "BOOTSTRAP", "UTILITY"],
            demoUrl: "https://textutilsomkar.netlify.app/",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-10">
            <div className="mb-16 flex flex-col gap-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-4"
                >
                    Featured <span className="text-white">Work.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-zinc-500 text-base max-w-xl font-medium"
                >
                    A curated selection of my recent projects showcasing full-stack development and API integrations.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8"
                style={{ WebkitTransform: "translate3d(0,0,0)", transform: "translate3d(0,0,0)" }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className="group flex flex-col p-8 rounded-2xl safari-glass border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 relative z-10 isolate h-full bg-white/5 data-[hover=true]:backdrop-blur-md"
                    >
                        {/* Top: Index Header */}
                        <div className="flex items-start justify-between mb-8 z-20">
                            <span className="font-mono text-sm text-zinc-600 font-bold tracking-widest group-hover:text-zinc-400 transition-colors">
                                [ {String(index + 1).padStart(2, '0')} ]
                            </span>
                        </div>

                        {/* Middle: Content */}
                        <div className="flex-grow flex flex-col justify-start z-20">
                            <h3 className="text-2xl font-bold text-white mb-3 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-zinc-400 mb-6 leading-relaxed max-w-md">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 bg-black/40 px-2 py-1 rounded border border-white/5 group-hover:text-white group-hover:border-white/20 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom: Anchor Link */}
                        <div className="mt-auto pt-6 border-t border-white/5 z-20 flex justify-end">
                            <MagneticWrapper strength={0.2}>
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-zinc-400 hover:text-white uppercase font-bold text-xs tracking-widest transition-colors group/link"
                                >
                                    <span>View Live Project</span>
                                    <ArrowUpRight size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                </a>
                            </MagneticWrapper>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
