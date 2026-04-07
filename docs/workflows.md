# Development Workflows

This document outlines the standard operating procedures for various development tasks within the project. Adhering to these workflows ensures consistency, maintainability, and efficient collaboration.

## 1. Feature Development Workflow
1.  **Understand Requirements:** Thoroughly read and understand the feature specification. Clarify any ambiguities with the product owner.
2.  **Architectural Review:** If the feature impacts core architecture or introduces new patterns, discuss with the team and document decisions in `docs/decisions.md`.
3.  **Plan Implementation (`plan-first.md`):** Create a detailed step-by-step implementation plan, including affected files, necessary changes, testing strategy, and potential risks. Submit for review.
4.  **Implement Incrementally (`implement-step.md`):** Work on one logical step at a time. Write code, including relevant tests.
5.  **Self-Review:** Before requesting a formal review, perform a self-review against `docs/coding-standards.md`.
6.  **Code Review (`review-diff.md`):** Submit a pull request for team review. Address feedback promptly.
7.  **Merge & Deploy:** Once approved, merge the changes and monitor deployment.

## 2. Bug Fixing Workflow
1.  **Reproduce Bug:** Confirm the bug by reproducing it locally or in a test environment. Write a failing test case if one doesn't exist.
2.  **Diagnose Root Cause:** Utilize debugging tools (e.g., Chrome DevTools, IDE debuggers) to identify the source of the bug.
3.  **Plan Fix:** Propose a specific fix and a verification strategy.
4.  **Implement Fix:** Apply the minimal necessary change to resolve the bug.
5.  **Verify Fix:** Run the new failing test case (it should now pass) and all relevant unit/integration/E2E tests to ensure no regressions.
6.  **Code Review:** Submit for code review.

## 3. Refactoring Workflow
1.  **Define Goal:** Clearly articulate the goal of the refactoring (e.g., improve readability, enhance performance, reduce complexity).
2.  **Ensure Test Coverage:** Verify that the code to be refactored has adequate test coverage to prevent introducing new bugs.
3.  **Small, Safe Steps:** Perform refactoring in small, atomic commits. Each commit should leave the system in a working state.
4.  **Continuous Testing:** Run tests after each small change to catch regressions immediately.
5.  **Document Changes:** Update relevant documentation (e.g., `docs/architecture.md`, comments) if the refactoring alters public APIs or core logic.

## 4. Documentation Workflow
- **Live Documentation:** Keep documentation up-to-date with code changes. Treat documentation as code.
- **Decision Records:** All significant architectural decisions, technology choices, or design patterns should be documented in `docs/decisions.md`.
- **Coding Standards:** Refer to `docs/coding-standards.md` for all code-related guidelines.
