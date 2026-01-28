import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Lone Star Family Dental",
    description: "Learn about our patient-first philosophy and our commitment to dental excellence in Austin.",
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Header */}
            <section className="bg-teal-50 py-20 lg:py-28 text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Founded with a simple mission: to treat every patient with the same care and compassion we would want for our own families.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/hero.png" // Reusing hero for now, ideally a different one
                                alt="Our Clinic Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">More Than Just Dentistry</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                At Lone Star Family Dental, we know that visiting the dentist can be stressful for many. That&apos;s why we&apos;ve designed our practice around your comfort. From our warm, inviting waiting area to our gentle, explanation-first approach, we are here to put you at ease.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We have been serving the Austin community for over 15 years, building lasting relationships based on trust and transparency. We don&apos;t just fix teeth; we care for people.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="border-l-4 border-primary pl-4">
                                    <span className="block text-3xl font-bold text-gray-900">15+</span>
                                    <span className="text-gray-500">Years Experience</span>
                                </div>
                                <div className="border-l-4 border-primary pl-4">
                                    <span className="block text-3xl font-bold text-gray-900">5k+</span>
                                    <span className="text-gray-500">Smiles Restored</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="bg-teal-900 text-white py-24 relative overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-teal-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute left-0 bottom-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="container-custom text-center max-w-4xl mx-auto relative z-10">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-teal-300 mb-4">Our Mission</h2>
                    <p className="text-3xl md:text-4xl font-serif font-medium leading-tight text-white mb-8">
                        &quot;To provide accessible, high-quality dental care in a judgment-free environment, empowering our patients to achieve and maintain healthy smiles for life.&quot;
                    </p>
                    <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-gray-600">
                            These principles guide every decision we make and every interaction we have with our patients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Patient-Centered Care",
                                desc: "You are the focus. We customize every treatment plan to fit your unique needs, budget, and comfort level.",
                                icon: "❤️"
                            },
                            {
                                title: "Integrity & Honesty",
                                desc: "No hidden fees, no unnecessary treatments. We believe in transparency and doing what's right for your health.",
                                icon: "🤝"
                            },
                            {
                                title: "Continuous Excellence",
                                desc: "Dentistry is always evolving. We stay ahead with ongoing education and modern technology for better results.",
                                icon: "🎓"
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-6">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & Comfort */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Technology for Better Care</h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    We invest in state-of-the-art dental technology not to be flashy, but to make your visits faster, safer, and more comfortable.
                                </p>
                            </div>

                            <ul className="space-y-6">
                                {[
                                    { title: "Digital Low-Radiation X-Rays", desc: "90% less radiation than traditional film x-rays and instant images." },
                                    { title: "Intraoral Cameras", desc: "See what we see. We use small cameras to show you the condition of your teeth on screen." },
                                    { title: "Sedation Options", desc: "Nitrous oxide (laughing gas) and oral sedation available for anxious patients." },
                                    { title: "Paperless Charting", desc: "Eco-friendly, secure, and efficient digital records." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[600px] w-full bg-gray-100 rounded-3xl overflow-hidden">
                            {/* Placeholder for technology image - using a subtle gradient/pattern if no image available, or re-using hero for demo purposes with filter */}
                            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                                <span className="text-primary/20 font-bold text-9xl">TECH</span>
                            </div>
                            {/* In a real app, use <Image src="/images/tech.jpg" ... /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-900 py-20 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl text-white font-bold mb-6">Ready to join our family?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">We are accepting new patients and can't wait to meet you. Schedule your first visit today.</p>
                    <a href="/book" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Book Appointment
                    </a>
                </div>
            </section>
        </div>
    );
}
