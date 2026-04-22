import { Heading, Text } from '../../../components/ui/Typography';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/Card';

const FEATURES = [
  {
    title: 'Predictive Next Actions',
    description: 'No more guessing. Get precise, AI-driven recommendations on the next best step for your career growth.',
    icon: '🎯'
  },
  {
    title: 'Skill-Gap Analysis',
    description: 'Visualize exactly where you stand against industry standards and focus your learning where it matters most.',
    icon: '📊'
  },
  {
    title: 'Market Intelligence',
    description: 'Stay ahead of the curve with real-time salary benchmarks and trending skill requirements for your target role.',
    icon: '💡'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-surface transition-theme border-t border-border relative">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">Intelligence, not just data.</Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Stop tracking progress in spreadsheets. We turn your career journey into actionable, predictive intelligence.
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <Card key={i} className="bg-surface-raised shadow-sm hover:shadow-md transition-shadow border-border group">
              <CardHeader>
                <div className="text-3xl mb-4 p-3 bg-surface rounded-xl w-fit border border-border group-hover:border-accent transition-colors">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Text variant="secondary">{feature.description}</Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
