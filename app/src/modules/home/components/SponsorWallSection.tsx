import React from "react";
import Image from "next/image";
import { Container, SectionHeader, Card, Button, Badge } from "@/modules/design-system/components/ui";
import { siteData } from "@/data/site-data";

export function SponsorWallSection() {
  return (
    <section
      id="sponsors-wall"
      aria-label="Corporate & Institutional Partners"
      style={{
        padding: "80px 0",
        background: "var(--color-surface-sunken)",
        borderTop: "1px solid var(--color-border-subtle)",
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="ECOSYSTEM & PARTNERSHIPS"
          eyebrowVariant="accent"
          title="Empowered by Global Cloud Leaders"
          titleHighlight="& Campus Innovation"
          description="We collaborate with Amazon Web Services, top developer platforms, and academic research departments to provide 100% free enterprise cloud access to our student builders."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {siteData.sponsors.map((sponsor) => (
            <Card
              key={sponsor.id}
              variant="interactive"
              style={{
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "180px",
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
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-accent)",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {sponsor.tier} PARTNER
                  </span>
                  <Badge variant="default" size="sm">
                    Verified
                  </Badge>
                </div>

                <h4
                  className="text-h4"
                  style={{
                    margin: "0 0 10px",
                    color: "var(--color-text)",
                  }}
                >
                  {sponsor.name}
                </h4>

                {sponsor.description && (
                  <p
                    className="text-body-sm"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {sponsor.description}
                  </p>
                )}
              </div>

              <div style={{ marginTop: "20px" }}>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--color-accent)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span>Visit Partner</span>
                  <span>→</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Corporate Sponsorship Pitch Banner */}
        <div
          className="well"
          style={{
            padding: "36px 32px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            border: "1px solid var(--color-border-accent)",
            borderRadius: "var(--radius-lg)",
            background: "linear-gradient(90deg, rgba(22, 30, 46, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <h3
              className="text-h3"
              style={{
                margin: "0 0 8px",
                color: "var(--color-text)",
              }}
            >
              Partner with Chennai&apos;s Elite Student Cloud Chapter
            </h3>
            <p
              className="text-body"
              style={{
                color: "var(--color-text-secondary)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Access top cloud talent, sponsor track challenges at Kairos 2027, and mentor 200+ active student builders at Sathyabama.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Button href="/sponsors" variant="primary" size="md">
              View Sponsorship Tiers
            </Button>
            <Button href="mailto:sistawscc@gmail.com" variant="outline" size="md">
              Contact Outreach
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SponsorWallSection;
