import { Routes, Route, Navigate } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/LandingPage';
import OverviewPage from './pages/OverviewPage';
import RoadmapPage from './pages/RoadmapPage';
import SkillsPage from './pages/SkillsPage';
import JobsPage from './pages/JobsPage';
import CertificationsPage from './pages/CertificationsPage';
import ProjectsPage from './pages/ProjectsPage';
import DesignSystemPage from './pages/DesignSystemPage';

/**
 * App — root component
 *
 * Defines the top-level route structure:
 *   /              → LandingLayout → LandingPage
 *   /dashboard     → DashboardLayout → OverviewPage
 *   /dashboard/overview → redirects to /dashboard
 *   /dashboard/skills   → SkillsPage
 *   /dashboard/jobs     → JobsPage
 *   /dashboard/roadmap  → RoadmapPage
 *   /dashboard/certifications → CertificationsPage
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
        <Route index element={<OverviewPage />} />
        <Route path="overview" element={<Navigate to="/dashboard" replace />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="certifications" element={<CertificationsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>

      {/* Internal Tools */}
      <Route path="/design-system" element={<DesignSystemPage />} />
    </Routes>
  );
}
