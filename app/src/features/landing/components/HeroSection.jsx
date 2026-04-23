import { useNavigate } from 'react-router-dom';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import { Heading, Text } from '../../../components/ui/Typography';
import { Badge } from '../../../components/ui/Badge';
import { Card, CardHeader, CardContent, CardTitle } from '../../../components/ui/Card';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

export default function HeroSection() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const yOffset = shouldReduceMotion ? 0 : 20;
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const previewYOffset = shouldReduceMotion ? 0 : 40;

  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      
      <LazyMotion features={domAnimation}>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          
          {/* Main Text Content */}
          <div className="flex flex-col items-center">
            {/* Top Badge */}
            <div className="mb-6 flex justify-center">
              <Badge variant="accent" className="px-3 py-1 shadow-sm">
                <span className="mr-2">✨</span> Introducing AI Copilot
              </Badge>
            </div>

            {/* Headlines */}
            <div>
              <Heading level={1} className="mx-auto max-w-4xl mb-6">
                Your Personal Command Center for Career Growth
              </Heading>
            </div>
            
            <m.div variants={itemVariants} initial="hidden" animate="show">
              <Text variant="lead" className="mx-auto max-w-2xl mb-10">
                Track your skills, close knowledge gaps, and align with your dream job using predictive, AI-driven career intelligence.
              </Text>
            </m.div>

            {/* CTAs */}
            <m.div variants={itemVariants} initial="hidden" animate="show" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Button variant="primary" size="lg" onClick={() => navigate('/dashboard')}>
                Get Started for Free
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                See How It Works
              </Button>
            </m.div>
          </div>

          {/* Abstract Product Preview */}
          <m.div 
            initial={{ opacity: 0, y: previewYOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto max-w-5xl text-left"
          >
            {/* Decorative abstract elements behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-accent/10 to-accent/30 rounded-xl blur-2xl opacity-50" />
            
            <div className="relative rounded-xl border border-border bg-surface-raised/40 backdrop-blur-md p-2 shadow-2xl ring-1 ring-white/10 dark:ring-white/5">
              <div className="rounded-lg overflow-hidden border border-border bg-surface flex flex-col md:flex-row shadow-inner min-h-[400px]">
                
                {/* Fake Sidebar */}
                <div className="hidden md:flex w-56 border-r border-border bg-surface-raised flex-col p-4 gap-6">
                  <div className="flex items-center gap-2 px-2 pb-4 border-b border-border/50">
                    <div className="h-6 w-6 rounded bg-accent text-white flex items-center justify-center text-xs font-bold">C</div>
                    <span className="font-display font-semibold text-content text-sm">Career Copilot</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="px-3 py-2 bg-accent-subtle text-accent rounded-md text-sm font-medium">Overview</div>
                    <div className="px-3 py-2 text-content-secondary hover:text-content transition-colors text-sm">Skills Profile</div>
                    <div className="px-3 py-2 text-content-secondary hover:text-content transition-colors text-sm">Market Jobs</div>
                    <div className="px-3 py-2 text-content-secondary hover:text-content transition-colors text-sm">Roadmap</div>
                  </div>
                </div>
                
                {/* Fake Main Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 bg-surface">
                  {/* Header Area */}
                  <div className="flex justify-between items-center">
                    <div>
                      <Heading level={3} className="text-xl">Welcome back, Alex</Heading>
                      <Text variant="secondary" className="text-sm mt-1">Here is your career intelligence for today.</Text>
                    </div>
                    <div className="hidden sm:flex items-center gap-3">
                      <div className="flex flex-col items-end mr-2">
                        <span className="text-xs text-content-secondary font-medium uppercase tracking-wider">Career Score</span>
                        <span className="text-lg font-display font-bold text-accent">850<span className="text-sm text-content-secondary">/1000</span></span>
                      </div>
                      <div className="h-10 w-10 bg-surface-raised rounded-full border border-border flex items-center justify-center text-content-secondary shadow-sm">
                        <span className="text-sm font-medium">AL</span>
                      </div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="bg-surface-raised shadow-sm border-border">
                      <CardContent className="p-5 flex flex-col gap-1">
                        <Text variant="small" className="font-medium uppercase tracking-wider">Target Role</Text>
                        <span className="text-lg font-display font-bold text-content mt-1">Frontend Architect</span>
                        <Text variant="small" className="text-success mt-1">↑ High Demand</Text>
                      </CardContent>
                    </Card>
                    <Card className="bg-surface-raised shadow-sm border-border">
                      <CardContent className="p-5 flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                          <Text variant="small" className="font-medium uppercase tracking-wider">Readiness</Text>
                          <span className="text-lg font-display font-bold text-content">78%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-1.5 mt-3 overflow-hidden">
                          <div className="bg-accent h-1.5 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <Text variant="small" className="mt-2">Top 15% of candidates</Text>
                      </CardContent>
                    </Card>
                    <Card className="bg-surface-raised shadow-sm border-border hidden sm:block">
                      <CardContent className="p-5 flex flex-col gap-1">
                        <Text variant="small" className="font-medium uppercase tracking-wider">Next Milestone</Text>
                        <span className="text-lg font-display font-bold text-content mt-1">System Design</span>
                        <Text variant="small" className="mt-1">Due in 3 days</Text>
                      </CardContent>
                    </Card>
                  </div>

                  {/* AI Insight Card */}
                  <Card className="bg-surface shadow-sm border-accent/30 relative overflow-hidden mt-2">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                    <CardHeader className="pb-2 pt-5 px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-accent text-sm font-medium flex items-center gap-1.5">
                            ✨ Predictive Next Action
                          </span>
                        </div>
                        <Badge variant="warning" className="text-[10px] uppercase tracking-wider py-0.5">High Priority</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <CardTitle className="text-lg mb-2">Master GraphQL Federation</CardTitle>
                      <Text variant="secondary" className="mb-5 text-sm leading-relaxed max-w-2xl">
                        Based on your target role (Frontend Architect), mastering GraphQL Federation is your highest-leverage move. 64% of roles matching your profile require this skill, but it is currently missing from your profile.
                      </Text>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Button variant="primary" size="sm" className="shadow-sm">
                          Start Recommended Module
                        </Button>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Text variant="small" className="mr-1">Closes gaps in:</Text>
                          <Badge variant="default" className="text-[10px] bg-surface">GraphQL</Badge>
                          <Badge variant="default" className="text-[10px] bg-surface">API Design</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </m.div>

        </div>
      </LazyMotion>
    </section>
  );
}