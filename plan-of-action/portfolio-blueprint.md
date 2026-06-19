# Portfolio Blueprint — Full Pre-Build Document
> Full-Stack Developer | AI-Integrated Engineer
> **Status:** Full planning + implementation blueprint — design, content, folder structure, routing, config

---

## 1. Vision & Positioning

### Who is this portfolio for?
- **Primary:** Technical recruiters and engineering hiring managers at product companies, SaaS firms, and consulting firms
- **Secondary:** Freelance clients looking for a reliable full-stack developer who can build and ship

### What should a visitor feel in 10 seconds?
> "This person builds real systems that run in production — and they understand AI."

### Positioning Statement (internal compass, not copy)
Not a junior who learned from tutorials. A developer who has shipped high-throughput event pipelines, enterprise-grade multi-tenant systems, and LLM-integrated features — at firms like KPMG.

---

## 2. Design System

### Philosophy
**Dark-first, precision-led.** The palette and typography signal engineering seriousness — not a colorful creative portfolio, not a bland corporate site. Think: a well-lit terminal meets a fintech dashboard. Clean, fast, trustworthy, with one bold signature element.

### Color Palette

| Role | Name | Hex |
|---|---|---|
| Background | Deep Navy | `#0A0F1E` |
| Surface / Cards | Slate Dark | `#111827` |
| Border / Dividers | Muted Blue-Grey | `#1E2A3A` |
| Primary Accent | Electric Cyan | `#00D4FF` |
| Secondary Accent | Violet Glow | `#7C3AED` |
| Text Primary | Off-White | `#F1F5F9` |
| Text Secondary | Cool Grey | `#94A3B8` |
| Success / Tag Green | Emerald | `#10B981` |
| Warning / Tag Yellow | Amber | `#F59E0B` |

**Accent usage rule:** Cyan for CTAs, active states, highlights. Violet for gradients, section accents, case study headers. Never use both on the same element.

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Hero | `Space Grotesk` | 700–800 | Name, section titles |
| Body | `Inter` | 400–500 | All paragraph text |
| Code / Tags | `JetBrains Mono` | 400 | Tech stack tags, code snippets |
| Eyebrows | `Inter` | 600, uppercase, tracked | Section labels above titles |

**Import (Google Fonts):**
```
Space Grotesk: 700, 800
Inter: 400, 500, 600
JetBrains Mono: 400
```

### Spacing Scale (Tailwind defaults — no custom CSS needed)
- Section padding: `py-24` (desktop), `py-16` (mobile)
- Card padding: `p-6` / `p-8`
- Gap between cards: `gap-6`
- Max content width: `max-w-6xl mx-auto`

### Border Radius
- Cards: `rounded-2xl`
- Tags/Badges: `rounded-full`
- Buttons: `rounded-lg`

### Signature Element
**Animated terminal block in the Hero** — instead of a static typewriter, a mock terminal window that "types out" your stack story:
```
> initializing portfolio...
> stack: Python · Django · React · PostgreSQL
> status: building AI-integrated systems
> location: Gurgaon, India
> open_to: full-time · freelance
```
This is the one bold memorable moment. Everything else is quiet and disciplined around it.

---

## 3. Tech Stack — Portfolio Build

| Layer | Choice | Reason |
|---|---|---|
| Framework | React.js (Vite) | Fast build, you know it well |
| Styling | Tailwind CSS | Utility-first, minimal custom CSS |
| UI Components | shadcn/ui | Tailwind-native, unstyled base |
| Animations | Framer Motion | Best-in-class React animation library |
| Icons | Lucide React | Clean, consistent icon set |
| Terminal animation | Custom component with Framer Motion | Signature element |
| Smooth scroll | `react-scroll` or native CSS `scroll-behavior: smooth` | Lightweight |
| GitHub calendar | `react-github-calendar` | Drop-in component |
| Blog cards | Static links to Hashnode | No CMS needed |
| Contact | Plain links — no form | Avoid EmailJS complexity |
| Deployment | GitHub Pages (now) → Cheap cloud + domain (future) | Free, already familiar, same URL |
| Repo name | `yourusername.github.io` | Primary GitHub Pages repo = clean root URL |
| Deploy tool | `gh-pages` npm package | Builds and pushes `dist/` to `gh-pages` branch automatically |
| Future migration | Vercel or cheap VPS + custom domain | When ready — no rebuild needed, just point domain |

**No backend needed.** Everything is static. Resume download = direct PDF link. Contact = mailto + LinkedIn.

---

## 4. Section-by-Section Content Plan

---

### Section 1 — Hero

**Layout:** Full viewport height. Left: text content. Right: animated terminal window.

**Eyebrow label:**
```
👋 Available for opportunities
```

**Headline:**
```
Full-Stack Developer
& AI-Integrated Engineer
```

