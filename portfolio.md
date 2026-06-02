# Jackson Maitner — Project Portfolio

_Generated from a read-only scan of every project folder in `/Users/jacksonmaitner/Claude` on 2026-06-01. No source code was modified._

This file is the **source data** for a portfolio website. It documents what each project is, the real problem it solved for a business, what was actually built (stack + non-obvious work), where AI was leveraged, and where it lives.

---

## Summary Table

| # | Name | One-line pitch | Stack | Status | Live link |
|---|------|----------------|-------|--------|-----------|
| 1 | **La Lancha** (LuisBoat) | Booking + full ops backend for a Chicago private boat-charter business | Astro · Cloudflare Workers · Google Apps Script · Stripe · JotForm · Google Calendar/Sheets/Drive | **Shipped (live, paying client)** | Domain pending (`lanchaboat.com` / `la-lancha.com`); deploys to Cloudflare Workers |
| 2 | **Grandson's Construction** | Contractor marketing site with an AI-powered instant-quote engine | Astro 6 · Tailwind 4 · Cloudflare Worker · Anthropic Claude API · Google Sheets | **Shipped (live)** | https://grandsons-construction.pages.dev |
| 3 | **TDLR Guide** (Astro TDLRguide) | Comparison + directory site for Texas defensive-driving courses | Astro 4 · React · Tailwind · GA4 · multi-env CI | **Shipped (live)** | https://txcourseguide.com · https://tdlrguide.com |
| 4 | **Jackson-bot** | AI agent that answers recruiter questions about Jackson 24/7 | Cloudflare Workers · Claude Sonnet 4.6 · KV rate-limiting | **Shipped** | Deployed on Cloudflare Workers (URL not in repo) |
| 5 | **Virginia DIC Course** | Submission-ready 16-module Virginia Driver Improvement Clinic course | DOCX authoring · legal-citation audit · 82 embedded graphics | **Shipped (submission-ready)** | N/A (regulatory deliverable) |
| 6 | **CourtResearchTX** | Automated legal research bot for 25 Texas municipal courts | Node.js (ESM) · Claude Sonnet 4.6 · `web_search` tool | **Active tool** | N/A (CLI/data tool) |
| 7 | **The Grateful Team** | Recruitment + info site for a Make-A-Wish charity cycling team | Static HTML/CSS/JS · Cloudflare Pages/Workers · Klaviyo | **Shipped (live)** | https://thegratefulteam.com · staging: the-grateful-team-website.pages.dev |
| 8 | **Waterfront** | Internal materials-takeoff + quoting tool for a decking/seawall contractor | React 18 · Vite · Tailwind · localStorage | **Active** | Not found (local-first SPA) |
| 9 | **Florida BDI Course** | Florida Basic Driver Improvement course content + DMV submission package | Modular Markdown · media pipeline | **Shipped** | N/A (course content) |
| 10 | **TX Competitor Scraper** | Scrapes ~150 competitor driving-school sites for pricing intel | Python · Playwright · BeautifulSoup · pandas | **Complete (tool)** | N/A (CLI tool) |
| 11 | **TDLRGUIDE (Next.js)** | Database-backed rebuild of the TDLR comparison site | Next.js 16 · React 19 · Prisma · SQLite · Radix UI | **Prototype / in-dev** | Not found |
| 12 | **RRS Comparison Video** | Animated marketing video comparing Road Ready Safety vs. competitors | Remotion 4 · React · TypeScript | **Prototype** | N/A (video asset) |
| 13 | **Portal** | LMS import spreadsheets for FL/TX driver-improvement courses | XLSX data transforms | **Production data** | N/A (data files) |

---

## Projects (most portfolio-worthy first)

### 1. La Lancha — `LuisBoat/`
> **Why #1:** A complete, live, end-to-end product for a real paying client (Luis Vecchio's Chicago boat-charter business). It spans a public marketing/booking site, a fully automated back-office, live Stripe payments, and signed legal waivers — the most complex and most "shipped" system in the portfolio.

