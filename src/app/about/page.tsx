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
            <section className="bg-gray-900 text-white py-20">
                <div className="container-custom text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
                    <p className="text-2xl font-light italic leading-relaxed text-gray-300">
                        &quot;To provide accessible, high-quality dental care in a judgment-free environment, empowering our patients to achieve and maintain healthy smiles for life.&quot;
                    </p>
                </div>
            </section>
        </div>
    );
}
