import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Clinic Info */}
                <div className="space-y-4">
                    <h3 className="text-white text-xl font-bold">Lone Star Family Dental</h3>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Caring smiles for every stage of life. We provide comprehensive, compassionate dental care for the whole family in Austin, Texas.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link href="/meet-the-dentist" className="hover:text-primary transition-colors">Meet the Dentist</Link></li>
                        <li><Link href="/patient-info" className="hover:text-primary transition-colors">Patient Info</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>123 Medical Parkway, Ste 100<br />Austin, TX 78701</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <a href="tel:5125550123" className="hover:text-white transition-colors">(512) 555-0123</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <a href="mailto:info@lonestardental.com" className="hover:text-white transition-colors">info@lonestardental.com</a>
                        </li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Mon - Fri</span>
                            <span>8:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Saturday</span>
                            <span>9:00 AM - 2:00 PM</span>
                        </li>
                        <li className="flex justify-between pb-2 text-gray-500">
                            <span>Sunday</span>
                            <span>Closed</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom mt-12 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Lone Star Family Dental. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-gray-400">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