**Subline:**
```
I build production-grade systems — from real-time data pipelines
to LLM-powered enterprise tools.
```

**CTA Buttons:**
- `View My Work` → scrolls to Projects (primary, cyan filled)
- `Download Resume` → PDF download (secondary, outline)
- `GitHub` → icon link
- `LinkedIn` → icon link

**Terminal content (animated, types line by line):**
```
> initializing portfolio...
> name: [Your Name]
> role: Full-Stack Developer · AI Engineer
> stack: Python · Django · React · PostgreSQL · Kafka
> currently: KPMG India — Compliance & AI Systems
> open_to: Full-time · Freelance
> status: ready ✓
```

---

### Section 2 — What I Build

**Eyebrow:** `CAPABILITIES`
**Title:** `What I Specialise In`

**3 Cards:**

**Card 1 — Backend Systems**
- Icon: Server / Database
- Title: `Scalable Backend Engineering`
- Body: Python, Django, FastAPI, Celery, Redis, PostgreSQL. From layered architecture patterns to async task processing and multi-tenant RBAC systems.
- Tags: `Django` `DRF` `FastAPI` `Celery` `PostgreSQL` `Redis`

**Card 2 — AI & LLM Integration**
- Icon: Brain / Sparkles
- Title: `AI-Integrated Product Features`
- Body: Designing and shipping LLM-powered features into production systems — Text-to-SQL engines, RAG pipelines, intent classification, and prompt engineering with safety guardrails.
- Tags: `LLM` `Text-to-SQL` `RAG` `Prompt Engineering`

**Card 3 — Production & Deployment**
- Icon: Cloud / Container
- Title: `Production-Ready Deployment`
- Body: Docker containerisation, cloud deployments on AWS, Azure & DigitalOcean, reverse proxy configuration with Nginx & Apache2, CI/CD pipelines, and on-prem setups.
- Tags: `Docker` `AWS` `Azure` `Nginx` `Apache2` `CI/CD`

---

### Section 3 — Experience

**Eyebrow:** `CAREER`
**Title:** `Where I've Worked`

**Layout:** Vertical timeline with a left accent line in cyan.

---

**Entry 1 — KPMG India**
- Period: `Feb 2025 — Present`
- Role: `Full Stack Developer`
- Product: `KCRA — KPMG Compliance Reporting Assessor`
- Location: `Gurgaon, India`
- 3 highlights:
  - Architected Django/DRF backend with RBAC across 6 user roles in multi-tenant compliance workflows
  - Built LLM-powered dual-source chatbot — Text-to-SQL for live data + RAG for knowledge base queries
  - Async Excel generation with Celery + Redis processing 50,000+ records in background

**Entry 2 — AutoPeepal Technologies**
- Period: `Sep 2023 — Jan 2025`
- Role: `MERN Stack Developer`
- Product: `Wikitrac — Vehicle Telematics Platform`
- Location: `Pune, India`
- 3 highlights:
  - Real-time GPS ingestion pipeline — 2,000+ events/sec via Apache Kafka
  - WebSocket live dashboard supporting 500+ concurrent users (Socket.io + Redis pub/sub)
  - Recognised as Outstanding Performer

---

### Section 4 — Projects

**Eyebrow:** `WORK`
**Title:** `Things I've Built`

**Layout:** 2-column card grid on desktop, 1-column on mobile.

---

**Project Card 1 — KCRA**
- Badge: `Enterprise · Production`
- Title: `KPMG Compliance Reporting Assessor`
- Description: A centralised compliance management platform serving enterprise clients across media, manufacturing, automotive, and banking sectors. Multi-tenant, RBAC-driven, with full audit trails and AI-powered natural language querying.
- Key highlights:
  - 6-role RBAC with multi-tenant isolation
  - Dual-source LLM chatbot (Text-to-SQL + RAG)
  - Async Excel reports — 50,000+ records
  - 3-stage approval chain with immutable audit trail
- Tech tags: `Django` `DRF` `Celery` `Redis` `PostgreSQL` `Apache2` `AWS` `Azure` `LLM`
- Links: `Architecture Diagram →` | `Case Study →`
- Note: *Code is proprietary — see Case Study for architecture deep dive*

---

**Project Card 2 — Wikitrac**
- Badge: `Enterprise · Production`
- Title: `Vehicle Telematics Platform`
- Description: A high-throughput real-time GPS tracking platform built for fleet management. Processes thousands of live location events per second with sub-second dashboard refresh.
- Key highlights:
  - 2,000+ GPS events/sec via Apache Kafka (3 consumers)
  - 500+ concurrent WebSocket users
  - Redis-cached geofence system — 80% DB load reduction
  - Dockerised deployment on DigitalOcean with Nginx
