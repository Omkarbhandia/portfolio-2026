import { Github, Linkedin, Mail, Phone, Terminal } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/Omkarbhandia",
            icon: <Github size={20} />,
            color: "hover:text-white hover:border-white/30"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/omkarbhandia/",
            icon: <Linkedin size={20} />,
            color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10"
        },
        {
            name: "Email",
            url: "mailto:sharmaomkar715@gmail.com",
            icon: <Mail size={20} />,
            color: "hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10"
        },
        {
            name: "Phone",
            url: "tel:+919511869499",
            icon: <Phone size={20} />,
            color: "hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10"
        }
    ];

    return (
        <footer className="relative border-t border-white/10 bg-[#0f0f12] overflow-hidden z-20">
            {/* Top border glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-electric-indigo/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2 text-white font-black text-2xl tracking-widest uppercase italic group cursor-pointer">
                        <Terminal className="text-electric-indigo group-hover:text-cyber-lime transition-colors duration-300" size={28} />
                        <span>Omkar<span className="text-electric-indigo group-hover:text-cyber-lime transition-colors duration-300">.dev</span></span>
                    </div>
                    <p className="text-base text-zinc-400 font-medium">
                        Crafting digital experiences with Next.js & Tailwind.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {socialLinks.map((link, i) => (
                        <MagneticWrapper key={i} strength={0.2}>
                            <a
                                href={link.url}
                                target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                                rel={link.name !== "Email" && link.name !== "Phone" ? "noreferrer" : undefined}
                                className={`flex items-center justify-center p-3 text-zinc-500 bg-white/5 border border-white/10 rounded-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 ${link.color}`}
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        </MagneticWrapper>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium tracking-wide text-zinc-500">
                    <p>© {currentYear} Omkar Bhandia. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-electric-indigo/10 blur-[120px] rounded-full pointer-events-none" />
        </footer>
    );
}
