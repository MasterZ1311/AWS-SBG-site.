/**
 * AWS SBGL SIST — CENTRALIZED SITE DATA
 * Single source of truth for all content across every page and module.
 *
 * AGENT PROTOCOL:
 * - Add new event   → append to EVENTS array
 * - Add team member → append to the correct TEAM batch array
 * - Add project     → append to PROJECTS array
 * - Update KPI      → update KPIS array
 * - null fields     → placeholder; populate when asset/info is available
 */

/**
 * Personal AWS Builder Center invite link (Chapter President — Thenappan T).
 * Use this URL for ALL "Create Builder ID" / "Join Builder Center" CTAs site-wide.
 * Update here to change it everywhere at once.
 */
export const BUILDER_CENTER_URL =
  "https://builder.aws.com?inviteId=7640a224-17f9-4f2d-92b3-0a03e16ab972";

import type {
  SiteData,
  KPIMetric,
  SocialLink,
  NavItem,
  TeamMember,
  EventRecord,
  DomainRecord,
  Project,
  Sponsor,
} from "@/types";

// ─── META ─────────────────────────────────────────────────────────────────────
const META: SiteData["meta"] = {
  siteName: "AWS Student Builder Group — SIST Chapter",
  tagline: "We Don't Just Learn the Cloud. We Engineer the Future.",
  email: "sistawscc@gmail.com",
  domain: "https://sbg-sist.in",
};

// ─── KPI METRICS ──────────────────────────────────────────────────────────────
const KPIS: KPIMetric[] = [
  { label: "Active Builders",        value: "200+",         numericTarget: 200 },
  { label: "Flagship Events / Year", value: "6 Events" },
  { label: "Participation",          value: "100% Free" },
  { label: "AWS Certified Builders", value: "50+",          numericTarget: 50 },
];

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
const SOCIAL: SocialLink[] = [
  { platform: "instagram", url: "https://www.instagram.com/aws.studentbuildergroup_sist/",                          handle: "@aws.studentbuildergroup_sist" },
  { platform: "linkedin",  url: "https://www.linkedin.com/company/aws-sbg-sist/",                                   handle: "aws-sbg-sist" },
  { platform: "meetup",    url: "https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/",    handle: "AWS SBGL SIST" },
];

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
const NAV: NavItem[] = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  {
    label: "Events", href: "/events",
    children: [
      { label: "All-Time Archive",    href: "/events" },
      { label: "Active & Upcoming",   href: "/events/upcoming" },
    ],
  },
  {
    label: "Team", href: "/team",
    children: [
      { label: "Batch 2026–2027",     href: "/team/2026-2027" },
      { label: "Founding Cohort",     href: "/team/2025-2026" },
    ],
  },
  { label: "Domains",   href: "/domains" },
  { label: "Projects",  href: "/projects" },
  { label: "Members",   href: "/members" },
  { label: "Resources", href: "/resources" },
];

