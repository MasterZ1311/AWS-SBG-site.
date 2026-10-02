import type { Metadata } from "next";
import HeroSection from "@/modules/home/components/HeroSection";
import PillarsSection from "@/modules/home/components/PillarsSection";
import FeaturedEventSection from "@/modules/home/components/FeaturedEventSection";
import SponsorWallSection from "@/modules/home/components/SponsorWallSection";
import CommunityCTASection from "@/modules/home/components/CommunityCTASection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The premier AWS student cloud development community at Sathyabama Institute of Science and Technology. 100% free workshops, serverless labs, national hackathons, and collaborative group study cohorts.",
  alternates: { canonical: "https://sbg-sist.in/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <FeaturedEventSection />
      <SponsorWallSection />
      <CommunityCTASection />
    </>
  );
}
