"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Linkedin, Github, Mail, Phone, AtSign, MessageSquare, ArrowLeft } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

// Form Validation Schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    inquiry: z.string().min(10, "Inquiry must be at least 10 characters long."),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isDirty },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setIsError(false);
        setIsSuccess(false);

        const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

        if (!WEB3FORMS_KEY) {
            console.error("Critical Error: Web3Forms Key Missing from Environment Variables.");
            setIsError(true);
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: data.name,
                    email: data.email,
                    message: data.inquiry,
                    subject: `New Portfolio Inquiry from ${data.name}`,
                }),
            });

            const result = await response.json();

            if (response.status === 200) {
                setIsSuccess(true);
                reset();
            } else {
                console.error("Web3Forms API Error:", result);
                setIsError(true);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReturnHome = () => {
        setIsSuccess(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const contactLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/omkarbhandia/",
            icon: <Linkedin size={22} />,
            color: "group-hover:text-[#0A66C2]",
            borderHover: "hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5"
        },
        {
            name: "GitHub",
            url: "https://github.com/Omkarbhandia",
            icon: <Github size={22} />,
            color: "group-hover:text-white",
            borderHover: "hover:border-white/50 hover:bg-white/5"
        },
        {
            name: "Email",
            url: "mailto:sharmaomkar715@gmail.com",
            icon: <Mail size={22} />,
            color: "group-hover:text-red-400",
            borderHover: "hover:border-red-500/50 hover:bg-red-500/5"
        },
        {
            name: "Phone",
            url: "tel:+919511869499",
            icon: <Phone size={22} />,
            color: "group-hover:text-green-400",
            borderHover: "hover:border-green-500/50 hover:bg-green-500/5"
        }
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start relative z-20">

                {/* Left Column: Form / Success */}
                <div className="flex flex-col gap-12 w-full min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.div
                                key="form-view"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col gap-12"
                            >
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-4">
                                        Connect.
                                    </h2>
                                    <p className="text-zinc-500 text-base max-w-md font-medium leading-relaxed">
                                        Have a project in mind or just want to chat? Drop a message below and I'll get back to you.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
                                    {/* Name Field */}
                                    <div className="relative group pt-4">
                                        <input
                                            type="text"
                                            id="name"
                                            {...register("name")}
                                            className={`block w-full pb-3 text-lg bg-transparent border-0 border-b-2 appearance-none text-white focus:outline-none focus:ring-0 peer transition-colors duration-300 ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white'}`}
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="name"
                                            className={`absolute text-lg duration-300 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8 flex items-center gap-2 font-medium ${errors.name ? 'text-red-400 peer-focus:text-red-400' : 'text-zinc-500 peer-focus:text-white'}`}
                                        >
                                            <AtSign size={18} />
                                            Name
                                        </label>
                                        <AnimatePresence>
                                            {errors.name && (
                                                <motion.span
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="text-xs font-bold text-red-400 mt-2 absolute -bottom-6 left-0 flex items-center gap-1"
                                                >
                                                    <div className="w-1 h-1 rounded-full bg-red-400" />
                                                    {errors.name.message}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative group pt-4">
                                        <input
                                            type="email"
                                            id="email"
                                            {...register("email")}
                                            className={`block w-full pb-3 text-lg bg-transparent border-0 border-b-2 appearance-none text-white focus:outline-none focus:ring-0 peer transition-colors duration-300 ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white'}`}
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="email"
                                            className={`absolute text-lg duration-300 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8 flex items-center gap-2 font-medium ${errors.email ? 'text-red-400 peer-focus:text-red-400' : 'text-zinc-500 peer-focus:text-white'}`}
                                        >
                                            <Mail size={18} />
                                            Email
                                        </label>
                                        <AnimatePresence>
                                            {errors.email && (
                                                <motion.span
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="text-xs font-bold text-red-400 mt-2 absolute -bottom-6 left-0 flex items-center gap-1"
                                                >
                                                    <div className="w-1 h-1 rounded-full bg-red-400" />
                                                    {errors.email.message}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Inquiry Field */}
                                    <div className="relative group pt-4">
                                        <textarea
                                            id="inquiry"
                                            rows={4}
                                            {...register("inquiry")}
                                            className={`block w-full pb-3 text-lg bg-transparent border-0 border-b-2 appearance-none text-white focus:outline-none focus:ring-0 peer transition-colors duration-300 resize-none ${errors.inquiry ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white'}`}
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="inquiry"
                                            className={`absolute text-lg duration-300 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8 flex items-center gap-2 font-medium ${errors.inquiry ? 'text-red-400 peer-focus:text-red-400' : 'text-zinc-500 peer-focus:text-white'}`}
                                        >
                                            <MessageSquare size={18} />
                                            Project Inquiry
                                        </label>
                                        <AnimatePresence>
                                            {errors.inquiry && (
                                                <motion.span
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="text-xs font-bold text-red-400 mt-2 absolute -bottom-6 left-0 flex items-center gap-1"
                                                >
                                                    <div className="w-1 h-1 rounded-full bg-red-400" />
                                                    {errors.inquiry.message}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="mt-8 flex flex-col gap-3">
                                        <MagneticWrapper>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                disabled={isSubmitting || (!isValid && isDirty)}
                                                type="submit"
                                                className={`relative w-full md:w-auto px-10 overflow-hidden rounded-full h-14 flex items-center justify-center font-bold text-lg transition-all duration-500 ${isSubmitting ? '' : 'shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-1'} ${(!isValid && isDirty) ? "bg-white/5 text-zinc-500 cursor-not-allowed border-white/10" : "bg-white text-obsidian hover:bg-white border border-transparent"}`}
                                            >
                                                <AnimatePresence mode="wait">
                                                    {isSubmitting ? (
                                                        <motion.div
                                                            key="submitting"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div className="w-5 h-5 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
                                                            Sending...
                                                        </motion.div>
                                                    ) : (
                                                        <motion.div
                                                            key="default"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: 10 }}
                                                            className="flex items-center gap-3"
                                                        >
                                                            Send Message
                                                            <Send size={20} className="ml-1" />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.button>
                                        </MagneticWrapper>

                                        <AnimatePresence>
                                            {isError && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="text-red-400 text-sm font-medium mt-1 text-center md:text-left"
                                                >
                                                    Error: Please try again.
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success-view"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex flex-col justify-center h-full py-20 px-4 md:px-0"
                            >
                                <div className="mb-10 w-24 h-24 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                    <svg viewBox="0 0 50 50" className="w-12 h-12 text-indigo-500 drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                                        <motion.path
                                            d="M14 26 L22 34 L38 16"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        />
                                    </svg>
                                </div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-3xl font-mono tracking-widest text-white mb-6 uppercase"
                                >
                                    INQUIRY LOGGED
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="text-zinc-400 text-lg font-medium max-w-md mb-12 leading-relaxed"
                                >
                                    Thank you for reaching out. I’ve received your message and will respond manually to your inbox shortly.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <MagneticWrapper strength={0.2}>
                                        <button
                                            onClick={handleReturnHome}
                                            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
                                        >
                                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                            <span className="font-bold tracking-wide">Return to Home</span>
                                        </button>
                                    </MagneticWrapper>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Column: Direct Links */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center h-full gap-8 lg:pl-20 relative"
                >
                    <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-px bg-white/5" />

                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Profiles</h3>
                        <p className="text-zinc-500 text-sm font-medium">Prefer reaching out directly?</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {contactLinks.map((link, i) => (
                            <MagneticWrapper key={i} strength={0.1}>
                                <motion.a
                                    href={link.url}
                                    target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                                    rel={link.name !== "Email" && link.name !== "Phone" ? "noreferrer" : undefined}
                                    className={`flex items-center gap-5 p-4 rounded-xl border border-white/5 bg-transparent transition-all duration-300 ${link.borderHover} group hover:scale-[1.02]`}
                                >
                                    <div className={`p-2.5 rounded-lg bg-white/5 border border-white/5 text-zinc-400 transition-colors duration-300 ${link.color}`}>
                                        {link.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-bold tracking-wide text-white/90 group-hover:text-white transition-colors">
                                            {link.name}
                                        </div>
                                    </div>
                                </motion.a>
                            </MagneticWrapper>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
