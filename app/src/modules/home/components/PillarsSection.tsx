import React from "react";
import { Container, SectionHeader, Card } from "@/modules/design-system/components/ui";

const PILLARS = [
  {
    num: "01",
    tag: "GROUP STUDY & PEER MENTORSHIP",
    title: "Learn as a Community",
    description:
      "We help each other as a collaborative group study community. Everyone helps on all technical topics—from Cloud Practitioner fundamentals to high-concurrency distributed systems, guiding student builders from ground zero to verified credentials.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    badges: ["Peer Group Study", "Technical Mentorship", "Hands-on Sandboxes"],
    accentColor: "var(--color-accent)",
  },
  {
    num: "02",
    tag: "ELITE PRODUCTION LAB",
    title: "Build Production Systems",
    description:
      "We believe in proof of work over theoretical lectures. Members build real-world microservices, deploy multi-agent workflows using AWS Strands SDK and Bedrock, and publish architectural deep-dives on the AWS Builder Center.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    badges: ["Agentic AI on Bedrock", "Serverless Microservices", "Open Source Repos"],
    accentColor: "var(--color-success)",
  },
  {
    num: "03",
    tag: "GLOBAL ECOSYSTEM",
    title: "Connect to Opportunity",
    description:
      "Plug directly into the worldwide AWS ecosystem. Engage with AWS Developer Advocates, connect with corporate sponsors and recruiters, and collaborate with 600+ campus chapters across Seattle, Singapore, and Europe.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    badges: ["600+ Global Chapters", "Industry Mentors", "Direct Hiring Pipelines"],
    accentColor: "var(--color-info)",
  },
];

export function PillarsSection() {
  return (
    <section
      id="pillars"
      aria-label="Three Core Pillars"
      style={{
        padding: "96px 0",
        position: "relative",
        background: "linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface-sunken) 100%)",
        borderTop: "1px solid var(--color-border-subtle)",
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="THE THREE PILLARS OF SBGL"
          eyebrowVariant="accent"
          title="Architected for Radical Student Growth"
          titleHighlight="From Zero to Production"
          description="A peer-engineered operational framework taking student builders from foundation cloud literacy to deploying enterprise systems and securing top cloud engineering careers."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {PILLARS.map((pillar) => (
            <Card
              key={pillar.num}
              variant="interactive"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "36px 30px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  fontFamily: "var(--font-duospace)",
                  fontWeight: 900,
                  fontSize: "36px",
                  color: "var(--color-border)",
                  userSelect: "none",
                  opacity: 0.5,
                }}
              >
                {pillar.num}
              </div>

              <div>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "var(--radius-lg)",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${pillar.accentColor}`,
                    color: pillar.accentColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  {pillar.icon}
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    color: pillar.accentColor,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {pillar.tag}
                </span>

                <h3
                  className="text-h3"
                  style={{
                    margin: "0 0 14px",
                    color: "var(--color-text)",
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  className="text-body"
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "28px",
                  }}
                >
                  {pillar.description}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "20px",
                }}
              >
                {pillar.badges.map((b) => (
                  <span
                    key={b}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-text-muted)",
                      background: "rgba(255, 255, 255, 0.03)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-border-subtle)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PillarsSection;
