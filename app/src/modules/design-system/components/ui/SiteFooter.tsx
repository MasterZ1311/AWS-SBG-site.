"use client";

import Link from "next/link";
import Image from "next/image";
import { siteData, BUILDER_CENTER_URL } from "@/data/site-data";

// ─── MANDATORY DISCLAIMER — Do NOT remove or alter this text ─────────────────
const DISCLAIMER =
  "AWS Student Builder Group Sathyabama is an independent student organization supported by the AWS Student Builder Groups program. Amazon Web Services, AWS, and the AWS logo are trademarks of Amazon.com, Inc. or its affiliates.";

const CURRENT_YEAR = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer id="site-footer" className="site-footer" role="contentinfo">
      {/* ── MAIN FOOTER GRID ── */}
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "var(--spacing-2xl)",
          padding: "var(--spacing-3xl) var(--spacing-lg)",
        }}
      >
        {/* Col 1 — Brand Identity */}
        <div>
          <Link
            href="/"
            aria-label="AWS Student Builder Group SIST — Home"
            style={{ padding: "8px 14px", display: "inline-block", marginLeft: "-14px", marginBottom: "16px" }}
          >
            <Image
              src="/assets/brandmark/AWS Student Builder Group_RGB_Brandmark_White.png"
              alt="AWS Student Builder Group"
              width={160}
              height={40}
              style={{ height: "32px", width: "auto" }}
            />
          </Link>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
            The premier student cloud development community at Sathyabama Institute of Science
            and Technology, Chennai.
          </p>
          <div style={{ fontSize: "12px", color: "var(--color-text-muted)", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span>
              <strong style={{ color: "var(--color-text-secondary)" }}>Email: </strong>
              <a href="mailto:sistawscc@gmail.com" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>
                sistawscc@gmail.com
              </a>
            </span>
            <span>
              <strong style={{ color: "var(--color-text-secondary)" }}>President: </strong>
              Thenappan T
            </span>
            <span>
              <strong style={{ color: "var(--color-text-secondary)" }}>Builder Team Lead: </strong>
              Viswanathan Ashok
            </span>
            <span>
              <strong style={{ color: "var(--color-text-secondary)" }}>Technical Team Lead: </strong>
              Shanmugapriyan
            </span>
            <span>
              <strong style={{ color: "var(--color-text-secondary)" }}>Events and Management Team Lead: </strong>
              Nangaiyar M
            </span>
            <span>
              <strong style={{ color: "var(--color-text-secondary)" }}>Media Team Lead: </strong>
              Caroline Mary McPherson
            </span>
            <span>
              <strong style={{ color: "var(--color-text-secondary)" }}>Media Team Co-Lead: </strong>
              Harshith Raj S
            </span>
            <span>
              <strong style={{ color: "var(--color-text-secondary)" }}>Documentation Team Lead: </strong>
              Hemavarshine S
            </span>
          </div>
        </div>

        {/* Col 2 — Platform Routes */}
        <div>
          <h3 style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            Platform
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "Home",                href: "/" },
              { label: "About Chapter",       href: "/about" },
              { label: "Event Archive",        href: "/events" },
              { label: "Active & Upcoming",    href: "/events/upcoming" },
              { label: "Core Team",            href: "/team" },
              { label: "Functional Domains",   href: "/domains" },
              { label: "Student Projects",     href: "/projects" },
              { label: "Member Directory",     href: "/members" },
              { label: "Join the Chapter",     href: "/join" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{ fontSize: "13px", color: "var(--color-text-muted)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-muted)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — AWS Community */}
        <div>
          <h3 style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            AWS Community
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "AWS Builder Center",    href: BUILDER_CENTER_URL,                                       external: true },
              { label: "Meetup.com Chapter",    href: "https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/",    external: true },
              { label: "Instagram @aws.studentbuildergroup_sist",href: "https://www.instagram.com/aws.studentbuildergroup_sist/", external: true },
              { label: "LinkedIn",              href: "https://www.linkedin.com/company/aws-sbg-sist/",       external: true },
              { label: "Attendee Survey (CSAT)",href: "/csat",                                                external: false },
              { label: "Builder Articles",      href: "/articles",                                            external: false },
              { label: "Sponsor the Chapter",   href: "/sponsors",                                            external: false },
              { label: "Resources",             href: "/resources",                                           external: false },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={{ fontSize: "13px", color: "var(--color-text-muted)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-muted)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Institution */}
        <div>
          <h3 style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            Host Institution
          </h3>
          <address style={{ fontStyle: "normal", fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
            School of Computing<br />
            Dept. of Computer Science &amp; Engineering<br />
            Sathyabama Institute of Science and Technology<br />
            Jeppiaar Nagar, Chennai 600119<br />
            Tamil Nadu, India
          </address>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "16px" }}>
            <strong style={{ color: "var(--color-text-secondary)" }}>Faculty Mentors:</strong><br />
            Dr. K. Ashok Kumar &amp; Dr. Balapriya .S
          </p>
        </div>
      </div>

      {/* ── SOCIAL + LEGAL STRIP ── */}
      <div className="footer-legal">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Social row */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {siteData.social.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                style={{ fontSize: "12px", color: "var(--color-text-muted)", textDecoration: "none", textTransform: "capitalize" }}
              >
                {s.platform.charAt(0).toUpperCase() + s.platform.slice(1)}
              </a>
            ))}
          </div>

          {/* Mandatory AWS Trademark Disclaimer */}
          <p className="aws-disclaimer-text" style={{ fontSize: "11px", color: "var(--color-text-muted)", maxWidth: "820px", lineHeight: 1.6 }}>
            {DISCLAIMER}
          </p>

          {/* Copyright */}
          <p style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>
            © 2025–{CURRENT_YEAR} AWS Student Builder Group — SIST Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
