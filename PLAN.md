# Portfolio Website — Build Plan

**Stack:** Astro 6 + Tailwind 4 (matches Grandson's, La Lancha, TDLR Guide). Static output → deploy to Cloudflare Pages.
**Audience:** Balanced — a credible agency front for prospective clients *and* a deeper "how I solved it with AI" layer for employers.
**Structure:** Grouped into ~5 client/venture case studies, not 13 loose cards.
**Location:** `portfolio/site/` (all existing project code stays untouched; assets get *copied* into `site/public/`, originals never moved).

---

## 1. Information architecture

Single-page scroll with anchored nav + dedicated case-study detail pages.

```
/                      Home (hero → ventures grid → selected work → about → contact)
/work/la-lancha        Case study: boat-charter booking + ops automation
/work/grandsons        Case study: contractor site + AI quote engine
/work/road-ready       Case study: Road Ready Safety (umbrella — sites, AI bot, scraper, courses)
/work/grateful-team    Case study: Make-A-Wish charity cycling site
/work/labs             "Labs" — Jackson-bot + Waterfront (AI/tooling range)
```

Each case study uses one consistent template (below), so they look like a cohesive body of work.

## 2. Home page sections
1. **Hero** — one line that states the thesis: *"I find a business's real bottleneck, then build the system — usually AI-powered — that fixes it."* Subhead + two CTAs: "See the work" / "Work with me". Avatar from `Jackson-bot/public/avatar.jpg`.
2. **Stats strip** — quiet credibility row: e.g. _5 ventures · live Stripe payments shipped · AI quote engine in production · 2 live comparison sites · state-approved courses_. (Only true, verifiable claims.)
3. **Ventures grid** — 5 cards, each: client name, one-line pitch, stack chips, status badge, hero image, "Read the case study →".
4. **Selected work highlights** — 2–3 pull-quotes of the most impressive engineering (the La Lancha reconciliation engine; the Grandson's AI quote worker with graceful fallback; the CourtResearchTX web-search bot).
5. **Approach / About** — short narrative for both audiences: how you work, the AI-leverage angle, the dual hat (client-facing builder + employable engineer).
6. **Contact** — email CTA + links (GitHub `jmaitner`, LinkedIn, Jackson-bot if a live URL is supplied).

## 3. Case-study template (each /work/* page)
- Title + client + status badge + live/repo links
- **The problem** (who hurts, why) — 2–3 sentences
- **What I built** — narrative + a "Stack" chip row
- **How AI was leveraged** — called out explicitly (employer-facing)
- **Engineering highlights** — 2–4 bullet "proof" points (the non-obvious wins)
- **Gallery** — real photos/screenshots from ASSETS.md
- **Outcome / status** — shipped, live, in dev
- Prev/next case-study nav

## 4. Visual design system
**Direction:** modern editorial — confident, lots of whitespace, big type, restrained color, real photography doing the heavy lifting. Not a generic dev-template.

- **Mode:** light base with an optional dark hero; high contrast, accessible (WCAG AA).
- **Color:** near-black ink `#0F1115`, warm off-white paper `#FAF8F4`, one accent. Proposed accent: a deep teal/marine `#0E7C86` (nods to La Lancha + waterfront work) with a warm amber secondary `#E0A23B` for CTAs. (Easy to swap — single Tailwind config.)
- **Type:** a strong display serif or grotesk for headings (e.g. *Fraunces* or *Geist*), clean sans for body (*Inter*). Self-hosted/Google Fonts.
- **Motion:** subtle scroll-reveal + hover lift on cards; respects `prefers-reduced-motion`. No gratuitous animation.
- **Components:** sticky minimal nav, status badges (Live / Shipped / Prototype color-coded), stack chips, image gallery with lightbox, footer with contact.
- **Responsive:** mobile-first; grid collapses cleanly.

## 5. Content sourcing
- Copy: drawn from `portfolio.md` (already written, factual, no invented claims).
- Images: copied from paths in `assets-manifest/ASSETS.md` into `site/public/`.
- Screenshots still needed (noted in ASSETS.md): Waterfront UI, Jackson-bot chat, live-site shots. I can capture the local ones via the dev-server preview tools during the build; live-site shots may need URLs/permission.

## 6. Build order
1. Scaffold Astro + Tailwind in `portfolio/site/`, set up design tokens (color/type/spacing).
2. Build shared layout, nav, footer, and reusable components (Card, Badge, Chip, Gallery).
3. Home page.
4. The 5 case-study pages from `portfolio.md`.
5. Copy in assets; capture local screenshots; verify in the preview browser.
6. Polish pass (responsive, dark hero, motion, SEO/OG meta), then a build + (optional) Cloudflare Pages deploy.

## 7. Open items / will confirm or assume
- **Accent color & fonts:** will use the teal+amber / Fraunces+Inter proposal unless you say otherwise.
- **Contact email + LinkedIn URL:** need from you (placeholder until provided).
- **Live URLs to link/screenshot:** La Lancha domain + Jackson-bot URL are TBD per the Gaps section.
- **Deploy:** I'll build + verify locally; deploying to Cloudflare Pages is optional and only on your go-ahead.
