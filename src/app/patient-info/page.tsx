import { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
    title: "Patient Information | Lone Star Family Dental",
    description: "New patient forms, insurance information, and frequently asked questions.",
};

export default function PatientInfoPage() {
    return (
        <div className="bg-white py-20 lg:py-28">
            <div className="container-custom space-y-20">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Patient Information</h1>
                    <p className="text-xl text-gray-600">
                        Everything you need to know for your visit. We strive to make your experience as smooth as possible.
                    </p>
                </div>

                {/* New Patients */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">New Patients</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-gray-600">
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800 mb-2">What to expect</h3>
                            <p className="mb-4">
                                Your first visit will include a comprehensive oral exam, x-rays, and a consultation with Dr. Bennett to discuss your oral health goals.
                            </p>
                            <p>
                                Please arrive 15 minutes early to complete new patient paperwork, or download it below to bring with you.
                            </p>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-xl">
                            <h3 className="font-semibold text-lg text-gray-800 mb-2">What to bring</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Photo ID</li>
                                <li>Dental Insurance Card</li>
                                <li>List of current medications</li>
                                <li>Previous dental records (if available)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Insurance */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Insurance & Payment</h2>
                    <div className="text-gray-600 space-y-4">
                        <p>
                            We act as an out-of-network provider for most PPO plans, meaning we file claims on your behalf. We are committed to helping you maximize your benefits.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            {["Aetna", "Delta Dental", "Cigna", "MetLife", "Blue Cross Blue Shield", "United Healthcare", "Guardian"].map(ins => (
                                <span key={ins} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
                                    {ins}
                                </span>
                            ))}
                        </div>
                        <p className="max-w-xl text-sm italic pt-4">
                            * Accepted plans may vary. Please call our office to verify your specific coverage.
                        </p>
                    </div>
                </section>

                {/* FAQs */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Frequently Asked Questions</h2>
                    <div className="max-w-3xl">
                        <FAQ />
                    </div>
                </section>

            </div>
        </div>
    );
}
