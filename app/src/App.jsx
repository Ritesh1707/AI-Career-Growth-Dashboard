import { Routes, Route } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import DesignSystemPage from './pages/DesignSystemPage';

/**
 * App — root component
 *
 * Defines the top-level route structure:
 *   /              → LandingLayout → LandingPage
 *   /dashboard     → DashboardLayout → DashboardPage
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
        <Route index element={<DashboardPage />} />
        {/* Future module routes will be added here */}
      </Route>

      {/* Internal Tools */}
      <Route path="/design-system" element={<DesignSystemPage />} />
    </Routes>
  );
}
