# AGENTS.md

## Project

This repository is an enterprise-style frontend learning project for building an AI Career Growth Dashboard as a product-grade web application.

The application should feel like a real SaaS-style product with:
- a cinematic landing page,
- a premium dashboard experience,
- modular frontend architecture,
- realistic mock data,
- dark and light mode support.

This project is for learning strong engineering workflow, architecture discipline, and polished UI implementation.


## Product Scope

Phase 1 focuses on frontend only.

Main MVP modules:
- overview
- skills
- jobs
- roadmap
- certifications
- projects
- education

Do not add backend, authentication, database integration, or real APIs unless explicitly requested.


## Tech Stack

- React.js
- JavaScript
- Tailwind CSS
- React Router
- Mock data first

Do not add new dependencies without approval.


## Working Style

- Always inspect relevant files before making changes.
- Always propose a step-by-step plan before coding.
- Keep changes scoped to the approved task only.
- Prefer incremental implementation over large all-at-once generation.
- Prefer clear, maintainable architecture over clever shortcuts.
- Prefer reusable components and clear folder boundaries.
- Explain tradeoffs briefly in practical engineering terms.
- If requirements are unclear, ask before implementing.
- After implementation, review for maintainability, scalability, clarity, and UI consistency.


## Architecture Rules

- Keep app code inside `/app`.
- Prefer feature-based organization where practical.
- Keep shared UI separate from feature-specific components.
- Keep business/data logic reasonably separate from presentational UI.
- Prefer explicit naming and small focused files.
- Keep mock data organized so it can later be replaced by APIs.
- Document important architectural decisions in `/docs/decisions.md`.


## UI Rules

- The UI should feel premium, modern, and intentional.
- Avoid generic template-looking layouts.
- Avoid unnecessary visual noise.
- Avoid flashy effects that do not improve product feel.
- Keep strong visual hierarchy.
- Use motion carefully and with purpose.
- Build realistic empty, loading, and partial-data states.
- The landing page and dashboard should feel like one connected product.


## Coding Rules

- Use function components only.
- Do not introduce TypeScript in the middle of the project unless approved.
- Do not refactor unrelated files.
- Do not expand scope without approval.
- Prefer local state first; add shared state only when clearly needed.
- Keep mock data professional and structured.
- Avoid premature abstraction.


## Approval Rules

Allowed without asking:
- inspect files
- read docs
- propose plans
- make small scoped changes after approval
- update relevant project documentation

Ask before:
- adding dependencies
- major refactors
- changing architecture significantly
- deleting files
- changing tool configuration in risky ways
- introducing backend or auth


## Output Expectations

For meaningful tasks:
1. inspect relevant files
2. summarize understanding
3. propose a step-by-step plan
4. wait for approval before large changes
5. implement only the approved step
6. summarize:
   - files changed
   - why changed
   - risks
   - next recommended step


## Important Docs

Read these when relevant:
- `/docs/prd.md`
- `/docs/architecture.md`
- `/docs/coding-standards.md`
- `/docs/workflows.md`
- `/docs/handoff.md`
- `/docs/progress-log.md`


## Session Continuity

If continuing from a previous session:
- first read `/docs/handoff.md`
- then `/docs/progress-log.md`
- then only the files relevant to the current task

Do not rely only on chat history if repository docs are available.