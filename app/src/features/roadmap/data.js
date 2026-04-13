export const mockRoadmapData = {
  targetRole: 'Senior Frontend Engineer',
  planningHorizon: '12-week guided path',
  completionRate: 42,
  currentStageId: 'stage-execution',
  summary:
    'A focused progression from core architecture depth to market-ready proof of execution.',
  stages: [
    {
      id: 'stage-foundation',
      title: 'Foundation Reset',
      timeframe: 'Weeks 1-2',
      status: 'complete',
      focus: 'Solidify accessibility, semantic HTML, and testing fundamentals.',
      outcome: 'Baseline frontend quality is consistent across projects.',
    },
    {
      id: 'stage-execution',
      title: 'Execution Sprint',
      timeframe: 'Weeks 3-6',
      status: 'current',
      focus: 'Ship performance and architecture upgrades in visible portfolio work.',
      outcome: 'Current work starts reading like senior-level delivery.',
    },
    {
      id: 'stage-visibility',
      title: 'Visibility Layer',
      timeframe: 'Weeks 7-9',
      status: 'upcoming',
      focus: 'Turn project depth into resume, case study, and interview stories.',
      outcome: 'Proof points become easy to present to hiring teams.',
    },
    {
      id: 'stage-interview',
      title: 'Interview Readiness',
      timeframe: 'Weeks 10-12',
      status: 'upcoming',
      focus: 'Rehearse system design, tradeoff communication, and targeted applications.',
      outcome: 'Profile is ready for senior-leaning interview loops.',
    },
  ],
  activeMilestones: [
    {
      id: 'milestone-architecture',
      title: 'Document architecture decisions for the flagship React project',
      status: 'done',
      ownerSignal: 'Portfolio credibility',
      estimatedTime: '1 session',
      aiRationale:
        'Visible architecture reasoning makes the project feel production-grade rather than tutorial-grade.',
    },
    {
      id: 'milestone-performance',
      title: 'Implement a measurable React performance improvement',
      status: 'in-progress',
      ownerSignal: 'Core engineering depth',
      estimatedTime: '2 sessions',
      aiRationale:
        'A before-and-after optimization story supports both interview depth and senior frontend positioning.',
    },
    {
      id: 'milestone-case-study',
      title: 'Write a concise case study explaining the technical tradeoffs',
      status: 'up-next',
      ownerSignal: 'Storytelling for hiring',
      estimatedTime: '1 session',
      aiRationale:
        'The work is stronger when paired with clear explanation of why the implementation choices were made.',
    },
  ],
  nextAction: {
    title: 'Finish the performance optimization pass and capture the result',
    checkpoint: 'Pair the improvement with one screenshot or metric note for later portfolio use.',
    estimatedTime: '90 minutes',
    impact: 'High leverage',
    aiRationale:
      'This is the fastest route from “learning in progress” to “evidence of senior-ready execution.”',
  },
};
