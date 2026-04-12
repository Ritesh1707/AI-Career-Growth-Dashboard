import { Routes, Route, Navigate } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/LandingPage';
import OverviewPage from './pages/OverviewPage';
import SkillsPage from './pages/SkillsPage';
import DesignSystemPage from './pages/DesignSystemPage';

/**
 * App — root component
 *
 * Defines the top-level route structure:
 *   /              → LandingLayout → LandingPage
 *   /dashboard     → DashboardLayout → redirects to /dashboard/overview
 *   /dashboard/overview → OverviewPage
 *   /dashboard/skills   → SkillsPage
 *   /design-system → DesignSystemPage (standalone for testing)
 */
export default function App() {
  return (
    <Routes>
      {/* Landing experience */}
      <Route element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      {/* Dashboard experience */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard/overview" replace />} />
        <Route path="overview" element={<OverviewPage />} />
        <Route path="skills" element={<SkillsPage />} />
        {/* Future module routes will be added here */}
      </Route>

      {/* Internal Tools */}
      <Route path="/design-system" element={<DesignSystemPage />} />
    </Routes>
  );
}
