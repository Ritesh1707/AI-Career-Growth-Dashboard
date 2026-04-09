# Workflows

## Purpose

This document defines how AI-assisted development should happen in this project.

The goal is to make work predictable, reviewable, and transferable across tools such as Gemini CLI and other coding CLIs.


## General Working Flow

For any meaningful task:
1. inspect relevant files
2. understand the request
3. propose a step-by-step plan
4. wait for approval if the change is significant
5. implement only the approved step
6. review the result
7. summarize files changed, reasoning, risks, and next step


## Planning Workflow

Use when:
- starting a new feature
- changing architecture
- adding a new module
- requirements are unclear

Expected behavior:
- inspect current structure
- identify impacted files
- propose scoped steps
- mention risks and assumptions
- do not code before agreement


## Implementation Workflow

Use when:
- plan is approved
- change scope is clear

Expected behavior:
- make scoped changes only
- avoid unrelated edits
- keep implementation aligned with architecture and coding standards
- prefer the smallest useful change that moves the project forward


## Review Workflow

Use when:
- a coding step is completed
- a diff should be checked for quality

Expected review areas:
- maintainability
- readability
- reusability
- architecture fit
- visual consistency
- unnecessary complexity
- future scaling concerns


## Debug Workflow

Use when:
- something is broken
- output does not match expectations
- UI behavior is incorrect

Expected behavior:
- inspect issue carefully
- identify likely root cause
- propose the smallest safe fix
- avoid random guessing
- mention follow-up checks


## Explain Workflow

Use when:
- architecture needs clarification
- tradeoffs should be described
- code should be understood in simple terms

Expected behavior:
- explain what exists
- explain why it is structured that way
- explain tradeoffs
- explain how it could evolve later


## Multi-CLI Workflow

This project may be worked on with multiple AI coding tools.

Rules:
- the repository files are the source of truth
- do not rely on chat memory as the only context
- use `docs/handoff.md` for next-session continuity
- use `docs/progress-log.md` for daily updates
- use `docs/decisions.md` for important choices
- keep `GEMINI.md` concise and current


## End-of-Session Workflow

Before ending a session:
1. update `docs/progress-log.md`
2. update `docs/handoff.md`
3. note any important decision in `docs/decisions.md` if needed
4. identify the exact next task
5. keep the handoff short and actionable