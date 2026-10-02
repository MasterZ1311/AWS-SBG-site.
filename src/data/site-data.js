/**
 * AWS SBGL SIST — SITE DATA MODEL
 * Single source of truth for all static site data.
 * Agents should update this file when adding events, team members, or projects.
 * File: /src/data/site-data.js
 */

// ─────────────────────────────────────────────────────────────────────────────
// SITE METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  name:         "AWS Student Builder Group — SIST Chapter",
  shortName:    "AWS SBGL SIST",
  domain:       "https://sbg-sist.in",
  email:        "sistawscc@gmail.com",
  description:  "The official AWS Student Builder Group at Sathyabama Institute of Science and Technology. Hands-on cloud labs, serverless architecture, 100% free certification vouchers, and national hackathons.",
  ogImage:      "/assets/images/og-preview-card.png",
  favicon:      "/assets/images/logo/AWS_Student_Builder_Group_RGB_Program_Icon_White.png",
  /** Mandatory AWS trademark disclaimer — must appear in every page footer */
  legalDisclaimer: "AWS Student Builder Group Sathyabama is an independent student organization supported by the AWS Student Builder Groups program. Amazon Web Services, AWS, and the AWS logo are trademarks of Amazon.com, Inc. or its affiliates.",
  copyright:    "© 2026–2027 AWS Student Builder Group — SIST Chapter. All rights reserved.",
};

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LINKS
// ─────────────────────────────────────────────────────────────────────────────
export const SOCIAL = {
  instagram:    "https://www.instagram.com/aws.studentbuildergroup_sist/",
  linkedin:     "https://www.linkedin.com/company/aws-sbg-sist/",
  meetup:       "https://meetup.com/aws-student-builder-group-sist",
  builderCenter:"https://s12d.com/students",
  pulse:        "https://pulse.aws",
};

// ─────────────────────────────────────────────────────────────────────────────
// KPI TELEMETRY — displayed in the live telemetry strip on the hero
// ─────────────────────────────────────────────────────────────────────────────
export const KPI = [
  { value: "1,200+",    label: "Active Builders",        icon: "👥" },
  { value: "6 / Year",  label: "Flagship Events",        icon: "🚀" },
  { value: "100% Free", label: "Zero Entry Fee",         icon: "✅" },
  { value: "50+",       label: "AWS Certified Builders", icon: "🏅" },
  { value: "₹1.75L+",  label: "Cash Hackathon Prizes",  icon: "🏆" },
];

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION STRUCTURE
// ─────────────────────────────────────────────────────────────────────────────
export const NAV = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  {
    label: "Events", href: "/events",
    dropdown: [
      { label: "All-Time Archive",    href: "/events" },
      { label: "Active & Upcoming",   href: "/events/upcoming" },
    ],
  },
  {
    label: "Team", href: "/team",
    dropdown: [
      { label: "Batch 2026–2027 (Active)", href: "/team/2026-2027" },
      { label: "Founding Cohort 2025–26",  href: "/team/2025-2026" },
      { label: "Hall of Fame",             href: "/team/hall-of-fame" },
    ],
  },
  { label: "Domains",   href: "/domains" },
  { label: "Projects",  href: "/projects" },
  { label: "Resources", href: "/resources" },
];

