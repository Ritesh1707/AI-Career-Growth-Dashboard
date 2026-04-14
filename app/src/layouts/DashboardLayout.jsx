import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import { cn } from '../utils/cn';

/**
 * DashboardLayout
 *
 * Standard SaaS layout: fixed sidebar + top bar + scrollable content area.
 * This is a structural shell — visual polish comes in later steps.
 */

const navItems = [
  { label: 'Overview', to: '/dashboard', enabled: true },
  { label: 'Skills', to: '/dashboard/skills', enabled: true },
  { label: 'Jobs', to: '/dashboard/jobs', enabled: true },
  { label: 'Roadmap', to: '/dashboard/roadmap', enabled: true },
  { label: 'Certifications', to: '/dashboard/certifications', enabled: true },
  { label: 'Projects', to: '/dashboard/projects', enabled: true },
  { label: 'Education', to: '/dashboard/education', enabled: true },
];

const headerTitleMap = {
  '/dashboard': 'Overview',
  '/dashboard/skills': 'Skills',
  '/dashboard/jobs': 'Jobs',
  '/dashboard/roadmap': 'Roadmap',
  '/dashboard/certifications': 'Certifications',
  '/dashboard/projects': 'Projects',
  '/dashboard/education': 'Education',
};

export default function DashboardLayout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const headerTitle = headerTitleMap[location.pathname] ?? 'Dashboard';

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
          <div className="space-y-1">
            {navItems.map((item) =>
              item.enabled ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/dashboard'}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-2 text-sm transition-theme',
                      isActive
                        ? 'bg-accent-subtle text-accent'
                        : 'text-content-secondary hover:bg-accent-subtle hover:text-accent'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <div
                  key={item.label}
                  className="rounded-md px-3 py-2 text-sm text-content-tertiary/80 cursor-default"
                >
                  {item.label}
                </div>
              )
            )}
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
          <h2 className="text-sm font-medium text-content-secondary">{headerTitle}</h2>
        </header>

        {/* Content area */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
