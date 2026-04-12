/**
 * DashboardPage — placeholder
 *
 * This is the Overview / home screen of the dashboard.
 * Will be replaced with the Overview module content later.
 */
export default function DashboardPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="font-display text-2xl font-bold text-content mb-2">
        Welcome back
      </h1>
      <p className="text-content-secondary mb-8">
        Your career dashboard modules will appear here.
      </p>

      {/* Placeholder grid to visually represent future module cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          'Career Score',
          'Skill Gaps',
          'Next Milestone',
          'Active Projects',
          'Certifications',
          'Job Readiness',
        ].map((label) => (
          <div
            key={label}
            className="h-36 rounded-lg bg-surface-raised border border-border flex items-center justify-center transition-theme"
          >
            <span className="text-sm text-content-tertiary">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
