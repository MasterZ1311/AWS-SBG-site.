import React from "react";
import Image from "next/image";
import { Container, Badge, Button, CountdownTimer } from "@/modules/design-system/components/ui";

export function FeaturedEventSection() {
  const KAIROS_DATE = "2027-01-22T09:00:00+05:30";

  return (
    <section
      id="featured-event"
      aria-label="Featured Event Spotlight"
      style={{
        padding: "100px 0",
        position: "relative",
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border-subtle)",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glows: AWS Amber on left, Kairos Violet on right */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(255, 153, 0, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "550px",
          height: "450px",
          background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <div
          className="card"
          style={{
            padding: "54px 44px",
            background: "linear-gradient(135deg, rgba(22, 30, 46, 0.92) 0%, rgba(11, 15, 25, 0.96) 100%)",
            border: "1px solid rgba(168, 85, 247, 0.35)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "0 0 36px rgba(255, 153, 0, 0.12), 0 0 45px rgba(168, 85, 247, 0.12)",
            position: "relative",
          }}
        >
          {/* Top Header Pill Row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              marginBottom: "32px",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "24px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
              <Badge variant="accent" size="md">
                NATIONAL FLAGSHIP ACTIVATION
              </Badge>
              <Badge variant="success" size="md" pulse>
                100% Free · Zero Entry Fee
              </Badge>
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-text-secondary)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>📍 SIST Campus, Chennai</span>
              <span>·</span>
              <span>📅 Jan 22–24, 2027</span>
            </div>
          </div>

          {/* Grid Layout: Left Content, Right Live Countdown */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <div>
              {/* Official Kairos Logo Artwork Banner */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  maxWidth: "240px",
                  height: "76px",
                  marginBottom: "18px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#030408",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  boxShadow: "0 0 24px rgba(168, 85, 247, 0.22)",
                  padding: "4px 10px",
                  boxSizing: "border-box",
                }}
              >
                <Image
                  src="/assets/events/kairos/kairos-logo.png"
                  alt="Kairos Hackathon Official Logo"
                  width={220}
                  height={68}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  priority
                />
              </div>

              <h2
                className="text-display"
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  lineHeight: 1.15,
                  margin: "0 0 18px",
                  color: "var(--color-text)",
                }}
              >
                KAIROS 2027:{" "}
                <span className="text-accent-gradient">Grand Edition</span>
              </h2>

              <p
                className="text-body-lg"
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "28px",
                }}
              >
                The flagship national hackathon of AWS SBGL SIST. 2,000+ applicants across 100+ universities compete in a 48-hour continuous architecture sprint. Build serverless, multi-agent AI, and cloud-native solutions with zero entry fees.
              </p>

              {/* Highlights List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "14px",
                  marginBottom: "36px",
                }}
              >
                {[
                  "National 48-Hour Architecture Sprint",
                  "Challenge Tracks: Coming Soon",
                  "Direct AWS Cloud Mentorship",
                  "100% Free Entry & Meals",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "var(--color-text)",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 153, 0, 0.15)",
                        border: "1px solid var(--color-accent)",
                        color: "var(--color-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Button href="/events/upcoming" variant="primary" size="lg">
                  Register for Kairos 2027
                </Button>
                <Button
                  href="https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/"
                  variant="outline"
                  size="lg"
                  external
                >
                  RSVP on Meetup Chapter
                </Button>
              </div>
            </div>

            {/* Right: Live Down-to-the-Second Countdown Box with Cosmic Hourglass */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "36px 20px",
                background: "rgba(11, 15, 25, 0.8)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                borderRadius: "var(--radius-lg)",
                textAlign: "center",
                boxShadow: "0 0 32px rgba(168, 85, 247, 0.12)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Floating Cosmic Hourglass Emblem */}
              <div
                style={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginBottom: "16px",
                  border: "1px solid rgba(168, 85, 247, 0.45)",
                  boxShadow: "0 0 28px rgba(168, 85, 247, 0.35)",
                  background: "#030408",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/assets/events/kairos/kairos-hourglass.png"
                  alt="Kairos Cosmic Hourglass"
                  width={88}
                  height={88}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  priority
                />
              </div>

              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  display: "block",
                }}
              >
                LIVE COUNTDOWN TO KICKOFF (IST)
              </span>

              {/* Single-Line Live Timer */}
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <CountdownTimer targetDate={KAIROS_DATE} eventName="Kairos 2027" size="lg" />
              </div>

              <div
                style={{
                  marginTop: "24px",
                  padding: "12px 18px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(255, 153, 0, 0.08)",
                  border: "1px solid var(--color-border-accent)",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--color-accent)",
                    margin: 0,
                  }}
                >
                  ⚡ Registration Opens: Nov 2026 · 2,000+ Builders Expected
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedEventSection;
