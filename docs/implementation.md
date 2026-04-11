# Step 1: Project Foundation — AI Career Growth Dashboard

**Status:** ✅ Completed (2026-04-11)

## 1. Current Understanding of the Project

### What existed before Step 1

| Area | Status |
|---|---|
| **Repository docs** | Fully prepared — AGENTS.md, PRD, architecture, coding standards, workflows, handoff, progress log |
| **Vite + React scaffold** | Initialized inside `/app` with React 18, Vite 5, ESLint |
| **Source folder skeleton** | Empty directories: `components/ui`, `features`, `pages`, `hooks`, `layouts`, `store`, `utils`, `api`, `config`, `assets`, `types` |
| **Current App.jsx** | Placeholder "React Frontend Learning Lab" heading with CSS module styling |
| **Tailwind CSS** | **Not installed** — the architecture doc says Tailwind, but it is not in `package.json` |
| **React Router** | **Not installed** — planned but not yet added |
| **Theme / dark mode** | Nothing implemented |
| **Design tokens** | Nothing defined |
| **Mock data** | Nothing created |

### What the docs prescribe

- Two core surfaces: **cinematic landing page** (`/`) + **dashboard** (`/dashboard`)
- 7 MVP modules: overview, skills, jobs, roadmap, certifications, projects, education
- Feature-based folder structure inside `src/features/`
- Shared UI in `src/components/`, pages in `src/pages/`, app shell in `src/app/` (currently missing — the architecture doc says `src/app/` but the actual scaffold has no `src/app/` folder)
- Design should feel premium SaaS, not a generic template
- Dark/light mode from the start
- Mock-data-first, shaped for future API replacement

### Key gap

The scaffold has directory stubs but **no wiring** — no Tailwind, no router, no theme, no layout, no pages. This is exactly the right place to start: lay the foundation before any feature work.

---

## 2. Proposed Step 1: Project Foundation

> **Goal:** Wire the core infrastructure so that any subsequent step (landing page, dashboard module, etc.) can be built on solid ground and handed off to another CLI without ambiguity.

Step 1 delivers:

1. **Install Tailwind CSS v3 + PostCSS + Autoprefixer** (required dependencies)
2. **Install React Router v6** (required dependency)
3. **Tailwind config + global CSS entry** with design tokens (colors, spacing, typography, border-radius, shadows)
4. **Dark/light theme system** via CSS class strategy + a `useTheme` hook + ThemeProvider context
5. **App shell with React Router** — `BrowserRouter` wrapping, route definitions for `/` and `/dashboard`
6. **Layout components** — `LandingLayout` and `DashboardLayout` (sidebar + topbar shell)
7. **Placeholder page components** — `LandingPage` and `DashboardPage` with minimal "ready" content
8. **`index.html` update** — proper title, meta description, Google Fonts link

### What Step 1 does NOT include

- No landing page content/sections (that is Step 2)
- No dashboard module content (Step 3+)
- No mock data
- No animations or micro-interactions
- No feature-specific components

---

## 3. File/Folder Structure After Step 1

> Items marked with ✦ are **new files** created in Step 1.
> Items marked with ✎ are **modified** existing files.
> Empty placeholder directories from the scaffold are kept for future use.

