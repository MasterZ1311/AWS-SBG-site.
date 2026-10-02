"use client";

import React, { useState } from "react";
import { Container, SectionHeader, Card, Badge, Button, Modal } from "@/modules/design-system/components/ui";
import { siteData } from "@/data/site-data";

const TIERS = [
  {
    name: "Title Sponsor",
    amount: "₹1,25,000",
    badge: "EXCLUSIVE HEADLINE PARTNER",
    color: "var(--color-accent)",
    perks: [
      "Headline naming rights: 'Kairos 2027 Presented by [Your Brand]'",
      "30-Minute Keynote address during opening ceremony",
      "Full uncurated resume book access of all 2,000+ applicants",
      "Custom branded hackathon challenge track with dedicated mentor booth",
      "Prime exhibition booth space in Central Auditorium foyer",
      "Co-branded official participant hoodies and metal NFC badges",
      "Exclusive post-hackathon hiring interview slots on campus",
    ],
  },
  {
    name: "Powered-By Sponsor",
    amount: "₹70,000",
    badge: "CO-PRESENTING PARTNER",
    color: "var(--color-info)",
    perks: [
      "Co-presenting stage branding and LED backdrop logo presence",
      "15-Minute Technical Tech Talk slot during Day 1 sprint",
      "Exclusive track naming rights (e.g. 'FinTech Track by [Your Brand]')",
      "VIP seat on the Grand Finale evaluation jury panel",
      "Dedicated recruitment desk in CS Lab Block",
      "Direct channel in chapter Discord & Meetup group for job postings",
    ],
  },
  {
    name: "Track Sponsor",
    amount: "₹35,000",
    badge: "DOMAIN CHALLENGE PARTNER",
    color: "var(--color-success)",
    perks: [
      "Branded problem statement challenge in your specialized domain",
      "Access to resumes of top 30 finalist teams",
      "Stage recognition during Grand Valedictory prize distribution",
      "Logo inclusion on all digital certificates and event microsite",
      "Dedicated judging mentor slot during evaluation checkpoints",
    ],
  },
  {
    name: "Community Sponsor",
    amount: "₹15,000",
    badge: "ECOSYSTEM ENABLER",
    color: "var(--color-warning)",
    perks: [
      "Logo placement on official website sponsor wall and banners",
      "Social media spotlight reel across Instagram (@aws.studentbuildergroup_sist) and LinkedIn",
      "Company swag & promotional collateral distributed in attendee kits",
      "Official certificate of appreciation from Sathyabama School of Computing",
    ],
  },
];

