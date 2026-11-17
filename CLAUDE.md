@AGENTS.md

# Project conventions

- Stack: Next.js App Router, TypeScript (strict + `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`), Tailwind v4, pnpm. Linting is **Oxlint** (not ESLint) and formatting is **Oxfmt**.
- Verify with `pnpm exec oxlint && pnpm build` (the build also type-checks). Format with `pnpm fmt`, never bare `oxfmt` (the stylistic JSX rules run after it).
- Components are `PascalCase.tsx`, default-exported. `src/components/index.ts` re-exports server-safe components only; client components (`'use client'`) are imported by direct path.
- All page content lives in `src/constants`; types in `src/types`. No `any`, no unexplained casts.
- External data goes through `lib/http.ts` (`fetchJson` + a Zod schema, typed `AppError`) and is returned as a `Result`. Components degrade gracefully when it fails.
- JSX: one attribute stays inline; two or more go one per line with the closing `>` on its own line.
- This Next.js version's `error.tsx` receives `retry`, not `reset`. Check `node_modules/next/dist/docs/` before using file conventions.
