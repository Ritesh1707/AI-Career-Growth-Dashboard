export const mockOverviewData = {
  user: {
    name: "Alex Learner",
    targetRole: "Senior Frontend Engineer",
    careerScore: 78,
    currentLevel: "Mid-Level Developer",
    lastUpdated: "2026-04-13T10:00:00Z"
  },
  predictiveNextStep: {
    id: "action-104",
    title: "Complete React Performance Profiling Module",
    type: "learning",
    estimatedTime: "2 hours",
    aiRationale: "You've recently completed the Context API section, but your last project showed inefficient re-renders. Mastering `useMemo` and React DevTools will directly improve your codebase and interview readiness.",
    confidenceScore: 92,
    urgency: "high",
    actionLink: "/roadmap/react-performance"
  },
  topPriorities: [
    {
      id: "priority-1",
      title: "Fix accessibility warnings in main portfolio project",
      status: "in-progress",
      impact: "high",
      aiRationale: "Your target role requires strong accessibility knowledge. Fixing these issues demonstrates production-ready skills."
    },
    {
      id: "priority-2",
      title: "Review Advanced TypeScript Generics",
      status: "pending",
      impact: "medium",
      aiRationale: "70% of senior frontend roles currently list advanced TypeScript as a core requirement."
    },
    {
      id: "priority-3",
      title: "Update resume with latest Next.js project",
      status: "pending",
      impact: "high",
      aiRationale: "Your Next.js project is complete, but not reflected in your active profile. Updating this increases match rate for open roles."
    }
  ],
  careerProgress: {
    totalXp: 12450,
    xpToNextLevel: 2550,
    levelName: "Level 4",
    skillGapMatch: 65, // Percentage match with target role
    recentGrowth: "+5% this week",
    aiRationale: "Consistent learning on UI performance has steadily increased your match rate for Senior roles."
  },
  activeGoal: {
    title: "Master Frontend Performance & Architecture",
    deadline: "2026-05-30",
    progress: 40
  }
};
