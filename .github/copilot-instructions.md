## Quick orientation — Leaf Cart Shop

This file gives focused, discoverable guidance for an AI coding agent working in this repo.

- Project: React + TypeScript + Vite app with Tailwind and shadcn/ui components.
- Entry: `src/main.tsx` -> `src/App.tsx` (React Router routes live in `App.tsx`).
- State: Redux Toolkit store in `src/store/store.ts`. Cart slice is `src/store/CartSlice.tsx` (type `Plant`, actions: `addItem`, `removeItem`, `updateQuantity`).

Key commands (from `package.json`):

- Start dev server: `npm run dev` (runs `vite`).
- Build: `npm run build` (production build). `npm run build:dev` exists for development-mode build.
- Preview built app: `npm run preview`.
- Lint: `npm run lint` (ESLint).

Architecture and patterns to follow

- Routing: `App.tsx` uses `react-router-dom` with explicit routes; add new routes above the catch-all `*` route (see inline comment in `App.tsx`).
- UI: Components use shadcn-style primitives located under `src/components/ui/*`. Follow those wrapper components for styling and props.
- Data flow: Product cards and pages treat product shape as `Plant` (see `src/store/CartSlice.tsx`). `ProductCard.tsx` dispatches `addItem(plant)` and uses `RootState` selector to compute `isInCart`.
- State: Global app state is small and lives in `src/store`. Use Redux Toolkit slices and exported action creators (no thunk middleware configured here). For new slices, follow `CartSlice` structure and export actions + default reducer.
- Fetching: `App.tsx` wraps app with `@tanstack/react-query` (`QueryClientProvider`). Use React Query for remote data where appropriate and register query client similarly.

Conventions and examples

- Path aliases: imports use `@/...` (e.g., `import { Button } from '@/components/ui/button'`). Respect the tsconfig/vite aliases when adding files.
- Components: prefer small, focused components in `src/components/` with presentational `ui/` primitives separated from feature components (e.g., `ProductCard.tsx`, `Header.tsx`).
- Toasts: Sonner and `sonner` are used; example usage in `ProductCard.tsx` — call `toast.success('msg')` after dispatches.
- Types: public data shape for products is described in `CartSlice.tsx` (fields like `id, name, price, image, category, stock, soldLastMonth, careLevel`). Re-use that `Plant` interface rather than duplicating shape.

Developer workflows / debugging hints

- Local dev: `npm run dev` opens Vite server (default port shown by Vite). Static assets are under `public/` and `src/assets/`.
- Previewing a build: run `npm run build` then `npm run preview` to serve the `dist` build locally.
- Linting: `npm run lint` uses ESLint; fix issues in changed files before pushing.
- Adding routes: update `src/App.tsx` routes; test navigation in dev server.

Where to look first when implementing features

- New UI screens: add page under `src/pages/` and a route in `App.tsx`.
- New global state: add slice in `src/store/` and register it in `store.ts`.
- Reusable small UI: add to `src/components/ui/` following existing patterns (pill, card, button wrappers). Copy style/props patterns from existing `ui/*` files.

Edge notes

- Do not change route order in `App.tsx`; the catch-all `*` must remain last.
- Keep `Plant` type compatibility when adding product fields; tests and UI assume certain fields exist (e.g., `id`, `price`, `image`).

If you need more context

- Read `src/store/CartSlice.tsx`, `src/components/ProductCard.tsx`, and `src/App.tsx` for representative patterns and examples.
- If uncertain about a build issue, check `package.json` scripts and Vite output in the dev console.

If anything here is wrong or incomplete, please tell me which area to expand (routing, store patterns, ui conventions, or build/debug steps).