export function SponsorsView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [interestedTier, setInterestedTier] = useState("Title Sponsor");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container>
        <SectionHeader
          eyebrow="CORPORATE PARTNERSHIP PROSPECTUS"
          eyebrowVariant="accent"
          title="Partner with Chennai's Top"
          titleHighlight="Student Cloud Guild"
          description="Mobilize 2,000+ elite student software engineers across 100+ universities. Direct tech recruiting pipelines, high-voltage brand exposure, and institutional credibility."
        />

        {/* Value Proposition Ribbon */}
        <div
          className="well"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
            padding: "32px 36px",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-accent)",
            marginBottom: "56px",
            textAlign: "center",
          }}
        >
          <div>
            <span style={{ fontFamily: "var(--font-duospace)", fontSize: "32px", fontWeight: 700, color: "var(--color-accent)", display: "block" }}>
              2,000+
            </span>
            <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
              Hackathon Applicants
            </span>
          </div>

          <div>
            <span style={{ fontFamily: "var(--font-duospace)", fontSize: "32px", fontWeight: 700, color: "var(--color-success)", display: "block" }}>
              100+
            </span>
            <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
              Colleges Across India
            </span>
          </div>

          <div>
            <span style={{ fontFamily: "var(--font-duospace)", fontSize: "32px", fontWeight: 700, color: "var(--color-info)", display: "block" }}>
              200+
            </span>
            <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
              Active Campus Members
            </span>
          </div>

          <div>
            <span style={{ fontFamily: "var(--font-duospace)", fontSize: "32px", fontWeight: 700, color: "var(--color-accent)", display: "block" }}>
              100% Free
            </span>
            <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
              Radical Student Access
            </span>
          </div>
        </div>

        {/* Sponsorship Tier Matrix */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
            marginBottom: "64px",
          }}
        >
          {TIERS.map((tier) => (
            <Card
              key={tier.name}
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
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: tier.color,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {tier.badge}
                </span>

                <h3 className="text-h3" style={{ margin: "0 0 8px", fontSize: "22px" }}>
                  {tier.name}
                </h3>

                <div
                  style={{
                    fontFamily: "var(--font-duospace)",
                    fontSize: "32px",
                    fontWeight: 900,
                    color: "var(--color-text)",
                    marginBottom: "24px",
                  }}
                >
                  {tier.amount}
                </div>

                <ul
                  style={{
                    margin: "0 0 32px",
                    paddingLeft: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {tier.perks.map((perk, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "13px",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: tier.color, fontWeight: 700 }}>✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button
                  variant={tier.name === "Title Sponsor" ? "primary" : "outline"}
                  size="md"
                  style={{ width: "100%" }}
                  onClick={() => {
                    setInterestedTier(tier.name);
                    setIsModalOpen(true);
                  }}
                >
                  Request {tier.name} Kit →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Existing Confirmed Partners Wall */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <Badge variant="accent" size="sm" style={{ marginBottom: "12px" }}>
              CURRENT ECOSYSTEM SUPPORTERS
            </Badge>
            <h3 className="text-h2">Verified Partners & Academic Patrons</h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {siteData.sponsors.map((sp) => (
              <Card
                key={sp.id}
                variant="default"
                style={{
                  padding: "24px",
                  textAlign: "center",
                  background: "var(--color-surface-sunken)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--color-accent)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {sp.tier} Partner
                </span>
                <h4 className="text-h4" style={{ margin: "0 0 6px" }}>
                  {sp.name}
                </h4>
                <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "12px" }}>
                  {sp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Outreach Callout */}
        <div
          className="well"
          style={{
            padding: "44px 36px",
            textAlign: "center",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-accent)",
            background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-sunken) 100%)",
          }}
        >
          <h3 className="text-h3" style={{ margin: "0 0 10px" }}>
            Direct Inquiries with Chapter Leadership
          </h3>
          <p className="text-body" style={{ color: "var(--color-text-secondary)", maxWidth: "640px", margin: "0 auto 24px" }}>
            For customized sponsorship packages, campus CSR initiatives, or tech talk requisitions, contact Chapter President <strong>Thenappan T</strong> directly.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Button href="mailto:sistawscc@gmail.com" variant="primary" size="md">
              Email sistawscc@gmail.com
            </Button>
            <Button href="tel:+916381801640" variant="outline" size="md">
              Call +91 6381801640
            </Button>
          </div>
        </div>

        {/* Sponsorship Inquiry Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setIsSubmitted(false);
          }}
          title={`Corporate Partnership Inquiry: ${interestedTier}`}
          maxWidth="md"
        >
          {isSubmitted ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: "var(--color-success)",
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                ✓
              </div>
              <h3 className="text-h3" style={{ margin: "0 0 8px" }}>
                Thank You, {companyName}!
              </h3>
              <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", marginBottom: "20px" }}>
                Our chapter leadership team will send the official PDF prospectus to <strong>{contactEmail}</strong> and connect with you directly.
              </p>
              <Button variant="primary" size="sm" onClick={() => setIsModalOpen(false)}>
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit}>
              <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", marginBottom: "20px" }}>
                Submit your company details to receive the comprehensive 12-page Kairos 2027 Sponsorship Deck and corporate engagement agreement.
              </p>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                  Company / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AWS Partner Network Member"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-sunken)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                  Work Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. partner@company.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-sunken)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                  Target Sponsorship Tier
                </label>
                <select
                  value={interestedTier}
                  onChange={(e) => setInterestedTier(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-sunken)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                >
                  {TIERS.map((t) => (
                    <option key={t.name} value={t.name} style={{ backgroundColor: "#121826" }}>
                      {t.name} ({t.amount})
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <Button type="button" variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Send Partnership Request →
                </Button>
              </div>
            </form>
          )}
        </Modal>
      </Container>
    </div>
  );
}

export default SponsorsView;
