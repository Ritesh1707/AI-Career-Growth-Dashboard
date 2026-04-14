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

const typeVariantMap = {
  Formal: 'default',
  'Self-Driven': 'accent',
};

export function EducationCard({ entry }) {
  const { institution, degree, type, status, year, subjects, currentFocus, aiRationale } = entry;

  return (
    <Card
      className={`flex flex-col h-full transition-colors duration-fast ${
        currentFocus ? 'border-accent/60 hover:border-accent' : 'hover:border-accent/40'
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {currentFocus && (
                <Badge variant="accent" className="text-xs py-0.5 px-1.5">
                  Current Focus
                </Badge>
              )}
            </div>
            <CardTitle>{degree}</CardTitle>
            <CardDescription className="mt-1">{institution}</CardDescription>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <Badge variant={statusVariantMap[status] ?? 'default'} className="text-xs py-1">
              {status}
            </Badge>
            <Badge variant={typeVariantMap[type] ?? 'default'} className="text-xs py-0.5 px-1.5">
              {type}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        {/* Year */}
        <Text variant="small" className="text-content-tertiary">
          {status === 'Completed' ? `Completed ${year}` : `Target: ${year}`}
        </Text>

        {/* Subject Tags */}
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <Badge key={subject} variant="default" className="text-xs">
              {subject}
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
