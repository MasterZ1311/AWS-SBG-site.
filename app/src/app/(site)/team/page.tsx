import type { Metadata } from "next";
import TeamView from "@/modules/team/components/TeamView";

export const metadata: Metadata = {
  title: "Annual Core Team",
  description:
    "Meet the student leaders and faculty mentors of AWS Student Builder Group SIST — Batch 2026–2027 and Founding Cohort.",
  alternates: { canonical: "https://sbg-sist.in/team" },
};

export default function TeamPage() {
  return <TeamView initialBatch="2026-2027" />;
}
