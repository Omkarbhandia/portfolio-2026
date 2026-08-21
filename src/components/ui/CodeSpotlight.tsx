"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect, useRef } from "react";

const codeSnippets = [
    { code: `function calculateO(n) {\n  return n * Math.log(n);\n}`, top: "5%", left: "10%", size: "text-sm", rot: -5 },
    { code: `const [state, setState] = useState(0);\nuseEffect(() => {\n  fetchData().then(console.log);\n}, []);`, top: "25%", left: "5%", size: "text-base", rot: 2 },
    { code: `interface HeroProps {\n  title: string;\n  theme: "luxury" | "ice";\n}`, top: "50%", left: "8%", size: "text-sm", rot: -2 },
    { code: `app.get("/api/v1/users", auth, async (req, res) => {\n  const users = await User.find({}).lean();\n  res.json(users);\n});`, top: "75%", left: "12%", size: "text-base", rot: 4 },
    { code: `import { createSlice } from "@reduxjs/toolkit";\n\nexport const userSlice = createSlice({\n  name: "user",\n  initialState,\n});`, top: "15%", right: "10%", size: "text-sm", rot: 6 },
    { code: `const UserSchema = new Schema({\n  name: { type: String, required: true },\n  tech: [String],\n});\nUserSchema.index({ name: 1 });`, top: "40%", right: "5%", size: "text-base", rot: -3 },
    { code: `export async function getStaticProps() {\n  const data = await getCachedData();\n  return { props: { data }, revalidate: 60 };\n}`, top: "65%", right: "15%", size: "text-sm", rot: 5 },
    { code: `<motion.div\n  animate={{ scale: [1, 1.2, 1] }}\n  transition={{ duration: 2 }}\n/>`, top: "85%", right: "8%", size: "text-base", rot: -7 },
    { code: `// MongoDB Aggregation Pipeline\nPipeline = [\n  { $match: { status: "active" } },\n  { $group: { _id: "$role", count: { $sum: 1 } } }\n];`, top: "5%", left: "45%", size: "text-xs", rot: 1 },
    { code: `type Modify<T, R> = Omit<T, keyof R> & R;\n\ntype NewType = Modify<OldType, {\n  id: string;\n}>;`, top: "85%", left: "45%", size: "text-xs", rot: -1 },
];

export default function CodeSpotlight() {
    const mouseX = useMotionValue(500);
    const mouseY = useMotionValue(500);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    useEffect(() => {
        if (typeof window === "undefined") return;

        const container = containerRef.current?.parentElement;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
        }

        // Auto-animate spotlight on touch devices since they don't have a hover state
        const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        let animationId: number;
        
        if (isTouch) {
            let angle = 0;
            const animateSpotlight = () => {
                angle += 0.005;
                const radius = window.innerWidth * 0.4;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                mouseX.set(centerX + Math.cos(angle) * radius);
                mouseY.set(centerY + Math.sin(angle) * radius);
                animationId = requestAnimationFrame(animateSpotlight);
            };
            animationId = requestAnimationFrame(animateSpotlight);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
            }
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    // Spring for smooth follow effect
    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 25 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 25 });

    // Creates the dynamic spotlight mask
    const maskImage = useMotionTemplate`radial-gradient(circle 350px at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <motion.div
                className="absolute inset-0"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage: maskImage,
                }}
            >
                {/* Subtle dark background to make the code pop slightly when revealed */}
                <div className="absolute inset-0 bg-blue-50/50" />

                {/* The "Hidden" Code Snippets Layer */}
                <div className="absolute inset-0 w-full h-full opacity-60">
                    {codeSnippets.map((snippet, i) => (
                        <div
                            key={i}
                            className={`absolute font-mono ${snippet.size} text-luxury-blue whitespace-pre leading-relaxed font-bold blur-[0.5px] drop-shadow-sm`}
                            style={{
                                top: snippet.top,
                                left: snippet.left,
                                right: snippet.right,
                                transform: `rotate(${snippet.rot}deg)`
                            }}
                        >
                            {snippet.code}
                        </div>
                    ))}
                    
                    {/* Tiny connecting lines and dots to make it look like a tech network */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="#1E3A8A" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#dotGrid)" />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
}
