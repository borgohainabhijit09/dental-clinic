"use client";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
    const benefits = [
        "Experienced & caring dentists",
        "State-of-the-art modern technology",
        "Friendly, non-judgmental staff",
        "Convenient online scheduling",
        "Children's play area",
        "Emergency appointments available"
    ];

    return (
        <section className="py-20 bg-teal-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Austin Families Choose Us</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            At Lone Star Family Dental, we believe in patient-first care. From our comforting amenities to our advanced dental tools, everything is designed with your well-being in mind.
                        </p>
                        <ul className="space-y-4">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Placeholder for an image or graphic */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8" />
                        <div className="space-y-8 relative z-10">
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                                <p className="text-gray-600">Years Serving Austin</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-2">5k+</h3>
                                <p className="text-gray-600">Happy Smiles Created</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-2">4.9/5</h3>
                                <p className="text-gray-600">Patient Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
