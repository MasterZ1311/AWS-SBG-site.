"use client";

import React from "react";
import Link from "next/link";
import { Container, SectionHeader, Card, Badge, Button } from "@/modules/design-system/components/ui";

export function AboutView() {
  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container>
        {/* Header */}
        <SectionHeader
          eyebrow="INSTITUTIONAL HERITAGE & GLOBAL AFFILIATION"
          eyebrowVariant="accent"
          title="Empowering Student Cloud Architects"
          titleHighlight="at Sathyabama"
          description="AWS Student Builder Group SIST is an autonomous student engineering organization supported by the global AWS Student Builder Groups program in Seattle, WA."
        />

        {/* Global Affiliation Hero Card */}
        <div
          className="card-elevated"
          style={{
            padding: "48px 40px",
            marginBottom: "64px",
            background: "linear-gradient(135deg, rgba(22, 30, 46, 0.95) 0%, rgba(11, 15, 25, 0.98) 100%)",
            border: "1px solid var(--color-border-accent)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "0 0 36px rgba(255, 153, 0, 0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "32px",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "24px",
            }}
          >
            <div>
              <Badge variant="accent" size="sm" style={{ marginBottom: "12px" }}>
                SEATTLE, WA ⇄ CHENNAI, INDIA
              </Badge>
              <h2 className="text-h2" style={{ margin: 0, color: "var(--color-text)" }}>
                Part of a 600+ Global University Network
              </h2>
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-success)",
                padding: "8px 16px",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid var(--color-success)",
                borderRadius: "var(--radius-md)",
              }}
            >
              ✓ Officially Recognized Campus Chapter
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "36px",
            }}
          >
            <div>
              <h3 className="text-h3" style={{ margin: "0 0 12px", color: "var(--color-accent)" }}>
                Our Chapter Mission
              </h3>
              <p className="text-body" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65, margin: 0 }}>
                We bridge the gap between classroom theory and enterprise cloud architecture. Through radical peer-to-peer mentoring, 100% free hands-on sandboxes, and production hackathons, we prepare Sathyabama students to graduate as certified, industry-proven cloud engineers.
              </p>
            </div>

            <div>
              <h3 className="text-h3" style={{ margin: "0 0 12px", color: "var(--color-accent)" }}>
                Autonomous Student Governance
              </h3>
              <p className="text-body" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65, margin: 0 }}>
                Operating under the guidance of our Faculty Coordinators from the Department of Computer Science and Engineering, our chapter is 100% led, programmed, and organized by student volunteers across 7 specialized functional squads.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Columns: Heritage, Governance, Zero Fee Policy */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            marginBottom: "64px",
          }}
        >
          {/* Card 1: Sathyabama Heritage */}
          <Card variant="interactive" style={{ padding: "36px 28px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "rgba(255, 153, 0, 0.12)",
                color: "var(--color-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                marginBottom: "20px",
              }}
            >
              🏛️
            </div>

            <h3 className="text-h3" style={{ margin: "0 0 10px", fontSize: "20px" }}>
              Sathyabama Heritage
            </h3>

            <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
              Hosted by the Department of Computer Science and Engineering, School of Computing at Sathyabama Institute of Science and Technology (Deemed to be University), Chennai. Our members leverage cutting-edge campus server labs and seminar halls for all live activations.
            </p>

            <div
              style={{
                borderTop: "1px solid var(--color-border)",
                paddingTop: "16px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-text-muted)",
              }}
            >
              Faculty Coordinators: Dr. K. Ashok Kumar & Dr. Balapriya .S
            </div>
          </Card>

          {/* Card 2: 100% Free Access Guarantee */}
          <Card variant="interactive" style={{ padding: "36px 28px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                color: "var(--color-success)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                marginBottom: "20px",
              }}
            >
              💳
            </div>

            <h3 className="text-h3" style={{ margin: "0 0 10px", fontSize: "20px" }}>
              Zero Entry Fee Policy
            </h3>

            <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
              In strict accordance with the AWS Student Builder Group Leader Handbook (Seattle, WA), every single workshop, hackathon, and training session is 100% free of charge (₹0 entry fee). We never accept credit cards, ticketing payments, or commercial paywalls.
            </p>

            <div
              style={{
                borderTop: "1px solid var(--color-border)",
                paddingTop: "16px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-success)",
              }}
            >
              ✓ 100% Free Entry Policy
            </div>
          </Card>

          {/* Card 3: Governance Charter */}
          <Card variant="interactive" style={{ padding: "36px 28px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                color: "var(--color-info)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                marginBottom: "20px",
              }}
            >
              📜
            </div>

            <h3 className="text-h3" style={{ margin: "0 0 10px", fontSize: "20px" }}>
              Governance Charter
            </h3>

            <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
              Governed by our official 10-page constitution defining meritocratic board elections, student rights, financial audits, and strict trademark compliance with Amazon Web Services corporate directives.
            </p>

            <div
              style={{
                borderTop: "1px solid var(--color-border)",
                paddingTop: "16px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-text-muted)",
              }}
            >
              Charter Version: 2026.1 · Sathyabama CSE
            </div>
          </Card>
        </div>

        {/* Leadership Statement */}
        <div
          className="well"
          style={{
            padding: "44px 36px",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-accent)",
            background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-sunken) 100%)",
            marginBottom: "56px",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <Badge variant="accent" size="sm" style={{ marginBottom: "16px" }}>
              PRESIDENT&apos;S ADDRESS
            </Badge>
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 3vw, 24px)",
                lineHeight: 1.5,
                color: "var(--color-text)",
                fontStyle: "italic",
                margin: "0 0 24px",
              }}
            >
              &ldquo;We didn&apos;t build AWS SBGL SIST to be just another college club. We built it as an elite engineering guild where first-year coders and final-year researchers stand side by side, building autonomous AI agents, deploying serverless systems, and mastering enterprise cloud architecture.&rdquo;
            </blockquote>

            <div style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--color-accent)", fontWeight: 700 }}>
              Thenappan T (MasterZ)
            </div>
            <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", marginTop: "4px" }}>
              Chapter President & AWS Student Builder Group Leader (SBGL) · SIST Chapter
            </div>
          </div>
        </div>

        {/* Mandatory Legal & Trademark Disclosure Box */}
        <div
          style={{
            padding: "24px 28px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border-subtle)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "0 0 8px",
            }}
          >
            MANDATORY AWS GLOBAL PROGRAM LEGAL NOTICE:
          </h4>
          <p
            className="aws-disclaimer-text"
            style={{
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            AWS Student Builder Group Sathyabama is an independent student organization supported by the AWS Student Builder Groups program. Amazon Web Services, AWS, and the AWS logo are trademarks of Amazon.com, Inc. or its affiliates. The club is governed by student officers and faculty advisors at Sathyabama Institute of Science and Technology.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default AboutView;
