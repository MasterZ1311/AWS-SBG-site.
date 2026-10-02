import type { Metadata } from "next";
import TeamView, { TeamBatchKey } from "@/modules/team/components/TeamView";

type Params = Promise<{ year: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `Team Batch ${year}`,
    description: `Executive leadership roster and student builder board for AWS SBGL SIST Batch ${year}.`,
    alternates: { canonical: `https://sbg-sist.in/team/${year}` },
  };
}

export default async function TeamYearPage({ params }: { params: Params }) {
  const { year } = await params;
  let batchKey: TeamBatchKey = "2026-2027";
  if (year === "2025-2026") batchKey = "2025-2026";

  return <TeamView initialBatch={batchKey} />;
}
