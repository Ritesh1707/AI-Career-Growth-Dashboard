export const mockSkillsData = {
  targetRole: 'Senior Frontend Engineer',
  overallMatch: 71,
  summary:
    'Your UI delivery is strong, but advanced architecture and testing depth are still the main gaps between your current profile and your target role.',
  categoryComparisons: [
    {
      id: 'react-core',
      label: 'React Core',
      currentLevel: 82,
      targetLevel: 90,
      aiRationale:
        'You are productive in day-to-day React work, but a higher ceiling is needed for deeper optimization and design tradeoff conversations.',
    },
    {
      id: 'performance',
      label: 'Performance',
      currentLevel: 58,
      targetLevel: 84,
      aiRationale:
        'Performance is the clearest high-value gap because it influences both production quality and senior-level interview depth.',
    },
    {
      id: 'system-design',
      label: 'Frontend Architecture',
      currentLevel: 63,
      targetLevel: 88,
      aiRationale:
        'You have solid implementation instincts, but you need stronger evidence of component boundaries, rendering strategy, and scalability thinking.',
    },
    {
      id: 'testing',
      label: 'Testing Discipline',
      currentLevel: 54,
      targetLevel: 78,
      aiRationale:
        'Testing is below target for senior-track roles and is currently reducing confidence in production-readiness.',
    },
  ],
  missingSkills: [
    {
      id: 'profiling',
      label: 'React profiling',
      priority: 'high',
      reason:
        'You need stronger evidence that you can identify and explain render bottlenecks with real tooling.',
    },
    {
      id: 'rendering-strategy',
      label: 'Rendering strategy',
      priority: 'high',
      reason:
        'Senior frontend roles expect clear reasoning about memoization, data flow, and component boundaries.',
    },
    {
      id: 'test-strategy',
      label: 'UI test strategy',
      priority: 'medium',
      reason:
        'You can ship features, but the current profile does not yet show consistent regression-prevention discipline.',
    },
    {
      id: 'accessibility-audits',
      label: 'Accessibility audits',
      priority: 'medium',
      reason:
        'Accessibility remains important for credibility, but it is slightly less urgent than architecture and performance right now.',
    },
  ],
};
