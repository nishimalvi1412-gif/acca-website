# ACCA Tuition Website — Setup Guide

Everything below is free-tier. The only real cost is your domain (~₹700-900/yr).

## What's already built

- Homepage with subjects list, testimonials section, socials, jobs teaser
- Purchase-gating logic (`lib/supabaseClient.ts` → `hasPurchased()`)
- Razorpay payment flow (order creation + signature verification)
- Database schema enforcing one-user-one-purchase (`lib/schema.sql`)

## Step 1 — Push to GitHub

```
cd edtech-site
git init
git add .
git commit -m "Initial scaffold"
```
Create a new repo on github.com, then:
```
git remote add origin <your-repo-url>
git push -u origin main
```

## Step 2 — Supabase (auth + database, free)

1. Go to supabase.com -> New project (free tier)
2. Go to SQL Editor -> paste the contents of `lib/schema.sql` -> Run
3. Go to Project Settings -> API -> copy:
   - Project URL -> `NEXT_PUBLIC_SUPABASE_URL`
   - anon/public key -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - service_role key -> `SUPABASE_SERVICE_ROLE_KEY` (keep this one secret)
4. Go to Authentication -> Providers -> enable Email (or Google, if you want one-click login)

## Step 3 — Razorpay (payments, free to set up)

1. Go to razorpay.com/dashboard -> sign up
2. Start in **Test Mode** — don't switch to live until you've done one full test purchase
3. Settings -> API Keys -> generate -> copy into `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`

## Step 4 — Environment variables

```
cp .env.example .env.local
```
Fill in the values from steps 2 and 3.

## Step 5 — Run locally

```
npm install
npm run dev
```
Open localhost:3000

## Step 6 — Deploy (Vercel, free)

1. Go to vercel.com -> New Project -> import your GitHub repo
2. Add the same environment variables from `.env.local` in Vercel's project settings
3. Deploy

## Step 7 — Connect your domain

Vercel -> Project -> Settings -> Domains -> add your purchased domain, follow the DNS instructions it gives you.

## Step 8 — Go live with payments

Only after a successful test-mode purchase end-to-end: switch Razorpay from Test to Live mode, regenerate live API keys, update them in Vercel.

## Still to build (ask Claude for each, one at a time)

- `/book-a-call` page (embed Cal.com — no code needed, just an iframe/link)
- `/testimonials` page (replace placeholder boxes with real screenshots)
- `/jobs` page (simple list, can start as a manually-updated array like the subjects list)
- Login/signup pages using Supabase auth
- Individual `/subjects/[code]` pages with syllabus + purchase button
