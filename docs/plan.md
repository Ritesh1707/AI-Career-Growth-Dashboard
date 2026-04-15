# Phase 4 Milestone Plan – Responsive Dashboard Shell & Mobile Navigation

## 1. Current Project Understanding
The project has successfully completed **Phases 1 through 3**. All major dashboard modules are scaffolded with realistic mock data and integrated via nested React Router routes within a shared `DashboardLayout`.

### Implemented Modules:
- Overview
- Skills
- Jobs
- Roadmap
- Certifications
- Projects
- Education

The application uses a strict **frontend-only stack**:
- React
- Tailwind CSS

It also maintains a **premium SaaS aesthetic** through shared UI primitives:
- Card
- Badge
- Button

We are now entering **Phase 4**, focused strictly on:
- UI polish
- Responsive cleanup
- Empty/loading states
- Dark/light mode refinement

> ⚠️ No new features or backend dependencies will be introduced.

---

## 2. Exact Next Recommended Phase 4 Milestone
### Responsive Dashboard Shell & Mobile Navigation

Update the foundational `DashboardLayout` so that:
- The fixed sidebar collapses into a hamburger menu on small screens
- The dashboard becomes fully usable on mobile devices

---

## 3. Why This Should Be First
Currently, `DashboardLayout.jsx`:
- Uses a persistent fixed-width sidebar
- Applies a left margin (`ml-sidebar`) to main content

### Problem:
On mobile devices:
- Content becomes squished or cut off

### Conclusion:
Before refining individual modules (e.g., Skills, Projects), the **root layout must be responsive**.

Fixing the foundation:
- Simplifies all future responsive improvements
- Prevents cascading layout issues

---

## 4. UX or Quality Goal It Supports

- **Responsive Cleanup**
  - Ensures usability across all device sizes

- **Premium SaaS Feel**
  - Prevents broken layouts on smaller screens
  - Introduces smooth off-canvas sidebar with backdrop overlay
  - Reinforces a polished, high-quality experience

---

## 5. Components/Pages Likely Affected

- `DashboardLayout`
- `Topbar` (mobile menu toggle)
- `Sidebar` (responsive behavior + transitions)

---

## 6. Files Likely to Change

- `app/src/layouts/DashboardLayout.jsx` *(Primary)*

---

## 7. Risks and Assumptions

### Assumptions
- Module components (e.g., `SkillsModule`, `ProjectsModule`) use mobile-first Tailwind classes:
  - Example: `grid-cols-1 lg:grid-cols-2`
- Once full-width is available on mobile, layouts will reflow naturally

### Risks

#### 1. Z-Index Conflicts
- Mobile sidebar + backdrop must:
  - Sit above all UI elements
  - Override sticky headers, badges, and positioned elements
- Must ensure:
  - Proper layering (`z-index`)
  - Focus trapping
  - Visual dominance

#### 2. Routing Behavior
- On mobile:
  - Clicking a navigation link should **close the sidebar**
- Requires:
  - Attaching handlers to `NavLink` components

---

## 8. Step-by-Step Implementation Plan

### Step 1: State Management
- Add local state in `DashboardLayout.jsx`:
  ```js
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);