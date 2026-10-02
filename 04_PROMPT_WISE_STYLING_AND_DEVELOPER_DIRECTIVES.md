# PROMPT-WISE STYLING & DEVELOPER DIRECTIVES
## Turnkey AI Prompts, CSS Design Tokens & Component Engineering Specifications
**Location:** [`Website/04_PROMPT_WISE_STYLING_AND_DEVELOPER_DIRECTIVES.md`](file:///e:/AWS%20SBGL/Website/04_PROMPT_WISE_STYLING_AND_DEVELOPER_DIRECTIVES.md)  
**Parent Chapter:** AWS Student Builder Group (AWS SBGL) — SIST Chapter  
**Target Audience:** Web Lead (Viswanathan Ashok), Frontend Engineers & AI Development Agents  
**Visual Style:** Cyber-Cloud Grandeur · Obsidian-Amber High-Voltage Glassmorphism · Precision Engineering  

---

## 1. Executive Instructions for the Web Lead & Dev Team

This document is organized into **ready-to-run developer prompt blocks**. When developing components or asking an AI assistant to generate code, copy the corresponding prompt block verbatim. Each prompt contains:
1. **Design Tokens & CSS Variables**
2. **Component Hierarchy & Layout Rules**
3. **Typography & Font Bindings**
4. **Interactive States & Micro-Animations**
5. **Mandatory Links & Compliance Disclaimers**

---

## 2. Master CSS Design System & Font Tokens

```css
/* ==========================================================================
   AWS STUDENT BUILDER GROUP (SIST) — MASTER DESIGN TOKENS
   ========================================================================== */

@font-face {
  font-family: 'Amazon Ember Display';
  src: url('/fonts/AmazonEmberDisplay_Rg.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Amazon Ember Display';
  src: url('/fonts/AmazonEmberDisplay_Md.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Amazon Ember Display';
  src: url('/fonts/AmazonEmberDisplay_Bd.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Amazon Ember Display';
  src: url('/fonts/AmazonEmberDisplay_He.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Amazon Ember Mono';
  src: url('/fonts/AmazonEmberMono_Rg.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Amazon Ember Mono';
  src: url('/fonts/AmazonEmberMono_Bd.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Amazon Ember Duospace';
  src: url('/fonts/Amazon Ember Duospace.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  /* Surface Foundations */
  --bg-obsidian: #0B0F19;
  --bg-squid-ink: #232F3E;
  --bg-surface-card: rgba(22, 30, 46, 0.75);
  --bg-surface-elevated: #1E293B;
  --bg-card-hover: rgba(30, 41, 59, 0.85);

  /* Brand Accents */
  --aws-amber: #FF9900;
  --aws-amber-glow: rgba(255, 153, 0, 0.35);
  --amazon-blue: #0073BB;
  --matrix-emerald: #10B981;
  --cyber-indigo: #6366F1;
  --neon-cyan: #06B6D4;

  /* Typography Contrast */
  --text-snow: #F8FAFC;
  --text-cloud: #D5DBDB;
  --text-muted: #94A3B8;
  --text-dark: #0F172A;

  /* Borders & Glassmorphism */
  --border-glass: rgba(255, 255, 255, 0.08);
  --border-amber-subtle: rgba(255, 153, 0, 0.3);
  --border-active: #FF9900;
  --glass-blur: blur(16px);
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  /* Font Stacks */
  --font-display: 'Amazon Ember Display', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Amazon Ember Display', 'Inter', sans-serif;
  --font-mono: 'Amazon Ember Mono', 'JetBrains Mono', monospace;
  --font-duospace: 'Amazon Ember Duospace', monospace;
}
```

---

## 3. Developer Prompt Suite

### PROMPT 1: Responsive Sticky Navigation Bar with Brandmark Clear-Space

```text
[PROMPT FOR WEB DEVELOPER / AI CODE ASSISTANT]
Build a production-ready, highly responsive sticky navigation bar component for the AWS Student Builder Group (SIST Chapter) website using HTML and Vanilla CSS (or Next.js/React).

Design & Layout Specifications:
1. Container:
   - Position: sticky; top: 0; z-index: 1000;
   - Background: rgba(11, 15, 25, 0.85) with backdrop-filter: blur(16px);
   - Border-bottom: 1px solid rgba(255, 255, 255, 0.08);
   - Padding: 14px 28px; display: flex; align-items: center; justify-content: space-between;

2. Left Branding Lockup:
   - Must render the official white primary brandmark: 'Leader Library/01- Creative Assets _ Fonts, Icons, Etc_/Primary Brandmark/AWS Student Builder Group_RGB_Brandmark_White.png'.
   - Mandatory clear-space padding: 12px around the logo image. Minimum width: 140px. Height: auto.
   - Clickable link targeting '/'.

3. Center Navigation Menu:
   - Links: Home ('/'), About ('/about'), Events ('/events' with dropdown: 'All Events Archive' and 'Upcoming / Live'), Team ('/team' with dropdown: 'Batch 2026–2027' and 'Hall of Fame'), Domains ('/domains'), Projects ('/projects'), Resources ('/resources').
   - Typography: 'Amazon Ember Display', weight 500, size 15px, color #D5DBDB.
   - Hover State: Color shifts to #FF9900 with a subtle glowing underline (2px solid #FF9900, transition 0.2s ease).

4. Right Actions & Social Links:
   - Icon 1: Instagram icon linking to 'https://www.instagram.com/aws.studentbuildergroup_sist/' (title: '@aws.studentbuildergroup_sist').
   - Icon 2: LinkedIn icon linking to 'https://www.linkedin.com/company/aws-sbg-sist/' (title: 'aws-sbg-sist').
   - Icon 3: Meetup icon linking to 'https://meetup.com/aws-student-builder-group-sist' (title: 'Join Meetup Chapter').
   - Primary CTA Button:
     * Text: "Create Builder ID"
     * Link: "https://s12d.com/students"
     * Styling: Background linear-gradient(135deg, #FF9900 0%, #E68A00 100%), color #0B0F19, font-weight 700, border-radius 8px, padding: 8px 16px, box-shadow: 0 0 14px rgba(255, 153, 0, 0.35).
     * Hover: scale(1.03), box-shadow: 0 0 22px rgba(255, 153, 0, 0.6).

5. Mobile Responsiveness:
   - Collapse menu into an accessible slide-out mobile hamburger drawer below 1024px screen width.
```

---

### PROMPT 2: High-Voltage Pitch Hero Section with Live Telemetry

```text
[PROMPT FOR WEB DEVELOPER / AI CODE ASSISTANT]
Build a pitch-ready, high-voltage Hero Section for the AWS Student Builder Group (SIST) homepage that immediately captivates sponsors, AWS leaders, and students.

Design & Layout Specifications:
1. Container:
   - Background: Deep Obsidian #0B0F19 with an ambient radial gradient (radial-gradient(circle at 50% 20%, rgba(255, 153, 0, 0.12), transparent 70%)).
   - Min-height: 85vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 60px 24px;

2. Eyebrow Badge:
   - Pill badge: Background rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 999px; padding: 6px 16px; margin-bottom: 24px;
   - Text: "🟢 Official Amazon Web Services Student Community · 600+ Campuses Global"
   - Font: 'Amazon Ember Mono', font-size: 13px, color: #10B981, font-weight: 500;

3. Main Pitch Headline (H1):
   - Font: 'Amazon Ember Display Heavy', font-size: clamp(38px, 6vw, 68px), letter-spacing: -0.03em, line-height: 1.1;
   - Text: "We Don't Just Learn the Cloud.<br><span style='background: linear-gradient(135deg, #FF9900 0%, #FFC066 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>We Engineer the Future.</span>"

4. Subtitle:
   - Font: 'Amazon Ember Display Regular', font-size: clamp(16px, 2vw, 20px), color: #D5DBDB, max-width: 760px, line-height: 1.6, margin: 20px auto 36px;
   - Text: "The premier student cloud development community at Sathyabama Institute of Science and Technology. Hands-on serverless labs, production agentic AI, 100% free AWS exam vouchers, and high-stakes national hackathons."

5. Dual Call-to-Action Buttons:
   - Button 1 (Primary): "Explore Upcoming Events" (Targets '/events/upcoming') -> Amber gradient background, dark text, glow shadow.
   - Button 2 (Secondary): "Download Club Pitch Deck" (Targets '/pitch' or PDF) -> Border 1px solid rgba(255, 255, 255, 0.2), background rgba(255, 255, 255, 0.04), color #F8FAFC, hover: border-color #FF9900.

6. Live Telemetry Strip:
   - Position: Below CTAs with 48px top margin; width: 100%; max-width: 1080px;
   - Background: rgba(22, 30, 46, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px 32px;
   - 5 Metrics (in CSS Grid 5-column layout):
     1. "1,200+" / "Active Builders"
     2. "6 / Year" / "Flagship Events"
     3. "100% Free" / "Zero Entry Fee"
     4. "50+" / "AWS Certified Architects"
     5. "₹1.75L+" / "Cash Hackathon Prizes"
   - Metric Numbers in 'Amazon Ember Duospace', font-weight 700, font-size: 28px, color: #FF9900.
   - Metric Labels in 'Amazon Ember Display Regular', font-size: 13px, color: #94A3B8, text-transform: uppercase, letter-spacing: 0.05em.
```

---

### PROMPT 3: Master All-Time Events Archive Page (`/events`)

```text
[PROMPT FOR WEB DEVELOPER / AI CODE ASSISTANT]
Build the Master All-Time Events Archive page component for the AWS Student Builder Group (SIST) at '/events'.

Requirements & Layout:
1. Header Section:
   - Title: "Chronicles of Innovation: All Chapter Events"
   - Subhead: "A permanent historical archive of every workshop, bootcamp, and hackathon organized by AWS SBGL SIST."
   - Search Bar & Category Filter Pills:
     * Pills: 'All Events', 'Flagship Hackathons', 'Certification Bootcamps', 'Hands-On Workshops', 'Guest Tech Talks'.

2. Event Grid Layout:
   - Responsive CSS Grid: repeat(auto-fill, minmax(340px, 1fr)) with 28px gap.

3. Event Card Structure:
   - Card Container: Background rgba(22, 30, 46, 0.75); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden; transition: transform 0.25s ease, border-color 0.25s ease;
   - Hover: transform translateY(-6px); border-color: rgba(255, 153, 0, 0.5); box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
   - Top Image: Aspect-ratio 16/9 with high-res event photograph or stage visual.
   - Category Badge (Top-left of image): Matrix Emerald #10B981 for Hackathons, Amazon Blue #0073BB for Bootcamps.
   - Card Content:
     * Date & Venue Pill: '📅 July 14, 2026 · 📍 Central Auditorium' (Font: 'Amazon Ember Mono', 12px, #94A3B8).
     * Event Title (H3): 'Amazon Ember Display Bold', 20px, #F8FAFC.
     * Brief Synopsis: 2-3 sentences explaining technical focus and keynotes.
     * Speaker Badges: Avatars with name, title, and organization (e.g. 'Pooja Srikanth, AWS Community Builder').
     * Impact Stats Row: '👥 350+ Attendees · 🏆 40 Badges Issued · ⭐ 4.9/5 CSAT' (Font: 'Amazon Ember Duospace', 13px, #FF9900).
     * Action Links Row:
       - Link 1: "Read Full Event Report (PDF/MD)"
       - Link 2: "View Photo Archive"
       - Link 3: "AWS Builder Center Article"
```

---

### PROMPT 4: Active & Upcoming Events Live Portal (`/events/upcoming`)

```text
[PROMPT FOR WEB DEVELOPER / AI CODE ASSISTANT]
Build the Active & Upcoming Events Live Portal component at '/events/upcoming'.

Requirements & Layout:
1. Live Countdown Section:
   - Real-time JavaScript countdown ticker (Days : Hours : Minutes : Seconds) ticking down to next event (e.g. January 22, 2027 09:00:00 IST for Kairos 2027).
   - Digits in 'Amazon Ember Mono Bold', font-size 48px, background rgba(30, 41, 59, 0.6), border 1px solid #FF9900, border-radius 12px, padding: 16px 20px.

2. Dual-Registration Funnel Component:
   - Prominently feature: "100% Free Access · Zero Entry Fee Guarantee"
   - Step 1: "Join & RSVP on Meetup.com" -> Button linking to 'https://meetup.com/aws-student-builder-group-sist'.
   - Step 2: "Create Universal AWS Builder ID" -> Button linking to 'https://s12d.com/students'.
   - Step 3: "Submit Team Roster" -> Form fields: Team Name, Leader Name, Student Email, Meetup Profile URL, AWS Builder ID.
   - Dynamic Verification Indicator: Green checkmark appears when valid Meetup URL is entered.

3. 48-Hour Interactive Schedule Matrix:
   - Tabbed view: Day 1 (Orientation & Round 0), Day 2 (Hacking Sprint & Food Drops), Day 3 (Jury Evaluation & Grand Valedictory).
   - Event slots displaying time, activity, venue room number, and speaker name.
```

---

### PROMPT 5: Annual Core Team Rosters with Academic Year Switcher (`/team`)

```text
[PROMPT FOR WEB DEVELOPER / AI CODE ASSISTANT]
Build the Annual Core Team Rosters component at '/team' with dynamic academic year switching.

Requirements & Layout:
1. Academic Year Switcher Tabs:
   - Tabs: 'Batch 2026–2027 (Active Board)', 'Batch 2025–2026 (Founding Cohort)', 'Hall of Fame & Alumni'.
   - Active Tab: Background #FF9900, color #0B0F19, font-weight 700.

2. Leadership Profile Card Grid:
   - 3-column responsive grid (desktop), 2-column (tablet), 1-column (mobile).
   - Card Layout:
     * Photo: Square portrait with subtle glass border and rounded-full avatar mask.
     * Name: 'Amazon Ember Display Bold', 22px, #F8FAFC.
     * Role Title: 'Amazon Ember Display Medium', 15px, #FF9900 (e.g. 'President & SBGL', 'Technical & Web Lead').
     * Academic Details: 'Dept of CSE · Register: 44110855'.
     * Domain Mandate: 2-line description of responsibilities.
     * Verified Badges: Pills with official logos for 'AWS Certified Cloud Practitioner', 'AWS Solutions Architect'.
     * Social Icons Row: LinkedIn, GitHub, Email, Personal Website.

3. Include Roster for Batch 2026–2027:
   - President: Thenappan T (MasterZ) · thenappanmasterz1311@gmail.com
   - Builder Team Lead: Viswanathan Ashok
   - Technical Team Lead: Shanmugapriyan
   - Events and Management Team Lead: Nangaiyar M
   - Media Team Lead: Caroline Mary McPherson
   - Media Team Co-Lead: Harshith Raj S
   - Documentation Team Lead: Hemavarshine S
   - Faculty Coordinators: Dr. K. Ashok Kumar & Dr. Balapriya .S
```

---

### PROMPT 6: Functional Domains Showcase Grid (`/domains`)

```text
[PROMPT FOR WEB DEVELOPER / AI CODE ASSISTANT]
Build the Functional Domains Showcase component at '/domains' explaining the 7 specialized squads of the chapter.

Requirements & Layout:
1. Header:
   - Title: "Our Specialized Functional Domains"
   - Subtitle: "Autonomous student squads engineered for production cloud architecture, creative media, and operational scale."

2. 7 Domain Cards:
   - Card 1: Technical & Web Architecture (Lead: Viswanathan Ashok) -> Full-stack systems, Next.js, CloudFront, Route 53.
   - Card 2: Hands-On AWS Builder Squad (Lead: Shanmugapriyan S) -> Serverless labs, Bedrock GenAI workshops, Skill Builder.
   - Card 3: Design & Creative Direction CCMO (Lead: Rikish B) -> 3D motion graphics, 4K stage LED visuals, brand identity.
   - Card 4: Media, Production & Storytelling (Lead: Caroline Mary McPherson) -> Video production, photography, Instagram Reels.
   - Card 5: Event Operations & Logistics (Lead: Nangaiyar M) -> Venue requisitions, AV systems, catering, security.
   - Card 6: Documentation & Governance (Lead: Hemavarshine S) -> Institutional letters, post-event reports, faculty clearances.
   - Card 7: Community & Sponsorship Outreach (Lead: Harshith Raj S) -> Corporate sponsor pitching, Meetup community management.

3. Card Structure:
   - Icon / 3D Hexagon Emblem (top-left).
   - Domain Title & Lead Name.
   - Mission & Key Deliverables bullet points.
   - Tooling & Tech Stack Pills (e.g. Next.js, Figma, AWS CDK, Blender).
   - "Apply to Join this Squad" button linking to '/join'.
```

---

### PROMPT 7: Student Engineering Projects & Builder Showcase (`/projects`)

```text
[PROMPT FOR WEB DEVELOPER / AI CODE ASSISTANT]
Build the Student Engineering Projects Showcase component at '/projects'.

Requirements & Layout:
1. Header:
   - Title: "Engineered by Students. Deployed on AWS."
   - Subtitle: "Production cloud architectures, agentic AI pipelines, and open-source toolkits built by our student builder teams."

2. Featured Project Cards:
   - Project 1: 'Strands AI Agent Orchestrator' (AWS Bedrock, Claude 3.5 Sonnet, Python).
   - Project 2: 'Kairos 2027 Hackathon Engine' (Next.js 14, Supabase PostgreSQL, Redis, CloudFront).
   - Project 3: 'Serverless IoT Campus Telemetry' (AWS IoT Core, DynamoDB, Lambda, CloudWatch).
   - Project 4: 'Automated Pulse CSAT Microservice' (Serverless API, CSV exporter, pulse.aws sync).

3. Card Anatomy:
   - Architecture Diagram Preview (Click to open full-screen high-res modal).
   - Title & GitHub Badge ('⭐ Open Source').
   - Problem Solved & Architectural Innovations.
   - Tech Stack Pills.
   - Student Contributor Avatars with link to their team profile.
   - Dual Buttons: 'View Live Demo' & 'GitHub Repository'.
```

---

### PROMPT 8: Compliant Global Footer with Mandatory Disclaimers

```text
[PROMPT FOR WEB DEVELOPER / AI CODE ASSISTANT]
Build the global, fully compliant Footer component for the AWS Student Builder Group (SIST) website.

Requirements & Layout:
1. Container:
   - Background: #0B0F19; border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 48px 24px 24px;

2. 4-Column Layout (Desktop):
   - Column 1 (Branding & Identity):
     * White Primary Brandmark image (width: 160px).
     * Subhead: "Official Student Builder Community at Sathyabama Institute of Science and Technology."
     * Official Email: sistawscc@gmail.com
     * President Contact: thenappanmasterz1311@gmail.com · +91 6381801640
   - Column 2 (Navigation Routes):
     * Home, About, All Events Archive, Upcoming Events, Annual Core Team, Domains, Projects.
   - Column 3 (AWS Resources & Community):
     * AWS Builder Center (s12d.com/students), AWS Skill Builder, Meetup Chapter, Pulse CSAT Survey, Asset Generator.
   - Column 4 (Institutional & Faculty):
     * Department of Computer Science & Engineering, Sathyabama Institute of Science and Technology, Jeppiaar Nagar, Chennai 600119.
     * Faculty Mentors: Dr. K. Ashok Kumar & Dr. Balapriya .S.

3. Social Media Bar:
   - Links to Instagram (@aws.studentbuildergroup_sist), LinkedIn (aws-sbg-sist), Meetup, and GitHub.

4. Bottom Legal Compliance Strip:
   - Text (Mandatory):
     "AWS Student Builder Group Sathyabama is an independent student organization supported by the AWS Student Builder Groups program. Amazon Web Services, AWS, and the AWS logo are trademarks of Amazon.com, Inc. or its affiliates."
   - Copyright: "© 2026–2027 AWS Student Builder Group — SIST Chapter. All rights reserved."
```
