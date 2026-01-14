# Backend

**Tech stack**
- Node.js
- Express
- Prisma (ORM)
- PostgreSQL (database)
- dotenv

## Prerequisites
- Node.js 18+
- A PostgreSQL database and a DATABASE_URL connection string

## Setup
1. Install dependencies:

`
cd backend
npm install
`

2. Configure environment:

Create a .env file in ackend/ with at least:

`
DATABASE_URL= postgresql://user:password@localhost:5432/dbname
`

3. Generate Prisma client:

`
npx prisma generate
`

(If you need migrations, run 
px prisma migrate dev to apply them.)

## Run (development)

`
npm run dev
`

The server listens on port 4000 by default (see src/server.js).

## API
- POST /posts — create a post
- GET /posts — list published posts

## Notes
- Prisma schema is in src/prisma/schema.prisma.
- If you change the schema, re-run 
px prisma generate.
