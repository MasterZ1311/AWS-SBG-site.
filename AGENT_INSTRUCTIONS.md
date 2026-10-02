# AWS SBGL SIST — AGENT INSTRUCTIONS
## Standing Rules & Build Protocols for All AI Development Agents

> **READ THIS ENTIRE FILE BEFORE WRITING A SINGLE LINE OF CODE.**
> This is the canonical law governing every AI build agent working on this project.
> Non-compliance will require full rewrites. There are no exceptions.

---

## 0. Project Identity

| Field | Value |
|:------|:------|
| **Project** | AWS Student Builder Group (AWS SBGL) — SIST Chapter Official Website |
| **Domain** | `https://sbg-sist.in` |
| **Tech Stack** | Semantic HTML5 + Vanilla CSS Custom Properties + Vanilla JavaScript (ES6+) |
| **Workspace Root** | `E:\AWS SBGL\Website\` |
| **Source Root** | `E:\AWS SBGL\Website\src\` |
| **Docs Root** | `E:\AWS SBGL\Website\` (files `00_` through `06_`) |
| **Chapter President** | Thenappan T (MasterZ) · `thenappanmasterz1311@gmail.com` · `+91 6381801640` |
| **Builder Team Lead** | Viswanathan Ashok |
| **Technical Team Lead** | Shanmugapriyan |
| **Events & Management Lead** | Nangaiyar M |
| **Media Team Lead** | Caroline Mary McPherson |
| **Media Team Co-Lead** | Harshith Raj S |
| **Documentation Team Lead** | Hemavarshine S |

---

## 1. Source of Truth Hierarchy

When in doubt, resolve ambiguity in this order — **highest wins**:

```
[1] AGENT_INSTRUCTIONS.md (this file)            ← Highest authority
[2] 03_AWS_GUIDELINES_VS_LEGACY_STANDARDS_MATRIX.md
[3] 01_BRAND_GUIDELINES_AND_ASSET_REPOSITORY_MAP.md
[4] 00_MASTER_WEBSITE_CREATION_AND_BRAND_GUIDE.md
[5] 02_WEBSITE_SECTIONS_AND_PAGE_ARCHITECTURE.md
[6] 04_PROMPT_WISE_STYLING_AND_DEVELOPER_DIRECTIVES.md
[7] 05_UI_COMPONENT_KIT_AND_COPY_BANK.md
[8] 06_FRONTEND_TECH_STACK_AND_AWS_DEPLOYMENT_GUIDE.md
```

Read the referenced doc before implementing a feature that it governs.

---

## 2. Directory Structure — Never Deviate

```text
E:\AWS SBGL\Website\
├── AGENT_INSTRUCTIONS.md                  ← YOU ARE HERE
├── 00_MASTER_WEBSITE_CREATION_AND_BRAND_GUIDE.md
├── 01_BRAND_GUIDELINES_AND_ASSET_REPOSITORY_MAP.md
├── 02_WEBSITE_SECTIONS_AND_PAGE_ARCHITECTURE.md
├── 03_AWS_GUIDELINES_VS_LEGACY_STANDARDS_MATRIX.md
├── 04_PROMPT_WISE_STYLING_AND_DEVELOPER_DIRECTIVES.md
├── 05_UI_COMPONENT_KIT_AND_COPY_BANK.md
├── 06_FRONTEND_TECH_STACK_AND_AWS_DEPLOYMENT_GUIDE.md
└── src/
    ├── index.html                          ← Homepage (/)
    ├── assets/
    │   ├── fonts/                          ← All 14 Amazon Ember .ttf files (DO NOT DELETE)
    │   ├── images/
    │   │   ├── brandmark/                  ← Official primary brandmarks (5 PNGs)
    │   │   ├── logo/                       ← Program icon badges (6 PNGs)
    │   │   ├── events/                     ← Event photographs (add per event)
    │   │   ├── team/                       ← Member portraits (add per member)
    │   │   └── projects/                   ← Architecture diagrams (add per project)
    │   └── qr/                             ← Official QR codes (pulse.aws + masterz)
    ├── css/
    │   ├── tokens.css                      ← MASTER DESIGN TOKENS (READ BEFORE EDITING CSS)
    │   ├── components.css                  ← Shared component styles (header, footer, cards)
    │   └── [page].css                      ← Page-specific styles (home.css, events.css, etc.)
    ├── js/
    │   ├── main.js                         ← Global JS bootstrap
    │   └── pages/                          ← Page-specific JS modules
    ├── data/
    │   └── site-data.js                    ← SINGLE SOURCE OF TRUTH for all content
    ├── components/                         ← Reusable HTML fragments (future SSI/fetch)
    └── pages/                              ← Sub-pages
        ├── about/index.html
        ├── events/index.html
        ├── events/upcoming/index.html
        ├── team/index.html
        ├── team/2026-2027/index.html
        ├── team/2025-2026/index.html
        ├── team/hall-of-fame/index.html
        ├── domains/index.html
        ├── projects/index.html
        ├── resources/index.html
        ├── articles/index.html
        ├── sponsors/index.html
        ├── csat/index.html
        └── join/index.html
