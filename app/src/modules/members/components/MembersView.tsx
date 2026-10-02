"use client";

import React, { useState, useMemo } from "react";
import { Container, SectionHeader, Card, Badge, Button } from "@/modules/design-system/components/ui";
import { siteData } from "@/data/site-data";

interface BuilderProfile {
  id: string;
  name: string;
  department: string;
  year: string;
  domain: string;
  certified: boolean;
  certName?: string;
  skills: string[];
  github?: string;
  linkedin?: string;
}

const SEEDED_BUILDERS: BuilderProfile[] = [
  {
    id: "b1",
    name: "Thenappan T (MasterZ)",
    department: "Computer Science & Engineering",
    year: "Batch 2026–2027",
    domain: "Builder",
    certified: true,
    certName: "Solutions Architect Associate",
    skills: ["AWS EC2", "VPC", "CloudFormation", "Lambda", "IAM"],
    github: "https://github.com/aws-sbg-sist",
    linkedin: "https://www.linkedin.com/in/thenappan-t-72b217290/",
  },
  {
    id: "b2",
    name: "Viswanathan Ashok",
    department: "Computer Science & Engineering",
    year: "Batch 2026–2027",
    domain: "Builder",
    certified: false,
    skills: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "CloudFront"],
    github: "https://github.com/aws-sbg-sist",
    linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
  },
  {
    id: "b3",
    name: "Shanmugapriyan S",
    department: "Computer Science & Engineering",
    year: "Batch 2026–2027",
    domain: "Technical",
    certified: true,
    certName: "Cloud Practitioner",
    skills: ["AWS Lambda", "DynamoDB", "API Gateway", "EventBridge"],
    linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
  },
  {
    id: "b4",
    name: "Rikish B",
    department: "School of Computing",
    year: "Batch 2026–2027",
    domain: "Design",
    certified: false,
    skills: ["Figma", "Blender 3D", "UI/UX", "Brand Systems"],
    linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
  },
  {
    id: "b5",
    name: "Caroline Mary McPherson",
    department: "School of Computing",
    year: "Batch 2026–2027",
    domain: "Media",
    certified: false,
    skills: ["Video Production", "Photography", "Storytelling", "Social Media"],
    linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
  },
  {
    id: "b6",
    name: "Nangaiyar M",
    department: "Computer Science & Engineering",
    year: "Batch 2026–2027",
    domain: "Events and Management",
    certified: false,
    skills: ["Event Operations", "Logistics", "Auditorium AV", "Run of Show"],
    linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
  },
  {
    id: "b7",
    name: "Hemavarshine S",
    department: "Computer Science & Engineering",
    year: "Batch 2026–2027",
    domain: "Documentation",
    certified: false,
    skills: ["Governance", "Technical Writing", "Audit Reports", "Compliance"],
    linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
  },
  {
    id: "b8",
    name: "Harshith Raj S",
    department: "School of Computing",
    year: "Batch 2026–2027",
    domain: "Media",
    certified: false,
    skills: ["Corporate Outreach", "Fundraising", "Meetup Ops", "Partnerships"],
    linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
  },
  {
    id: "b11",
    name: "Arun Kumar V",
    department: "Information Technology",
    year: "3rd Year",
    domain: "Technical",
    certified: true,
    certName: "Cloud Practitioner",
    skills: ["AWS GuardDuty", "Security Hub", "WAF", "IAM Policies"],
    github: "https://github.com/aws-sbg-sist",
  },
  {
    id: "b12",
    name: "Divya Bharathi R",
    department: "Artificial Intelligence & Data Science",
    year: "2nd Year",
    domain: "Technical",
    certified: true,
    certName: "Cloud Practitioner",
    skills: ["AWS Glue", "Athena", "Amazon S3", "QuickSight"],
    github: "https://github.com/aws-sbg-sist",
  },
];

