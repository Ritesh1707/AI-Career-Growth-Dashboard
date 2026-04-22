import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { Heading, Text } from '../../../components/ui/Typography';

export default function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-surface transition-theme border-t border-border">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="bg-surface-raised border border-border rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-sm">
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-subtle blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <Heading level={2} className="mb-4">
              Ready to accelerate your career?
            </Heading>
            <Text variant="lead" className="mb-10 max-w-xl mx-auto">
              Join thousands of professionals using AI Copilot to close their skill gaps and land their dream roles.
            </Text>
            <Button variant="primary" size="lg" onClick={() => navigate('/dashboard')} className="px-8 shadow-sm">
              Open Your Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
