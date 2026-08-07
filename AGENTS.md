# Agent Instructions

This project uses Vite, React, TypeScript, Tailwind CSS, shadcn/ui, Supabase, and TanStack Query. Do not change it to a different framework, styling system, component library, backend client, or data-fetching library.

Use the existing shadcn components in `src/components/ui` where possible before adding new UI from scratch.

Use the Supabase client from `src/lib/supabase.ts` for all data access. Use TanStack Query hooks such as `useQuery` and `useMutation` for all data fetching and mutations; do not use raw `useEffect` plus `fetch` for app data access.

Run `npm install` after any change to `package.json`.

Never run `npm run dev`, `vite`, or start any server. The platform starts and manages the dev server separately. Only edit files.

Keep reusable components in `src/components/`. As the app grows, keep pages and routes organized clearly using concise names and folder structure that matches the feature boundaries.
