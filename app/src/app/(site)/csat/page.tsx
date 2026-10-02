import type { Metadata } from "next";
import CsatView from "@/modules/content-hub/components/CsatView";

export const metadata: Metadata = {
  title: "Pulse Attendee Survey",
  description:
    "Submit official attendee feedback for AWS Student Builder Group workshops and hackathons via pulse.aws to claim verified digital badges and attendance records.",
  alternates: { canonical: "https://sbg-sist.in/csat" },
};

export default function CsatPage() {
  return <CsatView />;
}