// ─── TEAM — BATCH 2026-2027 ───────────────────────────────────────────────────
const TEAM_2026_2027: TeamMember[] = [
  {
    id: "thenappan-t",
    name: "Thenappan T (MasterZ)",
    role: "President & SBGL",
    batch: "2026-2027",
    photo: null,
    awsCertified: true,
    domain: "Builder",
    social: {
      linkedin: "https://www.linkedin.com/in/thenappan-t-72b217290/",
      github: "https://github.com/aws-sbg-sist",
      instagram: "https://instagram.com/masterz1311",
    },
    bio: "Chapter Founder and AWS Certified Solutions Architect. Leads national hackathon strategy, architecture review, and AWS community engagement.",
  },
  {
    id: "viswanathan-ashok",
    name: "Viswanathan Ashok",
    role: "Builder Team Lead",
    batch: "2026-2027",
    photo: null,
    awsCertified: false,
    domain: "Builder",
    social: {
      linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
      github: "https://github.com/aws-sbg-sist",
    },
    bio: "Builder Team Lead. Spearheads interactive cloud sandboxes, builder labs, and hands-on laboratory workshops.",
  },
  {
    id: "shanmugapriyan",
    name: "Shanmugapriyan",
    role: "Technical Team Lead",
    batch: "2026-2027",
    photo: null,
    awsCertified: true,
    domain: "Technical",
    social: {
      linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
    },
    bio: "Technical Team Lead. Architecting official chapter website engineering, technical infrastructure, and cloud systems.",
  },
  {
    id: "nangaiyar-m",
    name: "Nangaiyar M",
    role: "Events and Management Team Lead",
    batch: "2026-2027",
    photo: null,
    awsCertified: false,
    domain: "Events and Management",
    social: {
      linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
    },
    bio: "Events and Management Team Lead. Manages auditorium infrastructure, run-of-show synchronization, catering logistics, and crowd safety operations.",
  },
  {
    id: "caroline-mary",
    name: "Caroline Mary McPherson",
    role: "Media Team Lead",
    batch: "2026-2027",
    photo: null,
    awsCertified: false,
    domain: "Media",
    social: {
      linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
      instagram: "https://www.instagram.com/aws.studentbuildergroup_sist/",
    },
    bio: "Media Team Lead. Leads visual storytelling, event photography, speaker spotlight documentaries, and social media releases.",
  },
  {
    id: "harshith-raj",
    name: "Harshith Raj S",
    role: "Media Team Co-Lead",
    batch: "2026-2027",
    photo: null,
    awsCertified: false,
    domain: "Media",
    social: {
      linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
    },
    bio: "Media Team Co-Lead. Drives media production, video reel editing, community outreach, and social broadcasts.",
  },
  {
    id: "hemavarshine-s",
    name: "Hemavarshine S",
    role: "Documentation Team Lead",
    batch: "2026-2027",
    photo: null,
    awsCertified: false,
    domain: "Documentation",
    social: {
      linkedin: "https://www.linkedin.com/company/aws-sbg-sist/",
    },
    bio: "Documentation Team Lead. Governs institutional compliance, formal reporting to AWS Seattle, post-event analytics, and student participation archives.",
  },
  {
    id: "dr-ashok-kumar",
    name: "Dr. K. Ashok Kumar",
    role: "Faculty Coordinator",
    batch: "2026-2027",
    department: "Associate Professor, Department of CSE, SIST",
    photo: null,
    awsCertified: false,
    domain: "Builder",
    bio: "Faculty mentor championing student cloud innovation, lab infrastructure allocation, and academic governance.",
  },
  {
    id: "dr-balapriya-s",
    name: "Dr. Balapriya .S",
    role: "Faculty Coordinator",
    batch: "2026-2027",
    department: "Associate Professor, Department of CSE, SIST",
    photo: null,
    awsCertified: false,
    domain: "Builder",
    bio: "Faculty mentor guiding curriculum alignment, institutional sponsorship, and university-level research clearances.",
  },
];

// ─── TEAM — FOUNDING COHORT 2025-2026 ────────────────────────────────────────
const TEAM_2025_2026: TeamMember[] = [
  {
    id: "labeeq-ahmed",
    name: "Labeeq Ahmed",
    role: "President",
    batch: "2025-2026",
    photo: null,
    awsCertified: false,
    domain: "Builder",
    bio: "Founding President of the AWS Student Builder Group chapter at Sathyabama.",
  },
  {
    id: "priyadharshini",
    name: "Priyadharshini",
    role: "Vice President",
    batch: "2025-2026",
    photo: null,
    awsCertified: false,
    domain: "Builder",
    bio: "Founding Vice President of the AWS Student Builder Group chapter at Sathyabama.",
  },
  {
    id: "sanjai-s",
    name: "Sanjai S",
    role: "Events and Logistics Team Lead",
    batch: "2025-2026",
    photo: null,
    awsCertified: false,
    domain: "Events and Management",
    bio: "Founding Events and Logistics Team Lead.",
  },
  {
    id: "thenappan-t-founding",
    name: "Thenappan T",
    role: "",
    batch: "2025-2026",
    photo: null,
    awsCertified: true,
    domain: "Builder",
    bio: "Founding core member.",
  },
];

