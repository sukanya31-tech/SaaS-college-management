# GitHub Copilot Workspace Instructions

## Overview
This project is a Next.js (app directory) TypeScript application with a domain-driven component structure, strict linting, and path aliasing. It is organized for clarity, scalability, and modern best practices.

## Build & Development
- **Start development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Start production server:** `npm run start`
- **Lint code:** `npm run lint`
- **Testing:** _No test runner is set up by default. Add Jest/React Testing Library as needed._

## Project Structure & Conventions
- **App Directory Routing:** Pages and routes are defined by folders in `app/` (e.g., `app/about/`, `app/contact/`).
- **Component Organization:** Components are grouped by domain in `app/component/` (e.g., `home/`, `about/`, `college-management/`, `common/`).
- **Public Assets:** Static files are in `public/`, organized by feature.
- **Path Aliases:** Use `@/` for root-relative imports (see `tsconfig.json`).
- **TypeScript:** Strict mode is enabled; follow type safety best practices.
- **ESLint:** Uses Next.js and TypeScript configs; build and type output folders are ignored.
- **Environment Variables:** Store in `.env.local` (not committed).

## Key Files
- `app/page.tsx`: Homepage entry point
- `app/layout.tsx`: Root layout
- `app/component/common/header.tsx`: Shared header component
- `tsconfig.json`: TypeScript config and path aliases
- `eslint.config.mjs`: ESLint config
- `next.config.ts`: Next.js config

## Common Pitfalls
- **No test setup:** Add Jest/React Testing Library if needed
- **TypeScript strictness:** Fix type errors promptly
- **Environment variables:** Must be set up locally
- **ESLint ignores:** Do not place source files in ignored folders

## Example Prompts
- "Add a new page under /about/ for faculty details."
- "Refactor the header component to use a dropdown menu."
- "Set up Jest and write a test for About.tsx."

---

For more details, see the README.md or ask for specific conventions or patterns.
