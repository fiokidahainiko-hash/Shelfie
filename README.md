# Shelfie — UGC ad studio (starter)

A starter clone of an EcomBos-style product: turn a product photo + script
into a UGC-style ad video. Next.js 14 (App Router) + TypeScript + Tailwind.

## What's here

- `app/page.tsx` — marketing landing page
- `app/generate/page.tsx` — the studio UI (product URL, script, model picker, preview)
- `app/api/generate/route.ts` — mock generation endpoint, structured so you
  can drop in a real provider (Runway, Kling, Veo, HeyGen, etc.)

This is intentionally an MVP skeleton, not a finished SaaS: there's no auth,
billing, or credits system yet. See **Roadmap** below for what a real product
needs next.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Push this to GitHub

```bash
cd shelfie
git init
git add .
git commit -m "Initial commit: Shelfie starter"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first, or use `gh repo create` if you have
the GitHub CLI installed.)

## Wiring up real video generation

`app/api/generate/route.ts` currently returns a mock response. Replace it
with a call to whichever model provider you want:

| Provider | Good for |
|---|---|
| Runway Gen-4 / Kling 3.0 / Veo 3 | Image-to-video product ads |
| HeyGen | Talking-head AI avatar UGC |
| ElevenLabs | Voiceover for scripts |

Most of these APIs are async — they return a job id, and you poll a status
endpoint until the render finishes. You'll want:

1. A `jobs` table (id, status, provider, output_url, user_id)
2. `POST /api/generate` → creates the job, calls the provider, stores the job id
3. `GET /api/generate/[jobId]` → polls the provider, updates status
4. The front end polls `GET /api/generate/[jobId]` every few seconds until `status === "done"`

## Roadmap to a real product

- **Auth** — Clerk or NextAuth for sign-up/login
- **Database** — Postgres (Supabase/Neon) for users, jobs, credit balances
- **Credits & billing** — Stripe for subscriptions, a `credits` column debited per generation
- **File storage** — S3 or Supabase Storage for uploaded product images and rendered videos
- **Queue** — a background job runner (e.g. Trigger.dev or a simple cron-polled table) so renders don't block the request
- **Deploy** — Vercel is the path of least resistance for Next.js

## Environment variables (once you add real providers)

Create a `.env.local`:

```
KLING_API_KEY=
RUNWAY_API_KEY=
HEYGEN_API_KEY=
DATABASE_URL=
STRIPE_SECRET_KEY=
```
