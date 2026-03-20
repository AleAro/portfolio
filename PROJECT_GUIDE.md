# Portfolio Project Guide

This document explains the full current state of this portfolio project: stack, architecture, page content, local setup, and what needs to be configured before production use.

## Quick Astro Summary

- **Project type:** Single-page Astro portfolio site for Alejandro Arouesty.
- **Current pages in `src/pages`:**
  - `index.astro` (only page right now)
- **Main layout file:** `src/layouts/Layout.astro`
  - Defines HTML shell (`html/head/body`) and receives a `title` prop.
  - Sets metadata (description, viewport, favicon, Astro generator, `<title>`).
  - Loads Google Fonts (`Inter` and `JetBrains Mono`).
  - Renders page content using `<slot />`.
  - Includes global UI scripts:
    - custom animated cursor
    - IntersectionObserver reveal-on-scroll for `.reveal` elements
  - Includes inline global styles:
    - font helper classes
    - reveal + animate-in transitions
    - gradient text helper
    - mobile rule hiding custom cursor
- **Styling/library usage:**
  - Uses **Tailwind CSS v4** as primary styling system.
  - Tailwind is configured with `@tailwindcss/vite` in `astro.config.mjs`.
  - Tailwind entry is `src/styles/global.css` with `@import "tailwindcss";`.
  - Also uses:
    - `framer-motion` for animations
    - `phosphor-react` for icons

## 1) Project Overview

- Project type: personal portfolio website.
- Framework: Astro with React islands (hybrid Astro + client-loaded React components).
- Styling: Tailwind CSS v4.
- Animation/UI: Framer Motion + Phosphor React icons.
- Main route: a single-page portfolio at `/` with anchored sections:
  - Hero
  - About
  - Experience
  - Skills
  - Projects
  - Contact
  - Footer

## 1.1) Who This Portfolio Is About (Identity)

This website is a portfolio for **Alejandro Arouesty**.

Identity details currently displayed in the UI:

- Name shown:
  - Hero: "Hi, I'm Alejandro"
  - Footer brand: "Alejandro Arouesty"
  - Page title: "Alejandro Arouesty - Software Developer"
- Professional identity:
  - Software developer
  - Recently graduated from Tecnologico de Monterrey
- Mission/positioning repeated across sections:
  - Focus on making data and technology more accessible to everyone
- Geography:
  - Mexico (shown in About and Contact)
- Education context:
  - Computer Science & Engineering
  - Graduate year reference: 2024

## 2) Tech Stack (Exact)

From `package.json`:

- Runtime/build toolchain:
  - `astro` `^5.11.1`
- Astro integrations:
  - `@astrojs/react` `^4.3.0`
- Frontend libraries:
  - `react` `^19.1.0`
  - `react-dom` `^19.1.0`
  - `framer-motion` `^12.23.5`
  - `phosphor-react` `^1.4.1`
- Styling:
  - `tailwindcss` `^4.1.11`
  - `@tailwindcss/vite` `^4.1.11`
- Typing:
  - `@types/react` `^19.1.8`
  - `@types/react-dom` `^19.1.6`
- TypeScript config:
  - Extends `astro/tsconfigs/strict`
  - JSX mode configured for React (`react-jsx`)

## 3) How Astro Is Configured

File: `astro.config.mjs`

- Uses Vite plugin for Tailwind v4 (`@tailwindcss/vite`).
- Enables React integration through `@astrojs/react`.
- This allows:
  - `.astro` components for static/SSR structure.
  - `.jsx` React components for animated interactive sections.

## 4) Project Structure

Current structure:

- `public/`
  - `favicon.svg`
- `src/layouts/`
  - `Layout.astro` (HTML shell, metadata, font loading, custom cursor, scroll reveal setup)
- `src/pages/`
  - `index.astro` (main page composition)
- `src/components/`
  - `Navigation.astro`
  - `AnimatedHero.jsx`
  - `AnimatedAbout.jsx`
  - `Experience.astro`
  - `Skills.astro`
  - `AnimatedProjects.jsx`
  - `AnimatedContact.jsx`
  - `Footer.astro`
  - Plus non-animated legacy variants still in repo:
    - `Hero.astro`
    - `About.astro`
    - `Projects.astro`
    - `Contact.astro`
    - `Welcome.astro` (starter leftover)
- `src/styles/`
  - `global.css` (imports Tailwind)
- Root:
  - `package.json`
  - `package-lock.json`
  - `astro.config.mjs`
  - `tsconfig.json`
  - `.gitignore`
  - `README.md` (still the default Astro starter README)

## 5) Rendering Model (Important)

In `src/pages/index.astro`, React components are loaded with `client:load`:

- `AnimatedHero client:load`
- `AnimatedAbout client:load`
- `AnimatedProjects client:load`
- `AnimatedContact client:load`

Meaning:

- Astro renders page shell/server HTML.
- Those sections hydrate in browser and run Framer Motion animations on load.
- `Experience.astro` and `Skills.astro` remain Astro components with script-based UI behavior.

## 6) Current Site Content (What Is Actually Displayed)

This section documents the visible content as it appears now in the app.

### Branding & Meta

- Page title: `Alejandro Arouesty - Software Developer`
- Meta description: `Alejandro Arouesty - Software Developer Portfolio`
- Theme style: dark slate palette with gradient highlights.
- Fonts loaded from Google Fonts:
  - Inter
  - JetBrains Mono

Exact identity/brand messages:

- "Alejandro Arouesty - Software Developer Portfolio" (meta description)
- "Alejandro Arouesty - Software Developer" (document title)

