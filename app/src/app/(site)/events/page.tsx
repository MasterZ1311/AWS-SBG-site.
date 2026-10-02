import type { Metadata } from "next";
import EventsArchiveView from "@/modules/events/components/EventsArchiveView";

export const metadata: Metadata = {
  title: "Events Archive",
  description:
    "Explore the comprehensive chronological archive of national hackathons, certification bootcamps, and hands-on serverless workshops organized by AWS Student Builder Group SIST.",
  alternates: { canonical: "https://sbg-sist.in/events" },
};

export default function EventsPage() {
  return <EventsArchiveView />;
}
