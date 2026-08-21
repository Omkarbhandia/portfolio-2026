"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Linkedin, Github, Mail, Phone, AtSign, MessageSquare, ArrowLeft, Terminal } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    inquiry: z.string().min(10, "Inquiry must be at least 10 characters long."),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const { register, handleSubmit, reset, formState: { errors, isValid, isDirty } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setIsError(false);
        setIsSuccess(false);

        // Sequence Animation
        setSubmitStatus("Encrypting payload...");
        await new Promise(r => setTimeout(r, 600));
        setSubmitStatus("Establishing secure connection...");
        await new Promise(r => setTimeout(r, 800));
        
        const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
        if (!WEB3FORMS_KEY) {
            console.error("Critical Error: Web3Forms Key Missing from Environment Variables.");
            setIsError(true);
            setIsSubmitting(false);
            return;
        }

        try {
            setSubmitStatus("Sending data...");
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: data.name,
                    email: data.email,
                    message: data.inquiry,
                    subject: `New Portfolio Inquiry from ${data.name}`,
                }),
            });

            if (response.status === 200) {
                setSubmitStatus("[200 OK] Message Delivered");
                await new Promise(r => setTimeout(r, 600));
                setIsSuccess(true);
                reset();
            } else {
                setIsError(true);
            }
        } catch (error) {
            setIsError(true);
        } finally {
            setIsSubmitting(false);
            setSubmitStatus("");
        }
    };

    const contactLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/omkarbhandia/", icon: <Linkedin size={22} />, color: "group-hover:text-[#0A66C2]" },
        { name: "GitHub", url: "https://github.com/Omkarbhandia", icon: <Github size={22} />, color: "group-hover:text-gray-900" },
        { name: "Email", url: "mailto:sharmaomkar715@gmail.com", icon: <Mail size={22} />, color: "group-hover:text-red-500" },
        { name: "Phone", url: "tel:+919511869499", icon: <Phone size={22} />, color: "group-hover:text-green-500" }
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden z-10 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start relative z-20">

                {/* Left Column: Form / Success */}
                <div className="flex flex-col gap-12 w-full min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.div
                                key="form-view"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col gap-12"
                            >
                                <div>
                                    <span className="font-mono text-sm tracking-widest text-luxury-light uppercase block mb-2">04 // The Handshake</span>
                                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                                        Ready to Execute?
                                    </h2>
                                    <p className="text-gray-500 text-base max-w-md font-medium leading-relaxed">
                                        Have a project in mind or just want to chat? Drop a message below and I'll get back to you.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
                                    {/* Name Field */}
                                    <div className="relative group pt-4">
                                        <input
                                            type="text" id="name" {...register("name")}
                                            className={`block w-full pb-3 text-lg bg-transparent border-0 border-b-2 appearance-none text-gray-900 focus:outline-none focus:ring-0 peer transition-colors duration-300 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                                            placeholder=" "
                                        />
                                        {/* Animated Bottom Border */}
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-light transform scale-x-0 origin-left transition-transform duration-300 peer-focus:scale-x-100" />
                                        <label htmlFor="name" className={`absolute text-lg duration-300 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8 flex items-center gap-2 font-medium ${errors.name ? 'text-red-400' : 'text-gray-400 peer-focus:text-luxury-light'}`}>
                                            <AtSign size={18} /> Name
                                        </label>
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative group pt-4">
                                        <input
                                            type="email" id="email" {...register("email")}
                                            className={`block w-full pb-3 text-lg bg-transparent border-0 border-b-2 appearance-none text-gray-900 focus:outline-none focus:ring-0 peer transition-colors duration-300 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                                            placeholder=" "
                                        />
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-light transform scale-x-0 origin-left transition-transform duration-300 peer-focus:scale-x-100" />
                                        <label htmlFor="email" className={`absolute text-lg duration-300 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8 flex items-center gap-2 font-medium ${errors.email ? 'text-red-400' : 'text-gray-400 peer-focus:text-luxury-light'}`}>
                                            <Mail size={18} /> Email
                                        </label>
                                    </div>

                                    {/* Inquiry Field */}
                                    <div className="relative group pt-4">
                                        <textarea
                                            id="inquiry" rows={4} {...register("inquiry")}
                                            className={`block w-full pb-3 text-lg bg-transparent border-0 border-b-2 appearance-none text-gray-900 focus:outline-none focus:ring-0 peer transition-colors duration-300 resize-none ${errors.inquiry ? 'border-red-400' : 'border-gray-200'}`}
                                            placeholder=" "
                                        />
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-light transform scale-x-0 origin-left transition-transform duration-300 peer-focus:scale-x-100" />
                                        <label htmlFor="inquiry" className={`absolute text-lg duration-300 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8 flex items-center gap-2 font-medium ${errors.inquiry ? 'text-red-400' : 'text-gray-400 peer-focus:text-luxury-light'}`}>
                                            <MessageSquare size={18} /> Project Inquiry
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="mt-4 flex flex-col gap-3">
                                        <MagneticWrapper>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                disabled={isSubmitting || (!isValid && isDirty)}
                                                type="submit"
                                                className={`relative w-full md:w-auto px-10 overflow-hidden rounded-full h-14 flex items-center justify-center font-bold text-lg transition-all duration-300 ${isSubmitting ? 'bg-luxury-blue text-white' : 'shadow-[0_10px_30px_-10px_rgba(30,58,138,0.3)] hover:-translate-y-1'} ${(!isValid && isDirty) ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none" : "bg-luxury-blue text-white hover:bg-blue-900"}`}
                                            >
                                                <AnimatePresence mode="wait">
                                                    {isSubmitting ? (
                                                        <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 font-mono text-sm tracking-tight">
                                                            <Terminal size={16} /> {submitStatus}
                                                        </motion.div>
                                                    ) : (
                                                        <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                                                            Send Message <Send size={18} />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.button>
                                        </MagneticWrapper>
                                    </div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success-view"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col justify-center h-full py-20"
                            >
                                <div className="mb-10 w-20 h-20 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                                    <svg viewBox="0 0 50 50" className="w-10 h-10 text-green-500">
                                        <motion.path d="M14 26 L22 34 L38 16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 tracking-tight">
                                    Inquiry Logged.
                                </h3>
                                <p className="text-gray-500 text-lg font-medium max-w-md mb-10 leading-relaxed">
                                    Thank you for reaching out. I’ve received your message and will respond to your inbox shortly.
                                </p>
                                <button onClick={() => setIsSuccess(false)} className="self-start px-8 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold transition-colors flex items-center gap-2">
                                    <ArrowLeft size={18} /> Send Another
                                </button>
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
                    <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-px bg-gray-100" />

                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-widest">Profiles</h3>
                        <p className="text-gray-500 text-sm font-medium">Prefer reaching out directly?</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {contactLinks.map((link, i) => (
                            <MagneticWrapper key={i} strength={0.1}>
                                <a
                                    href={link.url}
                                    target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                                    rel={link.name !== "Email" && link.name !== "Phone" ? "noreferrer" : undefined}
                                    className={`flex items-center gap-5 p-4 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300 group hover:scale-[1.02]`}
                                >
                                    <div className={`p-3 rounded-xl bg-gray-50 text-gray-400 transition-colors duration-300 ${link.color}`}>
                                        {link.icon}
                                    </div>
                                    <div className="font-bold tracking-wide text-gray-700 group-hover:text-gray-900 transition-colors">
                                        {link.name}
                                    </div>
                                </a>
                            </MagneticWrapper>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
