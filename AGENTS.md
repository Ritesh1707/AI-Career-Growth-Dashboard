# Project Purpose

This repository is an enterprise-style frontend learning project for building an **AI Career Growth Dashboard**.

The goal is to learn transferable AI-assisted engineering workflows while building a polished product-like React application with a cinematic landing experience and a premium dashboard UI.

This project is not a quick demo or portfolio-only site. It should feel like a real SaaS-style product that could later connect to enterprise APIs and real user data.


# Product Vision

Build a career intelligence web app that helps users understand where they are, where they want to go, and what they should do next.

The product should combine:
- a cinematic landing page that creates strong first impression,
- a dashboard experience with clear information hierarchy,
- mock data for phase 1,
- modular frontend architecture that can later support backend/API integration.


# Core Modules

The main modules for the MVP are:
- Skills
- Jobs
- Roadmap
- Certifications
- Projects
- Education

The app should also include a high-level overview/dashboard area that summarizes progress and priorities.


# Tech Stack

- React.js
- JavaScript
- Tailwind CSS
- React Router
- Mock data first

Do not add new libraries unless approved.


# Working Style

- Always analyze before editing.
- Always propose a plan before creating or modifying files.
- Keep changes scoped to the approved step only.
- Prefer simple, maintainable architecture over clever shortcuts.
- Prefer reusable components and clear folder boundaries.
- Explain tradeoffs briefly in practical industry terms.
- After implementation, review code for maintainability, scalability, and clarity.
- If requirements are unclear, ask before implementing.
- Prefer incremental implementation over large all-at-once generation.


# Architecture Rules

- Keep app code inside `/app`.
- Keep feature modules separated by domain where reasonable.
- Keep business logic separate from purely presentational UI where practical.
- Prefer explicit naming and small focused files.
- Use shared components only when reuse is real, not hypothetical.
- Keep mock data organized so it can later be replaced by APIs.
- Document key architectural decisions in `/docs/decisions.md`.


# UI and Product Rules

- The UI should feel premium, modern, and product-like.
- Avoid generic template-looking layouts.
- Avoid overusing random gradients, glowing blobs, and flashy effects.
- Use dark mode and light mode.
- Keep visual hierarchy strong and intentional.
- Use motion carefully; polish is good, noise is bad.
- Build real empty states, loading states, and realistic module states.
- The landing page and dashboard should feel connected as one product.


# Constraints

- Do not add backend code in phase 1 unless explicitly asked.
- Do not introduce TypeScript in the middle of the project unless approved.
- Do not add dependencies without approval.
- Do not refactor unrelated files.
- Do not expand scope without approval.
- Do not use class components.


# Output Expectations

When asked to help:
1. First inspect relevant files.
2. Then propose a step-by-step plan.
3. Wait for approval before large changes.
4. After coding, summarize:
   - files changed
   - why changed
   - risks
   - next recommended step

If continuing from a previous session, first read:
- `/docs/handoff.md`
- `/docs/progress-log.md`
- any files directly related to the requested task