### Navigation

- Desktop anchors:
  - About
  - Experience
  - Work (links to `#projects`)
  - Contact
- Resume button links to: `/cv-alejandro-arouesty.pdf`
- Mobile menu with same links and Resume button.
- Logo text: `AA`

### Hero

- Main copy:
  - "Hi, I'm Alejandro"
  - "Software developer recently graduated from Tecnologico de Monterrey..."
- Availability badge:
  - "Available for new opportunities"
- Primary CTA: `View My Work` -> `#projects`
- Secondary CTA: `Download CV` -> `/cv-alejandro-arouesty.pdf`
- Additional interactive behavior:
  - Floating decorative particles
  - Scroll indicator that jumps to About section

### About

- Focus:
  - Recent graduate from Tecnologico de Monterrey
  - Mission around technology/data accessibility
- Includes badges:
  - Recent Graduate
  - Passionate Developer
  - Innovation Focused
- Includes info card:
  - Computer Science & Engineering
  - Recent Graduate (2024)
  - Mexico
- Profile image currently loaded from external Pexels URL.

### Experience

Three entries hardcoded:

1. Software Developer Intern (`Tech Company`, `2023 - 2024`)
2. Research Assistant (`Tecnologico de Monterrey`, `2022 - 2023`)
3. Freelance Developer (`Independent`, `2021 - 2022`)

Each has description and technology tags.

Displayed companies/contexts:

- Tech Company
- Tecnologico de Monterrey
- Independent (Remote)

### Skills

Four skill categories with percentage bars:

1. Programming Languages (JS, Python, Java, TS, C++, SQL)
2. Web Development (React, Node.js, HTML/CSS, Vue.js, Express.js, Astro)
3. Data & Analytics (Data Analysis, ML, Pandas, NumPy, Matplotlib, Jupyter)
4. Tools & Technologies (Git, Docker, AWS, MongoDB, PostgreSQL, Linux)

### Projects

Six hardcoded showcase projects with category badges and image cards:

1. Data Accessibility Platform (featured)
2. Smart Analytics Dashboard
3. Educational Tech Tool
4. Open Source Contribution
5. Mobile Data Collector
6. University Thesis Project

Notes:

- All project `github` and `demo` links are currently `"#"` placeholders.
- "View More on GitHub" points to `https://github.com/alejandro-arouesty`.

### Contact

- Contact cards:
  - Email: `alejandro.arouesty@example.com`
  - Phone: `+52 (555) 123-4567`
  - Location: Mexico
- Social links (LinkedIn/GitHub/Twitter) are currently `"#"` placeholders.
- Contact form is client-only simulated submission:
  - Waits 2 seconds
  - Clears form
  - Does not send data to backend/API

Important content accuracy note:

- The contact details look like template/demo values, not verified production personal details.

### Footer

- Branding text and mission statement.
- Quick links to each section anchor.
- Dynamic current year.
- "Built with Astro, React & Tailwind CSS."

Footer identity text:

- "Software developer passionate about making data and technology more accessible to everyone."
- "Tecnologico de Monterrey Graduate"

## 7) Local Development: How To Start

From project root:

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

- `http://localhost:4321`

Other available scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview production build locally
npm run astro    # Astro CLI passthrough
```

## 8) Build, Output, and Deploy Basics

- Build command: `npm run build`
- Output directory: `dist/`
- Preview build locally: `npm run preview`
- Typical static deployment targets:
  - Vercel
  - Netlify
  - Cloudflare Pages
  - GitHub Pages (with Astro static setup)

No server-side API routes are currently implemented in this project.

## 9) Configuration and Environment

- No `.env` variables are currently required for app startup.
- `.gitignore` excludes:
  - `dist/`
  - `.astro/`
  - `node_modules/`
  - local env files

## 10) Known Gaps / Production Checklist

Before considering this production-ready, update:

1. Resume asset:
   - Add `public/cv-alejandro-arouesty.pdf` (currently missing).
2. Personal links:
   - Replace social `"#"` links in `AnimatedContact.jsx`.
3. Project links:
   - Replace `github: "#"` and `demo: "#"` placeholders in `AnimatedProjects.jsx`.
4. Contact details:
   - Replace example email and phone with real values.
5. Contact form backend:
   - Connect form submission to an API/email service (Formspree, Resend, custom endpoint, etc.).
6. Image strategy:
   - Consider replacing external Pexels profile/project images with owned assets in `public/`.
7. README:
   - Replace default Astro starter `README.md` with project-specific docs (or link this guide).

## 11) Where To Edit Content Quickly

- Hero copy: `src/components/AnimatedHero.jsx`
- About text and education/location: `src/components/AnimatedAbout.jsx`
- Experience entries: `src/components/Experience.astro`
- Skills and percentages: `src/components/Skills.astro`
- Project cards: `src/components/AnimatedProjects.jsx`
- Contact info and socials: `src/components/AnimatedContact.jsx`
- Navbar labels/resume button: `src/components/Navigation.astro`
- Page metadata/title: `src/layouts/Layout.astro` and `src/pages/index.astro`

## 12) Styling and UX Notes

- Tailwind v4 entry is in `src/styles/global.css` via `@import "tailwindcss";`.
- Global UI behaviors in `Layout.astro`:
  - Custom cursor (desktop only)
  - IntersectionObserver reveal animations for `.reveal` elements
- Section-level animation mostly handled by Framer Motion in React components.

---

If you want, the next step can be to auto-generate a clean, production-ready `README.md` from this file and remove starter leftovers (`Welcome.astro` and unused non-animated components).
