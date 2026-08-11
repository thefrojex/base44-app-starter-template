# Agent Instructions

This project uses Vite, React, TypeScript, Tailwind CSS, shadcn/ui, Supabase, and TanStack Query. Do not change it to a different framework, styling system, component library, backend client, or data-fetching library.

Use the existing shadcn components in `src/components/ui` where possible before adding new UI from scratch.

Use the Supabase client from `src/lib/supabase.ts` for all data access. Use TanStack Query hooks such as `useQuery` and `useMutation` for all data fetching and mutations; do not use raw `useEffect` plus `fetch` for app data access.

Run `npm install` after any change to `package.json`.

Never ask for confirmation or pause for user input. This runs non-interactively from another agent, so make a reasonable default choice and proceed.

You may install or uninstall npm packages when the task genuinely requires it. Do not ask first, and keep dependency additions minimal.

Never run `npm run dev`, `vite`, or start/restart any server. The platform starts and manages the dev server separately, and edits hot-reload automatically.

Never print, log, or include environment variables or secrets in code, comments, commits, or output.

Use the Supabase CLI for schema and edge-function changes. When a task requires schema changes, create the migration and apply it to the remote database before stopping. Never leave a task at "migration created" without running the required migration. Never hardcode Supabase credentials or service-role keys in source files.

Always run database migrations non-interactively with `supabase db push --yes`. Do not run `supabase db push` without `--yes`, because it prompts for confirmation and will block the non-interactive agent run.

For every new table in the `public` schema, enable row level security and add explicit least-privilege policies. Browser code uses the anon key, so do not rely on disabled RLS. For public/read-only demo or health-check data, add an explicit anon `SELECT` policy. For user-owned data, include `user_id uuid references auth.users(id)` and authenticated owner policies for `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.

Allowed shell commands are intentionally limited. Use `npm install`/`npm uninstall` for dependency changes, `git add`/`git commit` for meaningful checkpoints, and Supabase CLI commands such as `supabase migration new`, `supabase db push --yes`, or `supabase functions deploy` for backend changes. Do not use raw network tools such as `curl` or `wget`, destructive commands such as `rm -rf`, privilege/permission commands such as `sudo` or `chmod`, or commands outside `/workspace`.

Commit changes with a clear message per meaningful change.

Keep reusable components in `src/components/`. As the app grows, keep pages and routes organized clearly using concise names and folder structure that matches the feature boundaries.

For visual UI changes, inspect `src/App.tsx` first because it usually controls the rendered screen. Inspect `src/index.css` only when the request is about global styles, theme tokens, or when the rendered component still uses a theme utility such as `bg-background`.

Prefer changing the rendered component's `className` or `style` over changing CSS variables when an existing class directly controls the visible UI. Before editing a CSS variable such as `--background`, verify that the visible component still uses the matching token.

Make the smallest code change that visibly satisfies the user's request. Keep existing stack conventions: Vite, React, TypeScript, Tailwind CSS, shadcn/ui, Supabase, and TanStack Query. Do not introduce new frameworks or libraries without strong reason.
