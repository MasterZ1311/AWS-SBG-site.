import type { Metadata } from "next";
import ArticlesView from "@/modules/content-hub/components/ArticlesView";

export const metadata: Metadata = {
  title: "Builder Articles",
  description:
    "Explore student-authored technical articles, architecture deep-dives, and serverless guides published on the AWS Builder Center by AWS Student Builder Group SIST.",
  alternates: { canonical: "https://sbg-sist.in/articles" },
};

export default function ArticlesPage() {
  return <ArticlesView />;
}
