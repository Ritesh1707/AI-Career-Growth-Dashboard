import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

/**
 * DashboardLayout
 *
 * Standard SaaS layout: fixed sidebar + top bar + scrollable content area.
 * This is a structural shell — visual polish comes in later steps.
 */

const NAV_ITEMS = [
  { name: 'Overview', path: '/dashboard/overview', enabled: true },
  { name: 'Skills', path: '/dashboard/skills', enabled: true },
  { name: 'Jobs', path: '/dashboard/jobs', enabled: false },
  { name: 'Roadmap', path: '/dashboard/roadmap', enabled: false },
  { name: 'Certifications', path: '/dashboard/certifications', enabled: false },
  { name: 'Projects', path: '/dashboard/projects', enabled: false },
  { name: 'Education', path: '/dashboard/education', enabled: false },
];

export default function DashboardLayout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const currentNavItem = NAV_ITEMS.find((item) =>
    location.pathname.startsWith(item.path)
  );
  const pageTitle = currentNavItem ? currentNavItem.name : 'Dashboard';

  return (
    <div className="min-h-screen bg-surface transition-theme flex">
      {/* ── Sidebar ── */}
      <aside className="fixed top-0 left-0 h-screen w-sidebar bg-surface-raised border-r border-border transition-theme flex flex-col z-30">
        {/* Brand */}
        <div className="h-topbar flex items-center px-5 border-b border-border">
          <Link
            to="/dashboard/overview"
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
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              if (item.enabled) {
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-sm transition-theme ${
                        isActive
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-content-secondary hover:bg-accent-subtle hover:text-accent'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              }
              return (
                <div
                  key={item.name}
                  className="px-3 py-2 rounded-md text-sm text-content-muted cursor-not-allowed flex items-center justify-between"
                  title="Coming soon"
                >
                  <span>{item.name}</span>
                </div>
              );
            })}
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
            {pageTitle}
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
