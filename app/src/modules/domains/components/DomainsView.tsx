"use client";

import React from "react";
import Link from "next/link";
import { Container, SectionHeader, Card, Badge, Button } from "@/modules/design-system/components/ui";
import { siteData } from "@/data/site-data";

export function DomainsView() {
  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container>
        <SectionHeader
          eyebrow="FUNCTIONAL SQUAD ARCHITECTURE"
          eyebrowVariant="accent"
          title="Our Specialized"
          titleHighlight="Functional Domains"
          description="Autonomous student engineering and operational squads driving cloud architectures, creative media, event logistics, and corporate partnerships across the SIST Chapter."
        />

        {/* Squad Organization Overview Ribbon */}
        <div
          className="well"
          style={{
            padding: "36px 32px",
            marginBottom: "56px",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-accent)",
            background: "linear-gradient(135deg, rgba(22, 30, 46, 0.8) 0%, rgba(11, 15, 25, 0.95) 100%)",
          }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-accent)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "8px",
              }}
            >
              OPERATING BLUEPRINT
            </span>
            <h3 className="text-h3" style={{ margin: "0 0 12px" }}>
              Engineered for Enterprise Scale & Autonomy
            </h3>
            <p className="text-body" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, margin: "0 auto 24px" }}>
              Every functional squad operates like an agile engineering team with a dedicated student lead, clear operational mandates, and production deliverables on Amazon Web Services.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "16px",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-text)",
              }}
            >
              <span>⚡ 6 Core Teams</span>
              <span>·</span>
              <span>🛡️ Faculty Supervised</span>
              <span>·</span>
              <span>🚀 100% Student-Driven</span>
            </div>
          </div>
        </div>

        {/* 6 Core Functional Teams Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "28px",
            marginBottom: "64px",
          }}
        >
          {siteData.domains.map((domain, index) => (
            <Card
              key={domain.id}
              variant="interactive"
              style={{
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* Header: Squad Number & Accent Emblem */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-lg)",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: `1px solid ${domain.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: domain.color,
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      fontSize: "16px",
                      boxShadow: `0 0 16px ${domain.color}25`,
                    }}
                  >
                    0{index + 1}
                  </div>

                  <Badge variant="default" size="sm">
                    Active Squad
                  </Badge>
                </div>

                {/* Domain Title & Tagline */}
                <h3
                  className="text-h3"
                  style={{
                    margin: "0 0 6px",
                    color: "var(--color-text)",
                    fontSize: "22px",
                  }}
                >
                  {domain.name}
                </h3>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: domain.color,
                    fontWeight: 600,
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  &ldquo;{domain.tagline}&rdquo;
                </span>

                {/* Mandate */}
                <p
                  className="text-body-sm"
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {domain.mandate}
                </p>

                {/* Squad Lead */}
                <div
                  style={{
                    padding: "10px 14px",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-border-subtle)",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>Squad Lead:</span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "13px",
                      color: "var(--color-text)",
                    }}
                  >
                    {domain.lead ?? "Open for Recruitment"}
                  </span>
                </div>

                {/* Tooling & Technologies */}
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    PRIMARY TOOLS & AWS SERVICES:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {domain.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          color: "var(--color-text)",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          padding: "3px 8px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--color-border-subtle)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action: Apply to Join this Squad */}
              <div
                style={{
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "18px",
                }}
              >
                <Button href={`/join?domain=${domain.id}`} variant="outline" size="sm" style={{ width: "100%" }}>
                  Apply to Join this Squad →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Global Join Call to Action */}
        <div
          className="card"
          style={{
            padding: "48px 36px",
            textAlign: "center",
            background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-sunken) 100%)",
            border: "1px solid var(--color-border-accent)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <Badge variant="accent" size="sm" style={{ marginBottom: "16px" }}>
            STUDENT RECRUITMENT ACTIVE
          </Badge>
          <h3 className="text-h2" style={{ margin: "0 0 12px" }}>
            Find Your Tribe in Cloud Engineering
          </h3>
          <p className="text-body" style={{ color: "var(--color-text-secondary)", maxWidth: "640px", margin: "0 auto 28px" }}>
            Whether you build frontend design systems, write Infrastructure as Code, train foundation models, or produce 4K media, there is a dedicated squad for your talent.
          </p>
          <Button href="/join" variant="primary" size="lg">
            Complete Recruitment Intake Form (100% Free) →
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default DomainsView;