// ─────────────────────────────────────────────────────────────────────────────
// TEAM ROSTERS
// ─────────────────────────────────────────────────────────────────────────────
export const TEAM = {
  "2026-2027": [
    {
      name:    "Thenappan T",
      alias:   "MasterZ",
      role:    "President & SBGL",
      regNo:   "44110855",
      email:   "thenappanmasterz1311@gmail.com",
      phone:   "+91 6381801640",
      domain:  "Executive Leadership & AWS Compliance",
      mandate: "Overall project sign-off, AWS compliance review, sponsorship integration, and domain approvals.",
      photo:   null, // Agent: set to '/assets/images/team/thenappan.jpg' when image is available
    },
    {
      name:    "Viswanathan Ashok",
      role:    "Builder Team Lead",
      domain:  "Hands-On AWS Builder Squad",
      mandate: "Project showcase curation, architecture diagrams, builder laboratories, and hands-on skill initiatives.",
      photo:   null,
    },
    {
      name:    "Shanmugapriyan",
      role:    "Technical Team Lead",
      domain:  "Technical & Web Architecture",
      mandate: "Frontend architecture, Next.js/HTML deployment, CloudFront/S3 configuration, API integrations, and CI/CD pipelines.",
      photo:   null,
    },
    {
      name:    "Nangaiyar M",
      role:    "Events and Management Team Lead",
      domain:  "Event Operations & Logistics",
      mandate: "Auditorium requisitions, AV engineering, catering coordination, crowd safety, run-of-show synchronization.",
      photo:   null,
    },
    {
      name:    "Caroline Mary McPherson",
      role:    "Media Team Lead",
      domain:  "Media, Production & Storytelling",
      mandate: "Copy review, photography selection, video reel embedding, and social media feed synchronization.",
      photo:   null,
    },
    {
      name:    "Harshith Raj S",
      role:    "Media Team Co-Lead",
      domain:  "Media, Production & Storytelling",
      mandate: "Video production, social broadcasts, community engagement, and event reels.",
      photo:   null,
    },
    {
      name:    "Hemavarshine S",
      role:    "Documentation Team Lead",
      domain:  "Documentation, Reporting & Governance",
      mandate: "Post-event PDF report links, faculty letter archiving, and legal compliance audit.",
      photo:   null,
    },
    {
      name:    "Dr. K. Ashok Kumar",
      role:    "Faculty Coordinator",
      domain:  "Faculty Advisory",
      mandate: "Institutional alignment, academic permissions, and formal university endorsement.",
      isFaculty: true,
      photo:   null,
    },
    {
      name:    "Dr. Balapriya .S",
      role:    "Faculty Coordinator",
      domain:  "Faculty Advisory",
      mandate: "Institutional alignment, academic permissions, and formal university endorsement.",
      isFaculty: true,
      photo:   null,
    },
  ],
  "2025-2026": [
    // Agent: Add founding cohort members here when data is provided
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EVENTS ARCHIVE
// ─────────────────────────────────────────────────────────────────────────────
export const EVENTS = [
  {
    id:           "launchpad-2026",
    title:        "AWS Launchpad 2026",
    category:     "Orientation",
    date:         "2026-07-14",
    academicYear: "2026-2027",
    venue:        "Central Auditorium, SIST",
    attendeeCount: 350,
    bannerImage:  null, // Agent: set path when image is available
    synopsis:     "Inaugural orientation of the SIST chapter under AWS SBGL. Featured keynotes by Samuel Asirvatham Rajarathinam and Pooja Srikanth on Agentic AI with the AWS Strands SDK.",
    speakers: [
      { name: "Samuel Asirvatham Rajarathinam", title: "AWS Community Leader",    company: "AWS" },
      { name: "Pooja Srikanth",                 title: "AWS Community Builder",    company: "AWS" },
    ],
    deliverables: {
      reportPdfUrl:         null,
      photoGalleryUrl:      null,
      builderCenterArticleUrl: null,
    },
    metrics: {
      badgesIssued:    40,
      csatScore:       4.9,
      projectsDeployed: 0,
    },
    tags: ["orientation", "agentic-ai", "strands-sdk"],
  },
  {
    id:           "ccp-workshop-2026",
    title:        "Weeklong AWS CCP Certification Workshop",
    category:     "Certification",
    date:         "2026-08-01",
    academicYear: "2026-2027",
    venue:        "Department Labs, SIST",
    attendeeCount: 200,
    bannerImage:  null,
    synopsis:     "6-day intensive domain curriculum covering Cloud Fundamentals through the AWS Well-Architected Framework. Participants received 100% free exam vouchers for the AWS Certified Cloud Practitioner exam.",
    speakers:     [],
    deliverables: {
      reportPdfUrl:         null,
      photoGalleryUrl:      null,
      builderCenterArticleUrl: null,
    },
    metrics: {
      badgesIssued:    50,
      csatScore:       4.85,
      projectsDeployed: 0,
    },
    tags: ["certification", "ccp", "cloud-practitioner"],
  },
  {
    id:           "kairos-2027",
    title:        "KAIROS 2027 — Grand Edition",
    category:     "Hackathon",
    date:         "2027-01-22",
    academicYear: "2026-2027",
    venue:        "Sathyabama Institute of Science and Technology",
    attendeeCount: 2000, // applicants
    bannerImage:  null,
    synopsis:     "48-Hour National Hackathon with ₹1,75,000 cash prize pool across 5 enterprise tracks. Open to 100+ universities nationwide.",
    speakers:     [],
    deliverables: {
      reportPdfUrl:         null,
      photoGalleryUrl:      null,
      builderCenterArticleUrl: null,
    },
    metrics: {
      badgesIssued:    0,  // Update post-event
      csatScore:       0,  // Update post-event
      projectsDeployed: 0,
    },
    isUpcoming:  true,
    countdownTarget: "2027-01-22T09:00:00+05:30",
    registrationMeetupUrl: "https://meetup.com/aws-student-builder-group-sist",
    tags: ["hackathon", "national", "kairos", "cash-prizes"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FUNCTIONAL DOMAINS
// ─────────────────────────────────────────────────────────────────────────────
export const DOMAINS = [
  {
    id:     "tech-web",
    title:  "Technical & Web Architecture",
    lead:   "Viswanathan Ashok",
    icon:   "⚡",
    color:  "#06B6D4",
    mandate:"Full-stack engineering, production Next.js platforms, cloud deployment automation on AWS (S3, CloudFront, Route 53, Lambda).",
    tools:  ["TypeScript", "Next.js", "Vanilla CSS", "PostgreSQL", "AWS CDK", "CloudFront", "S3"],
  },
  {
    id:     "aws-builder",
    title:  "Hands-On AWS Builder Squad",
    lead:   "Shanmugapriyan S",
    icon:   "🔧",
    color:  "#FF9900",
    mandate:"Designing hands-on cloud labs, orchestrating AWS Skill Builder tournaments, architecting Bedrock GenAI workshops.",
    tools:  ["AWS Console", "AWS CLI", "CloudFormation", "SageMaker", "Bedrock", "Skill Builder"],
  },
  {
    id:     "design-creative",
    title:  "Design & Creative Direction",
    lead:   "Rikish B",
    icon:   "🎨",
    color:  "#6366F1",
    mandate:"Shaping visual identity, 3D motion graphics, stage LED visuals, custom merchandise (hoodies, metal NFC badges).",
    tools:  ["Figma", "Blender", "Adobe Illustrator", "After Effects"],
  },
  {
    id:     "media-production",
    title:  "Media, Production & Storytelling",
    lead:   "Caroline Mary McPherson",
    icon:   "🎬",
    color:  "#EC4899",
    mandate:"Video production, event photography, Instagram Reels, speaker spotlight interviews, YouTube recaps.",
    tools:  ["Premiere Pro", "Lightroom", "Instagram", "YouTube", "LinkedIn"],
  },
  {
    id:     "event-ops",
    title:  "Event Operations & Logistics",
    lead:   "Nangaiyar M",
    icon:   "🗓️",
    color:  "#10B981",
    mandate:"Auditorium requisitions, AV engineering, catering coordination, crowd safety, run-of-show synchronization.",
    tools:  ["Google Workspace", "Meetup.com", "WhatsApp Groups"],
  },
  {
    id:     "documentation",
    title:  "Documentation, Reporting & Governance",
    lead:   "Hemavarshine S",
    icon:   "📋",
    color:  "#F59E0B",
    mandate:"Official letter drafting, institutional permissions, post-event reports, faculty clearance tracking, Git repository archival.",
    tools:  ["Google Docs", "GitHub", "PDF Generators", "Notion"],
  },
  {
    id:     "community-sponsors",
    title:  "Community Engagement & Sponsorship",
    lead:   "Harshith Raj S",
    icon:   "🤝",
    color:  "#8B5CF6",
    mandate:"Corporate sponsor pitching, fundraising outreach, Meetup.com community engagement, member support.",
    tools:  ["LinkedIn", "Email Outreach", "Meetup.com", "Canva"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// STUDENT PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id:          "strands-ai-agent",
    title:       "Strands AI Agent Orchestrator",
    tagline:     "Multi-agent automation deployed on AWS Bedrock",
    stack:       ["AWS Bedrock", "Claude 3.5 Sonnet", "Python", "AWS Strands SDK"],
    githubUrl:   null,
    demoUrl:     null,
    isOpenSource: true,
    architectureDiagram: null, // Agent: set when diagram is created
    description: "Multi-agent automation system deployed on AWS Bedrock using Claude 3.5 Sonnet and custom Python tooling for autonomous cloud operations.",
  },
  {
    id:          "kairos-engine",
    title:       "Kairos 2027 Hackathon Engine",
    tagline:     "High-concurrency event portal with live tracking",
    stack:       ["Next.js 14", "Supabase PostgreSQL", "Upstash Redis", "CloudFront"],
    githubUrl:   null,
    demoUrl:     null,
    isOpenSource: true,
    architectureDiagram: null,
    description: "Live event portal with real-time commit velocity tracking, automated team join codes (KAIROS-T042 format), and Meetup profile verification.",
  },
  {
    id:          "iot-campus-telemetry",
    title:       "Serverless IoT Campus Telemetry",
    tagline:     "Real-time sensor pipeline on AWS IoT Core",
    stack:       ["AWS IoT Core", "AWS Lambda", "DynamoDB", "CloudWatch"],
    githubUrl:   null,
    demoUrl:     null,
    isOpenSource: false,
    architectureDiagram: null,
    description: "Real-time sensor pipeline running on AWS IoT Core, Lambda, and DynamoDB for smart building telemetry at SIST campus.",
  },
  {
    id:          "pulse-csat-microservice",
    title:       "Automated Pulse CSAT Microservice",
    tagline:     "Serverless ingestion engine for attendee feedback",
    stack:       ["AWS Lambda", "API Gateway", "S3", "CSV Exporter"],
    githubUrl:   null,
    demoUrl:     null,
    isOpenSource: false,
    architectureDiagram: null,
    description: "Serverless ingestion engine parsing pulse.aws attendee responses and generating instant CSAT reports for chapter compliance reporting.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SPONSORSHIP TIERS
// ─────────────────────────────────────────────────────────────────────────────
export const SPONSOR_TIERS = [
  {
    name:   "Title Sponsor",
    price:  "₹1,25,000",
    color:  "#FF9900",
    perks:  [
      "Headline stage branding at all events",
      "Dedicated keynote or demo slot (30 min)",
      "Resume & portfolio access to all participants",
      "Logo on all official materials & social posts",
      "VIP judging panel seat at Kairos 2027",
    ],
  },
  {
    name:   "Powered-By Sponsor",
    price:  "₹70,000",
    color:  "#94A3B8",
    perks:  [
      "Track naming rights (e.g. 'AI Track Powered by [Brand]')",
      "VIP judging seat",
      "Logo on stage backdrops & event websites",
      "Highlighted in AWS Builder Center article",
    ],
  },
  {
    name:   "Track Sponsor",
    price:  "₹35,000",
    color:  "#CD7F32",
    perks:  [
      "Logo on event track materials",
      "Social media mentions",
      "Company info included in participant welcome kit",
    ],
  },
  {
    name:   "Community Sponsor",
    price:  "₹15,000",
    color:  "#6366F1",
    perks:  [
      "Logo on website sponsor wall",
      "Social media shoutout",
      "Mentioned in opening ceremony",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ASSET PATHS (resolve from src root)
// ─────────────────────────────────────────────────────────────────────────────
export const ASSETS = {
  brandmark: {
    white:  "/assets/images/brandmark/AWS Student Builder Group_RGB_Brandmark_White.png",
    grey:   "/assets/images/brandmark/AWS Student Builder Group_RGB_Brandmark_Grey 850.png",
    magenta:"/assets/images/brandmark/AWS Student Builder Group_RGB_Brandmark_Magenta.png",
    mint:   "/assets/images/brandmark/AWS Student Builder Group_RGB_Brandmark_Mint.png",
    purple: "/assets/images/brandmark/AWS Student Builder Group_RGB_Brandmark_Purple.png",
  },
  logo: {
    white:  "/assets/images/logo/AWS Student Builder Group_RGB_Program Icon_White.png",
    blue:   "/assets/images/logo/AWS Student Builder Group_RGB_Program Icon_Blue (2).png",
  },
  qr: {
    pulse:  "/assets/qr/Attendee Feedback_qrcode_pulse.aws.png",
    masterz:"/assets/qr/masterz-QR-Code.png",
  },
};
