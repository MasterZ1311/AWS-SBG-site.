import type { Metadata } from "next";
import ProjectsView from "@/modules/projects/components/ProjectsView";

export const metadata: Metadata = {
  title: "Student Projects",
  description:
    "Explore open-source cloud architectures, tools, and upcoming student builder systems from AWS Student Builder Group SIST at Sathyabama Institute of Science and Technology.",
  alternates: { canonical: "https://sbg-sist.in/projects" },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
