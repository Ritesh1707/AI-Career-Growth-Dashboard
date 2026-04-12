# Future Features & Enhancements

This document tracks ideas, visual enhancements, and feature expansions that have been deferred to later phases in order to maintain a focused MVP and strict Phase 1 constraints.

## Cinematic Hero Section: Scroll-Linked Zoom Effect
**Status:** Deferred to Phase 4 (Polish) or Post-MVP.
**Constraint Blocked By:** "No external animation libraries." (Phase 1 relies strictly on Tailwind CSS and native web APIs).

### The Concept
The Hero section currently uses static CSS layering to achieve a premium feel. We want to implement a highly cinematic "scroll-zoom" effect where the abstract dashboard preview scales up and expands to fill the viewport as the user scrolls down, creating an immersive "diving into the product" feeling.

### How to Implement Later
Once the restriction on external animation libraries is lifted, we will use **Framer Motion**.

1. **Install Dependency:** `npm install framer-motion`
2. **Implementation Strategy in `HeroSection.jsx`:**
   - Wrap the main hero container in a `div` with a large height (e.g., `h-[200vh]`) to create a scrollable track.
   - Use `position: sticky` on the inner content wrapper so it stays in view while the user scrolls through the track.
   - Import `useScroll` and `useTransform` from `framer-motion`.
   - Track the container's scroll progress:
     ```jsx
     const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
     ```
   - Map the scroll progress (0 to 1) to a scale value (e.g., 1 to 2.5) and an opacity value for the surrounding text (fading it out as the dashboard zooms in):
     ```jsx
     const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
     const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
     ```
   - Replace the static abstract dashboard preview container with a `<motion.div>` and apply the dynamic `scale` style.

### Why It Was Deferred
Adding `framer-motion` increases bundle size and introduces complex state/scroll management. Our current priority is establishing solid architectural boundaries, modular component design, and a complete mock-data structure before focusing on micro-interactions.
