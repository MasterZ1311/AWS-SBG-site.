import React from "react";
import { Container, Button, Badge } from "@/modules/design-system/components/ui";
import { BUILDER_CENTER_URL } from "@/data/site-data";

export function CommunityCTASection() {
  return (
    <section
      id="community-cta"
      aria-label="Join Chapter Call to Action"
      style={{
        padding: "100px 0",
        position: "relative",
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border-subtle)",
        overflow: "hidden",
      }}
    >
      {/* Background glow accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "360px",
          background: "radial-gradient(ellipse at bottom, rgba(255, 153, 0, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container size="md">
        <div
          className="card"
          style={{
            padding: "54px 44px",
            textAlign: "center",
            background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-sunken) 100%)",
            border: "1px solid var(--color-border-accent)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "0 0 40px rgba(255, 153, 0, 0.16)",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <Badge variant="success" size="md" pulse>
              100% Free · Zero Credit Card Required
            </Badge>
          </div>

          <h2
            className="text-display"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.15,
              margin: "0 auto 18px",
              color: "var(--color-text)",
            }}
          >
            Ready to Build the Future{" "}
            <span className="text-accent-gradient">on AWS?</span>
          </h2>

          <p
            className="text-body-lg"
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              margin: "0 auto 36px",
              lineHeight: 1.65,
            }}
          >
            Join 200+ student developers at Sathyabama. Create your free AWS Builder ID to unlock official Skill Builder sandboxes, participate in hands-on workshops, and register for Kairos 2027.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <Button
              href={BUILDER_CENTER_URL}
              variant="primary"
              size="lg"
              external
            >
              Join AWS Builder Center (Free Invite)
            </Button>

            <Button
              href="https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/"
              variant="secondary"
              size="lg"
              external
            >
              Join Official Meetup Chapter
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              borderTop: "1px solid var(--color-border)",
              paddingTop: "24px",
            }}
          >
            <span>✓ Verified Amazon Web Services Program</span>
            <span>✓ No Prior Cloud Experience Required</span>
            <span>✓ Open to All SIST Departments & Years</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CommunityCTASection;
