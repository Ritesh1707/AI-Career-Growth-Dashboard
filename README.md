# AI Career Growth Dashboard (Frontend Learning Lab)

Enterprise-style React frontend learning project for building an **AI Career Growth Dashboard** - a product-grade, SaaS-feeling web app with a cinematic landing page and a premium dashboard experience.

Phase 1 is **frontend-only** and uses **mock data** (no backend, no auth, no real APIs).

## Table of Contents
- [Why this repo exists](#why-this-repo-exists)
- [Project status](#project-status)
- [Tech stack](#tech-stack)
- [Repository layout](#repository-layout)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Architecture and conventions](#architecture-and-conventions)
- [Documentation index](#documentation-index)
- [Workflow (how we build)](#workflow-how-we-build)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)

## Why this repo exists
This repository is structured like a real enterprise frontend codebase so you can practice:
- modular architecture and folder boundaries
- predictable, reviewable workflows
- documentation-first development
- incremental, maintainable UI implementation

## Project status
- [x] Vite + React app scaffolded in `app/`
- [x] Repo-level docs and workflows established (`docs/`, `workflows/`)
- [ ] Product UI (landing, dashboard shell, modules) is planned but not implemented yet

## Tech stack
**Currently in the repo:**
- React 18
- Vite 5
- ESLint

**Target direction (per project docs):**
- React Router
- Tailwind CSS
- Dark/Light mode support
- Mock-data-first services layer

Note: Target items are documented as direction and may not be wired in yet.

## Repository layout
```text
.
|-- app\                  # Vite + React application (run the product from here)
|   |-- src\               # Application source
|   |-- public\
|   `-- package.json        # App scripts (dev/build/lint/preview)
|
|-- docs\                 # Product + engineering documentation (source of truth)
|-- workflows\            # Operating procedures for AI-assisted dev
|-- automation\           # Automation notes / helper docs
|-- tooling\              # Dev tooling notes / helper docs
|-- scratch\              # Experiments / temporary work (keep tidy)
|-- AGENTS.md              # Project constraints + working agreements
`-- opencode.json          # Local tooling plugin configuration
```

## Getting started
### Prerequisites
- Node.js **18+** (Node 20 LTS recommended)
- npm (ships with Node)

### Install
```bash
cd app
npm install
```

### Run the app
```bash
cd app
npm run dev
```
Then open the local URL printed by Vite (typically `http://localhost:5173`).

## Scripts
All scripts live under `app/package.json`.

From `app/`:
- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint (max warnings = 0)

## Architecture and conventions
High-level rules (enforced by repo docs and intended discipline):
- **All application code lives in `app/`.**
- Prefer **feature-based organization** with shared UI separated from feature-only components.
- Prefer **clarity over cleverness** and avoid premature abstraction.
- Use **mock data first** (design shapes to be replaceable by APIs later).
- Do **not** add new dependencies without explicit approval.

For folder responsibilities, see: [`docs/architecture.md`](docs/architecture.md).

## Documentation index
These files are the project source of truth (especially when multiple AI tools are used):
- Product requirements: [`docs/prd.md`](docs/prd.md)
- Architecture direction: [`docs/architecture.md`](docs/architecture.md)
- Coding standards: [`docs/coding-standards.md`](docs/coding-standards.md)
- Team workflow: [`docs/workflows.md`](docs/workflows.md)
- Session continuity: [`docs/handoff.md`](docs/handoff.md)
- Progress tracking: [`docs/progress-log.md`](docs/progress-log.md)
- Decisions log: [`docs/decisions.md`](docs/decisions.md)
- Project working agreement: [`AGENTS.md`](AGENTS.md)

## Workflow (how we build)
This repo is intentionally documentation- and workflow-heavy to simulate an enterprise environment.

Recommended flow:
1. Plan first (define scope + impacted files)
2. Implement one small, reviewable step
3. Review the diff for maintainability and architecture fit
4. Update `docs/progress-log.md` and `docs/handoff.md` for continuity

Workflow playbooks:
- Planning: [`workflows/plan-first.md`](workflows/plan-first.md)
- Implementation: [`workflows/implement-step.md`](workflows/implement-step.md)
- Diff review: [`workflows/review-diff.md`](workflows/review-diff.md)
- Debugging: [`workflows/debug-flow.md`](workflows/debug-flow.md)

## Contributing
This project is optimized for learning high-signal engineering habits.

Guidelines:
- Keep PRs small and scoped.
- Do not mix refactors with feature work unless necessary.
- Follow `docs/coding-standards.md`.
- Do not introduce backend/auth/real APIs in Phase 1.
- Do not add dependencies without approval.

Suggested PR checklist:
- `npm run lint` passes (from `app/`)
- UI changes include empty/loading states where relevant
- Folder placement matches `docs/architecture.md`
- Progress/handoff docs updated if the change is meaningful

## Troubleshooting
- Port already in use: stop the other process or run `npm run dev -- --port 5174`.
- Node version issues: ensure Node 18+ (`node -v`).
- Install problems: delete `app\node_modules` and rerun `npm install`.

---

### Non-goals (Phase 1)
- Backend services, authentication, databases
- Real API integrations
- Multi-user production hardening

### License
No license file is currently included in this repository.
