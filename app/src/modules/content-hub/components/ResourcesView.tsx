"use client";

import React from "react";
import { Container, SectionHeader, Card, Badge, Button } from "@/modules/design-system/components/ui";
import { BUILDER_CENTER_URL } from "@/data/site-data";

const LEARNING_TRACKS = [
  {
    id: "skill-builder",
    badge: "FOUNDATIONAL COURSES",
    title: "AWS Skill Builder",
    description: "Access 400+ free digital courses curated by AWS experts. Learn core cloud infrastructure, serverless architecture, machine learning, and security at your own pace.",
    highlights: ["400+ Free Self-Paced Courses", "Official Amazon Cloud Curriculum", "Hands-on Sandbox Lab Guides"],
    link: "https://explore.skillbuilder.aws/learn",
    cta: "Launch Skill Builder →",
    icon: "🎓",
  },
  {
    id: "cloud-quest",
    badge: "GAMIFIED LEARNING",
    title: "AWS Cloud Quest: Practitioner",
    description: "The official role-playing tournament game by AWS. Solve real business problems by building cloud solutions in live AWS sandboxes to earn verifiable digital credentials.",
    highlights: ["Interactive 3D RPG Gameplay", "Real Live AWS Console Challenges", "Earn Official Credly Digital Badge"],
    link: "https://aws.amazon.com/training/digital/aws-cloud-quest/",
    cta: "Play Cloud Quest →",
    icon: "🎮",
  },
  {
    id: "bedrock-starter",
    badge: "GENAI BLUEPRINTS",
    title: "Amazon Bedrock GenAI Starter Kits",
    description: "Production-ready Python and TypeScript starter repositories for building multi-agent architectures, RAG pipelines, and prompt optimizations on Amazon Bedrock.",
    highlights: ["Pre-configured Claude 3.5 Sonnet", "LangChain & LlamaIndex Integrations", "Open Source Student Templates"],
    link: "https://github.com/MasterZ1311/AegisPulse",
    cta: "Clone Starter Kit →",
    icon: "🤖",
  },
  {
    id: "cert-prep",
    badge: "EXAM ROADMAPS",
    title: "AWS Certification Exam Engine",
    description: "Structured 30-day study roadmaps, domain cheat sheets, and practice question sets for AWS Certified Cloud Practitioner (CLF-C02) and Solutions Architect Associate (SAA-C03).",
    highlights: ["Domain Breakdown Cheatsheets", "Practice Exam Question Sets", "Exam Voucher Application Guides"],
    link: BUILDER_CENTER_URL,
    cta: "View Exam Roadmaps →",
    icon: "📜",
  },
  {
    id: "career-toolkit",
    badge: "CAREER ACCELERATION",
    title: "Cloud Career & Interview Toolkit",
    description: "Guidance on articulating hands-on cloud projects in technical interviews, structuring system design responses, and publishing proof-of-work on AWS Builder Center.",
    highlights: ["STAR Method Cloud Storytelling", "System Design Interview Patterns", "Resume Review by Chapter Alumni"],
    link: "https://s12d.com/students",
    cta: "Access Career Guide →",
    icon: "💼",
  },
  {
    id: "builder-id",
    badge: "DEVELOPER PASSPORT",
    title: "Universal AWS Builder ID",
    description: "Your universal, credit-card-free developer passport across the Amazon Web Services learning ecosystem. Track your badges, participate in tournaments, and connect with global builders.",
    highlights: ["100% Free · No Credit Card Required", "Verifiable Learning Progress", "Direct Global Chapter Access"],
    link: BUILDER_CENTER_URL,
    cta: "Create Free Builder ID →",
    icon: "🛡️",
  },
];

export function ResourcesView() {
  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container>
        <SectionHeader
          eyebrow="STUDENT LEARNING HUB"
          eyebrowVariant="accent"
          title="Turnkey AWS Toolkits"
          titleHighlight="& Study Resources"
          description="Direct gateway to official Amazon Web Services learning platforms, gamified cloud tournament games, generative AI starter kits, and certification vouchers."
        />

        {/* Resources Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "28px",
            marginBottom: "64px",
          }}
        >
          {LEARNING_TRACKS.map((track) => (
            <Card
              key={track.id}
              variant="interactive"
              style={{
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "28px" }}>{track.icon}</span>
                  <Badge variant="accent" size="sm">
                    {track.badge}
                  </Badge>
                </div>

                <h3 className="text-h3" style={{ margin: "0 0 10px", fontSize: "20px" }}>
                  {track.title}
                </h3>

                <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
                  {track.description}
                </p>

                <ul
                  style={{
                    margin: "0 0 24px",
                    paddingLeft: "18px",
                    fontSize: "13px",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {track.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: "4px" }}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "18px" }}>
                <Button href={track.link} variant="outline" size="sm" external style={{ width: "100%" }}>
                  {track.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Mentorship Support Box */}
        <div
          className="well"
          style={{
            padding: "40px 32px",
            textAlign: "center",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-accent)",
          }}
        >
          <h3 className="text-h3" style={{ margin: "0 0 8px" }}>
            Need 1-on-1 Guidance with Cloud Concepts?
          </h3>
          <p className="text-body" style={{ color: "var(--color-text-secondary)", maxWidth: "600px", margin: "0 auto 24px" }}>
            Our Hands-On AWS Builder Squad hosts bi-weekly doubt-clearing clinics and architecture reviews in the CSE Lab Block.
          </p>
          <Button href="https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/" variant="primary" size="md" external>
            Join Next Study Clinic on Meetup →
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ResourcesView;
