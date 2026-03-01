"use client";

import { motion } from "framer-motion";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import { Server, Database, Code2, Wrench, Mountain, Utensils, Headphones, Users } from "lucide-react";

export default function About() {
    const digitalSkills = [
        {
            category: "FRONTEND",
            icon: <Code2 size={16} />,
            items: [
                { name: "React.js", tags: ["Hooks", "Context API", "Framer Motion"] },
                { name: "Next.js", tags: ["SSR", "SSG", "App Router"] },
                { name: "TypeScript", tags: ["Interfaces", "Generics", "Type Safety"] },
                { name: "Tailwind CSS", tags: ["Utility-first", "Responsive", "Plugins"] },
                { name: "Redux", tags: ["State Management", "Thunk", "Toolkit"] }
            ]
        },
        {
            category: "BACKEND",
            icon: <Server size={16} />,
            items: [
                { name: "Node.js", tags: ["REST APIs", "Middleware", "JWT"] },
                { name: "Express.js", tags: ["Routing", "Controllers", "Auth"] },
                { name: "MongoDB", tags: ["Aggregation", "Mongoose", "NoSQL"] },
                { name: "SQL", tags: ["PostgreSQL", "Relational", "Joins"] },
                { name: "PHP", tags: ["Legacy", "Backend", "Scripts"] }
            ]
        },
        {
            category: "TOOLS & DEVOPS",
            icon: <Wrench size={16} />,
            items: [
                { name: "Git & GitHub", tags: ["Version Control", "CI/CD Actions", "PRs"] },
                { name: "REST APIs", tags: ["Endpoints", "Axios", "Fetch"] },
                { name: "Vite", tags: ["Build Tool", "HMR", "Rollup"] },
                { name: "Vercel", tags: ["Deployment", "Edge", "Serverless"] }
            ]
        }
    ];

    const analogTraits = [
        {
            title: "TREKKING",
            icon: <Mountain size={20} />,
            desc: "Seeking perspective from the peaks."
        },
        {
            title: "EXPLORING",
            icon: <Utensils size={20} />,
            desc: "Discovering regional flavors and hidden paths."
        },
        {
            title: "RHYTHM",
            icon: <Headphones size={20} />,
            desc: "Deep melodic beats for deep focus."
        }
    ];

    return (
        <section id="about" className="relative z-10 w-full min-h-screen grid grid-cols-1 md:grid-cols-2">

            {/* LEFT SIDE: DIGITAL DNA */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-obsidian w-full h-full flex items-center justify-end p-8 md:p-16 lg:p-24 relative overflow-hidden"
            >
                {/* Subtle Glow Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.05)_0%,transparent_50%)] pointer-events-none" />

                <div className="w-full max-w-xl text-left relative z-10 flex flex-col gap-12">
                    {/* Header */}
                    <div>
                        <span className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase mb-4 block">
                            01 // DIGITAL DNA
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pure-white leading-tight">
                            Full-Stack <br />
                            <span className="text-electric-indigo italic">Architecture</span>
                        </h2>
                    </div>

                    {/* Technical Terminal Grid */}
                    <div className="flex flex-col gap-8">
                        {digitalSkills.map((block, idx) => (
                            <div key={idx} className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-white/40 border-b border-white/10 pb-2">
                                    {block.icon}
                                    <h3 className="font-mono text-sm tracking-widest font-bold uppercase">{block.category}</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {block.items.map((skill, i) => (
                                        <div key={i} className="group relative w-full cursor-default overflow-hidden border border-white/5 bg-white/5 rounded-lg p-3 hover:border-white/20 transition-all duration-300">
                                            <div className="flex flex-col gap-2 relative z-10">
                                                <span className="font-sans text-sm font-medium text-white/80 group-hover:text-white transition-colors">{skill.name}</span>
                                                <div className="flex flex-wrap gap-1.5 opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                                                    {skill.tags?.map((tag, j) => (
                                                        <span key={j} className="font-mono text-[10px] uppercase text-white/50 bg-white/10 px-1.5 py-0.5 rounded-sm">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* STRETCHING VERTICAL DIVIDER */}
            <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: "anticipate" }}
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 origin-top z-30"
            />

            {/* RIGHT SIDE: ANALOG SOUL */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full flex items-center justify-start p-8 md:p-16 lg:p-24 relative"
            >
                {/* Optional Glass panel to ensure text readability over bright city lights, kept subtle */}
                <div className="absolute inset-4 md:inset-8 lg:inset-12 bg-obsidian/30 backdrop-blur-[10px] rounded-3xl border border-white/10 z-0 pointer-events-none" />

                <div className="w-full max-w-xl text-left relative z-10 flex flex-col gap-12 p-6">
                    {/* Header */}
                    <div>
                        <span className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase mb-4 block">
                            02 // ANALOG SOUL
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pure-white leading-tight">
                            The Human <br />
                            <span className="text-white/60 italic font-serif">Element</span>
                        </h2>
                    </div>

                    {/* Hobbies Narrative List */}
                    <div className="flex flex-col gap-8 mt-4">
                        {analogTraits.map((trait, idx) => (
                            <MagneticWrapper key={idx} strength={0.1}>
                                <div className="group flex items-start gap-6 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                                    <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-obsidian transition-colors shadow-lg">
                                        {trait.icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-mono text-sm tracking-widest font-bold uppercase text-white">{trait.title}</h3>
                                        <p className="font-sans text-lg text-white/60 group-hover:text-white/90 transition-colors leading-relaxed">
                                            {trait.desc}
                                        </p>
                                    </div>
                                </div>
                            </MagneticWrapper>
                        ))}
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