- Tech tags: `Node.js` `React` `Kafka` `Socket.io` `Redis` `MongoDB` `Docker` `DigitalOcean`
- Links: `Architecture Diagram →` | `Case Study →`
- Note: *Code is proprietary — see Case Study for architecture deep dive*

---

**Project Card 3 — digiSOP**
- Badge: `POC → Product`
- Title: `Digital SOP Management Tool`
- Description: Built end-to-end solo — a platform to author, version, and distribute Standard Operating Procedures digitally. Multi-stage approval chains, RACI matrix tracking, and visual flowchart integration. POC converted into a client-adopted product.
- Key highlights:
  - Solo end-to-end build
  - Multi-stage approval chain with version control
  - RACI matrix + reader acknowledgement tracking
  - Draw.io integration for visual SOP authoring
- Tech tags: `FastAPI` `React` `PostgreSQL` `Redis` `Celery`
- Links: `View Details →`
- Note: *Enterprise project — architecture walkthrough available*

---

**Project Card 4 — Chronicle** *(coming soon / in progress)*
- Badge: `Personal · Open Source`
- Title: `Chronicle — Personal Time Intelligence`
- Description: A full 24-hour personal time tracking and analytics tool. Built to understand how time is actually spent across work and personal life.
- Tech tags: `Django` `React` `PostgreSQL` `Tailwind`
- Links: `GitHub →` *(when ready)*
- Note: *Currently in development*

---

### Section 5 — Case Studies

**Eyebrow:** `DEEP DIVES`
**Title:** `Architecture Case Studies`

**Layout:** 2 large feature cards, each linking to a dedicated case study page.

---

**Case Study 1 — The Chatbot**
- Title: `Building a Deterministic LLM Chatbot with Text-to-SQL + RAG`
- Teaser: How I designed a dual-source AI chatbot for enterprise compliance data — with multi-layer intent classification, dynamic schema injection, server-enforced RBAC, SQL safety guardrails, and a RAG pipeline for knowledge base queries.
- Tags: `LLM` `Text-to-SQL` `RAG` `RBAC` `PostgreSQL` `Django`
- CTA: `Read Case Study →`

**Architecture diagram to include:**
```
[User Message]
      ↓
[Intent Classifier] — routes to SQL path or RAG path
      ↓                              ↓
[Text-to-SQL Engine]          [RAG Pipeline]
  · Schema injection            · Vector search
  · RBAC filter injection       · Knowledge base
  · SQL safety guardrails       · Context retrieval
      ↓                              ↓
[PostgreSQL Query]           [LLM Response]
      ↓                              ↓
        [Transparency Engine — unified response]
```

---

**Case Study 2 — The Pipeline**
- Title: `Real-Time GPS Ingestion at 2,000+ Events/Sec with Apache Kafka`
- Teaser: How I built a fault-tolerant real-time vehicle telematics pipeline with Kafka, three independent consumers, Redis pub/sub for live dashboards, and geofence breach detection with 80% DB load reduction.
- Tags: `Kafka` `WebSocket` `Redis` `Node.js` `MongoDB` `Docker`
- CTA: `Read Case Study →`

---

### Section 6 — Skills

**Eyebrow:** `STACK`
**Title:** `Technologies I Work With`

**Layout:** Categorised rows — no carousel, no progress bars. Clean tag grid.

```
Languages       Python   JavaScript (ES6+)

Backend         Django   DRF   FastAPI   Celery   Node.js   Express.js

Frontend        React.js   Redux Toolkit   HTML5   CSS3   Tailwind CSS

Databases       PostgreSQL   MongoDB   Redis

Messaging       Apache Kafka   WebSocket (Socket.io)

AI & LLM        LLM Integration   Text-to-SQL   RAG Pipelines   Prompt Engineering

DevOps & Cloud  Docker   Nginx   Apache2   AWS   Azure   DigitalOcean   CI/CD

Tools           Git   Postman   VS Code
```

Each tag styled as a pill: `JetBrains Mono`, dark surface background, cyan border on hover.

---

### Section 7 — Blog

**Eyebrow:** `WRITING`
**Title:** `Technical Articles`

**Layout:** 3 horizontal cards linking to Hashnode.

**Planned Articles:**

| # | Title | Platform | Status |
|---|---|---|---|
| 1 | Building a Deterministic Text-to-SQL Engine with RBAC for Enterprise Data | Hashnode | Write first |
| 2 | RAG vs Text-to-SQL — Choosing the Right LLM Pattern | Hashnode | Write second |
| 3 | Real-Time GPS Tracking at Scale with Kafka and WebSockets | Hashnode | Write third |

**Card content per article:**
- Title
- 1-line description
- Tags
- Read time estimate
- `Read on Hashnode →`

---

### Section 8 — GitHub

**Eyebrow:** `OPEN SOURCE`
**Title:** `GitHub Activity`

