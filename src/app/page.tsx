import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { MeetTheDentistPreview } from "@/components/sections/MeetTheDentist";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lone Star Family Dental | Austin, TX",
  description: "Comprehensive dental services for adults and children in Austin. Book your appointment today.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <MeetTheDentistPreview />
      <Testimonials />
      <Location />
    </>
  );
}
