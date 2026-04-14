import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function EducationCard({ education }) {
  const { degree, institution, status, year, description, keySubjects, aiRationale } = education;

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

  return (
    <Card className="flex flex-col h-full hover:border-accent/40 transition-colors duration-fast">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle>{degree}</CardTitle>
            <CardDescription className="mt-1 font-medium text-content-secondary">
              {institution} • {year}
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
        {/* Description Row */}
        <div>
          <Text variant="small" className="text-content-secondary leading-relaxed">
            {description}
          </Text>
        </div>

        {/* Key Subjects */}
        {keySubjects && keySubjects.length > 0 && (
          <div className="pt-2">
            <Text variant="small" className="font-medium mb-2 text-content">
              Key Subjects
            </Text>
            <div className="flex flex-wrap gap-1.5">
              {keySubjects.map((subject) => (
                <Badge key={subject} variant="default" className="text-[10px]">
                  {subject}
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
          <Text variant="small" className="leading-relaxed text-content-secondary">
            {aiRationale}
          </Text>
        </div>
      </CardContent>
    </Card>
  );
}
