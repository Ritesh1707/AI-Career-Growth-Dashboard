import { Link } from 'react-router-dom';

/**
 * LandingPage — placeholder
 *
 * Will be replaced with cinematic landing sections in Step 2.
 * For now, just enough to prove routing + theme work end-to-end.
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-5xl font-bold text-content tracking-tight mb-4">
        AI Career Growth Dashboard
      </h1>
      <p className="text-lg text-content-secondary max-w-xl mb-8">
        Your personal command center for career development. Track skills, plan
        roadmaps, and stay aligned with your target role.
      </p>
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-content-inverse font-medium text-sm hover:bg-accent-hover transition-theme shadow-md hover:shadow-glow"
      >
        Open Dashboard
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