**Component:** `react-github-calendar` — themed to match portfolio palette (cyan on dark)

**Note:** Before launching portfolio, complete GitHub cleanup:
- Pin 2–3 repositories (Chronicle when ready, any personal projects)
- Add README to each pinned repo
- Update GitHub bio, location, website link
- Ensure contribution graph looks active

---

### Section 9 — Contact

**Eyebrow:** `LET'S TALK`
**Title:** `Get In Touch`

**Layout:** Centered, minimal. No form.

**Copy:**
```
Whether you're hiring, have a project in mind, or just want to connect —
my inbox is open.
```

**Links (large, icon + text):**
- 📧 Email → your@email.com
- 💼 LinkedIn → linkedin.com/in/yourprofile
- 🐙 GitHub → github.com/yourusername
- 📱 Phone → optional

---

## 5. Animation Plan

| Element | Animation | Library | Trigger |
|---|---|---|---|
| Hero terminal | Character-by-character type | Framer Motion | Page load |
| Section titles | Fade up + slight blur clear | Framer Motion | Scroll into view |
| Cards | Fade up staggered | Framer Motion | Scroll into view |
| Skill tags | Fade in staggered | Framer Motion | Scroll into view |
| Timeline entries | Slide in from left | Framer Motion | Scroll into view |
| Nav links | Underline grow on hover | Tailwind transition | Hover |
| CTA buttons | Scale up slightly | Tailwind transition | Hover |
| Case study cards | Lift + glow border | Framer Motion | Hover |

**Rule:** Animations serve content, not decorate it. Reduced motion media query respected for accessibility.

---

## 6. Navigation

**Desktop:** Fixed top navbar — transparent with blur backdrop on scroll (`backdrop-blur-md`). Links: Work · Experience · Case Studies · Skills · Blog · Contact

**Mobile:** Hamburger → full-screen slide-in menu

**Active section:** Cyan underline on current section link (scroll spy)

**Logo/Name:** Top left — `Space Grotesk 700` — links back to Hero

---

## 7. Performance & SEO Checklist

- [ ] Meta title: `[Your Name] — Full-Stack Developer & AI Engineer`
- [ ] Meta description: `Full-Stack Developer with 3+ years building production systems. Python, Django, React, LLM integration. Open to full-time and freelance.`
- [ ] OG image for LinkedIn/Twitter share preview
- [ ] Resume PDF served as static asset — fast download
- [ ] Lazy load images
- [ ] Lighthouse score target: 90+ across all categories
- [ ] Mobile responsive — test at 375px, 768px, 1280px

---

## 8. Case Study Page Structure

Each case study is a dedicated route (`/case-study/chatbot`, `/case-study/wikitrac`).

**Template:**

```
[Eyebrow: Case Study 01]
[Title]
[Tags row]

Overview
— What was the problem? What did you build?

The Challenge
— Technical constraints, scale requirements, business rules

Architecture
— Diagram (SVG or image)
— Component breakdown

Key Engineering Decisions
— Why Text-to-SQL over pure RAG?
— Why Kafka over a simple queue?
— Trade-offs made

What I Learned
— Honest reflection

Tech Stack Used
[Tag row]
```

---

## 9. GitHub Profile Cleanup Plan

**Profile README sections:**
- One-line bio: `Full-Stack Developer · Python · Django · React · LLM Integration`
- Currently working on: Chronicle
- Tech badges (shields.io)
- Link to portfolio

**Repos to pin:**
1. Chronicle (when ready)
2. Any open-source utility or tool
3. Portfolio repo itself

**README standard for each pinned repo:**
- What it is (1 para)
- Tech stack
- How to run locally
- Screenshots or architecture diagram

---

## 10. LinkedIn Optimization Plan

**Headline (current → updated):**
```
Full-Stack Developer | Python · Django · React · LLM Integration | KPMG India
```

**About section:** Mirror portfolio positioning — production systems, AI integration, enterprise experience.

**Featured section:** Pin portfolio link + best Hashnode article when published.

**Experience:** Mirror resume bullets exactly — same metrics, same language.

**Skills to list (top 5 for endorsements):**
1. Python
2. Django
3. React.js
4. Apache Kafka
5. LLM Integration / Generative AI

---

## 11. Build Order (Recommended)

| Phase | Task | Priority |
|---|---|---|
| 0 | Rename current repo to `portfolio-v1-archive` → create fresh `yourusername.github.io` repo | First |
| 1 | Write case study content (chatbot first) | Highest |
| 2 | Set up Vite + React + Tailwind + shadcn/ui + gh-pages | High |
| 3 | Build Hero + Nav | High |
| 4 | Build Experience + Projects sections | High |
| 5 | Build Skills + What I Build | Medium |
| 6 | Build Case Study pages | Medium |
| 7 | Build Blog + GitHub + Contact sections | Medium |
| 8 | Animations with Framer Motion | Medium |
| 9 | Deploy to GitHub Pages (`npm run deploy`) | High |
| 10 | GitHub profile cleanup + pin repos | Medium |
| 11 | LinkedIn optimization | Medium |
| 12 | Write + publish Hashnode articles | Ongoing |
| 13 | **Future:** Migrate to cheap VPS + custom domain | Low (later) |

