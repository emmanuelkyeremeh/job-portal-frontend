# Job Portal Frontend

React + Vite frontend for Matchwise, the Software Engineering AI-powered job portal. Includes landing, login, and registration screens with client-side validation. Authentication currently uses simulated responses pending backend integration.

## Setup

Use Node.js 24 (`nvm use` if installed) and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:5173. Start the sibling `job-portal-backend` separately. During development, Vite proxies `/api` requests to http://localhost:3000; `fetch('/api/health')` reaches the backend health endpoint. Production hosting must configure the `/api` reverse proxy separately.

## Commands

- `npm run dev`: development server.
- `npm run lint`: Oxlint checks supplied by the Vite starter.
- `npm run build`: production bundle in `dist/`.
- `npm run preview`: preview the built bundle locally.

## Project boundaries

Sprint 1 targets registration/login, CV upload and AI-generated profile review. Later MVP work includes job search/filtering and explained match rankings. Keep AI calls and database operations in the backend. Never put private keys in `VITE_*` variables: those values are public in the browser bundle.

The product vision asks for responsive screens at 375 px and 1440 px. When implementing stories, include loading, empty and failure states and obtain confirmation before saving an AI-generated profile (FR-09/FR-11).

## Team workflow

Create a branch per story, reference its US/FR identifier in the PR, run lint and build, then request review before merging to `main`. The course materials remain in the parent course folder, outside this repository.
