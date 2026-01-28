"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button, cn } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Patient Info", href: "/patient-info" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm",
                scrolled ? "py-2" : "py-4"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900 tracking-tight">
                        Lone Star <span className="text-primary font-medium">Family Dental</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-primary" : "text-gray-600"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="tel:5125550123" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm font-medium">
                        <Phone className="w-4 h-4" />
                        (512) 555-0123
                    </a>
                    <Link href="/book">
                        <Button size="sm">Book Appointment</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="container-custom py-6 flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-medium py-2 border-b border-gray-50",
                                        pathname === item.href ? "text-primary" : "text-gray-600"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-4">
                                <a href="tel:5125550123" className="flex items-center gap-2 text-gray-600 font-medium">
                                    <Phone className="w-4 h-4" />
                                    (512) 555-0123
                                </a>
                                <Link href="/book" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full">Book Appointment</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
