import { useReducedMotion } from 'framer-motion';

/**
 * Shared transition config mapping to CSS tokens in tokens.css
 */
export const transitions = {
  fast: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  normal: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  slow: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  // Tightly damped spring for layout animations
  spring: { type: 'spring', stiffness: 300, damping: 30, mass: 1 }
};

/**
 * Hook to get accessible motion variants based on user preferences.
 * Gracefully degrades transforms to simple fades if reduced motion is preferred.
 */
export function useMotionVariants() {
  const shouldReduceMotion = useReducedMotion();

  return {
    fadeTransition: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: transitions.fast },
      exit: { opacity: 0, transition: transitions.fast }
    },
    slideUp: {
      initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      animate: { opacity: 1, y: 0, transition: transitions.normal },
      exit: { opacity: 0, y: shouldReduceMotion ? 0 : 20, transition: transitions.normal }
    },
    slideInLeft: {
      initial: { x: shouldReduceMotion ? 0 : '-100%', opacity: shouldReduceMotion ? 0 : 1 },
      animate: { x: 0, opacity: 1, transition: transitions.normal },
      exit: { x: shouldReduceMotion ? 0 : '-100%', opacity: shouldReduceMotion ? 0 : 1, transition: transitions.normal }
    },
    slideInRight: {
      initial: { x: shouldReduceMotion ? 0 : '100%', opacity: shouldReduceMotion ? 0 : 1 },
      animate: { x: 0, opacity: 1, transition: transitions.normal },
      exit: { x: shouldReduceMotion ? 0 : '100%', opacity: shouldReduceMotion ? 0 : 1, transition: transitions.normal }
    },
    scaleUp: {
      initial: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
      animate: { opacity: 1, scale: 1, transition: transitions.normal },
      exit: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, transition: transitions.normal }
    }
  };
}
