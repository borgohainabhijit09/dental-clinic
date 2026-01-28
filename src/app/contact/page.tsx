import { Location } from "@/components/sections/Location";
import { ContactForm } from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Lone Star Family Dental",
    description: "Get in touch with our Austin dental clinic. Phone, email, and location details.",
};

export default function ContactPage() {
    return (
        <div className="bg-white pt-24 min-h-screen">
            <div className="container-custom py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Info */}
                    <div className="space-y-10">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Have a question about our services or need to schedule an emergency visit? We are here to help. Reach out to us using any of the methods below.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                                    <p className="text-gray-600 mb-1">Mon-Fri from 8am to 6pm</p>
                                    <a href="tel:5125550123" className="text-primary text-xl font-bold hover:underline">(512) 555-0123</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                                    <p className="text-gray-600 mb-1">We reply within 24 hours</p>
                                    <a href="mailto:info@lonestardental.com" className="text-primary text-xl font-bold hover:underline">info@lonestardental.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Location</h3>
                                    <p className="text-gray-600">123 Medical Parkway, Ste 100<br />Austin, TX 78701</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <h4 className="font-semibold text-gray-900 mb-4">Follow us on social media</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:mt-8">
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="pb-0">
                <Location />
            </div>
        </div>
    );
}
