# AGENTS.md — Repository rules

Rules for anyone (human or AI agent) working in this repository.

## Stack

- React 19 + TypeScript (strict) + Vite
- Tailwind CSS v4 via `@tailwindcss/vite` — no `tailwind.config.js`, no PostCSS config
- Lint: `oxlint`

## Commands

| Task       | Command           |
| ---------- | ----------------- |
| Install    | `npm install`     |
| Dev server | `npm run dev`     |
| Build      | `npm run build`   |
| Lint       | `npm run lint`    |
| Preview    | `npm run preview` |
| Storybook  | `npm run storybook` (port 6016, MCP at `/mcp`) |
| Story tests | `npm test` (Vitest browser mode, every story + play) |
| Storybook build / preview | `npm run build-storybook` then `npm run preview-storybook` (port 6017) |

## Working rules

1. **Stay in the repo.** Never create, edit or delete files outside this folder.
2. **No secrets.** Never commit `.env*` files, API keys, tokens, certificates or
   credentials. Use `.env.local` for local values and `.env.example` (placeholder
   values only) for documentation.
3. **Verify before claiming success.** Run `npm run build` (and `npm run lint`)
   and read the output before reporting a change as done.
4. **Styling.** `DESIGN.md` (DesignBridge export from Figma) is the source of truth
   for tokens; `src/index.css` mirrors it under the same names. Change a token in
   DESIGN.md first, then in `src/index.css`, then the lists in `src/lib/utils.ts`.
   Use only DESIGN.md tokens via Tailwind utilities (`bg-ink`, `rounded-button`,
   `text-button-label`) — never hard-coded hex or arbitrary values.
5. **Dynamic classes.** Tailwind scans source files for complete class names, so
   never build them by string concatenation (`rounded-${n}`). Map values to full
   class strings instead (see `src/App.tsx`).
6. **TypeScript.** Keep `strict` on; no `any` without a comment explaining why.
   Use `import type` / `type` modifiers for type-only imports.
7. **Components.** One component per file under `src/components/` once the
   library grows; name files in PascalCase (`Button.tsx`). shadcn/ui primitives
   live in `src/components/ui/<name>/` next to their uSpec contract and spec
   (`button/button.tsx`, `button.json`, `button.md`). `npx shadcn@latest add <name>`
   writes `src/components/ui/<name>.tsx`; move it into its folder and import it via
   `@/components/ui/<name>/<name>`. Import `cn` from `@/lib/utils`, not from `cn`.
8. **Dependencies.** Add dependencies only when necessary and note why in the PR.
9. **Docs.** Record important decisions and workflows in `MEMORY.md`.
