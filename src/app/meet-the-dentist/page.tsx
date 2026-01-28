import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meet the Dentist | Lone Star Family Dental",
    description: "Get to know Dr. Sarah Bennett and our experienced dental team.",
};

export default function MeetTheDentistPage() {
    return (
        <div className="bg-white">
            <section className="py-20 lg:py-28 bg-teal-900 text-white">
                <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Dr. Bennett</h1>
                        <p className="text-xl text-teal-100 mb-8 max-w-lg">
                            A compassionate expert dedicated to making your dental experience positive, comfortable, and empowering.
                        </p>
                    </div>
                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                        <Image
                            src="/images/doctor.png"
                            alt="Dr. Sarah Bennett"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Dr. Sarah Bennett, DDS</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p>
                            Dr. Sarah Bennett has been practicing dentistry in Austin for over 15 years. Her passion for dentistry started at a young age, driven by a desire to combine science, art, and healthcare to help people smile with confidence.
                        </p>
                        <p>
                            She graduated with honors from the University of Texas Health Science Center and continues to pursue advanced training in cosmetic and restorative dentistry to provide her patients with the best possible care.
                        </p>
                        <h3 className="text-gray-900 font-bold mt-8 mb-4">Philosophy of Care</h3>
                        <p>
                            &quot;I believe that the best dental care is built on trust. I take the time to listen to my patients, understand their fears and goals, and explain every step of the process. No judgment, just support and solutions.&quot;
                        </p>

                        <h3 className="text-gray-900 font-bold mt-8 mb-4">Professional Memberships</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>American Dental Association (ADA)</li>
                            <li>Texas Dental Association</li>
                            <li>Academy of General Dentistry</li>
                            <li>Austin District Dental Society</li>
                        </ul>

                        <h3 className="text-gray-900 font-bold mt-8 mb-4">Outside the Office</h3>
                        <p>
                            When she&apos;s not at the clinic, Sarah enjoys hiking the Greenbelt with her husband and two golden retrievers, trying out new Austin taco spots, and volunteering with local youth organizations.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
