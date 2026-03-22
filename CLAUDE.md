# DustinHannon Portfolio Site

## Overview
Personal portfolio GitHub Pages site with a hacker terminal theme. Showcases all public GitHub repos with live links, READMEs, and tech tags.

- **Live:** https://dustinhannon.github.io/DustinHannon/
- **Repo:** https://github.com/DustinHannon/DustinHannon
- **Stack:** Pure HTML/CSS/JS, GitHub Pages (no framework, no build step)

## File Structure
```
├── README.md          ← GitHub profile README (DO NOT MODIFY)
├── githubheader.png   ← Profile header image (DO NOT MODIFY)
├── CLAUDE.md          ← This file
└── docs/
    ├── index.html     ← Single page site (all content)
    ├── style.css      ← Terminal theme, animations, responsive design
    └── script.js      ← Typing effect, scroll reveal, nav interactions
```

## About Section
- **Role:** VP, IT at Morgan White Group (NOT "Developer")
- Title, meta tags, hero subtitle, and about text all reflect VP, IT role
- About text covers two angles: IT leadership (infrastructure, data centers, networking, cloud, cybersecurity) + builder story (builds internal tools with Next.js, TypeScript, Supabase, AI)

## CRITICAL: Do Not Touch
- `README.md` — This is the GitHub profile README. It displays `githubheader.png` and the GitHub Pages URL. Modifying it will break the profile display.
- `githubheader.png` — Profile header image.

## GitHub Pages Configuration
- Source: `/docs` folder on `main` branch
- Auto-deploys on push to `main`
- No build step required

## Design System
- **Theme:** Hacker Terminal
- **Background:** #0a0a0a with CSS grid lines
- **Accent:** #00ff88 (green)
- **Font:** JetBrains Mono (monospace)
- **Animations:** Typing effect (hero), scroll reveal (IntersectionObserver), card hover glow, blinking cursor, scan line

## Current Projects Listed
1. CheatBook (LIVE) — AI collaborative note-taking
2. RackInv2 (LIVE) — Data center rack inventory with 3D visualization
3. DarlingDrinkCompany (LIVE) — Brand website
4. MWG_CS_BOT (LIVE) — AI customer service chatbot
5. SWGEmu_SilentSurvivor (DEV) — SWGEmu game server scripts
6. SWGEmu_Guide (LIVE) — Wizard-style SWGEmu server setup guide
7. PlayBuilds (DEV) — Experimental prototypes

## Adding New Projects
1. Add a new `<a class="project-card-link">` block in `docs/index.html` inside `.projects-grid`
2. Follow the existing card format: header (name + badge), description, tags, links
3. Use `LIVE` badge for deployed projects, `DEV` badge for dev-only repos
4. The outer `<a>` wraps the entire card and links to the GitHub repo
5. Inner links (Live Site, README, GitHub) are independently clickable via z-index

## Deployment
Push to `main` — GitHub Pages rebuilds automatically (takes ~30-45 seconds).
