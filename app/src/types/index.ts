/**
 * AWS SBGL SIST — TYPESCRIPT TYPE DEFINITIONS
 * All shared types used across modules.
 * Agent Note: Keep types here, not inside modules.
 */

// ─── SITE-WIDE ───────────────────────────────────────────────────────────────

export interface KPIMetric {
  label: string;
  value: string;
  /** Numeric target for counter animation (optional) */
  numericTarget?: number;
}

export interface SocialLink {
  platform: "instagram" | "linkedin" | "meetup" | "github" | "twitter";
  url: string;
  handle: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}

// ─── TEAM ────────────────────────────────────────────────────────────────────

export type MemberRole =
  | "President"
  | "President & SBGL"
  | "Vice President"
  | "Events and Logistics Team Lead"
  | "Technical Lead"
  | "Technical Team Lead"
  | "Technical & Web Lead"
  | "Design Lead"
  | "Builder Team Lead"
  | "Hands-On AWS Builder Lead"
  | "Events and Management Team Lead"
  | "Media Team Lead"
  | "Media Team Co-Lead"
  | "Documentation Team Lead"
  | "Community & Sponsorship Lead"
  | "Faculty Coordinator"
  | "Core Member"
  | "Alumni Honoree"
  | ""
  | (string & {});

export type Domain =
  | "Technical"
  | "Media"
  | "Builder"
  | "Events and Management"
  | "Documentation"
  | "Design"
  | "Cloud Infrastructure"
  | "Serverless & Backend"
  | "AI/ML & Generative AI"
  | "DevOps & Platform Engineering"
  | "Security & Compliance"
  | "Frontend & Design Systems"
  | "Data Engineering & Analytics"
  | (string & {});

export interface TeamMember {
  id: string;
  name: string;
  role: MemberRole;
  batch: string;
  department?: string;
  /** Path relative to /public, e.g. "/assets/images/team/member.jpg" */
  photo: string | null;
  domain?: Domain;
  awsCertified: boolean;
  social?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
  bio?: string;
  /** Hall of Fame only */
  alumniYear?: string;
  achievement?: string;
}

// ─── EVENTS ──────────────────────────────────────────────────────────────────

export type EventCategory =
  | "Hackathon"
  | "Workshop"
  | "Bootcamp"
  | "Seminar"
  | "Study Jam"
  | "Networking"
  | "Orientation"
  | "Tech Talk";

export type EventStatus = "upcoming" | "active" | "completed" | "cancelled";

export interface EventRecord {
  id: string;
  title: string;
  category: EventCategory;
  status: EventStatus;
  /** ISO 8601 date string with IST offset (+05:30) */
  date: string;
  /** Venue or "Virtual" */
  venue: string;
  description: string;
  highlights?: string[];
  attendeeCount?: number;
  prizePool?: string;
  csatScore?: number;
  bannerImage: string | null;
  meetupUrl?: string;
  registrationOpen?: boolean;
  tags?: string[];
}

// ─── DOMAINS ─────────────────────────────────────────────────────────────────

export interface DomainRecord {
  id: string;
  name: Domain;
  tagline: string;
  mandate: string;
  lead: string | null;
  /** AWS services or tools */
  tools: string[];
  /** Hex color for the domain accent */
  color: string;
  icon: string; /** SVG path or icon name */
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export type ProjectStatus = "active" | "completed" | "archived";

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  domain: Domain;
  description: string;
  awsServices: string[];
  team: string[];
  githubUrl: string | null;
  architectureDiagram: string | null;
  liveUrl?: string;
  tags?: string[];
}

// ─── SPONSORS ────────────────────────────────────────────────────────────────

export type SponsorTier = "Platinum" | "Gold" | "Silver" | "Bronze" | "Community";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logo: string | null;
  website: string;
  description?: string;
}

// ─── SITE DATA ───────────────────────────────────────────────────────────────

/** Shape returned by getSiteData() */
export interface SiteData {
  meta: {
    siteName: string;
    tagline: string;
    email: string;
    domain: string;
  };
  kpis: KPIMetric[];
  social: SocialLink[];
  nav: NavItem[];
  team: {
    "2026-2027": TeamMember[];
    "2025-2026": TeamMember[];
    "hall-of-fame"?: TeamMember[];
  };
  events: EventRecord[];
  domains: DomainRecord[];
  projects: Project[];
  sponsors: Sponsor[];
}
