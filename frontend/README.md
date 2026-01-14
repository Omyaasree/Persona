This is a Next.js project (App Router) created with create-next-app.

**Tech stack**
- React
- Next.js (App Router)
- Tailwind CSS

## Prerequisites
- Node.js 18+ (recommended)
- A running backend API (the frontend expects NEXT_PUBLIC_BACKEND_URL to point to the backend, e.g. http://localhost:4000)

## Install & Run (development)

1. Install dependencies:

`
npm install
`

2. Run the dev server:

`
npm run dev
`

Open http://localhost:3000 in your browser.

## Build & Start (production)

`
npm run build
npm start
`

## Environment
- Add environment variables to .env.local. The frontend uses NEXT_PUBLIC_BACKEND_URL to contact the backend API.

## Notes
- UI source: src/app/, src/components/.
- The feed UI posts to /posts on the backend and refreshes the feed on successful publish.
