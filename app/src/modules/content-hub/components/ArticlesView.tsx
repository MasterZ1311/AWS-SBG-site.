"use client";

import React from "react";
import { Container, SectionHeader, Card, Badge, Button } from "@/modules/design-system/components/ui";
import { BUILDER_CENTER_URL } from "@/data/site-data";

const ARTICLES = [
  {
    id: "aws-launchpad",
    title: "AWS Launchpad",
    author: "Thenappan T",
    date: "Official Publication",
    readTime: "5 min read",
    domain: "Builder",
    summary: "Official technical overview and student builder journey published on the AWS Builder Center, spotlighting hands-on cloud development, serverless foundations, and chapter ignition.",
    tags: ["AWS Builder Center", "AWS Launchpad", "Cloud Architecture", "Student Builders"],
    url: "https://builder.aws.com/content/3GOnACNEUhhXhiAsvMcgqEuz5lp/aws-launchpad",
  },
];

export function ArticlesView() {
  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container>
        <SectionHeader
          eyebrow="AWS BUILDER CENTER PUBLICATIONS"
          eyebrowVariant="accent"
          title="Student Architectural"
          titleHighlight="Deep-Dives"
          description="Peer-reviewed technical publications, serverless blueprints, and generative AI research papers authored by student builders and published on the AWS Builder Center."
        />

        {/* Articles Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
            marginBottom: "64px",
          }}
        >
          {ARTICLES.map((article) => (
            <Card
              key={article.id}
              variant="interactive"
              style={{
                padding: "32px 28px",
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
                  <Badge variant="accent" size="sm">
                    {article.domain}
                  </Badge>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {article.readTime}
                  </span>
                </div>

                <h3
                  className="text-h3"
                  style={{
                    margin: "0 0 12px",
                    fontSize: "20px",
                    color: "var(--color-text)",
                    lineHeight: 1.35,
                  }}
                >
                  {article.title}
                </h3>

                <p
                  className="text-body-sm"
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {article.summary}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "24px",
                  }}
                >
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--color-text-secondary)",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        padding: "3px 8px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer: Author & Read Link */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "18px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "12px",
                      color: "var(--color-text)",
                      display: "block",
                    }}
                  >
                    {article.author}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {article.date}
                  </span>
                </div>

                <Button href={article.url} variant="outline" size="sm" external>
                  Read on Builder Center →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Publish Your Proof of Work CTA */}
        <div
          className="well"
          style={{
            padding: "40px 32px",
            textAlign: "center",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-accent)",
          }}
        >
          <Badge variant="accent" size="sm" style={{ marginBottom: "14px" }}>
            CONTRIBUTE & EARN SWAG
          </Badge>
          <h3 className="text-h3" style={{ margin: "0 0 10px" }}>
            Publish Your Cloud Architecture on AWS Builder Center
          </h3>
          <p className="text-body" style={{ color: "var(--color-text-secondary)", maxWidth: "620px", margin: "0 auto 24px" }}>
            Writing tutorials and system design breakdowns establishes your public developer footprint and unlocks official AWS Builder swag points for our chapter.
          </p>
          <Button href={BUILDER_CENTER_URL} variant="primary" size="md" external>
            Open AWS Builder Center Editor →
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ArticlesView;
