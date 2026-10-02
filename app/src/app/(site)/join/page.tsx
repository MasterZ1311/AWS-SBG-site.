import type { Metadata } from "next";
import JoinView from "@/modules/join/components/JoinView";

export const metadata: Metadata = {
  title: "Join the Chapter",
  description:
    "Apply to join AWS Student Builder Group SIST. 100% free membership, free cloud labs, and hands-on workshops open to all Sathyabama students.",
  alternates: { canonical: "https://sbg-sist.in/join" },
};

export default function JoinPage() {
  return <JoinView />;
}