```

**Agents MUST create new pages at their specified paths above.** Do not invent new routes.

---

## 3. Technology Constraints — HARD RULES

| ALLOWED | FORBIDDEN |
|:--------|:----------|
| Semantic HTML5 | Bootstrap, Foundation, Bulma |
| Vanilla CSS Custom Properties from `tokens.css` | TailwindCSS (unless user explicitly overrides) |
| Vanilla JavaScript ES6+ modules | React, Vue, Angular, Svelte |
| CSS Grid + Flexbox | jQuery |
| `@font-face` local fonts | Google Fonts CDN |
| SVG icons inline | Font Awesome CDN |
| Fetch API for data | External API calls without approval |
| CSS animations & transitions | GSAP or heavy JS animation libs |

---

## 4. Brand Compliance — NON-NEGOTIABLE

### 4.1 Typography

| Use Case | CSS Variable | Weight |
|:---------|:-------------|:-------|
| H1 pitch headlines, prize counters | `var(--font-display)` | 900 (Heavy) |
| H2 section headings, card titles | `var(--font-display)` | 700 (Bold) |
| H3, nav links, button labels, pills | `var(--font-display)` | 500 (Medium) |
| Body copy, descriptions | `var(--font-display)` | 400 (Regular) |
| Captions, timestamps, legal fine print | `var(--font-display)` | 300 (Light) |
| Code blocks, CLI terminal output | `var(--font-mono)` | 400 or 700 |
| Telemetry numbers, scoreboards, tables | `var(--font-duospace)` | 400 or 700 |

**Never use Arial, Roboto, Inter, Syne, or any other font. Amazon Ember IS the brand.**

### 4.2 Color
Only use CSS variables from `tokens.css`. Do NOT hardcode hex values outside `tokens.css`:

```css
/* CORRECT */
color: var(--text-snow);
background: var(--bg-obsidian);

/* WRONG */
color: #F8FAFC;
background: #0B0F19;
```

### 4.3 Logo Usage
- Header & footer: `AWS Student Builder Group_RGB_Brandmark_White.png`
- Minimum width: `160px` in header, `120px` minimum anywhere
- Mandatory clear-space: `padding: 8px 14px` on the wrapping `<a>` tag
- **Never**: recolor, rotate, shadow, enclose in a box, or combine with SIST logo
- Favicon: `AWS Student Builder Group_RGB_Program Icon_White.png`

### 4.4 AWS Trademark Disclaimer (MANDATORY ON EVERY PAGE FOOTER)
```
AWS Student Builder Group Sathyabama is an independent student organization supported by the
AWS Student Builder Groups program. Amazon Web Services, AWS, and the AWS logo are trademarks
of Amazon.com, Inc. or its affiliates.
```
CSS class: `.aws-disclaimer-text`. Do not alter this text. Do not omit it.

### 4.5 Entity Naming
- ✅ `"AWS Student Builder Group — SIST Chapter"` or `"AWS SBGL SIST"`
- ❌ `"AWS Club"`, `"Amazon Student Club"`, `"AWS Chapter"`, `"AWS Student Branch"`

---

## 5. Data Layer Protocol

**All content lives in `/src/data/site-data.js`.** HTML files do NOT hardcode event names, team member data, or KPI numbers.

### When to Update `site-data.js`
- Adding a new event → append to `EVENTS` array
- Adding a team member → append to `TEAM["2026-2027"]`
- Adding a project → append to `PROJECTS` array
- Updating a KPI number → update `KPI` array

### Null Fields
Fields set to `null` (like `photo`, `bannerImage`, `githubUrl`) are placeholders.
When the user provides the actual asset:
1. Place the file in the correct `/assets/` subdirectory
2. Update `null` to the correct relative URL in `site-data.js`

---

## 6. Page Build Protocol

When building any new page, follow this checklist **in order**:

**Step 1 — HTML Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- SEO meta, OG tags, canonical, favicon -->
  <link rel="stylesheet" href="../../css/tokens.css" />
  <link rel="stylesheet" href="../../css/components.css" />
  <link rel="stylesheet" href="./[page-name].css" />
</head>
<body>
  <!-- HEADER (copy from index.html, update aria-current link) -->
  <header> ... </header>
  <main id="main-content"> ... </main>
  <!-- FOOTER (mandatory disclaimer MUST be present) -->
  <footer> ... </footer>
  <script type="module" src="../../js/main.js"></script>
  <script type="module" src="../../js/pages/[page-name].js"></script>
</body>
</html>
```

