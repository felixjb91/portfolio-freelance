# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a freelance portfolio website built with Astro, showcasing professional and personal projects. The site is designed as a single-page application with sections for home, experience, skills, and contact.

## Development Commands

- `npm run dev` - Start development server at http://localhost:4321
- `npm run build` - Run type checking and build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Architecture

### Tech Stack
- **Framework**: Astro 5 with React integration
- **Styling**: TailwindCSS with custom CSS variables
- **Type Safety**: TypeScript
- **Backend**: Firebase (Firestore) for potential data storage
- **Animations**: Framer Motion for React components

### Project Structure

```
src/
├── components/          # Astro components for page sections
│   ├── nav.astro       # Navigation
│   ├── home.astro      # Hero section
│   ├── experiance.astro # Experience timeline (note: typo in filename)
│   ├── contact.astro   # Contact form
│   └── footer.astro    # Footer with Spotify embed
├── React/              # React components with interactivity
│   ├── SkillsList.tsx  # Accordion-style skills showcase
│   ├── ExperienceSection.tsx # Timeline orchestrator
│   └── TimelineItem.tsx # Individual timeline entries
├── layouts/
│   └── Layout.astro    # Base HTML layout with global styles
├── lib/
│   └── data-text.ts    # Content data (skills, work experience)
├── pages/
│   └── index.astro     # Main entry point
├── firebase.ts         # Firebase configuration
└── env.d.ts           # Type definitions
```

### Key Patterns

**Path Aliases**: Use `@/` for `src/` and `@components/` for `src/components/`

**Data Management**: All content (skills, professional/personal work experience) is centralized in `src/lib/data-text.ts`. Edit this file to update portfolio content.

**CSS Variables**: Theme colors defined in `:root` in Layout.astro:
- `--background`: #1e1e1e (main background)
- `--background-card`: #262626 (card backgrounds)
- `--sec`: #a476ff (accent purple)
- `--white`: #dfdfdf (primary text)
- `--white-icon`: #f3f3f398 (muted text/icons)
- `--white-icon-tr`: rgba(140, 140, 140, 0.13) (borders/backgrounds)

**Component Split**: Static content uses Astro components, interactive elements (accordions, animations) use React components with `client:load` directive.

**Firebase**: Configured but not actively used in current implementation. Contact form has placeholder action that needs implementation.

### Important Notes

- The experience component file is named `experiance.astro` (typo)
- Contact form action is set to "TODO" and needs implementation (src/components/contact.astro:21)
- Environment variables for Firebase should be configured in `.env` file:
  - `FIREBASE_API_KEY`
  - `PUBLIC_FIREBASE_AUTH_DOMAIN`
  - `PUBLIC_FIREBASE_PROJECT_ID`
  - `PUBLIC_FIREBASE_STORAGE_BUCKET`
  - `PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
  - `PUBLIC_FIREBASE_APP_ID`
- SVG icons stored in `public/svg/` directory
- Project images stored in `public/` root

### Development Notes

- Server runs on port 4321 by default (configurable in astro.config.mjs)
- Build includes Astro type checking before compilation
- Static site output configured for deployment on Vercel
- Prettier configured with Astro plugin for code formatting