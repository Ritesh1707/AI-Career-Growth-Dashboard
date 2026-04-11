import { Outlet, Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

/**
 * DashboardLayout
 *
 * Standard SaaS layout: fixed sidebar + top bar + scrollable content area.
 * This is a structural shell — visual polish comes in later steps.
 */
export default function DashboardLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-surface transition-theme flex">
      {/* ── Sidebar ── */}
      <aside className="fixed top-0 left-0 h-screen w-sidebar bg-surface-raised border-r border-border transition-theme flex flex-col z-30">
        {/* Brand */}
        <div className="h-topbar flex items-center px-5 border-b border-border">
          <Link
            to="/dashboard"
            className="font-display font-semibold text-lg text-content tracking-tight"
          >
            CareerAI
          </Link>
        </div>

        {/* Navigation placeholder */}
        <nav className="flex-1 px-3 py-4">
          <p className="text-xs font-medium text-content-tertiary uppercase tracking-wider px-2 mb-3">
            Modules
          </p>
          {/* Navigation items will be added in later steps */}
          <div className="space-y-1">
            {[
              'Overview',
              'Skills',
              'Jobs',
              'Roadmap',
              'Certifications',
              'Projects',
              'Education',
            ].map((item) => (
              <div
                key={item}
                className="px-3 py-2 rounded-md text-sm text-content-secondary hover:bg-accent-subtle hover:text-accent transition-theme cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="px-3 py-4 border-t border-border">
          <button
            onClick={toggleTheme}
            className="w-full px-3 py-2 rounded-md text-sm text-content-secondary hover:bg-accent-subtle hover:text-accent transition-theme text-left"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀ Light Mode' : '● Dark Mode'}
          </button>
        </div>
      </aside>

      {/* ── Main area ── */}
      <div className="flex-1 ml-sidebar flex flex-col">
        {/* Top bar */}
        <header className="h-topbar bg-surface-raised/80 backdrop-blur-sm border-b border-border sticky top-0 z-20 flex items-center px-6 transition-theme">
          <h2 className="text-sm font-medium text-content-secondary">
            Dashboard
          </h2>
        </header>

        {/* Content area */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
