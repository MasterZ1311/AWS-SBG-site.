import type { Metadata } from "next";
import DomainsView from "@/modules/domains/components/DomainsView";

export const metadata: Metadata = {
  title: "Functional Domains",
  description:
    "Explore the specialized teams of AWS Student Builder Group SIST — Technical, Media, Builder, Events and Management, Documentation, and Design.",
  alternates: { canonical: "https://sbg-sist.in/domains" },
};

export default function DomainsPage() {
  return <DomainsView />;
}
