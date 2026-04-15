import { useState, useEffect } from 'react';
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

const MOBILE_BREAKPOINT = 768;

export default function DashboardLayout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= MOBILE_BREAKPOINT);
  const headerTitle = headerTitleMap[location.pathname] ?? 'Dashboard';
  const isSidebarInteractive = isDesktop || isMobileMenuOpen;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      const nextIsDesktop = window.innerWidth >= MOBILE_BREAKPOINT;
      setIsDesktop(nextIsDesktop);

      if (nextIsDesktop && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-surface transition-theme flex">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm transition-opacity"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar ── */}
      {/* On mobile when closed, hide the sidebar from assistive tech and keep its controls out of the tab order. */}
      <aside
        id="mobile-sidebar"
        className={cn(
          "fixed top-0 left-0 h-screen w-sidebar bg-surface-raised border-r border-border transition-transform duration-300 ease-in-out flex flex-col z-30",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
        aria-hidden={isSidebarInteractive ? "false" : "true"}
        {...(!isSidebarInteractive ? { tabIndex: -1 } : {})}
      >
        {/* Brand */}
        <div className="h-topbar flex items-center justify-between px-5 border-b border-border gap-3">
          <Link
            to="/dashboard"
            onClick={closeMobileMenu}
            className="font-display font-semibold text-lg text-content tracking-tight"
            tabIndex={isSidebarInteractive ? 0 : -1}
          >
            CareerAI
          </Link>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="md:hidden p-2 -mr-2 text-content-secondary hover:text-content hover:bg-surface rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close sidebar"
            tabIndex={isSidebarInteractive ? 0 : -1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation placeholder */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
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
                  onClick={closeMobileMenu}
                  tabIndex={isSidebarInteractive ? 0 : -1}
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
            tabIndex={isSidebarInteractive ? 0 : -1}
            className="w-full px-3 py-2 rounded-md text-sm text-content-secondary hover:bg-accent-subtle hover:text-accent transition-theme text-left"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀ Light Mode' : '● Dark Mode'}
          </button>
        </div>
      </aside>

      {/* ── Main area ── */}
      <div 
        className="flex-1 md:ml-sidebar flex flex-col w-full min-w-0"
        aria-hidden={!isDesktop && isMobileMenuOpen ? "true" : "false"}
      >
        {/* Top bar */}
        <header className="h-topbar bg-surface-raised/80 backdrop-blur-sm border-b border-border sticky top-0 z-10 flex items-center px-4 md:px-6 transition-theme gap-4">
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden p-2 -ml-2 text-content-secondary hover:text-content hover:bg-surface rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-sidebar"
            aria-label={isMobileMenuOpen ? 'Close sidebar' : 'Open sidebar'}
            tabIndex={!isDesktop && isMobileMenuOpen ? -1 : 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <h2 className="text-sm font-medium text-content-secondary truncate">{headerTitle}</h2>
        </header>

        {/* Content area */}
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
