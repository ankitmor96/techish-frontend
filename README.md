# Techish Innovation — Software Engineering Partner Site

A production-ready React + TypeScript + Vite recreation of the Techish Innovation
company website.

## Stack

- **React 19 + TypeScript** — all components in `.tsx` / `.ts`
- **Vite** — dev server and build
- **React Router** — client-side routing across 7 pages
- **Tailwind CSS v4** — token foundation (`src/index.css` `@theme`)
- **Custom CSS design system** — `.tk-*` classes mirroring the reference design
  (dark canvas `#0a0a0a`, orange accent `#ff7a17`, Inter + JetBrains Mono)
- **Framer Motion** — scroll reveals, hero entrance, staggered image bands
- **Lucide React** — icons (chatbot send/close)
- **Convex** — retained from the template scaffold (no backend routes used)

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, stats, marquee, product walkthrough, animated deploy terminal, process, services, why, industries, engagement models, partnership, FAQ, CTA |
| `/our-craft` | Six disciplines with chips, animated skill bars, capabilities terminal, delivery process, quality standards, pitfalls comparison |
| `/about` | Mission/vision, life at Techish, journey timeline, principles, day-to-day, team quotes, SDE points |
| `/our-work` | Project cards, projects terminal, track-record stats, inclusions, behind-the-portfolio, portfolio principles |
| `/blog` | Featured post, 12 articles, topic chips |
| `/careers` | What we look for, why here, benefits, open positions, hiring process, candidate FAQ, culture, policy terminal |
| `/contact` | Working inquiry form → animated confirmation terminal, contact points, process, channels |

Plus a themed 404 page.

## Structure

```
src/
  components/site/     # Navbar, Footer, SiteLayout, Marquee, TerminalWindow,
                       # CTABand, SectionHead, Reveal, ChatbotWidget
  data/site.ts         # All page content + TypeScript interfaces
  pages/               # One file per route (Home, OurCraft, About, OurWork,
                       # Blog, Careers, Contact, NotFound)
  index.css            # Theme tokens + .tk-* design system + responsive rules
public/images/         # Site imagery
```

## Development

```bash
bun install
bun run dev      # start Vite dev server
bun tsc -b --noEmit   # typecheck
```

Content is centralized in `src/data/site.ts` — edit copy, add posts, or add
jobs there without touching page components.
