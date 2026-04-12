import { Outlet } from 'react-router-dom';

/**
 * LandingLayout
 *
 * Full-viewport layout for the marketing/landing experience.
 * No sidebar, no topbar — the landing page owns its entire visual canvas.
 */
export default function LandingLayout() {
  return (
    <div className="min-h-screen bg-surface transition-theme">
      <Outlet />
    </div>
  );
}
