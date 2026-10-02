# AWS Student Builder Group (AWS SBG) — SIST Chapter
> Official Web Platform & Community Portal for Sathyabama Institute of Science and Technology, Chennai

[![Next.js 16](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?logo=amazon-aws)](https://aws.amazon.com/)
[![License](https://img.shields.io/badge/Access-100%25%20Free%20for%20Students-success)](#)

---

## 🚀 Overview

The **AWS Student Builder Group (AWS SBG) — SIST Chapter** is an official student-led builder community at **Sathyabama Institute of Science and Technology (SIST), Chennai**, recognized under the global AWS Student Builder initiative. 

This repository houses the chapter's official web platform, providing:
- **Telemetry & Chapter Metrics**: Live builder counts, certification trackers, and event archives.
- **Events & Hackathons**: Dual-registration engine for upcoming workshops and all-time past event recaps (including Kairos 2027).
- **Domains & Squads**: Detailed charters for Cloud Architecture, DevOps, GenAI/ML, Web/Mobile, CyberSec, IoT, and Competitive Programming.
- **Content Hub & Technical Articles**: Community tutorials, architectural case studies, exam prep blueprints, and study notes.
- **Leadership & Roster**: Chapter organizational directory spanning executive leadership, core leads, and faculty advisors.
- **Partners & Sponsorships**: Engagement matrix, sponsor tiers, and prospectus request flows.

---

## 🏗️ Architecture & Tech Stack

The application is structured as a modern high-performance cloud-native web platform:

- **Framework**: [Next.js 16](https://nextjs.org) (App Router) with [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Design System**: Amazon Ember-inspired design language, Squid Ink neutral palette (`#0B0F17`), and AWS Builder Orange (`#FF9900`) accent system
- **Components**: Modular atomic component kit (Card, Badge, Button, Modal, Container, StatCard)
- **Telemetry & Data**: Centralized typed schema with single-source-of-truth datasets
- **Deployment**: Optimized for static export and serverless hosting on Amazon S3 + CloudFront CDN + ACM Free SSL + Route 53

---

## 📁 Repository Structure

```text
├── app/                  # Next.js 16 Production Web Application
│   ├── public/           # Static media assets, brandmarks, and typography
│   ├── src/
│   │   ├── app/          # Next.js App Router routes & page layouts
│   │   ├── data/         # Single-source-of-truth telemetry, events, & team data
│   │   ├── lib/          # Utilities, motion helpers, and formatting tools
│   │   ├── modules/      # Self-contained domain modules:
│   │   │   ├── about/        # Chapter mission, timeline, & FAQ
│   │   │   ├── admin/        # Chapter administration portal
│   │   │   ├── content-hub/  # Articles, notes, and learning resources
│   │   │   ├── design-system/# UI primitives, design tokens, & layout components
│   │   │   ├── domains/      # Technical domain breakdown & squad showcases
│   │   │   ├── events/       # Event archive, filters, and registration portals
│   │   │   ├── gallery-faq/  # Photo galleries and community FAQs
│   │   │   ├── home/         # Hero telemetry, pillars, and Kairos spotlight
│   │   │   ├── join/         # Chapter onboarding and member application flows
│   │   │   ├── members/      # Community directory & builder search
│   │   │   ├── projects/     # Student cloud builds and legacy showcases
│   │   │   ├── sponsors/     # Tier matrix, corporate perks, and inquiries
│   │   │   └── team/         # Annual leadership and faculty coordinator rosters
│   │   └── types/        # TypeScript interfaces and telemetry contracts
│   └── package.json      # Dependencies and execution scripts
├── src/                  # Turnkey static prototype & standalone HTML preview
│   ├── assets/           # Brand icons, event artwork, and QR codes
│   ├── css/              # Standalone design tokens and responsive CSS
│   ├── data/             # Static JavaScript mock data source
│   ├── pages/            # Multi-page HTML templates
│   └── index.html        # Root prototype entrypoint
├── .gitignore            # Git exclusion rules
└── README.md             # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version `18.17.0` or later recommended)
- `npm`, `pnpm`, or `yarn`

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MasterZ1311/AWS-SBG-site..git
   cd AWS-SBG-site.
   ```

2. **Navigate to the web app:**
   ```bash
   cd app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Launch the local development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to explore the live application.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 👥 Chapter Leadership (2026–2027)

| Role | Name | Domain / Mandate |
| :--- | :--- | :--- |
| **President & SBGL** | **Thenappan T (MasterZ)** | Executive Leadership & AWS Global Compliance |
| **Builder Team Lead** | **Viswanathan Ashok** | Hands-On Builder Squad & Project Curations |
| **Technical Team Lead** | **Shanmugapriyan** | Technical & Cloud Infrastructure Architecture |
| **Events & Management Lead** | **Nangaiyar M** | Event Logistics, Stage Management & Run-of-Show |
| **Media Team Lead** | **Caroline Mary McPherson** | Media, Creative Direction & Brand Storytelling |
| **Media Team Co-Lead** | **Harshith Raj S** | Video Production, Broadcasts & Reels |
| **Documentation Team Lead** | **Hemavarshine S** | Documentation, Governance & Audit Compliance |
| **Faculty Advisors** | **Dr. K. Ashok Kumar & Dr. Balapriya .S** | Department of Computer Science & Engineering |

---

## 🌐 Official Community Touchpoints

Stay connected with the chapter across official AWS community platforms:

* **Official Meetup Chapter**: [AWS Student Builder Group — SIST](https://meetup.com/aws-student-builder-group-sist)
* **Official LinkedIn**: [AWS SBG SIST](https://www.linkedin.com/company/aws-sbg-sist/) (`aws-sbg-sist`)
* **Official Instagram**: [@aws.studentbuildergroup_sist](https://www.instagram.com/aws.studentbuildergroup_sist/)
* **Official AWS Builder Center**: [s12d.com/students](https://s12d.com/students)
* **Official Attendee Feedback**: [pulse.aws](https://pulse.aws)
* **Chapter Inquiries & Support**: `sistawscc@gmail.com`

---

## 📜 Compliance & Attribution

* **AWS Student Builder Group**: This chapter operates in adherence to official AWS Student Community Brand and Event Guidelines.
* **100% Free Access**: In strict accordance with global AWS community directives, all chapter workshops, certifications bootcamps, and events are 100% free of charge for students.
* **Trademarks**: Amazon Web Services, AWS, and the AWS logo are trademarks of Amazon.com, Inc. or its affiliates.
