# MEMORY.md — Project context & key workflows

Running notes on context, decisions and workflows. Add new entries at the top of
the log with a date (YYYY-MM-DD).

## Context

- **Goal:** build a reusable React component library, styled with Tailwind CSS v4.
- **Scaffold:** `npm create vite@latest . -- --template react-ts` (create-vite v9).
- **Versions at setup:** React 19.3, Vite 8.3, TypeScript 7.0, Tailwind CSS 4.3.

## Key files

- `vite.config.ts` — registers `react()` and `tailwindcss()` plugins.
- `src/index.css` — `@import "tailwindcss";` plus design tokens in `@theme`.
- `src/main.tsx` — imports `./index.css` (required for any styles to load).
- `src/App.tsx` — demo page of Tailwind utilities and tokens.

## Workflows

- **Add a design token:** add it to DESIGN.md, then to `src/index.css` under the
  same name (e.g. `--color-mint-chip` → `bg-mint-chip`), then to the lists in
  `src/lib/utils.ts` if it is a text/spacing/radius name.
- **Before finishing any change:** `npm run lint && npm run build`.
- **Dark mode:** none — DESIGN.md has no themes block (light theme only).

- **uSpec (design-system docs from Figma):** `npx uspec-skills init` installed
  13 skills in `.claude/skills/`, reference docs in `references/`, and
  `uspecs.config.json` (platform `claude-code`, MCP `figma-mcp`). Next step is the
  `firstrun` skill, which needs the Figma MCP connected. `src/index.css` excludes
  both folders via `@source not` so their markdown doesn't add CSS.

- **shadcn MCP:** `npx shadcn@latest mcp init --client claude` wrote `.mcp.json`
  (server `shadcn` → `npx shadcn@latest mcp`) and added `shadcn` as a devDependency.
  Restart Claude Code to load it.

- **shadcn/ui:** `npx shadcn@latest init -t vite -b radix -p nova` created
  `components.json` (style `radix-nova`, base color neutral, lucide icons), the
  `@/*` → `src/*` alias (tsconfig.json, tsconfig.app.json, vite.config.ts),
  `src/lib/utils.ts` (re-exports `cn` from shadcn's `cn` package) and
  `src/components/ui/button.tsx`. Add more with `npx shadcn@latest add <name>`.
  Its default theme values were later replaced by DESIGN.md tokens (see below).

- **Design tokens:** DESIGN.md is a DesignBridge export (Figma) and the source of
  truth. `src/index.css` holds all 348 tokens + opacity + font-family strings,
  generated from DESIGN.md (values verified 1:1). Colors, radius and semantic
  spacing are in `@theme static` (utilities: `bg-ink`, `rounded-button`,
  `px-button-padding-x`); numeric spacing / typography / size / border-width /
  letter-spacing are plain `:root` vars; type styles are `text-<style>` utilities.
  Tailwind's default palette is removed (`--color-*: initial`).
- **cn config:** `src/lib/utils.ts` registers the custom text/spacing/radius names
  with `createCn`; without it `cn` drops `text-button-label` next to a text color.

- **Storybook:** `.storybook/main.ts` + `preview.tsx`. Preview imports
  `src/index.css` and the framework runs with `strictMode: true` — together that
  is everything `src/main.tsx` provides (no context providers exist yet; add any
  new app provider as a decorator in `preview.tsx`). Stories are colocated:
  `src/components/ui/<name>/<name>.stories.tsx`. `npm test` runs each story and
  its `play` in headless Chromium via `@storybook/addon-vitest` (project
  `storybook` in `vite.config.ts`); a11y violations fail the test
  (`a11y.test: 'error'`). The `CssCheck` story in `button.stories.tsx` asserts
  computed token values, so it fails if the preview stops loading the CSS.
- **Storybook MCP:** `@storybook/addon-mcp` serves `http://localhost:6016/mcp`
  while `npm run storybook` is running; `.mcp.json` registers it as `storybook`
  (restart Claude Code to load it).

## Decision log

- **2026-11-06** — Added Storybook 10.6 (`npm create storybook@latest`, features
  docs/test/a11y/ai) with Vitest 5.1 + Playwright 1.65. Decisions: removed the
  scaffold's `src/stories/` examples (hard-coded CSS) and `@chromatic-com/storybook`
  (not needed); pinned the `latest` ranges it wrote; ports 6016/6017 instead of
  6006/6007, which other local Storybooks already use; static build is previewed
  with `vite preview --outDir storybook-static` (no extra server dependency);
  no MSW/mockdate — no component fetches data or reads the date.

- **2026-11-06** — Converted all tokens to DESIGN.md (DesignBridge). Decisions:
  numeric `--spacing-N` stay out of `@theme` (they would override Tailwind's scale,
  e.g. `p-8` → 8px, and break shadcn); font weights had a bogus `px` unit and
  letter-spacing/opacity float32 noise — written unitless/rounded; no dark mode,
  shadows or focus color in DESIGN.md → single light theme, `--shadow-card`
  removed, `--ring` = text primary (assumed); `--muted-foreground` uses
  text-secondary #444 (text-muted #979797 fails contrast). Fonts: Inter Variable,
  IBM Plex Mono 400, Barlow Condensed 700 (SuisseIntl* are commercial, token only);
  Geist removed. Button restyled to DESIGN.md (48px, 14/20, gap 20, 15/500, r8,
  opacity 0.35); xs/sm padding + label size are assumed (not in DESIGN.md).
- **2026-11-06** — Button files grouped in `src/components/ui/button/`
  (button.tsx, button.json, button.md); root `components/` removed. uSpec's
  default output is still `./components/` — pass `--output` when re-running.

- **2026-11-06** — Added shadcn/ui (Nova preset, Radix) and its Button. Kept the
  `prefers-color-scheme` dark mode instead of shadcn's `.dark` class; font is now
  Geist. The `cn` dependency is shadcn's own package (github.com/shadcn-ui/cn).

- **2026-11-02** — Added shadcn MCP server for Claude Code (npm used instead of
  pnpm, which isn't installed and isn't this repo's package manager).

- **2026-11-02** — Added uSpec skills v0.3.3 with the official Figma MCP.

- **2026-11-02** — Project created. Tailwind v4 via Vite plugin (no config file).
  Removed template `App.css` and sample images; demo page uses Tailwind only.
