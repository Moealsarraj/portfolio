# moealsarraj.com

Personal portfolio for Mohammed Al-Sarraj — data engineer and builder.

Live at [moealsarraj.com](https://moealsarraj.com)

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind v4 with `@theme` CSS custom properties
- **Deployment**: Vercel
- **Fonts**: Inter via `next/font/google`

## Design

Light theme matching the Manarah Suite UI — white background (`#f8f9fa`), amber accent (`#f59e0b`), clean card surfaces. All design tokens live in `app/globals.css`.

## Structure

```
app/
  page.tsx          # Root page — composes all sections
  layout.tsx        # Root layout, OG meta, fonts
  globals.css       # Tailwind config + design tokens
  cv/page.tsx       # CV route at /cv
components/
  nav.tsx           # Sticky nav with scroll-aware background
  hero.tsx          # Split layout: bio + data catalog card
  manarah-feature.tsx  # Manarah Suite showcase: screenshot + arch diagram
  project-card.tsx  # Reusable project card
  footer.tsx
lib/
  projects.ts       # Project data
public/
  manarah-screenshot.png  # Real Manarah portal screenshot
  cv.pdf
```

## Local dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy

Pushes to `main` deploy automatically via Vercel.
