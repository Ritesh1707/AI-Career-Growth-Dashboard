import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function JobCard({ job }) {
  const isHighMatch = job.matchPercentage >= 80;

  return (
    <Card className="flex flex-col h-full hover:border-accent/40 transition-colors duration-fast">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription className="mt-1">
              {job.company} • {job.location} • {job.type}
            </CardDescription>
          </div>
          <Badge
            variant={isHighMatch ? 'success' : 'warning'}
            className="shrink-0 text-sm py-1"
          >
            {job.matchPercentage}% Match
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        {/* Key Details Row */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">{job.salaryRange}</Badge>
        </div>

        {/* AI Rationale Block */}
        <div className="bg-surface rounded-md p-3 border border-border/50 text-sm relative">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-accent text-xs font-bold uppercase tracking-wider">
              AI Analysis
            </span>
          </div>
          <Text variant="small" className="leading-relaxed">
            {job.aiRationale}
          </Text>
        </div>

        {/* Missing Requirements */}
        {job.missingRequirements && job.missingRequirements.length > 0 && (
          <div className="mt-auto pt-2">
            <Text variant="small" className="font-medium mb-2 text-content">
              Missing Requirements
            </Text>
            <div className="flex flex-wrap gap-1.5">
              {job.missingRequirements.map((req) => (
                <Badge key={req} variant="danger">
                  {req}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