// ─── EVENTS ───────────────────────────────────────────────────────────────────
const EVENTS: EventRecord[] = [
  {
    id: "kairos-2027",
    title: "Kairos 2027 (Grand National Edition)",
    category: "Hackathon",
    status: "upcoming",
    date: "2027-01-22T09:00:00+05:30",
    venue: "Sathyabama Institute of Science and Technology, Chennai",
    description: "The flagship national 48-hour hackathon of AWS SBGL SIST. 2,000+ applicants, enterprise tracks, and live mentorship from AWS Community Heroes.",
    highlights: [
      "48-hour intensive cloud architecture sprint",
      "Challenge Tracks: Coming soon",
      "100% Free · Zero Entry Fee",
      "Direct AWS Cloud Mentorship",
      "Spot recruitment by corporate sponsors",
    ],
    attendeeCount: 2000,
    bannerImage: null,
    meetupUrl: "https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/",
    registrationOpen: true,
    tags: ["Hackathon", "Serverless", "National", "AWS Lambda", "Bedrock", "Flagship"],
  },
  {
    id: "cloud-foundations-bootcamp-oct-2026",
    title: "Cloud Foundations Bootcamp",
    category: "Bootcamp",
    status: "active",
    date: "2026-10-15T10:00:00+05:30",
    venue: "CS Seminar Hall, SIST",
    description: "A 2-day intensive bootcamp covering AWS core services — EC2, S3, IAM, VPC, and Lambda — with hands-on lab access and certification voucher roadmaps.",
    highlights: ["AWS Free Tier hands-on sandboxes", "Universal Builder ID onboarding", "AWS CCP Exam Voucher Roadmap"],
    attendeeCount: 280,
    csatScore: 4.9,
    bannerImage: null,
    meetupUrl: "https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/",
    registrationOpen: true,
    tags: ["Bootcamp", "Cloud Foundations", "AWS", "Certification"],
  },
  {
    id: "aws-launchpad-jul-2026",
    title: "AWS Launchpad 2026: The Inaugural Chapter Ignition",
    category: "Orientation",
    status: "completed",
    date: "2026-07-14T10:00:00+05:30",
    venue: "Central Auditorium, Sathyabama Campus",
    description: "Official grand launch of the AWS Student Builder Group at Sathyabama with keynote addresses by AWS Community Builders, live Agentic AI demos, and member inductions.",
    highlights: [
      "Keynote addresses and live architectural demos",
      "Live Strands Agentic AI demo on Amazon Bedrock",
      "350+ student builders inducted",
      "100% free lunch and AWS swag distribution",
    ],
    attendeeCount: 350,
    csatScore: 4.9,
    bannerImage: null,
    tags: ["Orientation", "Keynote", "Launchpad", "Bedrock"],
  },
  {
    id: "ccp-weeklong-aug-2026",
    title: "Weeklong AWS CCP Certification Workshop",
    category: "Workshop",
    status: "completed",
    date: "2026-08-05T09:30:00+05:30",
    venue: "CS Lab Block, SIST",
    description: "6-day immersive training sprint preparing students for the AWS Certified Cloud Practitioner exam. 50+ participants successfully certified.",
    highlights: [
      "Deep dive into 4 exam domains",
      "100% free practice exams and cheat sheets",
      "Over 50 students secured official credentials",
    ],
    attendeeCount: 240,
    csatScore: 4.92,
    bannerImage: null,
    tags: ["Certification", "CCP", "Workshop", "Cloud Practitioner"],
  },
  {
    id: "serverless-saturday-sep-2026",
    title: "Serverless Saturday: Production Event-Driven APIs",
    category: "Workshop",
    status: "completed",
    date: "2026-09-14T10:00:00+05:30",
    venue: "CS Lab Block, SIST",
    description: "Hands-on engineering workshop building an auto-scaling REST microservice using AWS Lambda, API Gateway, DynamoDB, and Amazon Cognito authentication.",
    highlights: [
      "Zero-downtime serverless architecture",
      "Infrastructure as Code with AWS SAM",
      "Live deployment to student AWS accounts",
    ],
    attendeeCount: 195,
    csatScore: 4.85,
    bannerImage: null,
    tags: ["Workshop", "Serverless", "Lambda", "DynamoDB"],
  },
  {
    id: "gen-ai-study-jam-aug-2026",
    title: "Generative AI Study Jam: Building with Amazon Bedrock",
    category: "Study Jam",
    status: "completed",
    date: "2026-08-20T14:00:00+05:30",
    venue: "AWS Virtual + SIST CS Block",
    description: "Collaborative study session exploring foundation models on Amazon Bedrock, prompt engineering, RAG pipelines, and Claude 3.5 Sonnet integrations.",
    highlights: [
      "Hands-on prompt optimization lab",
      "Building a campus Q&A bot using Knowledge Bases for Bedrock",
      "320 participating student engineers",
    ],
    attendeeCount: 320,
    csatScore: 4.8,
    bannerImage: null,
    tags: ["AI", "Bedrock", "GenAI", "Study Jam", "RAG"],
  },
];

