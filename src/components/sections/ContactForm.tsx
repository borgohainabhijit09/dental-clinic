"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus("success");
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-teal-50 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center border border-teal-100"
            >
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
                <Button variant="outline" onClick={() => setStatus("idle")}>Send Another</Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full"
                    disabled={status === "submitting"}
                >
                    {status === "submitting" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
                </Button>
            </div>
        </form>
    );
}
