# Project Purpose
This repository is a React frontend learning lab built in an enterprise-style way.
The goal is to learn transferable AI-assisted engineering workflows, not just generate code quickly.

# Working Style
- Always analyze before editing.
- Always propose a plan before creating or modifying files.
- Prefer simple, maintainable React architecture.
- Keep changes scoped to the approved step only.
- Do not add dependencies without approval.
- Explain tradeoffs briefly and in industry terms.
- After implementation, review code for maintainability, scalability, and clarity.
- Prefer reusable components and clear folder boundaries.
- Avoid unnecessary abstractions in early phases.

# Architecture Rules
- Keep app code inside /app.
- Keep business logic separate from presentational components where reasonable.
- Use features and shared components deliberately.
- Prefer explicit naming and small focused files.
- Document key architectural decisions in /docs/decisions.md.

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