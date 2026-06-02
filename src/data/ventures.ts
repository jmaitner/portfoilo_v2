export type Status = 'Live' | 'Shipped' | 'Active' | 'Prototype' | 'Coming soon';

export interface SubProject {
  name: string;
  blurb: string;
  stack: string[];
  link?: string;
}

export interface Brand {
  /** logo image path under /img/logos, if a logo exists */
  logo?: string;
  /** fallback wordmark text rendered when there is no logo */
  wordmark?: string;
  /** optional second word rendered in a script/accent style (e.g. La Lancha "boat") */
  script?: string;
  /** CSS background for the brand tile */
  bg: string;
  /** controls overlay/text contrast on the tile */
  tone: 'light' | 'dark';
}

export interface Venture {
  slug: string;
  name: string;
  client: string;
  tagline: string;
  kicker: string;
  status: Status;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  stack: string[];
  problem: string;
  built: string;
  ai: string;
  highlights: string[];
  /** screenshot used as the detail-page cover */
  cover?: string;
  gallery?: string[];
  subProjects?: SubProject[];
  outcome: string;
  /** per-brand accent color (detail page identity) */
  accent: string;
  /** brand-tile config for the home grid + detail fallback */
  brand: Brand;
  /** one-word category */
  category: 'Product' | 'Client site' | 'Tooling';
}

