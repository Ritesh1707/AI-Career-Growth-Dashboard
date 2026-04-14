import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

const statusVariantMap = {
  Completed: 'success',
  'In Progress': 'accent',
  Planned: 'default',
};

const progressColorMap = {
  Completed: 'bg-success',
  'In Progress': 'bg-accent',
  Planned: 'bg-border',
};

const readinessVariantMap = {
  High: 'success',
  Medium: 'warning',
  Low: 'default',
};

export function ProjectCard({ project }) {
  const { title, description, status, progress, skills, resumeReadiness, aiRationale } = project;

  return (
    <Card className="flex flex-col h-full hover:border-accent/40 transition-colors duration-fast">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <Badge
            variant={statusVariantMap[status] ?? 'default'}
            className="shrink-0 text-xs py-1"
          >
            {status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        {/* Progress bar */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-content-secondary font-medium">Progress: {progress}%</span>
            <span className="flex items-center gap-1.5 text-xs text-content-tertiary">
              Resume readiness:{' '}
              <Badge variant={readinessVariantMap[resumeReadiness] ?? 'default'} className="text-xs py-0.5 px-1.5">
                {resumeReadiness}
              </Badge>
            </span>
          </div>
          <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-border/50">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-in-out ${progressColorMap[status] ?? 'bg-border'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="default" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        {/* AI Rationale */}
        <div className="bg-surface rounded-md p-3 border border-border/50 text-sm mt-auto">
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
