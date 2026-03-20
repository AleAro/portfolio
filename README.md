# Alejandro Arouesty — Portfolio

Personal portfolio website built with Astro, React, and Tailwind CSS v4.

## Stack

- **Framework:** Astro 5 + React 19 (hybrid islands)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Phosphor React

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro         # HTML shell, fonts, cursor, scroll-reveal
├── pages/
│   └── index.astro          # Single-page composition
├── components/
│   ├── Navigation.astro
│   ├── AnimatedHero.jsx
│   ├── AnimatedAbout.jsx
│   ├── Experience.astro
│   ├── Skills.astro
│   ├── AnimatedProjects.jsx
│   ├── AnimatedContact.jsx
│   └── Footer.astro
└── styles/
    └── global.css           # Tailwind entry point
```

## Local Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Where to Edit Content

| Section    | File                                  |
|------------|---------------------------------------|
| Hero       | `src/components/AnimatedHero.jsx`     |
| About      | `src/components/AnimatedAbout.jsx`    |
| Experience | `src/components/Experience.astro`     |
| Skills     | `src/components/Skills.astro`         |
| Projects   | `src/components/AnimatedProjects.jsx` |
| Contact    | `src/components/AnimatedContact.jsx`  |
| Navigation | `src/components/Navigation.astro`     |
| Metadata   | `src/layouts/Layout.astro`            |

## Production Checklist

- [ ] Add `public/cv-alejandro-arouesty.pdf`
- [ ] Replace social `"#"` placeholder links in `AnimatedContact.jsx`
- [ ] Replace project `github`/`demo` `"#"` placeholders in `AnimatedProjects.jsx`
- [ ] Replace example email and phone with real values in `AnimatedContact.jsx`
- [ ] Connect contact form to a real backend (Formspree, Resend, etc.)
- [ ] Replace external Pexels images with owned assets in `public/`

## Deploy

Configured for Vercel. Static output — no server-side API routes.
