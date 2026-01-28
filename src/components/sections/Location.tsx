"use client";

import { MapPin, Clock } from "lucide-react";

export function Location() {
    return (
        <section className="py-0 relative h-[500px] bg-gray-100">
            {/* Map Content - Overlay on Desktop */}
            <div className="absolute inset-0 w-full h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74667086883!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1625684739455!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location"
                ></iframe>
            </div>

            <div className="container-custom h-full pointer-events-none flex items-center">
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md w-full pointer-events-auto border-l-4 border-primary">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Clinic</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-primary shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Address</h3>
                                <p className="text-gray-600">123 Medical Parkway, Ste 100<br />Austin, TX 78701</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-primary shrink-0">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Hours</h3>
                                <ul className="text-gray-600 text-sm space-y-1">
                                    <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
                                    <li className="flex justify-between w-48"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
                                    <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
