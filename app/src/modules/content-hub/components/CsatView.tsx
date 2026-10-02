"use client";

import React from "react";
import Image from "next/image";
import { Container, SectionHeader, Card, Badge, Button } from "@/modules/design-system/components/ui";

export function CsatView() {
  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container size="md">
        <SectionHeader
          eyebrow="OFFICIAL PULSE ATTENDEE SURVEY"
          eyebrowVariant="accent"
          title="Session Feedback"
          titleHighlight="& Digital Badges"
          description="Your feedback shapes the quality of every workshop and hackathon. Complete the official 3-minute Amazon Web Services Pulse Survey to verify attendance and claim digital certificates."
        />

        {/* Pulse Telemetry Banner */}
        <div
          className="well"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            padding: "24px 28px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-duospace)",
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--color-accent)",
                display: "block",
              }}
            >
              4.85 / 5.0
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
              All-Time CSAT Score
            </span>
          </div>

          <div>
            <span
              style={{
                fontFamily: "var(--font-duospace)",
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--color-success)",
                display: "block",
              }}
            >
              200+
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
              Surveys Logged
            </span>
          </div>

          <div>
            <span
              style={{
                fontFamily: "var(--font-duospace)",
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--color-info)",
                display: "block",
              }}
            >
              100% Free
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
              No Paid Certifications
            </span>
          </div>
        </div>

        {/* Pulse Survey Card with QR Code */}
        <Card
          variant="elevated"
          style={{
            padding: "48px 36px",
            textAlign: "center",
            border: "1px solid var(--color-border-accent)",
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-sunken) 100%)",
            boxShadow: "0 0 36px rgba(255, 153, 0, 0.14)",
            marginBottom: "48px",
          }}
        >
          <Badge variant="success" size="sm" pulse style={{ marginBottom: "20px" }}>
            LIVE FEEDBACK GATEWAY: PULSE.AWS
          </Badge>

          <h3 className="text-h2" style={{ margin: "0 0 12px" }}>
            Scan QR Code to Open Survey
          </h3>

          <p className="text-body" style={{ color: "var(--color-text-secondary)", maxWidth: "540px", margin: "0 auto 32px" }}>
            Point your mobile camera at the official Pulse QR code below, or click the direct portal link to submit your session feedback.
          </p>

          {/* QR Code Container */}
          <div
            style={{
              display: "inline-block",
              padding: "16px",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5)",
              marginBottom: "32px",
            }}
          >
            <Image
              src="/assets/qr/Attendee Feedback_qrcode_pulse.aws.png"
              alt="Official AWS Pulse Attendee Feedback QR Code"
              width={220}
              height={220}
              style={{ display: "block" }}
              priority
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Button href="https://pulse.aws" variant="primary" size="lg" external>
              Open Pulse Survey Directly (pulse.aws) →
            </Button>
            <Button href="https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/" variant="outline" size="lg" external>
              Confirm on Meetup Chapter
            </Button>
          </div>
        </Card>

        {/* 3 Step Badge Claim Instructions */}
        <div
          className="well"
          style={{
            padding: "36px 30px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h4 className="text-h3" style={{ margin: "0 0 16px", fontSize: "18px" }}>
            How to Claim Official AWS Digital Badges:
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent)", fontSize: "14px", minWidth: "24px" }}>01.</span>
              <span className="text-body-sm" style={{ color: "var(--color-text-secondary)" }}>
                Attend the live session in full and complete the 3-minute Pulse survey during the final closing window.
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent)", fontSize: "14px", minWidth: "24px" }}>02.</span>
              <span className="text-body-sm" style={{ color: "var(--color-text-secondary)" }}>
                Provide the exact institutional email address linked to your official AWS Builder ID account.
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent)", fontSize: "14px", minWidth: "24px" }}>03.</span>
              <span className="text-body-sm" style={{ color: "var(--color-text-secondary)" }}>
                Your verifiable attendance badge and Cloud Practitioner certificate will arrive in your inbox within 7 business days.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CsatView;
