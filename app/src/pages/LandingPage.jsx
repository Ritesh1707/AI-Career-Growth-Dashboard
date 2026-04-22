import LandingHeader from '../features/landing/components/LandingHeader';
import HeroSection from '../features/landing/components/HeroSection';
import FeaturesSection from '../features/landing/components/FeaturesSection';
import HowItWorksSection from '../features/landing/components/HowItWorksSection';
import CtaSection from '../features/landing/components/CtaSection';
import LandingFooter from '../features/landing/components/LandingFooter';

/**
 * LandingPage
 *
 * Full cinematic landing page for the AI Career Growth Dashboard.
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface transition-theme">
      <LandingHeader />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
