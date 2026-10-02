import type { Metadata } from "next";
import ResourcesView from "@/modules/content-hub/components/ResourcesView";

export const metadata: Metadata = {
  title: "Learning Resources",
  description:
    "Explore turnkey AWS learning resources — AWS Skill Builder courses, Cloud Quest RPG game, certification exam roadmaps, and Amazon Bedrock starter kits at Sathyabama.",
  alternates: { canonical: "https://sbg-sist.in/resources" },
};

export default function ResourcesPage() {
  return <ResourcesView />;
}
