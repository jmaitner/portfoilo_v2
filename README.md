# jacksonmaitner.com — portfolio

Personal portfolio site for Jackson Maitner — product builder & AI engineer.

## Structure

```
site/                 Astro 6 + Tailwind 4 portfolio website (deploys to Cloudflare Pages)
portfolio.md          Source research: every project, problem, stack, AI use, status
PLAN.md               Design + build plan
assets-manifest/      Inventory of source images/logos used by the site
```

## Develop

```bash
cd site
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs ./dist
```

## Deploy (Cloudflare Pages)

Build command `npm run build`, output directory `dist`, **root directory `site`**.
The site target domain is `jacksonmaitner.com` (set in `site/astro.config.mjs`).

## The work

Five client/venture case studies, grouped:

1. **Road Ready Safety** — live 9-state online driver-safety platform + AI legal-research bot, competitor scraper, and state-approved course curricula.
2. **La Lancha** — booking site + fully automated ops backend (Stripe, JotForm, Google Apps Script) for a Chicago boat-charter business.
3. **Grandson's Construction** — contractor site with an AI instant-quote Cloudflare Worker.
4. **The Grateful Team** — Make-A-Wish charity cycling team site.
5. **Labs** — Jackson-bot (serverless Claude agent) + Waterfront (materials-quoting tool).
