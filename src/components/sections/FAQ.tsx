"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? "text-primary" : "text-gray-900 group-hover:text-primary"}`}>
                    {question}
                </span>
                <span className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-500 group-hover:bg-teal-50 group-hover:text-primary"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 leading-relaxed max-w-2xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQ() {
    const faqs = [
        { q: "Do you accept walk-ins?", a: "We operate primarily by appointment to ensure every patient gets the attention they deserve. However, we understand emergencies happen—please call us immediately for urgent care availabilities." },
        { q: "Do you see children?", a: "Absolutely! We love seeing kids and recommend bringing them in for their first 'happy visit' around age 1. Our team is trained to make dental visits fun and fear-free for little ones." },
        { q: "What if I have dental anxiety?", a: "You are not alone, and we are here to help. Please let us know when you book. We offer comfort amenities (blankets, headphones) and can discuss sedation options like nitrous oxide to help you relax." },
        { q: "How much does a cleaning cost?", a: "Costs vary depending on your specific needs and insurance coverage. For uninsured patients, we offer a transparent New Patient Special which includes an exam, x-rays, and standard cleaning. Call our office for current pricing." },
        { q: "Do you offer payment plans?", a: "Yes! We believe quality care should be accessible. We accept CareCredit and offer flexible in-house payment arrangements for major treatments." }
    ];

    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
        </div>
    );
}