export function MembersView() {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [onlyCertified, setOnlyCertified] = useState(false);

  const domains = ["All", ...Array.from(new Set(SEEDED_BUILDERS.map((b) => b.domain)))];

  const filtered = useMemo(() => {
    return SEEDED_BUILDERS.filter((b) => {
      const matchDomain = selectedDomain === "All" || b.domain === selectedDomain;
      const matchCert = !onlyCertified || b.certified;
      const q = search.toLowerCase();
      const matchQuery =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.department.toLowerCase().includes(q) ||
        b.skills.some((s) => s.toLowerCase().includes(q));

      return matchDomain && matchCert && matchQuery;
    });
  }, [search, selectedDomain, onlyCertified]);

  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container>
        <SectionHeader
          eyebrow="COMMUNITY ROSTER & DIRECTORY"
          eyebrowVariant="accent"
          title="Active Student Builders"
          titleHighlight="Directory"
          description="Explore student cloud architects, developers, and researchers active in our chapter. Filter by functional domain, certification credentials, or technology stack."
        />

        {/* Stats Ribbon */}
        <div
          className="well"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            padding: "24px 32px",
            marginBottom: "48px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            textAlign: "center",
          }}
        >
          <div>
            <span style={{ fontFamily: "var(--font-duospace)", fontSize: "28px", fontWeight: 700, color: "var(--color-accent)", display: "block" }}>
              200+
            </span>
            <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
              Active Student Builders
            </span>
          </div>

          <div>
            <span style={{ fontFamily: "var(--font-duospace)", fontSize: "28px", fontWeight: 700, color: "var(--color-success)", display: "block" }}>
              50+
            </span>
            <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
              AWS Certified Architects
            </span>
          </div>

          <div>
            <span style={{ fontFamily: "var(--font-duospace)", fontSize: "28px", fontWeight: 700, color: "var(--color-info)", display: "block" }}>
              6 Teams
            </span>
            <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
              Functional Specializations
            </span>
          </div>

          <div>
            <span style={{ fontFamily: "var(--font-duospace)", fontSize: "28px", fontWeight: 700, color: "var(--color-accent)", display: "block" }}>
              100% Free
            </span>
            <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
              Zero Membership Dues
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          {/* Domain Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {domains.map((dom) => {
              const active = selectedDomain === dom;
              return (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "var(--radius-md)",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    border: active ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                    backgroundColor: active ? "var(--color-accent)" : "var(--color-surface)",
                    color: active ? "var(--color-bg)" : "var(--color-text-secondary)",
                  }}
                >
                  {dom}
                </button>
              );
            })}
          </div>

          {/* Search & Certification Checkbox */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "var(--color-text-secondary)",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={onlyCertified}
                onChange={(e) => setOnlyCertified(e.target.checked)}
                style={{ accentColor: "var(--color-accent)" }}
              />
              <span>Only Certified ({'>'}50)</span>
            </label>

            <input
              type="text"
              placeholder="Search by name, skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "8px 14px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
                color: "var(--color-text)",
                fontSize: "13px",
                outline: "none",
                minWidth: "220px",
              }}
            />
          </div>
        </div>

        {/* Directory Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          {filtered.map((builder) => (
            <Card
              key={builder.id}
              variant="interactive"
              style={{
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-surface-sunken)",
                      border: "1px solid var(--color-border-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "var(--color-accent)",
                    }}
                  >
                    {builder.name.charAt(0)}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                    <Badge variant="accent" size="sm">
                      {builder.domain}
                    </Badge>
                    {builder.certified && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          color: "var(--color-success)",
                          fontWeight: 600,
                        }}
                      >
                        ✓ {builder.certName ?? "Certified"}
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="text-h4" style={{ margin: "0 0 4px", fontSize: "17px" }}>
                  {builder.name}
                </h4>

                <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "block", marginBottom: "14px" }}>
                  {builder.department} · {builder.year}
                </span>

                {/* Skills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "18px" }}>
                  {builder.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        color: "var(--color-text-muted)",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        padding: "2px 6px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Connect */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "12px",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-text-muted)" }}>
                  🟢 Verified Member
                </span>

                <div style={{ display: "flex", gap: "10px" }}>
                  {builder.github && (
                    <a href={builder.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-secondary)" }}>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {builder.linkedin && (
                    <a href={builder.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-secondary)" }}>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Directory Join Callout */}
        <div
          className="well"
          style={{
            padding: "40px 32px",
            textAlign: "center",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-accent)",
          }}
        >
          <h3 className="text-h3" style={{ margin: "0 0 10px" }}>
            Add Your Profile to the Member Directory
          </h3>
          <p className="text-body" style={{ color: "var(--color-text-secondary)", maxWidth: "580px", margin: "0 auto 24px" }}>
            Join the chapter, claim your free AWS Builder ID, and your profile will be added to the official student builder directory.
          </p>
          <Button href="/join" variant="primary" size="md">
            Join the Chapter (100% Free) →
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default MembersView;
