export const mockJobsData = {
  targetRole: 'Senior Frontend Engineer',
  marketIntelligence: {
    summary:
      'Demand for Senior Frontend Engineers remains high, but companies are increasingly prioritizing architecture, web performance, and robust testing over pure framework knowledge.',
    salaryBenchmark: '$135,000 - $180,000',
    hiringVelocity: 'High',
    trendingSkills: [
      { name: 'React Server Components', growth: '+45%' },
      { name: 'Web Vitals Optimization', growth: '+32%' },
      { name: 'E2E Testing (Playwright)', growth: '+28%' },
      { name: 'Accessibility (WCAG 2.1)', growth: '+18%' },
    ],
  },
  recommendedRoles: [
    {
      id: 'job-1',
      title: 'Senior Frontend Developer',
      company: 'TechNova Solutions',
      location: 'San Francisco, CA',
      type: 'Hybrid',
      salaryRange: '$140k - $165k',
      matchPercentage: 82,
      aiRationale:
        'Strong alignment with your React and UI delivery skills. The primary gap is your lack of enterprise-scale performance optimization experience.',
      missingRequirements: ['React Profiling', 'Web Vitals Optimization'],
    },
    {
      id: 'job-2',
      title: 'Frontend Architect',
      company: 'CloudScale Inc.',
      location: 'Remote',
      type: 'Remote',
      salaryRange: '$150k - $185k',
      matchPercentage: 65,
      aiRationale:
        'This role requires deeper system design and testing discipline than your current profile demonstrates. Good stretch goal for next quarter.',
      missingRequirements: [
        'Frontend Architecture',
        'Advanced CI/CD',
        'E2E Testing',
      ],
    },
    {
      id: 'job-3',
      title: 'Senior UI Engineer',
      company: 'Fintech Fusion',
      location: 'New York, NY',
      type: 'On-site',
      salaryRange: '$145k - $175k',
      matchPercentage: 88,
      aiRationale:
        'Excellent match. Your strong UI delivery and React core skills map perfectly to their requirements. They value product-minded engineers.',
      missingRequirements: ['Strict Accessibility Auditing'],
    },
  ],
};
