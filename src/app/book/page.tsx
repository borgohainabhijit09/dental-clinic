import { BookingForm } from "@/components/sections/BookingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Appointment | Lone Star Family Dental",
    description: "Schedule your dental visit online. Easy booking for new and returning patients.",
};

export default function BookPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-20 lg:py-28">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            Accepting appointments for this week
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Ready for a <span className="text-primary">healthier smile?</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Booking your visit is simple. Fill out the form, and our team will get back to you within 24 hours to confirm your time slot.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">New Patients</h3>
                                <p className="text-gray-600 text-sm">Please arrive 15 minutes early to complete necessary paperwork.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">Insurance</h3>
                                <p className="text-gray-600 text-sm">We accept most major insurance plans. Have your card ready.</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div>
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
