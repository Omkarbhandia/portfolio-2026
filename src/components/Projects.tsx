"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

export default function Projects() {
    const projects = [
        {
            title: "Lucky Gawle — Video Editor Portfolio",
            description: "A premium portfolio website designed and developed for a professional video editor client. Features cinematic aesthetics, smooth animations, and a showcase-first layout tailored to highlight creative work.",
            techStack: ["NEXT.JS", "REACT", "TAILWIND CSS", "FRAMER MOTION"],
            demoUrl: "https://lucky-gawle.vercel.app/",
        },
        {
            title: "CodeReviewer",
            description: "An AI-powered code analysis platform utilizing a microservice architecture. Integrates a React frontend, Node.js API gateway, and Python FastAPI service with Google Gemini AI for instant, intelligent code reviews.",
            techStack: ["REACT", "NODE.JS", "FASTAPI", "GEMINI AI", "MONGODB"],
            demoUrl: "https://code-reviewer-omkar.vercel.app/",
        },
        {
            title: "DevBoard",
            description: "A full-stack developer dashboard integrating GitHub REST API and LeetCode GraphQL API to track commits, repos, problems solved and streaks in real time.",
            techStack: ["NEXT.JS", "TYPESCRIPT", "MONGODB"],
            demoUrl: "https://mydevboard.vercel.app/",
        },
        {
            title: "GitHub Repo Explorer",
            description: "A responsive SPA to search and explore GitHub repositories via REST API. Features reactive search with RxJS to handle async data and prevent redundant API calls.",
            techStack: ["ANGULAR 17", "RXJS", "TAILWIND CSS"],
            demoUrl: "https://github-explorer-omkarbhandia.vercel.app/",
        },
        {
            title: "Vitto",
            description: "A lightweight, full-stack decision engine designed to simulate automated credit evaluation for MSMEs. It processes business profiles to instantly generate credit decisions, scores, and reason codes.",
            techStack: ["FULL-STACK", "FINTECH", "VERCEL"],
            demoUrl: "https://msme-lending-system.vercel.app/",
        },
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden z-10 w-full bg-ice-blue">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-16 flex flex-col gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="font-mono text-sm tracking-widest text-luxury-light uppercase block mb-2">02 // The Proof</span>
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-gray-900 tracking-tight">
                            Featured Work.
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-base max-w-xl font-medium"
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
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px 0px rgba(30,58,138,1)" }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="group flex flex-col p-8 rounded-2xl bg-white border-2 border-luxury-blue shadow-[0px_0px_0px_0px_rgba(30,58,138,1)] transition-all duration-300 relative z-10 h-full overflow-hidden"
                        >
                            {/* Accent Bar */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-luxury-blue" />

                            {/* Top: Index Header */}
                            <div className="flex items-start justify-between mb-8 z-20 mt-2">
                                <span className="font-mono text-sm text-gray-400 font-bold tracking-widest transition-colors">
                                    [ {String(index + 1).padStart(2, '0')} ]
                                </span>
                            </div>

                            {/* Middle: Content */}
                            <div className="flex-grow flex flex-col justify-start z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-md font-medium">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] font-mono font-bold tracking-widest uppercase text-white bg-luxury-blue px-2 py-1 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom: Anchor Link */}
                            <div className="mt-auto pt-6 border-t-2 border-gray-100 z-20 flex justify-end">
                                <MagneticWrapper strength={0.3}>
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-900 hover:text-luxury-light uppercase font-bold text-xs tracking-widest transition-colors group/link bg-transparent p-2 -mr-2"
                                    >
                                        <span>View Live Project</span>
                                        <ArrowUpRight size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                    </a>
                                </MagneticWrapper>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
