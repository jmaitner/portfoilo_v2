export type Status = 'Live' | 'Shipped' | 'Active' | 'Prototype';

export interface SubProject {
  name: string;
  blurb: string;
  stack: string[];
  link?: string;
}

export interface Venture {
  slug: string;
  name: string;
  client: string;
  tagline: string;
  /** short label for the card */
  kicker: string;
  status: Status;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  stack: string[];
  /** the problem narrative */
  problem: string;
  /** what was built */
  built: string;
  /** how AI was leveraged */
  ai: string;
  /** 2-4 proof points */
  highlights: string[];
  /** hero image path under /img, or null to use a typographic card */
  cover?: string;
  /** gallery image paths under /img */
  gallery?: string[];
  /** optional sub-projects (umbrella case studies) */
  subProjects?: SubProject[];
  /** accent gradient pair for typographic covers */
  gradient?: [string, string];
  outcome: string;
}

export const ventures: Venture[] = [
  {
    slug: 'road-ready-safety',
    name: 'Road Ready Safety',
    client: 'Road Ready Safety — co-founded venture',
    kicker: 'Online driver-safety education, 9 states',
    tagline: 'A state-approved online defensive-driving platform — and the AI tooling, courses, and data engine behind it.',
    status: 'Live',
    liveUrl: 'https://roadreadysafety.com',
    liveLabel: 'roadreadysafety.com',
    repoUrl: 'https://github.com/ventocis/rrsTdlrGuide',
    stack: ['Astro', 'React', 'Next.js', 'Node.js', 'Claude API', 'Python', 'Tailwind'],
    problem:
      'Drivers who need to dismiss a ticket or lower insurance face a maze of confusing, fee-padded course options and court-specific rules. Course providers, meanwhile, have to build state-compliant curricula and keep them accurate as the law changes — a slow, expensive, error-prone process.',
    built:
      'Road Ready Safety is a live online defensive-driving platform, state-approved across nine states. In Texas it ships a TDLR-approved 6-hour course at a flat $28 — no hidden fees, instant certificate, unlimited quiz attempts, no final exam. Around the product I built an entire support system: live comparison/marketing sites, an AI legal-research bot, a competitor pricing scraper, and full state-compliant course curricula.',
    ai:
      'AI is woven through the venture: Claude (Sonnet 4.6) with its web-search tool powers an automated legal-research bot that compiled Driver-Safety-Course procedures across 25 Texas municipal courts into structured, confidence-scored data; AI-assisted authoring and a legal-accuracy audit produced state-submission-ready course curricula verified against current statute.',
    highlights: [
      'Live in 9 states; Texas course is TDLR-approved at a flat $28 with no hidden fees',
      'CourtResearchTX: a Claude web-search bot that researched 25 Texas courts with retry/auto-resume and confidence scoring (1,700+ lines of structured output)',
      'TX Competitor Scraper: Python + Playwright pipeline over ~150 sites with HTML-fingerprint duplicate detection to unmask white-label providers',
      'State-approved course curricula (Texas, Virginia DIC, Florida BDI) authored and legally audited against current statute',
    ],
    gradient: ['#0E7C86', '#0A5A62'],
    subProjects: [
      {
        name: 'roadreadysafety.com/texas',
        blurb: 'The live TDLR-approved Texas course: $28 flat, instant certificate, court-accepted, eligibility checker.',
        stack: ['Live product'],
        link: 'https://roadreadysafety.com/texas',
      },
      {
        name: 'TDLR Guide (txcourseguide.com)',
        blurb: 'Live comparison + directory site helping Texans pick an approved course by city, with an eligibility checker and court info.',
        stack: ['Astro 4', 'React', 'GA4', 'CI/CD'],
        link: 'https://txcourseguide.com',
      },
      {
        name: 'CourtResearchTX',
        blurb: 'Node.js bot using Claude + web-search to compile court DSC procedures into structured JSON with confidence levels.',
        stack: ['Node.js', 'Claude Sonnet 4.6', 'web_search tool'],
      },
      {
        name: 'TX Competitor Scraper',
        blurb: 'Scrapes ~150 competitor sites for pricing/features; fingerprints HTML structure to group white-label templates.',
        stack: ['Python', 'Playwright', 'BeautifulSoup', 'pandas'],
      },
      {
        name: 'State course curricula',
        blurb: 'Full Virginia DIC (16 modules, statute-audited) and Florida BDI courses authored for DMV submission, plus LMS import pipelines.',
        stack: ['Curriculum design', 'Legal audit', 'Content tooling'],
      },
    ],
    outcome: 'Live and selling in 9 states. The flagship venture — product, AI tooling, data, and compliant content all built in-house.',
  },
  {
    slug: 'la-lancha',
    name: 'La Lancha',
    client: 'Luis Vecchio — private boat charters, Chicago',
    kicker: 'Booking site + automated operations backend',
    tagline: 'A booking website and a fully automated back-office for a one-boat charter business on Lake Michigan.',
    status: 'Shipped',
    repoUrl: 'https://github.com/jmaitner/lalancha',
    liveLabel: 'domain launching soon',
    stack: ['Astro', 'Cloudflare Workers', 'Google Apps Script', 'Stripe', 'JotForm', 'Google Calendar/Sheets'],
    problem:
      'A solo charter operator cannot manually juggle bookings across platforms, calendar conflicts, deposits, signed legal waivers, fuel invoicing, and review requests. Double-bookings and missed paperwork cost real revenue and create liability.',
    built:
      'An Astro marketing + booking site (live per-date pricing and availability) backed by a single Google Apps Script web app that runs the entire operation. A new booking checks the Google Calendar with a race-condition guard, auto-creates the event, spins up a Drive folder, logs the booking, seeds the guest roster, and fires templated onboarding emails to guest and owner.',
    ai:
      'Built rapidly with AI-assisted development. A maintainer primer (CLAUDE.md) encodes the full data flow so the system stays AI-maintainable — any future Claude session can pick it up cold.',
    highlights: [
      'Live Stripe payments via prefilled links + JotForm charter agreement & waivers',
      'A 10-minute reconciliation timer reads JotForm→Sheets data and stamps Paid / AgreementSigned / WaiverSigned back onto bookings, alerting on payment-amount mismatches',
      'Captain post-charter form auto-computes fuel cost and emails the owner what to invoice',
      'Daily triggers: waiver-reminder digests and automated Google-review requests to finished charters',
    ],
    cover: '/img/la-lancha/quarters1.jpg',
    gallery: [
      '/img/la-lancha/quarters4.jpg',
      '/img/la-lancha/quarters7.jpg',
      '/img/la-lancha/quarters11.jpg',
      '/img/la-lancha/quarters16.jpg',
      '/img/la-lancha/quarters19.jpg',
    ],
    outcome: 'Shipped with live external integrations (Stripe live, Google Workspace, JotForm). Running the business today.',
  },
  {
    slug: 'grandsons-construction',
    name: "Grandson's Construction",
    client: "Grandson's Construction LLC — decks & fences, West Michigan",
    kicker: 'Contractor site with an AI instant-quote engine',
    tagline: 'A contractor marketing site that returns an instant, AI-generated quote the moment a prospect asks.',
    status: 'Live',
    liveUrl: 'https://grandsons-construction.pages.dev',
    liveLabel: 'grandsons-construction.pages.dev',
    repoUrl: 'https://github.com/jmaitner/construction-site',
    stack: ['Astro 6', 'Tailwind 4', 'Cloudflare Workers', 'Claude API', 'Google Sheets'],
    problem:
      'A small contractor loses leads when prospects wait days for a callback just to get a ballpark price. The lead goes cold and the competitor who answered first wins the job.',
    built:
      'An Astro 6 + Tailwind 4 site with a local-SEO blog (deck cost, permits, Michigan-winter decking) and a Cloudflare Worker quote engine. The worker validates the lead, runs a honeypot anti-spam check, calls Claude to write a tailored estimate, and appends the lead to Google Sheets — all in the moment the prospect is most interested.',
    ai:
      'Claude is the core of the feature: it turns raw form input into a contractor-credible written estimate in real time. The engine is built to never break the customer moment — if Claude errors it serves a deterministic fallback quote; if the Sheets write fails it still returns the quote and flags the save for monitoring.',
    highlights: [
      'AI instant-quote Cloudflare Worker with graceful, layered fallbacks',
      'Local-SEO blog targeting West Michigan deck-buyer intent searches',
      'Honeypot anti-spam + consent validation; secrets held in Cloudflare, never committed',
      'Per-business config so the same engine can be re-skinned for other contractors',
    ],
    cover: '/img/grandsons/deck-01.jpg',
    gallery: [
      '/img/grandsons/deck-03.jpg',
      '/img/grandsons/deck-05.jpg',
      '/img/grandsons/deck-07.jpg',
      '/img/grandsons/deck-09.jpg',
      '/img/grandsons/fence-01.jpg',
    ],
    outcome: 'Live for the client. The AI quote engine is the differentiator most contractor sites do not have.',
  },
  {
    slug: 'grateful-team',
    name: 'The Grateful Team',
    client: 'Make-A-Wish charity cycling team, Grand Rapids',
    kicker: 'Recruitment + info site for a charity ride',
    tagline: 'A public home for a charity cycling team raising funds across the Make-A-Wish Wish-A-Mile 300.',
    status: 'Live',
    liveUrl: 'https://thegratefulteam.com',
    liveLabel: 'thegratefulteam.com',
    repoUrl: 'https://github.com/jmaitner/the-grateful-team-website',
    stack: ['HTML/CSS/JS', 'Cloudflare Pages', 'Cloudflare Workers', 'Klaviyo'],
    problem:
      'The team needed a public face to recruit riders of every fitness level and give them logistics, gear lists, and event info in one place — without a heavyweight CMS.',
    built:
      'A fast multi-page static site (home, event, group rides, packing list, gear, FAQ, roster with rider "trading cards") with a lightweight JS partial-injection system that shares nav and footer across pages. Full SEO/OpenGraph meta and a join form wired for a Cloudflare Worker → Klaviyo email flow.',
    ai: 'AI-assisted build and copy; join-form automation planned through a Cloudflare Worker.',
    highlights: [
      'Hand-built partial-injection system keeps nav/footer DRY without a framework',
      'Rider roster "trading cards" make recruitment personal',
      'Cloudflare Pages hosting with a Worker → Klaviyo join flow',
      'Mobile-first, accessible, full social-share meta',
    ],
    cover: '/img/grateful/cover.jpg',
    gallery: [
      '/img/grateful/wam-1.jpg',
      '/img/grateful/wam-2.jpg',
      '/img/grateful/wam-3.jpg',
      '/img/grateful/wam-4.jpg',
    ],
    outcome: 'Live and recruiting. A mission-driven site with clean fundamentals and real photography.',
  },
  {
    slug: 'labs',
    name: 'Labs',
    client: 'Self-directed — AI & product engineering',
    kicker: 'AI agents & internal tools',
    tagline: 'Smaller builds that show the range: a serverless AI agent and a domain-specific quoting tool.',
    status: 'Shipped',
    repoUrl: 'https://github.com/jmaitner/jackson-bot',
    stack: ['Cloudflare Workers', 'Claude Sonnet 4.6', 'Cloudflare KV', 'React', 'Vite'],
    problem:
      'Two different itches: recruiters want a fast, honest read on fit before a call; and contractors waste real money on inaccurate materials takeoffs. Both are solvable with a small, sharp tool.',
    built:
      'Jackson-bot is a serverless AI agent (Cloudflare Workers + Claude Sonnet 4.6) that answers recruiter questions about my background 24/7, with conversation memory, KV-backed rate limiting, anonymized logging, and role-aware resume routing. Waterfront is a React + Vite quoting tool that turns a decking/seawall job spec into an accurate materials takeoff with waste math and a branded customer quote.',
    ai:
      'Jackson-bot is AI-native — the entire business logic lives in a 177-line system prompt and Claude does all the conversational reasoning while the Worker handles safety, memory, and routing.',
    highlights: [
      'Jackson-bot: 30 req/IP/hr rate limiting in Cloudflare KV, IP-anonymized logging, 4 role-specific resume variants behind a /resume redirect',
      'Jackson-bot: 14-message conversation memory with a voice-tuned system prompt',
      'Waterfront: domain formulas (joists, decking rows, fasteners, leftover math) isolated in a rules module',
      'Waterfront: localStorage-persisted pricing config and print-to-PDF / CSV customer quotes',
    ],
    gradient: ['#2A2E37', '#0F1115'],
    subProjects: [
      {
        name: 'Jackson-bot',
        blurb: 'A Claude-powered agent on Cloudflare Workers that represents me to recruiters 24/7.',
        stack: ['Cloudflare Workers', 'Claude Sonnet 4.6', 'KV'],
        link: 'https://github.com/jmaitner/jackson-bot',
      },
      {
        name: 'Waterfront',
        blurb: 'A React quoting tool that produces accurate materials takeoffs and branded quotes for a decking/seawall contractor.',
        stack: ['React 18', 'Vite', 'Tailwind'],
        link: 'https://github.com/jmaitner/waterfront',
      },
    ],
    outcome: 'Both shipped. Together they show serverless AI engineering and pragmatic domain tooling.',
  },
];

export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);