- **One-line pitch:** Booking website + a fully automated operations backend for *La Lancha*, a private boat-charter business running the boat *Quarters* out of Diversey Harbor, Chicago.
- **Problem it solves:** A solo charter operator can't manually juggle bookings across platforms, calendar conflicts, deposits, signed waivers, fuel invoicing, and review requests. Without automation, double-bookings, missed paperwork, and lost follow-ups cost real revenue and create liability.
- **What I built:**
  - **Front end:** Astro static site (marketing + booking flow + SEO "where we go" destination pages), deployed to **Cloudflare Workers** static assets. Live per-date pricing and availability fetched on demand.
  - **Backend ("the brain"):** A single **Google Apps Script** web app that orchestrates the entire operation: on a new booking it checks the *Quarters Charters* Google Calendar with a **race-condition guard**, auto-creates the calendar event, spins up a Drive folder, logs the Bookings row, seeds the Guests roster, and fires templated onboarding emails to both guest and owner.
  - **Payments & paperwork:** **Stripe (live)** via a prefilled "User Defined Amount" link, **JotForm** Charter Agreement + Waiver. A **10-minute reconciliation timer** reads the JotForm→Sheets data and stamps `Paid / AgreementSigned / WaiverSigned` back onto bookings, alerting on **payment-amount mismatches**.
  - **Ops automation:** Captain post-charter Google Form → automatic **fuel-cost computation** ($25 flat / $25-per-hr rules) → invoice email. Daily triggers for waiver-reminder digests (9am) and automated Google-review requests to finished charters (10am).
  - **Non-obvious engineering:** Apps Script web-app POST returns a 302; solved CORS preflight by sending `Content-Type: text/plain`. Idempotent `setupLaLanchaSystem()` bootstrap. Clean owner **HANDOFF.md** + a `CLAUDE.md` primer for future maintainers.
- **AI leverage:** Built rapidly via AI-assisted development; a maintainer `CLAUDE.md` primer encodes the full data flow so the system is AI-maintainable going forward.
- **Live link:** Domain pending (`lanchaboat.com` vs `la-lancha.com`); currently deploys to Cloudflare Workers. **(please confirm final domain)**
- **Repo link:** https://github.com/jmaitner/lalancha.git
- **Status:** **Shipped** — live external integrations (Stripe live, Google Workspace, JotForm). Last commit 2026-06-01.
- **Assets:** 20+ real charter photos (`site/public/images/quarters1–21.jpg`), `og.jpg`, `favicon.svg`.

---

### 2. Grandson's Construction — `Construction Website/grandsons-construction/`
> **Why #2:** Live site for a real contractor client, and the standout technical hook is an **AI-powered instant-quote worker** — a customer fills a form and Claude returns a tailored estimate, with the lead saved to Google Sheets. Strong combination of marketing polish, SEO content, and a genuinely useful AI feature.

- **One-line pitch:** Marketing website for Grandson's Construction (decks & fences, West Michigan) with an instant AI-generated quote/lead-capture flow.
- **Problem it solves:** A small contractor loses leads when prospects have to wait days for a callback to get any sense of price. The site captures the lead and returns an instant, credible quote in the moment — "we never want to lose the moment."
- **What I built:**
  - **Front end:** **Astro 6** + **Tailwind 4** static site with a content/SEO **blog** (deck cost in West Michigan, permits in Grand Rapids, decking for Michigan winters, best build season, lakefront ideas, winter maintenance) — built to rank for local intent searches.
  - **Quote engine:** A **Cloudflare Worker** (`grandsons-quote-worker`) exposing `POST /api/submit-lead`. It validates contact fields + consent, has a **honeypot** anti-spam field, calls the **Anthropic Claude API** to generate a tailored quote, and **appends the lead to Google Sheets** via a service account.
  - **Resilience:** If Claude errors, it serves a deterministic `fallbackQuote()`; if the Sheets write fails, it still returns the quote to the customer and flags `saved:false` for monitoring — the customer experience never breaks.
  - **Config/security:** Per-business env vars (`ALLOWED_ORIGIN`, `CONTRACTOR_EMAIL`, branding); secrets (`ANTHROPIC_API_KEY`, `GOOGLE_SHEETS_ID`, `GOOGLE_SERVICE_KEY_JSON`) held in Cloudflare, not committed.
- **AI leverage:** Claude is the core of the quote feature — turning raw form input into a contractor-credible written estimate in real time.
- **Live link:** https://grandsons-construction.pages.dev
- **Repo link:** https://github.com/jmaitner/construction-site.git
- **Status:** **Shipped (live)** — last commit 2026-06-01 ("Replace remaining stock photos with real deck projects").
- **Assets:** 9 real project photos (`public/projects/deck-01…09.jpg`, `fence-01.jpg`), `logo.svg/png`, `og-image.png`, full favicon set.

