import type { Metadata } from "next";
import AboutView from "@/modules/about/components/AboutView";

export const metadata: Metadata = {
  title: "About the Chapter",
  description:
    "Learn about AWS Student Builder Group SIST — our global Seattle affiliation, Sathyabama School of Computing heritage, faculty coordinators, and open governance charter.",
  alternates: { canonical: "https://sbg-sist.in/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