---

## 12. Content Still Needed From You

Before implementation starts, gather these:

- [ ] Your full name (for hero + meta)
- [ ] Email address (for contact section)
- [ ] LinkedIn URL
- [ ] GitHub username
- [ ] Phone number (optional, contact section)
- [ ] Professional photo (optional — for About if added)
- [ ] Resume PDF (final version — for download link)
- [ ] Domain name (if purchased)
- [ ] Any screenshots of digiSOP or KCRA UI (for project cards — blur sensitive data)
- [ ] Architecture diagrams (can build these together)

---

## 13. Responsive Design Plan

### Breakpoints (Tailwind defaults)

| Breakpoint | Width | Layout Behaviour |
|---|---|---|
| default | 0–639px | Mobile — single column, stacked |
| `sm` | 640px | Minor adjustments, still single column |
| `md` | 768px | 2-column grids start |
| `lg` | 1024px | Full layout, timeline line visible |
| `xl` | 1280px | Max content width locked at `max-w-6xl` |

### Section-by-Section Mobile Behaviour

| Section | Desktop | Mobile |
|---|---|---|
| Hero | Left text + Right terminal side by side | Stacked — text first, terminal below, reduced font |
| Navbar | Fixed top with all links | Hamburger → full screen overlay menu |
| What I Build | 3 cards in a row | Single column stack |
| Experience | Timeline with left cyan line | Simplified — no line, stacked entries |
| Projects | 2-column grid | Single column |
| Skills | Multi-row tag grid | Wrapping tag rows |
| Case Studies | 2 large cards side by side | Single column |
| Blog | 3 cards in a row | Single column |
| GitHub Calendar | Full width | Horizontally scrollable |
| Contact | Centered links | Centered — works as-is |

### Terminal on Mobile
- Reduce font size to `text-xs`
- Shorten line content if needed to avoid wrapping
- Keep animation — it's the signature element, never hide it
- Add `overflow-hidden` on container to prevent horizontal scroll

### Tailwind Responsive Pattern to Follow
```jsx
// Example — Projects grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// Example — Hero layout
<div className="flex flex-col lg:flex-row items-center gap-12">

// Example — Section padding
<section className="py-16 lg:py-24 px-4 lg:px-0">
```

---

## 14. Folder Structure

```
portfolio-v2/
├── public/
│   ├── resume.pdf              ← Final resume — served as static asset
│   ├── favicon.ico
│   └── og-image.png            ← Open Graph image for LinkedIn/Twitter previews
│
├── src/
│   ├── config/
│   │   └── portfolio.js        ← Single source of truth for all personal data
│   │
│   ├── data/
│   │   ├── experience.js       ← KPMG + AutoPeepal entries
│   │   ├── projects.js         ← All project cards data
│   │   ├── skills.js           ← Skills grouped by category
│   │   ├── caseStudies.js      ← Case study metadata + content
│   │   └── blog.js             ← Hashnode article links + metadata
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── WhatIBuild.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── CaseStudies.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── GitHub.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Terminal.jsx    ← Animated terminal — signature element
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── SkillTag.jsx
│   │   │   ├── TimelineEntry.jsx
│   │   │   ├── CaseStudyCard.jsx
│   │   │   ├── BlogCard.jsx
│   │   │   ├── SectionLabel.jsx ← Eyebrow labels (CAPABILITIES, WORK etc.)
│   │   │   └── Button.jsx
│   │   │
│   │   └── animations/
│   │       ├── FadeUp.jsx      ← Reusable scroll-triggered fade up wrapper
│   │       └── StaggerContainer.jsx ← Staggered children animation wrapper
│   │
│   ├── pages/
│   │   ├── Home.jsx            ← All 9 sections assembled in order
│   │   └── case-studies/
│   │       ├── ChatbotCaseStudy.jsx
│   │       └── WikitracCaseStudy.jsx
│   │
│   ├── styles/
│   │   └── index.css           ← Tailwind directives + minimal global styles
│   │
│   ├── App.jsx                 ← Router setup
│   └── main.jsx                ← Entry point
│
├── .env                        ← Only if using EmailJS or any API key (VITE_ prefix)
├── .gitignore
├── index.html                  ← Font imports (Google Fonts) go here
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 15. Routing Plan

Using `react-router-dom v6`.

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChatbotCaseStudy from './pages/case-studies/ChatbotCaseStudy'
import WikitracCaseStudy from './pages/case-studies/WikitracCaseStudy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/chatbot" element={<ChatbotCaseStudy />} />
        <Route path="/case-study/wikitrac" element={<WikitracCaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}
```

