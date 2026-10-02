import type { Metadata } from "next";
import SponsorsView from "@/modules/sponsors/components/SponsorsView";

export const metadata: Metadata = {
  title: "Corporate Sponsors & Partners",
  description:
    "Partner with Chennai's top student cloud development community. Explore corporate sponsorship tiers, challenge tracks, and recruiting pipelines for Kairos 2027.",
  alternates: { canonical: "https://sbg-sist.in/sponsors" },
};

export default function SponsorsPage() {
  return <SponsorsView />;
}
