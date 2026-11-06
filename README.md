# Component Library Builder

A starter project built with **React 19 + TypeScript + Vite + Tailwind CSS v4**.

## Requirements

- Node.js 20.19+ or 22.12+ (developed on Node 26)
- npm 10+

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the URL Vite prints (by default http://localhost:5173).

## Build

```bash
npm run build
```

Type-checks with `tsc -b`, then outputs a production build to `dist/`.

## Preview the production build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Project structure

```
├── public/            # Static assets served as-is
├── src/
│   ├── components/ui/
│   │   └── button/    # button.tsx + uSpec button.json / button.md
│   ├── lib/utils.ts   # cn() with the DESIGN.md scales registered
│   ├── App.tsx        # Tailwind utility demo page
│   ├── index.css      # @import "tailwindcss" + design tokens (@theme)
│   └── main.tsx       # Entry point, imports index.css
├── index.html
├── components.json    # shadcn/ui config (style radix-nova, alias @/)
├── vite.config.ts     # react() + tailwindcss() plugins, @ → src alias
├── AGENTS.md          # Repository rules for humans and AI agents
├── DESIGN.md          # Design tokens
└── MEMORY.md          # Project context and key workflows
```

## Tailwind CSS v4

Tailwind is wired in through the `@tailwindcss/vite` plugin — there is no
`tailwind.config.js` or PostCSS config. Customize tokens with the `@theme`
block in `src/index.css`; see [DESIGN.md](DESIGN.md).

## shadcn/ui

Components are copied into `src/components/ui/` by the shadcn CLI:

```bash
npx shadcn@latest add button
```

Move each new file into its own folder (`src/components/ui/<name>/<name>.tsx`) and
import it through the `@/` alias, e.g. `import { Button } from '@/components/ui/button/button'`.

## Environment variables

Put local values in `.env.local` (git-ignored). Only variables prefixed with
`VITE_` are exposed to client code, so never put secrets in them.
