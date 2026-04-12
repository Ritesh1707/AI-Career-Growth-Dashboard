import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { Heading, Text } from '../../../components/ui/Typography';

export default function LandingHeader() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md transition-theme">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white font-display font-bold text-lg">
            AI
          </div>
          <Heading level={6} className="hidden sm:block">
            Career Copilot
          </Heading>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="#features" className="text-sm font-medium text-content-secondary hover:text-content transition-colors">
            Features
          </Link>
          <Link to="#how-it-works" className="text-sm font-medium text-content-secondary hover:text-content transition-colors">
            How it Works
          </Link>
          <Link to="#pricing" className="text-sm font-medium text-content-secondary hover:text-content transition-colors">
            Pricing
          </Link>
        </nav>

        {/* CTA & Actions */}
        <div className="flex items-center gap-4">
          <Text variant="small" className="hidden sm:block">
            Already have an account?
          </Text>
          <Button 
            variant="primary" 
            size="md" 
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </header>
  );
}
