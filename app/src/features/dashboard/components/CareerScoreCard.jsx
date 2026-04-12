import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function CareerScoreCard({ user, careerProgress }) {
  if (!user || !careerProgress) return null;

  const { careerScore, targetRole, currentLevel } = user;
  const { levelName, skillGapMatch, recentGrowth, aiRationale } = careerProgress;

  // Simple SVG Circle Progress Calculation
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (careerScore / 100) * circumference;

  return (
    <Card className="flex flex-col h-full border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Career Score</CardTitle>
          <Badge variant="success" className="font-semibold text-xs py-0.5">
            {recentGrowth}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between space-y-6">
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-display font-bold tracking-tighter text-content">
                {careerScore}
              </span>
              <span className="text-content-secondary font-medium">/ 100</span>
            </div>
            <Text variant="small" className="mt-1 font-medium text-content-secondary">
              {levelName} • {currentLevel}
            </Text>
          </div>
          
          <div className="relative flex items-center justify-center">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96" aria-hidden="true">
              <circle
                className="text-border stroke-current"
                strokeWidth="8"
                cx="48"
                cy="48"
                r={radius}
                fill="transparent"
              />
              <circle
                className="text-accent stroke-current transition-all duration-1000 ease-out"
                strokeWidth="8"
                strokeLinecap="round"
                cx="48"
                cy="48"
                r={radius}
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-accent text-xl" aria-hidden="true">🏆</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-surface-raised/50 rounded-lg p-4 border border-border">
            <div className="flex justify-between items-center mb-2">
              <Text variant="small" className="font-semibold text-content">Match: {targetRole}</Text>
              <span className="text-sm font-bold text-accent">{skillGapMatch}%</span>
            </div>
            <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-1000 ease-out"
                style={{ width: `${skillGapMatch}%` }}
              />
            </div>
          </div>
          
          <div className="flex items-start gap-2 text-sm text-content-secondary bg-accent-subtle/30 p-3 rounded-lg border border-accent/10">
            <span className="text-accent mt-0.5" aria-hidden="true">✦</span>
            <p className="leading-relaxed font-body">{aiRationale}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
