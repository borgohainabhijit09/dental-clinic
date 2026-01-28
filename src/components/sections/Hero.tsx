"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-teal-50/50 to-white">
            <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold tracking-wide mb-6">
                        Accepting New Patients
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Trusted Family Dental Care in <span className="text-primary">Austin, Texas</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                        Comprehensive dental services for adults and children. Experience modern care with a gentle touch.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/book">
                            <Button size="lg" className="w-full sm:w-auto gap-2">
                                <Calendar className="w-5 h-5" />
                                Book Appointment
                            </Button>
                        </Link>
                        <a href="tel:5125550123">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                                <Phone className="w-5 h-5" />
                                (512) 555-0123
                            </Button>
                        </a>
                    </div>

                    <div className="mt-10 flex items-center gap-4 text-sm text-gray-500 font-medium">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                            ))}
                        </div>
                        <p>Trusted by 500+ Austin families</p>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative mx-auto lg:mr-0"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] max-w-lg lg:max-w-none w-full">
                        <Image
                            src="/images/hero.png"
                            alt="Friendly dentist treating a patient"
                            width={800}
                            height={600}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                    {/* Decoratiive elements */}
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-100 rounded-full -z-10 blur-xl opacity-70" />
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10 blur-xl opacity-70" />
                </motion.div>

            </div>
        </section>
    );
}
