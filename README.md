### InkSpire – Journal your mood and thoughts

InkSpire is a full‑stack journaling application built with Next.js App Router. It lets users write rich‑text journal entries, organize them into collections, and track mood analytics over time. Authentication is powered by Clerk, data is persisted with Prisma and PostgreSQL, and Arcjet protects routes and rate‑limits write operations. Daily prompts and images are sourced from external APIs.

### Tech Stack
- **Framework**: Next.js 15 (App Router), React 19, Turbopack
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Auth**: Clerk
- **Database/ORM**: PostgreSQL + Prisma
- **Security/Rate limiting**: Arcjet
- **Data viz**: Recharts
- **Rich text**: react-quill-new

### Features
- **Journaling**: Create, edit, delete entries with rich text and mood selection
- **Collections**: Group entries by user‑defined collections
- **Mood analytics**: Timeline and stats over 7/15/30 days
- **Daily prompt**: Cached inspirational quote
- **Pixabay integration**: Fetches a mood‑related illustration
- **Protected routes**: Middleware‑enforced auth for `/dashboard`, `/journal`, `/collection`
 - **Abuse protection**: Arcjet spam entry protection and bot detection

### Getting Started
1) Clone and install
```bash
npm install
npx prisma generate
```

2) Configure environment
Create `.env` from `.env.example` and set all keys (see below).

3) Database
```bash
npx prisma migrate dev
```

4) Run
```bash
npm run dev
```
Visit `http://localhost:3000`.

### Environment Variables
Copy `.env.example` to `.env` and fill in:
- `DATABASE_URL`: PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`: Clerk keys
- `ARCJET_KEY`: Arcjet key
- `PIXABAY_API_KEY`: Pixabay API key
- `API_NINJAS_KEY`: API Ninjas key for quotes

### Project Structure
```
app/
  (auth)/                    Auth layouts and pages (Clerk)
  (main)/                    Authenticated app shell
    dashboard/               Overview with analytics and collections
    journal/                 CRUD for entries
    collection/              Lists and filters entries by collection
  lib/                       App-level utilities and schemas
components/                  UI components (shadcn, layout, cards, dialogs)
actions/                     Server actions (CRUD, analytics, public APIs)
lib/                         Runtime libs (Prisma client, Arcjet, utils)
prisma/                      Prisma schema and migrations
public/                      Static assets
```

### Data Model (Prisma)
- `User`: links to Clerk user via `clerkUserId`
- `Collection`: user‑owned, unique by `(name, userId)`
- `Entry`: journal entry with `title`, `content`, `mode`, `modeScore`, `modeImgUrl`, optional `collectionId`
- `Draft`: one per user (`userId` unique) for autosave before publish

### Core Flows
- **Auth & Middleware**: `middleware.js` chains Arcjet and Clerk. Anonymous users are redirected from protected routes. Arcjet shields traffic and detects bots.
- **Prisma Client**: `lib/prisma.js` exports a singleton client generated to `lib/generated/prisma` per `prisma/schema.prisma` generator output.
- **Journal Actions**: `actions/journal.js`
  - `createJournalEntry(data)`: Auth + Arcjet token bucket, mood lookup, Pixabay image fetch, create entry, delete draft, revalidate dashboard
  - `getJournalEntries(opts)`: Fetch entries for current user with optional collection filtering and include collection info; attach mood metadata
  - `getJournalEntry(id)`: Single entry with collection
  - `updateJournalEntry(data)`: Validate ownership, recompute mood/image if changed, update and revalidate
  - `deleteJournalEntry(id)`: Ownership check then delete and revalidate
- **Collection Actions**: `actions/collection.js`
  - `getCollections()`, `createCollection(data)` with Arcjet protection, `deleteCollection(id)`
- **Analytics**: `actions/analytics.js` aggregates per‑day mood scores and returns timeline + overall stats for 7/15/30 day windows
- **Public APIs**: `actions/public.js`
  - `getPixabayImage(query)` and `getDailyPrompt()` cached via `unstable_cache`
- **Schema Validation**: `app/lib/schema.js` with Zod schemas for journals and collections
- **Mood Map**: `app/lib/moods.js` defines `MOODS` and helpers

### Security & Abuse Protection (Arcjet)
- **Bot protection**: `middleware.js` uses `detectBot({ mode: "LIVE" })` to block non‑allowed automated traffic while allowing search engines. It also enables `shield({ mode: "LIVE" })` for generic protections.
- **Rate limiting / spam control**: `lib/arcjet.js` configures a token bucket with capacity 100, refill 100/hour keyed by `userId`. Write endpoints (e.g., `createJournalEntry`, `createCollection`) call `aj.protect(req, { userId, requested: 1 })` and reject when `decision.isDenied()` with a clear "Too many requests" error, preventing spammy submissions.
- **Protected routes**: Middleware restricts `/dashboard`, `/journal`, `/collection` to authenticated users, reducing attack surface.

### UI Overview
- `app/layout.js`: Root layout with `ClerkProvider`, global `Header`, `Footer`, `Toaster`, SEO metadata, and background image
- Landing page `app/page.js`: Shows daily prompt, feature highlights, testimonials, FAQ, and CTA. Sign‑up via Clerk redirects to `/dashboard`.
- Authenticated shell `app/(main)/layout.js`: Containerized layout for protected routes
- Reusable components live in `components/` and `components/ui/`

### Running Checks
```bash
npm run lint
npm run build
```

### Deployment
- Provision a PostgreSQL database and set `DATABASE_URL`
- Configure Clerk and Arcjet keys in your host’s environment
- Run `prisma migrate deploy` during build
- Start with `npm run start`

### Contributing
1) Fork and branch from `main`
2) Keep edits small and focused; include screenshots for UI changes
3) Run lint/build before pushing

### License
MIT
