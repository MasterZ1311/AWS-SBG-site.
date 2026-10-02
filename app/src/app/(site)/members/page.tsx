import type { Metadata } from "next";
import MembersView from "@/modules/members/components/MembersView";

export const metadata: Metadata = {
  title: "Member Directory",
  description:
    "Explore the verified directory of 200+ student cloud builders at AWS Student Builder Group SIST — filter by functional domain, certification credentials, and tech stack.",
  alternates: { canonical: "https://sbg-sist.in/members" },
};

export default function MembersPage() {
  return <MembersView />;
}
