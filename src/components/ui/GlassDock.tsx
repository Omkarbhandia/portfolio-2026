"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FolderGit2, Briefcase, Mail, User, FileText } from "lucide-react";

interface DockItemProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    mouseX: any;
    isActive?: boolean;
    href?: string;
    download?: boolean;
}

function DockItem({ icon, label, onClick, mouseX, isActive, href, download }: DockItemProps) {
    const ref = useRef<any>(null);
    const [isHovered, setIsHovered] = useState(false);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <div className="relative group flex items-end justify-center">
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 2, scale: 0.8 }}
                    className="absolute -top-12 px-3 py-1.5 bg-industrial-grey/80 backdrop-blur-md text-pure-white text-xs font-mono rounded-md whitespace-nowrap border border-white/10 pointer-events-none"
                >
                    {label}
                </motion.div>
            )}
            {href ? (
                <motion.a
                    ref={ref}
                    href={href}
                    download={download}
                    target="_blank"
                    rel="noopener noreferrer"
                    layout="position"
                    style={{ width, willChange: "transform" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`aspect-square rounded-2xl flex items-center justify-center cursor-pointer transition-colors border shadow-2xl safari-glass ${isActive ? "bg-white/20 border-white/40" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
                >
                    <div className={`${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                        {icon}
                    </div>
                </motion.a>
            ) : (
                <motion.div
                    ref={ref}
                    layout="position"
                    style={{ width, willChange: "transform" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={onClick}
                    className={`aspect-square rounded-2xl flex items-center justify-center cursor-pointer transition-colors border shadow-2xl safari-glass ${isActive ? "bg-white/20 border-white/40" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
                >
                    <div className={`${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                        {icon}
                    </div>
                    {isActive && (
                        <motion.div
                            layoutId="active-dot"
                            className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-pure-white"
                        />
                    )}
                </motion.div>
            )}
        </div>
    );
}

export default function GlassDock({
    activeSection,
    setActiveSection
}: {
    activeSection: string | null,
    setActiveSection: (section: string | null) => void
}) {
    const mouseX = useMotionValue(Infinity);

    const handleItemClick = (sectionId: string) => {
        if (activeSection === sectionId) {
            setActiveSection(null); // toggle off
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            setActiveSection(sectionId);
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) {
                    const yOffset = -50;
                    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <motion.div
            layout="position"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
            style={{ willChange: "transform" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 command-palette-trigger"
        >
            <div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex items-end gap-4 h-24 px-4 pb-3 rounded-3xl border border-white/10 bg-obsidian/40 safari-glass shadow-2xl"
            >
                <DockItem
                    mouseX={mouseX}
                    icon={<User size={24} />}
                    label="About"
                    onClick={() => handleItemClick("about")}
                    isActive={activeSection === "about"}
                />
                <DockItem
                    mouseX={mouseX}
                    icon={<FolderGit2 size={24} />}
                    label="Projects"
                    onClick={() => handleItemClick("projects")}
                    isActive={activeSection === "projects"}
                />
                <DockItem
                    mouseX={mouseX}
                    icon={<Briefcase size={24} />}
                    label="Experience"
                    onClick={() => handleItemClick("experience")}
                    isActive={activeSection === "experience"}
                />
                <DockItem
                    mouseX={mouseX}
                    icon={<Mail size={24} />}
                    label="Contact"
                    onClick={() => handleItemClick("contact")}
                    isActive={activeSection === "contact"}
                />
                <div className="w-[1px] h-12 bg-white/10 self-center mx-1 rounded-full" />
                <DockItem
                    mouseX={mouseX}
                    icon={<FileText size={24} />}
                    label="Download Resume (PDF)"
                    href="/resume.pdf"
                    download={true}
                    isActive={false}
                />
            </div>
        </motion.div>
    );
}