---

### 3. TDLR Guide — `Astro TDLRguide/`
> **Why #3:** A live, production, multi-environment marketing/comparison property (two live domains) with real CI/CD, analytics, and city-level SEO. Demonstrably shipped and maintained.

- **One-line pitch:** Comparison + directory site that helps Texans pick a state-approved defensive-driving / driver-safety course and understand court requirements by city.
- **Problem it solves:** Course shoppers can't easily compare opaque pricing, hidden fees, and eligibility rules across dozens of providers, and don't know their local court's specifics. This aggregates it into clear, location-aware pages.
- **What I built:**
  - **Stack:** **Astro 4.15** with **React** island components, **Tailwind**, TypeScript.
  - **Features:** City pages (Austin, Dallas, Houston, San Antonio, Harris County…), an **interactive eligibility checker**, court information pages, FAQ, data-driven from `providers.json` / `courts.json`.
  - **Infra:** Multi-environment builds (QA `qa.txcourseguide.com` / Prod `txcourseguide.com`), **GA4** analytics, **reCAPTCHA v3**, inline critical CSS to avoid unstyled-flash after CDN cache invalidation.
  - _(Sister implementations exist in the same repo: a **Nuxt 3 / Vue** version powering `tdlrguide.com` with XLSX→JSON ingest scripts, and a newer **Next.js 16 + Prisma/SQLite** rebuild — see project #11.)_
- **AI leverage:** None in the shipped site itself; competitor pricing data feeding it comes from project #10.
- **Live link:** https://txcourseguide.com · https://tdlrguide.com
- **Repo link:** https://github.com/ventocis/rrsTdlrGuide.git
- **Status:** **Shipped (live)** — actively deployed; last commit 2026-05-18.
- **Assets:** `TDLR GUIDE LOGO.png`, alt-color logo, `public/logo.svg`.

---

### 4. Jackson-bot — `Jackson-bot/`
> **Why #4:** A clever, fully-shipped serverless AI product with real production concerns — rate limiting, anonymized logging, conversation memory, and role-aware responses. Strong technical breadth in a small footprint.

- **One-line pitch:** An AI agent that acts as Jackson's representative, answering recruiter/hiring-manager questions about his background 24/7.
- **Problem it solves:** Recruiters want a fast read on fit before committing to a call; Jackson wants relevant wins surfaced per role without repeating himself. The bot qualifies interest and tailors the pitch instantly.
- **What I built:**
  - **Stack:** **Cloudflare Workers** serverless API + **Claude Sonnet 4.6**, with an HTML/CSS/JS chat UI served from `/public`.
  - **Engineering:** A 177-line system prompt encoding Jackson's voice, work history, and role-framing rules; **conversation memory** (last 14 messages); **rate limiting** of 30 req/IP/hr in **Cloudflare KV**; **fire-and-forget webhook logging** with IP anonymization; CORS; a `/resume` redirect to the role-appropriate PDF (4 role-specific resume variants) with a LinkedIn fallback.
- **AI leverage:** The product *is* the AI — the entire business logic lives in the prompt; Claude does all conversational reasoning while the Worker handles safety and routing.
- **Live link:** Deployed via Wrangler to Cloudflare Workers (URL not stored in repo). **(please add)**
- **Repo link:** https://github.com/jmaitner/jackson-bot
- **Status:** **Shipped** — v1.0.0, last commit 2026-05-28.
- **Assets:** `public/avatar.jpg`.

---

### 5. Virginia DIC Course — `Virginia Course/`
> **Why #5:** The most polished single *deliverable* — a regulation-verified, audited course ready to submit to a state DMV. Shows rigor, domain mastery, and QA discipline, even though it's content rather than code.

- **One-line pitch:** A complete, submission-ready 16-module Virginia Driver Improvement Clinic (DIC) course, verified against May 2026 Virginia law.
- **Problem it solves:** Virginia DMV mandates strict curriculum standards (8 hours, 20 required topics, 6th-grade reading level) and current legal accuracy. Getting any one statute wrong risks rejection; this course is audited and citation-backed.
- **What I built:** 16 modules in DOCX with **82 embedded instructional graphics**; a text-only master for editing and an image master (123.8 MB); a **30 KB citation reference** (456 lines) mapping every claim to Virginia statutes (§§ 18.2-266, 46.2-498, 46.2-1094, 38.2-2206, etc.); and a **final accuracy audit + changelog** (2026-05-31) that verified all images, fixed the insurance minimum to the Jan-2025 $25,000 figure, and removed placeholder gaps.
- **AI leverage:** AI-assisted drafting and the legal-accuracy audit pass against current statute.
- **Live link:** N/A (regulatory submission deliverable).
- **Repo link:** No git repo (standalone document project).
- **Status:** **Shipped / submission-ready** — last updated 2026-05-31.
- **Assets:** 82 PNGs in `Virginia Course/Images/`.

---

### 6. CourtResearchTX — `CourtResearchTX/`
> **Why #6:** A genuinely sophisticated AI automation — using Claude's web-search tool to compile structured legal procedures across 25 courts, with production-grade retry/resume logic. Strong "I used AI to solve a real research problem" story.

- **One-line pitch:** A Node.js bot that uses Claude + web search to compile Driver-Safety-Course procedures for 25 Texas municipal courts into structured data.
- **Problem it solves:** Each court publishes DSC fees, deadlines, and submission rules inconsistently across scattered sites. Attorneys, schools, and drivers need one authoritative, structured source — manual research across 25 courts is slow and error-prone.
- **What I built:** An ESM CLI (`court-research.mjs`) on **Claude Sonnet 4.6** with the **`web_search_20250305`** tool. It pre-seeds each court's known directory data to avoid wasting searches, then extracts structured JSON per court (standard + school-zone fees, online/email/mail/in-person submission methods, required documents, deadlines, portal/form URLs, local rules) with **confidence levels**. **4-attempt exponential backoff** (65/130/195s) for rate limits and **auto-resume** that skips completed courts and retries failures. Output: 1,735 lines of structured court data.
- **AI leverage:** Core — Claude's web search does the research; the engineering is the orchestration, prompting, and reliability layer around it.
- **Live link:** N/A (CLI/data tool).
- **Repo link:** No git remote.
- **Status:** **Active tool** — last modified 2026-05-01; completed runs on file.

---

### 7. The Grateful Team — `GratefulTeam/`
> **Why #7:** A live, polished, mission-driven site with clean fundamentals and real Cloudflare integration. Lower technical complexity than the top tier, but shipped, public, and visually strong.

- **One-line pitch:** Recruitment + information website for The Grateful Team, a Grand Rapids charity cycling team riding the Make-A-Wish Wish-A-Mile 300.
- **Problem it solves:** The team needed a public face to recruit riders of all fitness levels and give them logistics, gear lists, and event info in one place.
- **What I built:** A multi-page static site (home, WAM event, group rides, packing list, gear, FAQ, roster with rider "trading cards") with a **JS partial-injection system** (`nav.js` injects shared nav/footer), responsive mobile-first CSS, full SEO/OpenGraph/Twitter-card meta, and a join form wired for a **Cloudflare Worker → Klaviyo** email flow. Strava API integration scaffolding present.
- **AI leverage:** AI-assisted build; planned join-form automation.
- **Live link:** https://thegratefulteam.com (staging: the-grateful-team-website.pages.dev)
- **Repo link:** https://github.com/jmaitner/the-grateful-team-website
- **Status:** **Shipped (live)** — last commit 2026-05-31.
- **Assets:** team cover photo, logo (`tgt-logo-1x1.png`), 6 event photos in `assets/images/wam-past/`.

---

### 8. Waterfront — `Waterfront/`
> **Why #8:** A real internal tool that solves a money problem (material waste) for a decking/seawall contractor. Solid React engineering with non-trivial domain formulas, though local-only and not yet deployed.

- **One-line pitch:** Internal quoting tool that turns a job spec into an accurate materials takeoff (with waste/leftover math), labor estimate, and a branded customer quote.
- **Problem it solves:** Manual takeoffs over- or under-order materials — up to ~$1,000 of leftover decking per job. This merges component formulas into one order sheet with predicted leftovers and cuts quoting time.
- **What I built:** A **React 18 + Vite + Tailwind** single-page app. Job/component editor (deck sections, stair runs, railings, seawalls), a parts-list merger with waste calc, an editable materials review table, a pricing-config panel persisted to **localStorage**, a labor estimator, and a print-to-PDF / CSV customer-quote generator. Domain formulas (joists, decking rows, fasteners, leftover math) isolated in `src/materialRules.js`. Local-first, no backend, no auth.
- **AI leverage:** AI-assisted build.
- **Live link:** Not found (local-first SPA). **(consider deploying)**
- **Repo link:** https://github.com/jmaitner/waterfront.git
- **Status:** **Active** — last commit 2026-05-31.
- **Assets:** `public/favicon.svg` only (UI tool, few graphics).

---

### 9. Florida BDI Course — `Florida BDI/`
> **Why #9:** A shipped course-content deliverable bundled with a full state submission package. Real regulatory value; content rather than code.

- **One-line pitch:** Complete Florida Basic Driver Improvement (BDI) course — modular Markdown lessons plus the Florida DOR submission package.
- **Problem it solves:** Florida courts mandate Driver Improvement Clinic completion; the provider needs compliant, deployable course content that meets DMV/DOR standards.
- **What I built:** 9 course modules as segmented `STEP-*.content.md` files with timed lesson structure, 54 embedded instructional images, and a custom Markdown image-directive syntax (`:::content-image{src=… size= align=}`). Bundled regulatory package: blank/approved application forms, a question bank, and an 11.8 MB final Florida BDI script submission. (Content pulled from the Road Ready `rrsUi` codebase.)
- **AI leverage:** AI-assisted content authoring.
- **Live link:** N/A (course content).
- **Repo link:** No local git repo.
- **Status:** **Shipped** — last updated 2026-06-01.
- **Assets:** 54 images in `fl-bdi course (pulled from rrsUi)/media/media/`.

---

### 10. TX Competitor Scraper — `TX Competitor Scraper/`
> **Why #10:** A complete, clever data tool — its template-fingerprint duplicate detection is a genuinely smart touch — but it's a one-off CLI with no remote repo or deployment.

- **One-line pitch:** Python scraper that visits ~150 Texas driving-school sites and extracts pricing, fees, and features into a competitive-research spreadsheet.
- **Problem it solves:** Manually researching 150+ competitor sites for pricing is hours of tedium; the data is needed to position the TDLR Guide product (#3).
- **What I built:** A Python pipeline using **requests** + **BeautifulSoup** with **Playwright** fallback for JS-heavy sites, **pandas/openpyxl** for Excel I/O, and **googlemaps** for geocoding. Extracts price, add-on fees, and feature flags (state-approved, no final exam, self-paced, guarantee, duration). **Non-obvious win: duplicate detection via HTML-structure fingerprinting** (hashing tag sequences) to group white-label sites running the same template under different brands. Rate-limited, User-Agent rotation, CLI with `--limit` test mode; outputs a Research sheet + Duplicate_Groups sheet.
- **AI leverage:** None in the tool itself.
- **Live link:** N/A (CLI tool).
- **Repo link:** No git remote.
- **Status:** **Complete** — last activity 2026-03-09.
- **Assets:** scraper screenshots in `screenshots/` (reference only).

---

### 11. TDLRGUIDE (Next.js) — `TDLRGUIDE/`
> **Why #11:** A more ambitious, database-backed rebuild of the live TDLR Guide (#3) with reviews and price history — but still in development with no live deployment, so it ranks below the shipped version.

- **One-line pitch:** Database-backed rebuild of the TDLR comparison site, adding user reviews, price-history tracking, and an admin dashboard.
- **Problem it solves:** The static site can't store reviews or track pricing over time; this turns the guide into a dynamic, searchable marketplace.
- **What I built:** **Next.js 16 (App Router)** + **React 19** + **TypeScript**, **Prisma 5 ORM** on **SQLite**, **Radix UI** components, Tailwind. Data models for `CoursePlatform`, `TDLRSchool` (license #, city/zip), reviews with an approval workflow, and price history; feature pages for compare / continuing-ed / driver-ed / driving-records / driving-safety, a deadline calculator, an admin dashboard, and a DB-driven sitemap.
- **AI leverage:** AI-assisted build.
- **Live link:** Not found.
- **Repo link:** https://github.com/ventocis/rrsTdlrGuide.git
- **Status:** **Prototype / in development** — last commit 2026-03-08.

---

### 12. RRS Comparison Video — `rrs-comparison-video/`
> **Why #12:** A finished-but-static marketing asset built with code (Remotion). Nice that it's React-driven video, but it's a single prototype output with no repo or deployment.

- **One-line pitch:** Code-generated animated marketing video comparing Road Ready Safety against competing Texas defensive-driving courses.
- **Problem it solves:** Marketing needs a visual asset to differentiate RRS on price (competitor hidden fees), features, and positioning.
- **What I built:** A **Remotion 4** (React + TypeScript) video, ~4:37 synced to `voiceover.mp3`, with scenes Hook → HiddenFees → WhatMatters → RRSPosition → CTA using Remotion `spring`/`interpolate` transitions.
- **AI leverage:** AI-assisted script/scene authoring.
- **Live link:** N/A (video asset).
- **Repo link:** No git remote.
- **Status:** **Prototype** — last modified 2026-03-31.
- **Assets:** `public/RRSnewlogo (6).png`.

---

### 13. Portal — `Portal/`
> **Why #13 (last):** Pure backend data files with no UI, code, or narrative of their own. Real production utility, but the least demonstrable as a portfolio piece.

- **One-line pitch:** LMS import spreadsheets that deploy Florida BDI and Texas TDLR course content into a learning-platform/portal.
- **Problem it solves:** Course content authored in Markdown must be transformed into a standardized spreadsheet format for database/LMS import.
- **What I built:** Three production XLSX import files (FL BDI full course — original + a rebuilt version — and TX TDLR full course) structuring lessons, steps, and metadata for import.
- **Live link:** N/A.
- **Repo link:** No git repo.
- **Status:** **Production data** — last updated 2026-06-01.

---

## Gaps — fix these before/while building the site

**Missing a live link (deploy or add the URL):**
- **La Lancha** — final domain undecided (`lanchaboat.com` vs `la-lancha.com`); deploys to Cloudflare Workers but no public URL recorded.
- **Jackson-bot** — deployed to Cloudflare Workers but the public URL isn't in the repo. Add it.
- **TDLRGUIDE (Next.js)** — no deployment; ship it or fold it into the live TDLR Guide story.
- **Waterfront** — local-only SPA; consider a Cloudflare Pages deploy for a clickable demo.

**Missing a README:**
- **Grandson's Construction** still has the default Astro starter README (no project-specific docs).
- **CourtResearchTX**, **TX Competitor Scraper**, **Virginia Course**, **Florida BDI**, **Portal**, **rrs-comparison-video** — confirm each has (or add) a short README; several have no git repo at all.

**Missing a git remote (not backed up to GitHub/GitLab):**
- CourtResearchTX, TX Competitor Scraper, rrs-comparison-video, Florida BDI, Virginia Course, Portal — local-only. Push these so they survive and so repo links exist for the portfolio.

**Unclear / weak as standalone portfolio pieces:**
- **Portal** (data files only) and **RRS Comparison Video** (single rendered asset) are better shown as *supporting evidence* inside a Road Ready Safety case study than as standalone projects.

**Naming / presentation notes (not blockers):**
- Several folders share one product (Astro TDLRguide + TDLRGUIDE Next.js + the Nuxt version + TX Competitor Scraper + Florida BDI + Virginia Course + Portal + RRS video all serve **Road Ready Safety**). On the website these are strongest grouped as **one Road Ready Safety case study** with sub-projects, rather than 7 separate cards.

---

## Suggested grouping for the website

The 13 folders really represent **~5 client/venture stories**:

1. **La Lancha** — boat-charter booking + ops automation (client: Luis Vecchio).
2. **Grandson's Construction** — contractor site + AI quoting (client: Richard / Grandson's Construction LLC).
3. **Road Ready Safety** — the big one: live comparison sites (TDLR Guide), competitor scraper, court-research AI bot, and full state-compliant courses (Virginia, Florida) + LMS import + marketing video.
4. **The Grateful Team** — charity cycling site (Make-A-Wish).
5. **Jackson-bot + Waterfront** — personal/tooling projects showing AI + product engineering range.

Framed this way, the portfolio reads as: _"I find a business's real bottleneck, then use AI and modern web stacks to ship the system that fixes it."_
