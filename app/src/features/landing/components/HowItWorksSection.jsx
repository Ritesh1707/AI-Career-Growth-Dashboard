import { Heading, Text } from '../../../components/ui/Typography';
import { Badge } from '../../../components/ui/Badge';

const STEPS = [
  {
    number: '01',
    title: 'Connect Your Profile',
    description: 'Import your current experience, skills, and target roles to give the Copilot your baseline.',
  },
  {
    number: '02',
    title: 'Analyze the Gap',
    description: 'We map your profile against real-time market data to identify missing skills and certifications.',
  },
  {
    number: '03',
    title: 'Execute the Roadmap',
    description: 'Follow a step-by-step, personalized curriculum tailored to close your specific gaps.',
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-surface-raised transition-theme border-t border-border relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-subtle blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20">
          <Badge variant="accent" className="mb-6">The Process</Badge>
          <Heading level={2}>How it works</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[1px] bg-border z-0" />
          
          {STEPS.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-surface border flex items-center justify-center text-xl font-display font-bold text-accent mb-6 shadow-sm border-border">
                {step.number}
              </div>
              <Heading level={3} className="mb-3 text-xl">{step.title}</Heading>
              <Text variant="secondary" className="max-w-[280px]">
                {step.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
