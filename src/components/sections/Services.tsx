"use client";

import Link from "next/link";
import { Sparkles, Activity, Star, Users, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "General Dentistry",
        description: "Routine exams, fillings, and preventive care to keep your smile healthy.",
        icon: Activity,
        href: "/services#general",
    },
    {
        title: "Teeth Cleaning",
        description: "Professional evaluations and hygiene treatments for a brighter smile.",
        icon: Sparkles,
        href: "/services#cleaning",
    },
    {
        title: "Cosmetic Dentistry",
        description: "Veneers, whitening, and bonding to enhance your natural beauty.",
        icon: Star,
        href: "/services#cosmetic",
    },
    {
        title: "Pediatric Care",
        description: "Gentle dental services tailored for children of all ages.",
        icon: Users,
        href: "/services#pediatric",
    },
    {
        title: "Emergency Care",
        description: "Same-day appointments for toothaches, chips, and urgent needs.",
        icon: AlertCircle,
        href: "/services#emergency",
    },
];

export function Services() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Dental Services</h2>
                    <p className="text-gray-600 text-lg">We offer a full range of treatments to help your family maintain optimal oral health.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-teal-100"
                        >
                            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link href={service.href} className="inline-flex items-center text-primary font-medium hover:text-teal-700">
                                Learn more <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/services" className="inline-block border-b-2 border-primary text-primary font-bold hover:text-teal-700 transition-colors">
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