// ─── FUNCTIONAL DOMAINS ───────────────────────────────────────────────────────
const DOMAINS: DomainRecord[] = [
  {
    id: "technical",
    name: "Technical",
    tagline: "Architecture, Systems & Engineering Standards",
    mandate: "Architecting official chapter cloud systems, technical infrastructure, backend microservices, and student engineering standards.",
    lead: "Shanmugapriyan",
    tools: ["AWS Lambda", "API Gateway", "DynamoDB", "Amazon SQS", "EventBridge", "Step Functions"],
    color: "#10B981",
    icon: "zap",
  },
  {
    id: "media",
    name: "Media",
    tagline: "Visual Storytelling, Broadcast & Digital Outreach",
    mandate: "Driving visual storytelling, photography, speaker spotlight documentaries, video reel editing, and public social broadcasts.",
    lead: "Caroline Mary McPherson & Harshith Raj S",
    tools: ["Media Production", "Photography", "Video Editing", "Content Creation", "Instagram", "LinkedIn"],
    color: "#EC4899",
    icon: "monitor",
  },
  {
    id: "builder",
    name: "Builder",
    tagline: "Hands-On Cloud Sandboxes & Interactive Labs",
    mandate: "Spearheading interactive cloud sandboxes, builder labs, hands-on laboratory workshops, and real-world system deployments.",
    lead: "Viswanathan Ashok",
    tools: ["AWS EC2", "AWS S3", "AWS VPC", "AWS IAM", "CloudFormation", "AWS Skill Builder"],
    color: "#FF9900",
    icon: "cloud",
  },
  {
    id: "events-management",
    name: "Events and Management",
    tagline: "Operational Excellence & Flawless Execution",
    mandate: "Managing auditorium infrastructure, run-of-show synchronization, catering logistics, attendee verification, and event operations.",
    lead: "Nangaiyar M",
    tools: ["Event Operations", "Logistics", "Meetup Coordination", "Auditorium Setup", "Crowd Management"],
    color: "#EF4444",
    icon: "shield",
  },
  {
    id: "documentation",
    name: "Documentation",
    tagline: "Institutional Governance & Technical Archiving",
    mandate: "Governing institutional compliance, formal reporting to AWS Seattle, post-event analytics, and student participation archives.",
    lead: "Hemavarshine S",
    tools: ["Technical Writing", "AWS Seattle Reports", "Post-Event Analytics", "Compliance", "Archives"],
    color: "#06B6D4",
    icon: "git-branch",
  },
  {
    id: "design",
    name: "Design",
    tagline: "Creative Direction, Brand Systems & UI/UX",
    mandate: "Crafting modern UI/UX design systems, event branding collaterals, digital interfaces, and visual guidelines.",
    lead: "Design Team",
    tools: ["Figma", "UI/UX Design", "Brand Guidelines", "Design Tokens", "Typography"],
    color: "#6366F1",
    icon: "brain",
  },
];

// ─── STUDENT PROJECTS ─────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: "projects-coming-soon",
    title: "Student Projects Coming Soon",
    status: "active",
    domain: "Builder",
    description: "Student engineering projects are currently under active development. Visit our official chapter GitHub repository to explore upcoming open-source repositories and contributions.",
    awsServices: ["Amazon Web Services", "Serverless", "Amazon Bedrock"],
    team: ["AWS SBGL SIST Builders"],
    githubUrl: "https://github.com/aws-sbg-sist",
    architectureDiagram: null,
    tags: ["Coming Soon", "Open Source", "Student Projects"],
  },
];

// ─── SPONSORS ─────────────────────────────────────────────────────────────────
const SPONSORS: Sponsor[] = [
  {
    id: "aws-sbgl-global",
    name: "AWS Student Builder Groups",
    tier: "Platinum",
    logo: "/assets/brandmark/AWS Student Builder Group_RGB_Brandmark_White.png",
    website: "https://builder.aws.com?inviteId=7640a224-17f9-4f2d-92b3-0a03e16ab972",
    description: "Official global student builder program of Amazon Web Services supporting student communities worldwide with cloud access, vouchers, and leader mentorship.",
  },
  {
    id: "sist-cse",
    name: "Sathyabama School of Computing",
    tier: "Platinum",
    logo: null,
    website: "https://www.sathyabama.ac.in",
    description: "Host academic institution and Department of Computer Science and Engineering, providing cutting-edge lab facilities, auditorium infrastructure, and faculty mentorship.",
  },
];

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export const siteData: SiteData = {
  meta:    META,
  kpis:    KPIS,
  social:  SOCIAL,
  nav:     NAV,
  team: {
    "2026-2027":    TEAM_2026_2027,
    "2025-2026":    TEAM_2025_2026,
  },
  events:   EVENTS,
  domains:  DOMAINS,
  projects: PROJECTS,
  sponsors: SPONSORS,
};

/** Helper — get only upcoming/active events sorted by date ascending */
export function getUpcomingEvents(): EventRecord[] {
  return siteData.events
    .filter((e) => e.status === "upcoming" || e.status === "active")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/** Helper — get completed events sorted by date descending */
export function getPastEvents(): EventRecord[] {
  return siteData.events
    .filter((e) => e.status === "completed")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Helper — get the next single upcoming event */
export function getNextEvent(): EventRecord | null {
  return getUpcomingEvents()[0] ?? null;
}

export default siteData;
