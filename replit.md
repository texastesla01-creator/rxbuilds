# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### RxBuilds LLC – RxFinance (`artifacts/rxbuilds`)
- Premium marketing landing page for RxBuilds LLC, a physician-founded fintech company
- Product: RxFinance iOS app (App Store: https://apps.apple.com/us/app/rxfinance/id6760018360)
- Frontend-only React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- Routes: `/` (landing), `/privacy-policy`, `/eula`, `/contact`
- Colors: Primary blue #0066CC, Teal accent #14B8A6, Charcoal #1F2937
- Contact email: teslatexas01@gmail.com

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
