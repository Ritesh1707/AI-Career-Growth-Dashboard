# Architecture Decisions

## ADR-001: Use `src/services/` as the architecture doc prescribes

**Date:** 2026-04-11  
**Status:** Accepted

### Context
The architecture doc (`docs/architecture.md`) recommends a `src/services/` folder for data-related logic and adapters. The initial Vite scaffold had created `src/api/` instead.

### Decision
Rename `src/api/` to `src/services/` to align with the architecture doc. The docs are the source of truth for folder naming, not the scaffold defaults.

### Rationale
- Consistency between code and documentation avoids confusion for any contributor or CLI picking up the project.
- `services/` better communicates the broader responsibility: mock data providers, formatting adapters, and future API clients — not just raw API calls.
- Following the architecture doc prevents drift between what is documented and what exists.

### Consequences
- All mock data providers, formatting adapters, and future API clients go in `src/services/`.
- The `src/api/` folder no longer exists.

---

## ADR-002: Dark mode via CSS class strategy

**Date:** 2026-04-11  
**Status:** Accepted

### Context
Dark/light mode is required from the start. Tailwind supports two strategies: `media` (OS preference only) and `class` (programmatic toggle).

### Decision
Use `darkMode: 'class'` in Tailwind config, toggling the `dark` class on `<html>`.

### Rationale
- Allows user-controlled toggling (not just OS preference).
- Persists user choice via `localStorage`.
- Respects OS preference on first visit.
- Standard approach in Tailwind-based SaaS products.

### Consequences
- ThemeProvider manages the class toggle.
- All dark-mode Tailwind utilities (e.g., `dark:bg-*`) work as expected.
- CSS custom properties in `tokens.css` change values under `.dark`.

---

## ADR-003: Design tokens as CSS custom properties

**Date:** 2026-04-11  
**Status:** Accepted

### Context
Design tokens (colors, shadows, radii) could be defined directly in `tailwind.config.js`, in a CSS file as custom properties, or both.

### Decision
Define all tokens as CSS custom properties in `src/styles/tokens.css`, then reference them from `tailwind.config.js` via `var(--token-name)`.

### Rationale
- Tokens update at runtime when the theme changes (no Tailwind rebuild needed).
- Keeps the theme system in one file.
- Tailwind's `bg-surface`, `text-content`, etc. automatically resolve to the correct light/dark value.
- Easier to debug in browser DevTools.

### Consequences
- Every color, shadow, and radius in the design system has a CSS variable.
- Tailwind config references these variables, not raw hex values.
- Adding a new token requires updating both `tokens.css` and `tailwind.config.js`.

---

## ADR-004: `src/app/` for application-level concerns

**Date:** 2026-04-11  
**Status:** Accepted

### Context
The architecture doc prescribes `src/app/` for router setup, providers, and app shell. The initial scaffold did not create this folder.

### Decision
Create `src/app/` with a `providers/` subdirectory. Start with `ThemeProvider.jsx`.

### Rationale
- Separates cross-cutting app-level concerns from feature code.
- `App.jsx` stays at `src/` root as the router entry (Vite convention).
- `src/app/providers/` is where context providers live.
- Future providers (e.g., data, auth) will go here too.

### Consequences
- The root import path for providers is `./app/providers/ProviderName`.
- Does not conflict with Vite's expectation of `src/App.jsx` being the app component.
