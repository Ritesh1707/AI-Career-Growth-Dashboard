import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function ProjectCard({ project }) {
  const { title, status, description, skillMapping, readinessValue, aiRationale } = project;

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'accent';
      case 'Planned':
      default:
        return 'default';
    }
  };

  const getProgressBarColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-success';
      case 'In Progress':
        return 'bg-accent';
      case 'Planned':
      default:
        return 'bg-border';
    }
  };

  return (
    <Card className="flex flex-col h-full hover:border-accent/40 transition-colors duration-fast">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1">
              {description}
            </CardDescription>
          </div>
          <Badge
            variant={getStatusVariant(status)}
            className="shrink-0 text-xs py-1"
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex flex-col gap-4 flex-1">
        {/* Readiness Value Row */}
        <div className="flex flex-col gap-2 mt-1">
          <div className="flex justify-between items-center text-sm">
            <span className="text-content-secondary font-medium">
              Readiness Value
            </span>
            <span className="text-content-tertiary text-xs font-bold">
              {readinessValue}%
            </span>
          </div>
          <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-border/50">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-in-out ${getProgressBarColor(status)}`}
              style={{ width: `${readinessValue}%` }}
            />
          </div>
        </div>

        {/* Skill Mapping */}
        {skillMapping && skillMapping.length > 0 && (
          <div className="pt-2">
            <Text variant="small" className="font-medium mb-2 text-content">
              Skills Applied
            </Text>
            <div className="flex flex-wrap gap-1.5">
              {skillMapping.map((skill) => (
                <Badge key={skill} variant="default" className="text-[10px]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* AI Rationale Block */}
        <div className="bg-surface rounded-md p-3 border border-border/50 text-sm relative mt-auto pt-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-accent text-xs font-bold uppercase tracking-wider">
              AI Analysis
            </span>
          </div>
          <Text variant="small" className="leading-relaxed">
            {aiRationale}
          </Text>
        </div>
      </CardContent>
    </Card>
  );
}