**Step 2 — CSS**
- Create `[page-name].css` in the same directory as the page
- Import only page-specific rules (tokens.css handles all globals)
- Prefix page-specific classes with page name: `.events-*`, `.team-*`, etc.

**Step 3 — JavaScript (if needed)**
- Create `[page-name].js` in `/src/js/pages/`
- Countdown timers: always use IST timezone (`+05:30`)

**Step 4 — SEO**
```html
<title>[Page Name] | AWS Student Builder Group — SIST Chapter</title>
<meta name="description" content="[unique 150-160 char description]" />
<link rel="canonical" href="https://sbg-sist.in/[route]/" />
```

---

## 7. Component Quick Reference

### 7.1 Hero Section
- Background: `--bg-obsidian` + amber radial glow
- H1: weight 900, `clamp(38px, 6vw, 68px)`, amber gradient on "We Engineer the Future."
- Eyebrow: `.pill-free` with `🟢` prefix
- CTAs: `.btn-primary` (amber) + `.btn-secondary` (ghost)
- Telemetry strip: `.card-glass`, 5-column CSS Grid, values in `--font-duospace` weight 700 28px amber

### 7.2 Cards
- Base class: `.card-glass` (glassmorphic, hover lift effect)
- Event cards: 16:9 banner, category badge, stats in `--font-duospace`
- Team cards: rounded portrait, amber role title, social icon row
- Domain cards: hex icon emblem, tool pills, "Apply" link

### 7.3 Event Registration (Upcoming Page)
3 steps — MANDATORY:
1. RSVP on Meetup → `https://meetup.com/aws-student-builder-group-sist`
2. Create Builder ID → `https://s12d.com/students`
3. Submit Team Roster (Name, Reg No, Meetup URL, Builder ID)
Every registration button MUST display: **`100% Free · Zero Entry Fee`**

### 7.4 Countdown Timer
```javascript
const TARGET = new Date('2027-01-22T09:00:00+05:30'); // Kairos 2027
// Display: DD : HH : MM : SS using --font-mono Bold 48px
// Segments: border: 1px solid var(--aws-amber); border-radius: var(--radius-md);
```

---

## 8. AWS Compliance Audit Checklist

Before marking any page "done":

- [ ] Naming: "AWS Student Builder Group — SIST Chapter" everywhere; no "AWS Club"
- [ ] Footer Disclaimer: full mandatory trademark text on every page footer
- [ ] Logo Clear-Space: `padding: 8px 14px` on `.aws-brand-link`, min-width `160px`
- [ ] Typography: only Amazon Ember fonts via CSS variables
- [ ] Zero Fee: all event registration shows `100% Free · Zero Entry Fee` badge
- [ ] Meetup integration: `https://meetup.com/aws-student-builder-group-sist`
- [ ] Builder ID: `https://s12d.com/students`
- [ ] CSAT QR: `/assets/qr/Attendee Feedback_qrcode_pulse.aws.png` on `/csat` page
- [ ] Social handles: Instagram `@aws.studentbuildergroup_sist`, LinkedIn `aws-sbg-sist`
- [ ] Faculty credit: Dr. K. Ashok Kumar & Dr. Balapriya .S in footer/team page
- [ ] SEO: title, meta description, canonical on every page
- [ ] Accessibility: `aria-label`, `aria-current`, `role` on all interactive elements
- [ ] No payment fields anywhere

---

## 9. Official Links — Copy Exactly

```
Instagram:      https://www.instagram.com/aws.studentbuildergroup_sist/
LinkedIn:       https://www.linkedin.com/company/aws-sbg-sist/
Meetup:         https://meetup.com/aws-student-builder-group-sist
Builder Center: https://s12d.com/students
Pulse CSAT:     https://pulse.aws
Official Email: sistawscc@gmail.com
Asset Generator:https://aws-version-3--assets-generator.netlify.app/
Domain:         https://sbg-sist.in
```

---

## 10. KPI Numbers — Canonical Values

| Metric | Value |
|:-------|:------|
| Active Student Builders | `1,200+` |
| Flagship Events/Year | `6 Events` |
| Cash Prize Pool | `₹1,75,000+` |
| AWS Cloud Credits Distributed | `$50,000+` |
| AWS Builder IDs Onboarded | `850+` |
| Certified Cloud Practitioners | `50+` |
| Average Event CSAT Rating | `4.85 / 5.0` |
| Kairos 2027 Applicants | `2,000+` |

---

## 11. Build Phase Roadmap

