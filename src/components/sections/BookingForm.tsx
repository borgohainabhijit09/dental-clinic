"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2, Calendar, Clock, User, Mail, Phone as PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";

export function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-teal-100 text-center max-w-2xl mx-auto"
            >
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Thank you, {formData.name}. We have received your appointment request for {formData.date} at {formData.time}.
                    <br /><br />
                    Our team will contact you shortly at {formData.phone} to confirm your appointment.
                </p>
                <Button onClick={() => setStatus("idle")} variant="outline">Book Another Appointment</Button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request an Appointment</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and we will get back to you to confirm your slot.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 block">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700 block">Phone Number</label>
                            <div className="relative">
                                <PhoneIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="(512) 555-0123"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 block">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-gray-700 block">Service Required</label>
                        <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        >
                            <option value="" disabled>Select a service</option>
                            <option value="General Checkup">General Checkup & Clean</option>
                            <option value="Cosmetic Consultation">Cosmetic Consultation</option>
                            <option value="Pediatric Appointment">Pediatric Appointment</option>
                            <option value="Emergency">Emergency</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="date" className="text-sm font-medium text-gray-700 block">Preferred Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="time" className="text-sm font-medium text-gray-700 block">Preferred Time</label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                                <select
                                    id="time"
                                    name="time"
                                    required
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                >
                                    <option value="" disabled>Select time</option>
                                    <option value="Morning">Morning (8am - 12pm)</option>
                                    <option value="Afternoon">Afternoon (1pm - 5pm)</option>
                                    <option value="Evening">Evening (5pm - 6pm)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 block">Additional Message (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us about your dental needs or any concerns..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "submitting"}
                >
                    {status === "submitting" ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...
                        </>
                    ) : (
                        "Request Appointment"
                    )}
                </Button>
                <p className="text-xs text-center text-gray-400">
                    By submitting this form, you agree to our privacy policy. Calls may be recorded for quality purposes.
                </p>
            </form>
        </div>
    );
}
