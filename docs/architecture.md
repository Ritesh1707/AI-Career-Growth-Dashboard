# Architecture

## Overview

The project should use a modular frontend structure that is simple enough for learning but clean enough to reflect enterprise-style thinking.

The architecture should support:
- isolated feature development,
- reusable shared UI,
- future API integration,
- maintainable folder boundaries.


## Top-Level Approach

- Use React with JavaScript.
- Organize by feature where useful.
- Keep shared UI and utilities separate from feature-specific logic.
- Keep mock data easy to replace later.
- Prefer clarity over deep abstraction.


## Folder Direction

Main application code lives inside `/app`.

Recommended structure:

```text
app/
  public/
  src/
    app/
    components/
    features/
    hooks/
    pages/
    services/
    store/
    styles/
    types/
    utils/
```

## Folder Responsibilities

### `src/app`
Application-level setup.

Examples:
- router setup
- app shell
- layout-level wrappers
- providers if added later

### `src/components`
Shared reusable UI components used across features.

Examples:
- buttons
- cards
- badges
- modals
- section headers
- layout primitives

Do not place feature-only components here.

### `src/features`
Feature-based modules.

Suggested feature folders:
- dashboard
- skills
- jobs
- roadmap
- certifications
- projects
- education
- landing

Each feature can contain:
- components
- data mapping helpers
- feature-specific logic
- feature views/sections

### `src/hooks`
Reusable custom hooks.

Examples:
- theme toggling
- viewport helpers
- reusable UI behavior hooks

### `src/pages`
Route-level pages or route compositions.

Possible pages:
- landing page
- dashboard page
- module detail pages if added later

### `src/services`
Data-related logic and adapters.

Phase 1 examples:
- mock data providers
- formatting adapters
- future API placeholders

### `src/store`
Shared application state only if needed.

Keep this minimal in early phases.

Use local component state first unless shared state is clearly necessary.

### `src/styles`
Global styles, Tailwind entry styles, theme helpers, design tokens if needed.

### `src/types`
Reserved for future type definitions or schema notes.
Even in JavaScript, this folder can hold shape documentation if useful.

### `src/utils`
Pure utility helpers.

Examples:
- formatting
- calculations
- mapping helpers


## Routing Direction

Use React Router.

Likely routes:
- `/` for landing page
- `/dashboard` for main dashboard

Keep routing simple in early phases.


## State Strategy

Phase 1 state approach:
- local component state first
- props for straightforward data flow
- lift state only when necessary
- add shared/global state only when multiple features truly need it

Do not add a state library unless it becomes necessary and approved.


## Data Strategy

Use mock data first.

Recommended approach:
- keep mock data centralized or feature-local depending on usage
- design data in realistic shapes
- avoid scattering large hardcoded objects across random components
- **AI Simulation Support:** Mock data structures must include fields to simulate AI behavior (e.g., `ai_rationale`, `predictive_next_step`, `match_percentage`) to support the AI Copilot and Skill-Gap UX.

Possible examples:
- `features/skills/data.js`
- `features/jobs/data.js`
- `services/mock-data.js`


## Component Strategy

Use three broad categories:

1. Shared UI components
- generic and reusable
- no feature-specific assumptions

2. Feature components
- tied to one domain/module
- can compose shared UI

3. Page/layout components
- assemble sections into screens


## Scaling Direction

The codebase should be ready to evolve later toward:
- real APIs
- async loading states
- user-specific data
- dashboard persistence
- analytics and usage tracking

This means we should keep:
- folder boundaries clear,
- data flow understandable,
- UI modular,
- mock data replaceable.


## Architecture Decision Rule

When unsure:
- choose the simpler option,
- keep files focused,
- avoid overengineering,
- document important choices in `docs/decisions.md`.