| Phase | Scope | Status |
|:------|:------|:-------|
| **Phase 0** | Project scaffold, tokens.css, site-data.js, index.html shell, Next.js 16 setup | ✅ COMPLETE |
| **Phase 1** | Shared UI components kit (`Card`, `Badge`, `Button`, `SectionHeader`, `Container`, `CountdownTimer`, `Modal`) | ✅ COMPLETE |
| **Phase 2** | Homepage complete — Pillars, Featured Event, Projects Preview, Sponsor Wall, Community CTA | ✅ COMPLETE |
| **Phase 3** | Events Archive (`/events`) — filter tabs, search, event card grid | ✅ COMPLETE |
| **Phase 4** | Events Upcoming (`/events/upcoming`) — countdown, dual-registration, schedule | ✅ COMPLETE |
| **Phase 5** | Team Rosters (`/team`, `/team/[year]`, `/team/hall-of-fame`) | ✅ COMPLETE |
| **Phase 6** | Functional Domains (`/domains`) — 7 domain squad cards | ✅ COMPLETE |
| **Phase 7** | Projects (`/projects`) — 7 project cards with architecture diagram modal | ✅ COMPLETE |
| **Phase 8** | About (`/about`) — affiliation, SIST heritage, governance charter | ✅ COMPLETE |
| **Phase 9** | Resources, Articles, CSAT pages (`/resources`, `/articles`, `/csat`) | ✅ COMPLETE |
| **Phase 10** | Sponsors (`/sponsors`) — tier matrix, prospectus inquiry modal | ✅ COMPLETE |
| **Phase 11** | Join (`/join`) — fresher recruitment intake form (100% free) | ✅ COMPLETE |
| **Phase 12** | Admin Dashboard (`/admin`) & Production Next.js Build Verification | ✅ COMPLETE |

---

## 12. Performance Targets

| Metric | Target |
|:-------|:-------|
| LCP | ≤ 1.2s |
| FID | ≤ 50ms |
| CLS | ≤ 0.02 |
| Lighthouse Performance | ≥ 98 |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | 100 |

- Use `font-display: swap` (already in globals.css)
- Specify `width` and `height` on all `<img>` to prevent CLS
- Use `loading="lazy"` on below-fold images
- Always `rel="noopener noreferrer"` on `target="_blank"` links

---

## 13. Hard Prohibitions

- ❌ Hardcoded hex values in page CSS — always use CSS variables / theme tokens
- ❌ Payment forms, ticketing, or entry fee of any kind on any page
- ❌ Google Fonts `<link>` tags
- ❌ Corporate Amazon.com logo — only AWS SBGL program brandmark
- ❌ Deleting files in `/assets/fonts/` or `/assets/images/brandmark/`
- ❌ Omitting the mandatory legal disclaimer from any page footer
- ❌ `target="_blank"` without `rel="noopener noreferrer"`

---

## 14. Build Log

| Date | Phase | Agent Action | Status |
|:-----|:------|:-------------|:-------|
| 2026-10-01 | Phase 0 | Initial scaffold: fonts, brand assets, site-data, tokens, base architecture | ✅ Complete |
| 2026-10-02 | Phase 1 | Built shared typed UI primitives: Card, Badge, Button, SectionHeader, Container, CountdownTimer, Modal | ✅ Complete |
| 2026-10-02 | Phase 2 | Completed Homepage: Pillars, Kairos 2027 Countdown Spotlight, Projects, Sponsors, Dual CTA | ✅ Complete |
| 2026-10-02 | Phase 3 | Built Events Archive (`/events`) with interactive category tabs, search, and chronicled records | ✅ Complete |
| 2026-10-02 | Phase 4 | Built Active & Upcoming Portal (`/events/upcoming`) with dual-registration form and 48h schedule matrix | ✅ Complete |
| 2026-10-02 | Phase 5 | Built Team Rosters (`/team`, `/team/[year]`, `/team/hall-of-fame`) with batch switcher and faculty coordinator cards | ✅ Complete |
| 2026-10-02 | Phase 6 | Built Functional Domains (`/domains`) showcasing all 7 specialized operational squads | ✅ Complete |
| 2026-10-02 | Phase 7 | Built Projects Showcase (`/projects`) featuring 7 student systems with interactive architecture blueprint modals | ✅ Complete |
| 2026-10-02 | Phase 8 | Built About Chapter (`/about`) presenting Seattle affiliation, Sathyabama heritage, and governance charter | ✅ Complete |
| 2026-10-02 | Phase 9 | Built Content Hub (`/resources`, `/articles`, `/csat` with embedded pulse.aws QR code) | ✅ Complete |
| 2026-10-02 | Phase 10 | Built Corporate Sponsors (`/sponsors`) with tier matrix, benefits, and partnership inquiry modal | ✅ Complete |
| 2026-10-02 | Phase 11 | Built Student Intake Engine (`/join`) with 100% free fresher registration form | ✅ Complete |
| 2026-10-02 | Phase 12 | Built Officer Command Center (`/admin`) and verified Next.js 16 production build with 18/18 static pages generated | ✅ Complete |

---

*Last updated: 2026-10-02 by Antigravity Agent (All Phases Finalized)*
