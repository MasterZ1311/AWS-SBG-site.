import type { Metadata } from "next";
import UpcomingEventsView from "@/modules/events/components/UpcomingEventsView";

export const metadata: Metadata = {
  title: "Active & Upcoming Events",
  description:
    "Live countdown, dual-registration funnel, and 48-hour schedule for Kairos 2027 and upcoming AWS Student Builder Group workshops at Sathyabama. 100% free participation.",
  alternates: { canonical: "https://sbg-sist.in/events/upcoming" },
};

export default function UpcomingEventsPage() {
  return <UpcomingEventsView />;
}
