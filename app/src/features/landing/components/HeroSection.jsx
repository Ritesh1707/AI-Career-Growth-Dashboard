import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { Heading, Text } from '../../../components/ui/Typography';
import { Badge } from '../../../components/ui/Badge';
import { Card, CardHeader, CardContent } from '../../../components/ui/Card';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Top Badge */}
        <div className="mb-6 flex justify-center">
          <Badge variant="accent" className="px-3 py-1 shadow-sm">
            <span className="mr-2">✨</span> Introducing AI Copilot
          </Badge>
        </div>

        {/* Headlines */}
        <Heading level={1} className="mx-auto max-w-4xl mb-6">
          Your Personal Command Center for Career Growth
        </Heading>
        
        <Text variant="lead" className="mx-auto max-w-2xl mb-10">
          Track your skills, close knowledge gaps, and align with your dream job using predictive, AI-driven career intelligence.
        </Text>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button variant="primary" size="lg" onClick={() => navigate('/dashboard')}>
            Get Started for Free
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
            See How It Works
          </Button>
        </div>

        {/* Abstract Product Preview */}
        <div className="relative mx-auto max-w-5xl">
          {/* Decorative abstract elements behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-accent/10 to-accent/30 rounded-xl blur-2xl opacity-50" />
          
          <div className="relative rounded-xl border border-border bg-surface-raised/40 backdrop-blur-md p-2 shadow-2xl ring-1 ring-white/10 dark:ring-white/5">
            <div className="rounded-lg overflow-hidden border border-border bg-surface flex flex-col md:flex-row shadow-inner">
              
              {/* Fake Sidebar */}
              <div className="hidden md:flex w-56 border-r border-border bg-surface-raised flex-col p-4 gap-6">
                <div className="flex items-center gap-2 px-2">
                  <div className="h-6 w-6 rounded bg-accent/20" />
                  <div className="h-4 w-24 bg-border/50 rounded" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="h-8 w-full bg-accent/10 rounded-md border border-accent/20" />
                  <div className="h-8 w-full bg-transparent rounded-md flex items-center px-3">
                    <div className="h-3 w-5/6 bg-border/50 rounded" />
                  </div>
                  <div className="h-8 w-full bg-transparent rounded-md flex items-center px-3">
                    <div className="h-3 w-4/6 bg-border/50 rounded" />
                  </div>
                  <div className="h-8 w-full bg-transparent rounded-md flex items-center px-3">
                    <div className="h-3 w-3/6 bg-border/50 rounded" />
                  </div>
                </div>
              </div>
              
              {/* Fake Main Content */}
              <div className="flex-1 p-6 md:p-8 text-left flex flex-col gap-6">
                {/* Header Area */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="h-6 w-40 bg-content/80 rounded mb-2" />
                    <div className="h-4 w-64 bg-content-secondary/50 rounded" />
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="h-8 w-24 bg-surface-raised rounded-md border border-border" />
                    <div className="h-10 w-10 bg-accent/20 rounded-full border border-accent/30" />
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-surface-raised/50 shadow-none border-border/60">
                      <CardContent className="p-5">
                        <div className="h-4 w-20 bg-content-secondary/40 rounded mb-4" />
                        <div className="h-8 w-16 bg-content/80 rounded mb-2" />
                        <div className="h-3 w-full bg-border/40 rounded" />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* AI Insight Card */}
                <Card className="bg-surface shadow-sm border-accent/30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                  <CardHeader className="pb-3 pt-5 px-6">
                    <div className="flex items-center gap-2">
                      <span className="text-accent text-sm">✨ Predictive Next Action</span>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-5">
                    <div className="h-4 w-full bg-content-secondary/50 rounded mb-3" />
                    <div className="h-4 w-5/6 bg-content-secondary/50 rounded mb-5" />
                    <div className="flex gap-3">
                      <div className="h-8 w-28 bg-accent/90 rounded-md" />
                      <div className="h-8 w-24 bg-surface-raised border border-border rounded-md" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}