```text
app/
├── index.html                          ✎  (updated title, meta, fonts)
├── package.json                        ✎  (+ tailwindcss, postcss, autoprefixer, react-router-dom)
├── vite.config.js                          (unchanged)
├── tailwind.config.js                  ✦  (design tokens, dark mode class strategy)
├── postcss.config.js                   ✦  (tailwind + autoprefixer)
├── src/
│   ├── main.jsx                        ✎  (BrowserRouter wrapper, global CSS import)
│   ├── App.jsx                         ✎  (router outlet with route definitions)
│   ├── index.css                       ✦  (Tailwind directives + CSS custom properties for theme)
│   │
│   ├── app/                            ✦  NEW FOLDER (architecture doc prescribes this)
│   │   └── providers/
│   │       └── ThemeProvider.jsx        ✦  (dark/light context provider)
│   │
│   ├── components/
│   │   └── ui/                             (empty — ready for shared UI later)
│   │
│   ├── features/                           (empty — ready for feature modules later)
│   │
│   ├── hooks/
│   │   └── useTheme.js                 ✦  (consume theme context)
│   │
│   ├── layouts/
│   │   ├── LandingLayout.jsx           ✦  (full-width, no sidebar shell)
│   │   └── DashboardLayout.jsx         ✦  (sidebar + topbar + content area shell)
│   │
│   ├── pages/
│   │   ├── LandingPage.jsx             ✦  (placeholder for landing)
│   │   └── DashboardPage.jsx           ✦  (placeholder for dashboard overview)
│   │
│   ├── styles/                         ✦  NEW FOLDER
│   │   └── tokens.css                  ✦  (CSS custom properties: colors, spacing, radii, shadows)
│   │
│   ├── config/                             (empty — ready for app config later)
│   ├── store/                              (empty — ready for shared state later)
│   ├── services/                           (empty — data adapters, per architecture doc)
│   ├── assets/                             (empty — ready for static assets later)
│   ├── types/                              (empty — reserved)
│   └── utils/                              (empty — ready for helpers later)
```

### Folder decisions

- **`src/services/`** is the data/services folder, matching the architecture doc. The original scaffold had `src/api/` which was renamed.
- **`src/app/`** was created for app-level setup (providers, router wiring) as the architecture doc prescribes.

---

## 4. Risks and Assumptions

### Risks

| Risk | Mitigation |
|---|---|
| Tailwind version mismatch (v3 vs v4) | Explicitly install v3 with PostCSS — it is stable and well-documented for Vite |
| Over-engineering the theme system | Keep it to a simple CSS class toggle (`dark` class on `<html>`) + context — no external library |
| Layout skeleton diverging from actual design later | Keep layouts minimal; they are shells, not final designs |
| `src/app/` vs root-level `App.jsx` confusion | `App.jsx` stays at `src/` root as the router entry; `src/app/` holds providers and app-level wiring |
| Scope creep into visual design | This step is infrastructure only — no colors, no gradients, no animations beyond a working dark/light toggle |

### Assumptions

- Tailwind CSS v3, PostCSS, Autoprefixer, and `react-router-dom` v6 are approved dependencies (they are listed in the tech stack)
- The `dark` class strategy (on `<html>`) is the right approach for dark mode — it is the Tailwind standard
- Google Fonts will be loaded via `<link>` in `index.html` for now (no self-hosting complexity)
- The dashboard layout uses a full-height fixed sidebar (SaaS standard, like Linear/Notion)
- Both layouts share the same theme context

---

## 5. Step-by-Step Implementation Plan for Step 1

### Sub-step 1.1: Install dependencies

```bash
cd app
npm install react-router-dom
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

This creates `tailwind.config.js` and `postcss.config.js` automatically.

**Files changed:** `package.json`, `package-lock.json`, `tailwind.config.js` ✦, `postcss.config.js` ✦

---

### Sub-step 1.2: Configure Tailwind

Edit `tailwind.config.js`:
- Set `darkMode: 'class'`
- Set `content` paths to scan `./index.html` and `./src/**/*.{js,jsx}`
- Extend theme with project design tokens (font family, custom colors, border radii, box shadows)

**Files changed:** `tailwind.config.js` ✎

---

### Sub-step 1.3: Create global CSS + design tokens

Create `src/index.css`:
- Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`)
- Import `./styles/tokens.css`
- Base reset styles (smooth scrolling, font defaults)

Create `src/styles/tokens.css`:
- CSS custom properties for light theme colors
- CSS custom properties for dark theme colors (scoped under `.dark`)
- Spacing, radius, and shadow tokens

**Files created:** `src/index.css` ✦, `src/styles/tokens.css` ✦
**Files removed:** `src/App.module.css` (replaced by Tailwind — deleted)

