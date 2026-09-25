# Kosham.ai

The Kosham marketing site, built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Next.js map

- `app/page.tsx` is the home page route (`/`).
- `app/layout.tsx` is the shared document shell, including fonts and SEO metadata.
- `app/globals.css` contains global styles; the page uses Tailwind utilities for local styling.

The page is a Server Component by default. It does not use `"use client"` because this version has no browser-only behavior, keeping it fast and uncomplicated.

## Deploy to Vercel

1. Create a GitHub repository and push this folder.
2. In Vercel select **Add New → Project**, import the GitHub repository, and leave the detected Next.js settings unchanged.
3. Deploy. Future pushes deploy automatically, and pull requests receive preview URLs.
4. Add `kosham.ai` under **Settings → Domains** and follow Vercel’s DNS instructions at your registrar.

This version needs no environment variables or database.
