"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function MeetTheDentistPreview() {
    return (
        <section className="py-20 bg-teal-900 text-white overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-950 rounded-full blur-3xl opacity-50 -ml-10 -mb-10"></div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative mx-auto md:mx-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                            <Image
                                src="/images/doctor.png"
                                alt="Dr. Sarah Bennett"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Dr. Sarah Bennett</h2>
                        <p className="text-xl text-teal-100 mb-6 font-medium">DDS, University of Texas Health Science Center</p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            &quot;I believe that every patient deserves to feel heard and cared for. My goal is to make your dental visit as comfortable and positive as possible, treating you like family from the moment you walk in.&quot;
                        </p>
                        <div className="flex gap-4">
                            <Link href="/meet-the-dentist">
                                <Button variant="secondary">Meet Dr. Bennett</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