---

### Sub-step 1.4: Create ThemeProvider + useTheme hook

Create `src/app/providers/ThemeProvider.jsx`:
- React context for theme state (`'light'` | `'dark'`)
- Reads initial preference from `localStorage` or `prefers-color-scheme`
- Toggles `dark` class on `document.documentElement`
- Persists choice to `localStorage`

Create `src/hooks/useTheme.js`:
- Convenience hook that consumes the ThemeContext
- Returns `{ theme, toggleTheme }`

**Files created:** `src/app/providers/ThemeProvider.jsx` ✦, `src/hooks/useTheme.js` ✦

---

### Sub-step 1.5: Create layout shells

Create `src/layouts/LandingLayout.jsx`:
- Full-viewport wrapper
- Slot for page content via `<Outlet />`
- No sidebar, no topbar (landing is its own experience)

Create `src/layouts/DashboardLayout.jsx`:
- Full-height fixed sidebar shell (brand, nav placeholders, theme toggle)
- Top bar shell with backdrop blur
- Main content area with `<Outlet />`
- Responsive-aware structure

Both layouts use Tailwind classes. Minimal visual styling — just structural shells.

**Files created:** `src/layouts/LandingLayout.jsx` ✦, `src/layouts/DashboardLayout.jsx` ✦

---

### Sub-step 1.6: Create placeholder pages

Create `src/pages/LandingPage.jsx`:
- Simple centered content: project name heading, single line description
- Tailwind dark-mode-aware text colors
- Link/button to navigate to `/dashboard`

Create `src/pages/DashboardPage.jsx`:
- Simple heading: "Welcome back"
- Placeholder module card grid
- Dark-mode-aware

**Files created:** `src/pages/LandingPage.jsx` ✦, `src/pages/DashboardPage.jsx` ✦

---

### Sub-step 1.7: Wire App.jsx + main.jsx + routes

Edit `src/main.jsx`:
- Import `index.css`
- Wrap `<App />` with `<BrowserRouter>` and `<ThemeProvider>`

Edit `src/App.jsx`:
- Remove old placeholder content
- Define routes:
  - `/` → `LandingLayout` → `LandingPage`
  - `/dashboard` → `DashboardLayout` → `DashboardPage`
- Use `<Routes>`, `<Route>`, layout wrapping via nested routes

**Files changed:** `src/main.jsx` ✎, `src/App.jsx` ✎

---

### Sub-step 1.8: Update index.html + cleanup

Edit `app/index.html`:
- Update `<title>` to "AI Career Growth Dashboard"
- Add meta description
- Add Google Fonts `<link>` for Outfit (display) + DM Sans (body) — placeholder pair, to be refined in Step 2

Delete `src/App.module.css` (no longer needed).

Rename `src/api/` to `src/services/` to match architecture doc.

Document architecture decisions in `docs/decisions.md`.

**Files changed:** `index.html` ✎
**Files deleted:** `src/App.module.css`
**Files renamed:** `src/api/` → `src/services/`
**Files updated:** `docs/decisions.md` ✎

---

## 6. Verification Plan

After completing all sub-steps:

1. Run `npm run dev` inside `/app` and confirm:
   - App loads at `http://localhost:5173/`
   - Landing page renders with placeholder content
   - Navigating to `/dashboard` shows dashboard layout with sidebar/topbar shell
   - Theme toggle switches between light and dark mode
   - No console errors
2. Run `npm run build` to verify production build succeeds
3. Visually confirm dark mode class toggles on `<html>` element

---

## Resolved Decisions

| Question | Decision |
|---|---|
| **Font selection** | Option B — Outfit + DM Sans as placeholder pair, refine during Step 2 (Landing Page) |
| **`src/api/` vs `src/services/`** | Follow architecture doc — renamed to `src/services/` |
| **Sidebar pattern** | Full-height fixed sidebar (like Linear, Notion) |
