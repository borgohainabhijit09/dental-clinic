"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "Dr. Sarah was amazing with my kids. They actually look forward to the dentist now! The staff made them feel so comfortable.",
        author: "Emily R.",
        role: "Mother of 2",
    },
    {
        text: "Best dental experience I've had in Austin. The procedure was painless and professional. I felt heard and cared for throughout.",
        author: "Michael T.",
        role: "Patient since 2022",
    },
    {
        text: "The staff is so friendly and the office is beautiful. They explained my insurance options clearly. Highly recommend Lone Star Family Dental.",
        author: "Jessica L.",
        role: "Local Teacher",
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">What Our Patients Say</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-gray-600 mb-6 flex-grow italic">&quot;{t.text}&quot;</p>
                            <div>
                                <p className="font-bold text-gray-900">{t.author}</p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