**GitHub Pages routing fix — important:**
React Router uses client-side routing. GitHub Pages doesn't support it natively — direct URL visits to `/case-study/chatbot` will return 404.

Fix: Add a `404.html` file in `public/` that redirects to `index.html`:
```html
<!-- public/404.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
</html>
```

And in `index.html`, add before `</body>`:
```html
<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

---

## 16. Config File — `src/config/portfolio.js`

```javascript
const portfolio = {
  // Personal
  name: "Your Full Name",
  shortName: "YourFirstName",
  title: "Full-Stack Developer & AI-Integrated Engineer",
  tagline: "I build production-grade systems — from real-time data pipelines to LLM-powered enterprise tools.",
  location: "Gurgaon, India",
  openTo: ["Full-time", "Freelance"],

  // Contact
  email: "your@email.com",
  phone: "+91 XXXXXXXXXX",       // set to null to hide
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  githubUsername: "yourusername", // for react-github-calendar

  // Assets
  resumeUrl: "/resume.pdf",      // place PDF in public/resume.pdf
  ogImage: "/og-image.png",      // place in public/og-image.png

  // Terminal lines (Hero signature element)
  terminalLines: [
    "> initializing portfolio...",
    "> name: Your Full Name",
    "> role: Full-Stack Developer · AI Engineer",
    "> stack: Python · Django · React · PostgreSQL · Kafka",
    "> currently: KPMG India — Compliance & AI Systems",
    "> open_to: Full-time · Freelance",
    "> status: ready ✓",
  ],
}

