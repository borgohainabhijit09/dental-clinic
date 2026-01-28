import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Lone Star Family Dental",
    description: "Explore our comprehensive dental treatments including cosmetic, pediatric, and emergency care.",
};

const services = [
    {
        id: "general",
        title: "General Dentistry",
        description: "The foundation of a healthy smile. We focus on prevention and early detection to save you time and money in the long run.",
        what: "Includes routine exams, x-rays, fillings, root canals, and extractions.",
        who: "Everyone! Adults and seniors should visit at least twice a year.",
        when: "Book every 6 months or if you notice sensitivity.",
    },
    {
        id: "cleaning",
        title: "Teeth Cleaning & Hygiene",
        description: "Professional cleaning to remove plaque and tartar that regular brushing cannot reach.",
        what: "Scaling, polishing, and fluoride treatments.",
        who: "Essential for all patients to prevent gum disease.",
        when: "Every 6 months standard, or 3-4 months for gum health maintenance.",
    },
    {
        id: "cosmetic",
        title: "Cosmetic Dentistry",
        description: "Transform your smile with modern aesthetic treatments tailored to your goals.",
        what: "Teeth whitening, porcelain veneers, bonding, and clear aligners.",
        who: "Anyone looking to improve the appearance of their smile (stains, chips, gaps).",
        when: "Whenever you want to boost your confidence!",
    },
    {
        id: "pediatric",
        title: "Pediatric Dental Care",
        description: "Specialized care for little smiles in a fun, safe environment.",
        what: "First visits, sealants, fluoride, and gentle education.",
        who: "Children from infancy through their teen years.",
        when: "By the first birthday or when the first tooth appears.",
    },
    {
        id: "emergency",
        title: "Emergency Dental Care",
        description: "Urgent attention when you need it most. We leave room in our schedule for emergencies.",
        what: "Treatment for toothaches, knocked-out teeth, abscesses, or broken crowns.",
        who: "Anyone in pain or with a dental injury.",
        when: "Immediately! Call us right away.",
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            <section className="bg-teal-50 py-20 lg:py-28 text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Modern, compassionate care for all your dental needs.
                    </p>
                </div>
            </section>

            <div className="container-custom py-20 space-y-24">
                {services.map((service, index) => (
                    <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                        <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                            <div className="bg-gray-50 rounded-2xl p-8 space-y-6 border border-gray-100">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Check className="w-5 h-5 text-primary" /> What it is
                                    </h4>
                                    <p className="text-gray-600 pl-7">{service.what}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Check className="w-5 h-5 text-primary" /> Who it&apos;s for
                                    </h4>
                                    <p className="text-gray-600 pl-7">{service.who}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Check className="w-5 h-5 text-primary" /> When to book
                                    </h4>
                                    <p className="text-gray-600 pl-7">{service.when}</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link href={`/book?service=${encodeURIComponent(service.title)}`}>
                                    <Button size="lg" className="w-full sm:w-auto">
                                        Book Appointment <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Text/Icon Visual Placeholder */}
                        <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} bg-gray-100 rounded-3xl h-80 lg:h-full min-h-[400px] flex items-center justify-center relative overflow-hidden`}>
                            <div className="text-gray-200 font-bold text-9xl select-none opacity-50 absolute">
                                0{index + 1}
                            </div>
                            {/* We could use images here, but a clean graphic is fine as per requirements "Clean healthcare look" */}
                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10 text-primary">
                                {/* We could reuse lucide icons here mapped if we exported them, for now simple text */}
                                <span className="text-4xl font-bold">{service.title[0]}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
