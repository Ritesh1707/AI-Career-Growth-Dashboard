import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function MarketIntelligenceCard({ intelligence }) {
  return (
    <Card className="bg-gradient-to-br from-surface-raised to-surface overflow-hidden h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Market Intelligence</CardTitle>
          <Badge variant="accent" className="tracking-wider uppercase text-[10px]">
            Live Data
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Text variant="muted" className="leading-relaxed">
          {intelligence.summary}
        </Text>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface rounded-md p-3 border border-border/50">
            <Text variant="small" className="font-medium text-content-tertiary uppercase tracking-wider mb-1">
              Salary Benchmark
            </Text>
            <p className="font-display font-semibold text-content text-lg">
              {intelligence.salaryBenchmark}
            </p>
          </div>
          <div className="bg-surface rounded-md p-3 border border-border/50">
            <Text variant="small" className="font-medium text-content-tertiary uppercase tracking-wider mb-1">
              Hiring Velocity
            </Text>
            <div className="flex items-center">
              <span className="relative flex h-2.5 w-2.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
              </span>
              <p className="font-display font-semibold text-content text-lg">
                {intelligence.hiringVelocity}
              </p>
            </div>
          </div>
        </div>

        <div>
          <Text variant="small" className="font-medium text-content-tertiary uppercase tracking-wider mb-3">
            Trending Skills
          </Text>
          <div className="flex flex-wrap gap-2">
            {intelligence.trendingSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="flex items-center gap-2 bg-surface border border-border/50 rounded-md px-2.5 py-1.5 text-sm"
              >
                <span className="text-content font-medium">{skill.name}</span>
                <span className="text-success font-semibold text-xs">{skill.growth}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