export default portfolio
```

---

## 17. Data Files

### `src/data/experience.js`
```javascript
export const experiences = [
  {
    id: 1,
    company: "KPMG India",
    role: "Full Stack Developer",
    product: "KCRA — KPMG Compliance Reporting Assessor",
    location: "Gurgaon, India",
    period: "Feb 2025 — Present",
    current: true,
    highlights: [
      "Architected Django/DRF backend with layered pattern and RBAC across 6 user roles in multi-tenant compliance workflows",
      "Built dual-source LLM chatbot — Text-to-SQL engine for live compliance data + RAG pipeline for knowledge base queries",
      "Async Excel report generation with Celery + Redis processing 50,000+ records in background",
      "Implemented immutable audit trail across 3-stage approval chain (Owner → Escalator → Auditor)",
      "Automated nightly deadline checks via Celery Beat; configured Apache2 as reverse proxy for production",
    ],
    tags: ["Django", "DRF", "Celery", "Redis", "PostgreSQL", "LLM", "RAG", "AWS", "Azure"],
  },
  {
    id: 2,
    company: "AutoPeepal Technologies Pvt. Ltd",
    role: "MERN Stack Developer",
    product: "Wikitrac — Vehicle Telematics Platform",
    location: "Pune, India",
    period: "Sep 2023 — Jan 2025",
    current: false,
    highlights: [
      "Built real-time GPS ingestion pipeline processing 2,000+ events/sec using Apache Kafka with 3 independent consumers",
      "Designed WebSocket live dashboard (Socket.io + Redis pub/sub) supporting 500+ concurrent users",
      "Implemented geofence breach and speed alert system — Redis-cached data reduced PostgreSQL load by 80%",
      "Containerised and deployed on DigitalOcean with Docker and Nginx reverse proxy",
      "Recognised as Outstanding Performer for contributions to the Wikitrac platform",
    ],
    tags: ["Node.js", "React", "Kafka", "Socket.io", "Redis", "MongoDB", "Docker", "DigitalOcean"],
  },
]
```

### `src/data/projects.js`
```javascript
export const projects = [
  {
    id: 1,
    title: "KPMG Compliance Reporting Assessor",
    subtitle: "KCRA",
    badge: "Enterprise · Production",
    badgeColor: "cyan",
    description: "Centralised compliance management platform serving enterprise clients across media, manufacturing, automotive, and banking sectors. Multi-tenant, RBAC-driven with full audit trails and AI-powered natural language querying.",
    highlights: [
      "6-role RBAC with multi-tenant isolation",
      "Dual-source LLM chatbot (Text-to-SQL + RAG)",
      "Async Excel reports — 50,000+ records",
      "3-stage approval chain with immutable audit trail",
    ],
    tags: ["Django", "DRF", "Celery", "Redis", "PostgreSQL", "Apache2", "AWS", "LLM"],
    caseStudyUrl: "/case-study/chatbot",
    githubUrl: null,
    note: "Code is proprietary — see Case Study for architecture deep dive",
  },
  {
    id: 2,
    title: "Vehicle Telematics Platform",
    subtitle: "Wikitrac",
    badge: "Enterprise · Production",
    badgeColor: "cyan",
    description: "High-throughput real-time GPS tracking platform for fleet management. Processes thousands of live location events per second with sub-second dashboard refresh.",
    highlights: [
      "2,000+ GPS events/sec via Apache Kafka (3 consumers)",
      "500+ concurrent WebSocket users",
      "Redis geofence cache — 80% DB load reduction",
      "Dockerised on DigitalOcean with Nginx",
    ],
    tags: ["Node.js", "React", "Kafka", "Socket.io", "Redis", "MongoDB", "Docker"],
    caseStudyUrl: "/case-study/wikitrac",
    githubUrl: null,
    note: "Code is proprietary — see Case Study for architecture deep dive",
  },
  {
    id: 3,
    title: "Digital SOP Management Tool",
    subtitle: "digiSOP",
    badge: "POC → Product",
    badgeColor: "violet",
    description: "Built end-to-end solo — a platform to author, version, and distribute Standard Operating Procedures digitally. Multi-stage approval chains, RACI matrix tracking, and visual flowchart integration. POC converted into a client-adopted product.",
    highlights: [
      "Solo end-to-end build",
      "Multi-stage approval chain with version control",
      "RACI matrix + reader acknowledgement tracking",
      "Draw.io integration for visual SOP authoring",
    ],
    tags: ["FastAPI", "React", "PostgreSQL", "Redis", "Celery"],
    caseStudyUrl: null,
    githubUrl: null,
    note: "Enterprise project — architecture walkthrough available",
  },
  {
    id: 4,
    title: "Personal Time Intelligence",
    subtitle: "Chronicle",
    badge: "Personal · In Progress",
    badgeColor: "amber",
    description: "A full 24-hour personal time tracking and analytics tool. Built to understand how time is actually spent across work and personal life — with category breakdowns, trends, and insights.",
    highlights: [
      "Full 24-hour time tracking",
      "Category-based analytics and trends",
      "Django REST + React frontend",
      "Personal project — open source",
    ],
    tags: ["Django", "React", "PostgreSQL", "Tailwind"],
    caseStudyUrl: null,
    githubUrl: "https://github.com/yourusername/chronicle", // update when ready
    note: "Currently in development",
  },
]
```

### `src/data/skills.js`
```javascript
export const skills = [
  { category: "Languages",         items: ["Python", "JavaScript (ES6+)"] },
  { category: "Backend",           items: ["Django", "DRF", "FastAPI", "Celery", "Node.js", "Express.js"] },
  { category: "Frontend",          items: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Databases",         items: ["PostgreSQL", "MongoDB", "Redis"] },
  { category: "Messaging & Realtime", items: ["Apache Kafka", "WebSocket", "Socket.io"] },
  { category: "AI & LLM",          items: ["LLM Integration", "Text-to-SQL", "RAG Pipelines", "Prompt Engineering"] },
  { category: "DevOps & Cloud",    items: ["Docker", "Nginx", "Apache2", "AWS", "Azure", "DigitalOcean", "CI/CD"] },
  { category: "Tools",             items: ["Git", "Postman", "VS Code"] },
]
```

### `src/data/blog.js`
```javascript
export const articles = [
  {
    id: 1,
    title: "Building a Deterministic Text-to-SQL Engine with RBAC for Enterprise Data",
    description: "How I designed a multi-layer LLM chatbot with intent classification, dynamic schema injection, and SQL safety guardrails for a live compliance system.",
    tags: ["LLM", "Text-to-SQL", "Django", "PostgreSQL"],
    readTime: "8 min read",
    url: "https://hashnode.com/", // update when published
    status: "draft", // draft | published
  },
  {
    id: 2,
    title: "RAG vs Text-to-SQL — Choosing the Right LLM Pattern",
    description: "A practical breakdown of when to use retrieval-augmented generation versus structured SQL querying — and how I used both in the same system.",
    tags: ["LLM", "RAG", "Architecture"],
    readTime: "6 min read",
    url: "https://hashnode.com/",
    status: "draft",
  },
  {
    id: 3,
    title: "Real-Time GPS Tracking at Scale with Kafka and WebSockets",
    description: "How we built a vehicle telematics pipeline processing 2,000+ events/sec with Kafka, three independent consumers, and a Redis pub/sub live dashboard.",
    tags: ["Kafka", "WebSocket", "Redis", "Node.js"],
    readTime: "7 min read",
    url: "https://hashnode.com/",
    status: "draft",
  },
]
```

---

## 18. Package Installation Commands

Run these in order after cloning repo locally:

```bash
# 1. Initialise Vite + React
npm create vite@latest . -- --template react

# 2. Install dependencies
npm install

# 3. Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Routing
npm install react-router-dom

# 5. Animations
npm install framer-motion

# 6. Icons
npm install lucide-react

# 7. GitHub calendar
npm install react-github-calendar

# 8. GitHub Pages deploy
npm install -D gh-pages

# 9. Smooth scroll (optional — CSS scroll-behavior is enough)
# Skip — use CSS: html { scroll-behavior: smooth; }
```

---

## 19. Key Config Files

### `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // '/' for yourusername.github.io primary repo
             // '/portfolio-v2/' if deploying as project page during dev
})
```

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A0F1E',
        slate: '#111827',
        border: '#1E2A3A',
        cyan: '#00D4FF',
        violet: '#7C3AED',
        'text-primary': '#F1F5F9',
        'text-secondary': '#94A3B8',
        emerald: '#10B981',
        amber: '#F59E0B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
```

