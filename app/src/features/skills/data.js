export const skillsData = {
  targetRole: "Senior Frontend Engineer",
  overallMatch: 78,
  aiRationale: "Your React and CSS foundations are excellent. To cross the threshold for a Senior role, prioritize advanced performance optimization, TypeScript mastery, and CI/CD pipelines.",
  categories: [
    {
      name: "Core Frontend",
      skills: [
        { name: "React / Hooks", current: 90, required: 90, isGap: false },
        { name: "CSS / Tailwind", current: 85, required: 80, isGap: false },
        { name: "TypeScript", current: 65, required: 85, isGap: true }
      ]
    },
    {
      name: "Architecture & Performance",
      skills: [
        { name: "State Management", current: 75, required: 85, isGap: true },
        { name: "Web Vitals & LCP", current: 60, required: 80, isGap: true },
        { name: "Testing (Jest/Cypress)", current: 80, required: 80, isGap: false }
      ]
    },
    {
      name: "Infrastructure & Tools",
      skills: [
        { name: "CI/CD (GitHub Actions)", current: 40, required: 70, isGap: true },
        { name: "Docker", current: 30, required: 60, isGap: true },
        { name: "Git Workflow", current: 85, required: 85, isGap: false }
      ]
    }
  ]
};