export const ventures: Venture[] = [
  {
    slug: 'road-ready-safety',
    name: 'Road Ready Safety',
    client: 'Road Ready Safety — co-founded venture',
    kicker: 'Online traffic-safety courses · 9 states',
    tagline: 'An online traffic-school course people take to dismiss a ticket or lower their insurance — now live in nine states — plus the behind-the-scenes tools that keep it running.',
    status: 'Live',
    liveUrl: 'https://roadreadysafety.com',
    liveLabel: 'roadreadysafety.com',
    repoUrl: 'https://github.com/ventocis/rrsTdlrGuide',
    stack: ['Astro', 'React', 'Next.js', 'Node.js', 'Claude API', 'Python', 'Tailwind'],
    category: 'Product',
    accent: '#1A73E8',
    brand: { logo: '/img/logos/road-ready.png', bg: 'radial-gradient(120% 120% at 50% 0%, #EAF2FF 0%, #F6F4EE 70%)', tone: 'light' },
    problem:
      'When you get a traffic ticket, picking the right course is confusing. Every option hides fees, and every court has its own rules. The company selling the course also has to keep all of that information correct in every state — which is slow work and easy to get wrong.',
    built:
      'A simple course you can finish on your phone. In Texas it costs a flat $28 with no surprise fees, you get your certificate the second you finish, and there is no stressful final exam. Behind the scenes I built the tools that keep the whole operation running and the information accurate.',
    ai:
      'I used AI to do the slow research for us. A program reads court websites across Texas and pulls out each court’s rules — fees, deadlines, how to turn in your certificate — and saves it all in one clean, organized list, noting how confident it is about each answer. AI also helped write the actual course lessons and check them against current law.',
    highlights: [
      'Live in nine states; the Texas course is a flat $28 with no hidden fees',
      'A program that reads 25 Texas court websites and turns their rules into one organized list — and picks up where it left off if it gets interrupted',
      'A tool that checks ~150 competitor websites and spots which ones are secretly the same company hiding behind different names',
      'Full courses written and fact-checked against state law, ready to hand to the DMV (Texas, Virginia, Florida)',
    ],
    cover: '/img/shots/road-ready-texas.jpg',
    gallery: ['/img/shots/road-ready.jpg', '/img/shots/txcourseguide.jpg'],
    subProjects: [
      {
        name: 'roadreadysafety.com/texas',
        blurb: 'The live Texas course: a flat $28, instant certificate, accepted by every Texas court, with a quick eligibility checker.',
        stack: ['Live product'],
        link: 'https://roadreadysafety.com/texas',
      },
      {
        name: 'TX Course Guide',
        blurb: 'A live website (txcourseguide.com) that helps Texans compare approved courses by city and check what their court needs.',
        stack: ['Astro', 'React', 'GA4'],
        link: 'https://txcourseguide.com',
      },
      {
        name: 'Court research tool',
        blurb: 'A program that uses AI to read 25 court websites and save each court’s rules as clean, organized data.',
        stack: ['Node.js', 'Claude API'],
      },
      {
        name: 'Competitor checker',
        blurb: 'Scans ~150 competitor sites for prices and features, and flags look-alike sites run by the same company.',
        stack: ['Python', 'Playwright'],
      },
      {
        name: 'The courses',
        blurb: 'Full driver-improvement courses written and fact-checked against state law (Virginia, Florida), plus the tools to load them online.',
        stack: ['Course writing', 'Legal fact-check'],
      },
    ],
    outcome: 'Live and making sales in nine states. The course site, the AI tools, the data, and the lessons were all built in-house.',
  },
  {
    slug: 'la-lancha',
    name: 'La Lancha',
    client: 'Luis Vecchio — private boat charters, Chicago',
    kicker: 'Booking site + an automatic back office',
    tagline: 'A booking website and a hands-off “back office” for a one-boat charter business on Lake Michigan.',
    status: 'Live',
    liveUrl: 'https://site.lanchaboat.com',
    liveLabel: 'site.lanchaboat.com',
    repoUrl: 'https://github.com/jmaitner/lalancha',
    stack: ['Astro', 'Cloudflare Workers', 'Google Apps Script', 'Stripe', 'JotForm', 'Google Calendar/Sheets'],
    category: 'Product',
    accent: '#444AEB',
    brand: { wordmark: 'lancha', script: 'boat', bg: 'linear-gradient(160deg, #FFFDEF 0%, #FBF3FF 100%)', tone: 'light' },
    problem:
      'One person runs the whole boat business. Keeping track of bookings, payments, signed waivers, and follow-ups by hand is a headache — and one double-booking or one missing signed form costs real money.',
    built:
      'A website where customers pick a date and book a trip. The moment they book, everything else happens on its own: it checks the calendar so two trips never overlap, saves the booking, and emails both the customer and the owner. It also collects the signed agreement and the payment, and chases down anything that’s missing.',
    ai:
      'I built it quickly with AI help, and I left behind a plain-English instruction file so the system is easy to understand and change later — even for the next person (or AI) who works on it.',
    highlights: [
      'Takes real card payments through Stripe and collects signed waivers automatically',
      'Every 10 minutes it checks who has paid and signed, updates each booking, and flags anything that doesn’t add up',
      'After each trip, the captain fills out one short form and the system works out the fuel charge and emails the owner what to bill',
      'Sends waiver reminders and asks happy customers for a Google review — all by itself',
    ],
    cover: '/img/shots/la-lancha.jpg',
    outcome: 'Up and running the business today, with live payments and real customers.',
  },
  {
    slug: 'grandsons-construction',
    name: "Grandson's Construction",
    client: "Grandson's Construction LLC — decks & fences, West Michigan",
    kicker: 'Contractor site that quotes you instantly',
    tagline: 'A website for a deck-and-fence builder that gives visitors a real price estimate in seconds.',
    status: 'Live',
    liveUrl: 'https://grandsons-construction.pages.dev',
    liveLabel: 'grandsons-construction.pages.dev',
    repoUrl: 'https://github.com/jmaitner/construction-site',
    stack: ['Astro 6', 'Tailwind 4', 'Cloudflare Workers', 'Claude API', 'Google Sheets'],
    category: 'Client site',
    accent: '#2D5441',
    brand: { logo: '/img/logos/grandsons.png', bg: 'linear-gradient(155deg, #1E3A2F 0%, #142819 100%)', tone: 'dark' },
    problem:
      'When someone wants a new deck, they usually wait days for a callback just to hear a rough price — and by then they’ve often hired whoever answered first. This builder was losing jobs to slow follow-up.',
    built:
      'A clean website with helpful local articles that show up on Google, plus a quote tool: a visitor describes what they want, and the site writes back a real, believable price estimate in seconds and saves their details so the builder can follow up.',
    ai:
      'AI writes the quote. The visitor’s answers go to Claude, which turns them into a price estimate that reads like the contractor wrote it himself. I built it so it never leaves a customer hanging — if the AI ever hiccups, a backup estimate still shows up right away.',
    highlights: [
      'Instant AI price estimates, with a backup so a customer always gets an answer',
      'Helpful local articles (deck costs, permits, building through Michigan winters) that pull in Google traffic',
      'Spam protection and consent checks built in; passwords and keys kept safe, never in the code',
      'Set up so the same quote tool can be reused for other contractors',
    ],
    cover: '/img/shots/grandsons.jpg',
    outcome: 'Live for the client. Instant quotes are something almost no other contractor website offers.',
  },
  {
    slug: 'grateful-team',
    name: 'The Grateful Team',
    client: 'Make-A-Wish charity cycling team, Grand Rapids',
    kicker: 'Website for a charity bike team',
    tagline: 'A website for a charity bike team that rides to raise money for Make-A-Wish.',
    status: 'Live',
    liveUrl: 'https://thegratefulteam.com',
    liveLabel: 'thegratefulteam.com',
    repoUrl: 'https://github.com/jmaitner/the-grateful-team-website',
    stack: ['HTML/CSS/JS', 'Cloudflare Pages', 'Cloudflare Workers', 'Klaviyo'],
    category: 'Client site',
    accent: '#7A2FA8',
    brand: { logo: '/img/logos/grateful.png', bg: 'radial-gradient(120% 120% at 50% 30%, #232323 0%, #121212 100%)', tone: 'dark' },
    problem:
      'The team needed one place online to recruit riders of every skill level and give them everything they need — schedules, packing lists, and gear tips — without a complicated, heavy website system.',
    built:
      'A fast, simple website with several pages: home, event info, group rides, packing list, gear, FAQ, and a roster with a “trading card” for each rider. A sign-up form adds new riders to the team’s email list.',
    ai: 'AI helped build the pages and write the words; the sign-up form automatically drops new riders into the team’s email tool.',
    highlights: [
      'The same menu and footer show on every page without a heavy website system',
      'Rider “trading cards” make joining the team feel personal',
      'Hosted on Cloudflare; sign-ups flow straight into the email tool',
      'Looks great on phones, with proper previews when the link is shared',
    ],
    cover: '/img/shots/grateful.jpg',
    outcome: 'Live and signing up riders. A clear, good-looking site built around real team photos.',
  },
  {
    slug: 'labs',
    name: 'Labs',
    client: 'Self-directed — AI & internal tools',
    kicker: 'An AI assistant & two live tools',
    tagline: 'Smaller builds that show the range — and you can click into the live demos below.',
    status: 'Shipped',
    repoUrl: 'https://github.com/jmaitner/jackson-bot',
    stack: ['Cloudflare Workers', 'Claude API', 'Cloudflare KV', 'React', 'Vite'],
    category: 'Tooling',
    accent: '#0E7C86',
    brand: { wordmark: 'Labs', bg: 'linear-gradient(155deg, #20242E 0%, #0F1115 100%)', tone: 'dark' },
    problem:
      'A few different needs. Recruiters want a quick, honest read on me before they call. Contractors lose money ordering the wrong amount of materials. And a crew needs a dead-simple way to clock in and out. Each one is fixable with a small, focused tool.',
    built:
      'Jackson-bot is an AI assistant that answers questions about my work 24/7 (it’s the same bot you may have just talked to). Waterfront Takeoff figures out exactly what materials a deck or seawall job needs — including leftover waste — and prints a clean customer quote. Waterfront Payroll is a phone-friendly time clock where a crew taps to clock in and out and an admin reviews the hours. The two Waterfront tools are live demos you can open and try right now.',
    ai:
      'Jackson-bot runs on Claude. It’s really a carefully written set of instructions that tells the AI how to talk and what it knows about me, with guardrails so it can’t be spammed or misused.',
    highlights: [
      'Jackson-bot: limits abuse (30 messages per visitor per hour), keeps personal info out of its logs, and points recruiters to the right résumé',
      'Waterfront Takeoff: does the tricky material math (boards, framing, fasteners, leftovers) and prints a tidy PDF or spreadsheet quote',
      'Waterfront Payroll: tap-to-clock-in time tracking for a crew, with an admin view to review hours',
      'All three run on Cloudflare with clear “demo” labels so no one mistakes a sample for the real system',
    ],
    gallery: ['/img/shots/waterfront.jpg', '/img/shots/waterfront-payroll.jpg'],
    subProjects: [
      {
        name: 'Jackson-bot',
        blurb: 'An AI assistant that answers questions about my background around the clock (you may be using it now).',
        stack: ['Cloudflare Workers', 'Claude API'],
        link: 'https://github.com/jmaitner/jackson-bot',
      },
      {
        name: 'Waterfront Takeoff — try it live',
        blurb: 'A live demo: enter a deck or seawall job and it works out the exact materials to buy and prints a clean quote.',
        stack: ['React', 'Vite', 'Cloudflare Workers'],
        link: 'https://waterfront.jmaitner1.workers.dev',
      },
      {
        name: 'Waterfront Payroll — try it live',
        blurb: 'A live demo: a phone-friendly crew time clock — tap to clock in/out, with an admin view to review hours.',
        stack: ['React', 'Cloudflare Workers'],
        link: 'https://waterfront-payroll.jmaitner1.workers.dev',
      },
    ],
    outcome: 'All shipped and live. Together they show I can build AI tools and practical, hands-on business tools you can actually click through.',
  },
  {
    slug: 'face2face-fun',
    name: 'Face2Face Fun',
    client: 'Face2Face Fun — direct-to-consumer Shopify store',
    kicker: 'Shopify store · games & party goods',
    tagline: 'An online store I built on Shopify to sell games and party products straight to shoppers.',
    status: 'Coming soon',
    liveLabel: 'face2facefun.com — coming soon',
    stack: ['Shopify', 'Ecommerce'],
    category: 'Client site',
    accent: '#D9603B',
    brand: { wordmark: 'Face2Face', script: 'Fun', bg: 'linear-gradient(155deg, #2A1B18 0%, #14100F 100%)', tone: 'dark' },
    problem:
      'The brand needed its own real online store to sell games and party products directly to customers, instead of relying only on big marketplaces.',
    built:
      'A Shopify storefront set up to sell direct to shoppers — product pages, checkout, and the back-end to manage orders. Launching soon; a full write-up will follow.',
    ai: 'More detail coming at launch.',
    highlights: [
      'A direct-to-consumer Shopify storefront, built to sell games and party goods',
      'Launching soon — full case study to follow',
    ],
    outcome: 'Coming soon — the store is being prepared for launch at face2facefun.com.',
  },
];

export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);