### `index.html` — Font imports
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Name — Full-Stack Developer & AI Engineer</title>
    <meta name="description" content="Full-Stack Developer with 3+ years building production systems. Python, Django, React, LLM integration. Open to full-time and freelance." />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono&display=swap" rel="stylesheet">

    <!-- OG Meta -->
    <meta property="og:title" content="Your Name — Full-Stack Developer" />
    <meta property="og:description" content="Building production-grade systems and AI-integrated tools." />
    <meta property="og:image" content="/og-image.png" />
    <meta property="og:type" content="website" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>

    <!-- GitHub Pages SPA redirect fix -->
    <script>
      (function(){
        var redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        if (redirect && redirect !== location.href) {
          history.replaceState(null, null, redirect);
        }
      })();
    </script>
  </body>
</html>
```

### `src/styles/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
  background-color: #0A0F1E;
}

body {
  font-family: 'Inter', sans-serif;
  color: #F1F5F9;
  -webkit-font-smoothing: antialiased;
}

/* Reduced motion accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Custom scrollbar — dark themed */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0A0F1E; }
::-webkit-scrollbar-thumb { background: #1E2A3A; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #00D4FF; }
```

### `package.json` — add these fields
```json
{
  "homepage": "https://yourusername.github.io",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

## 20. Component Build Order

Build in this exact sequence — each step is testable before moving to the next:

```
Step 1  — Setup & Config
        Install all packages
        Configure Tailwind + fonts
        Create portfolio.js + all data files
        Set up App.jsx with routing

Step 2  — Layout Shell
        Navbar.jsx (desktop links + mobile hamburger)
        MobileMenu.jsx (full screen overlay)
        Footer.jsx (minimal — name + links)
        Home.jsx (empty shell with section placeholders)

Step 3  — Hero Section
        Terminal.jsx (animated — build this carefully, it's the signature)
        Hero.jsx (layout + Terminal + CTAs)
        Test on mobile — stacking behaviour

Step 4  — FadeUp + StaggerContainer animations
        Build reusable wrappers once
        Apply to all subsequent sections

Step 5  — What I Build
        3 cards, icons from lucide-react
        Fully responsive

Step 6  — Experience
        TimelineEntry.jsx
        Experience.jsx (map over experiences data)

Step 7  — Projects
        ProjectCard.jsx
        Projects.jsx (2-col grid)

Step 8  — Skills
        SkillTag.jsx
        Skills.jsx (map over skills data by category)

Step 9  — Case Study Section (homepage cards only)
        CaseStudyCard.jsx
        CaseStudies.jsx

Step 10 — Blog
        BlogCard.jsx
        Blog.jsx

Step 11 — GitHub + Contact
        GitHub.jsx (react-github-calendar)
        Contact.jsx (links only)

Step 12 — Case Study Pages
        ChatbotCaseStudy.jsx
        WikitracCaseStudy.jsx

Step 13 — Polish pass
        Test all animations
        Test all breakpoints (375px, 768px, 1280px)
        Check reduced motion
        Lighthouse audit

Step 14 — Deploy
        npm run deploy
        Verify live at yourusername.github.io
```

---

## 21. `.gitignore`

```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
```

---

## 12. Content Still Needed From You

Before implementation starts, gather these:

- [ ] Your full name (for hero + meta)
- [ ] Email address (for contact section)
- [ ] LinkedIn URL
- [ ] GitHub username
- [ ] Phone number (optional, contact section)
- [ ] Resume PDF (final version — place in `public/resume.pdf`)
- [ ] OG image (`public/og-image.png`) — can generate together
- [ ] Any screenshots of digiSOP or KCRA UI (blur sensitive data)
- [ ] Architecture diagrams — can build these together
- [ ] Chronicle GitHub repo URL (when ready)
- [ ] Hashnode profile URL (when articles are published)

---

*Document version: 2.0 — Full implementation blueprint*
*Last updated: June 2026*
