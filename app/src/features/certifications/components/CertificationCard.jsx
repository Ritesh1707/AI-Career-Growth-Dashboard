import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function CertificationCard({ certification }) {
  const { title, issuer, status, progress, targetDate, aiRationale } = certification;

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
              {issuer}
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
        {/* Progress & Target Date Row */}
        <div className="flex flex-col gap-2 mt-1">
          <div className="flex justify-between items-center text-sm">
            <span className="text-content-secondary font-medium">
              Progress: {progress}%
            </span>
            <span className="text-content-tertiary text-xs">
              Target: {targetDate}
            </span>
          </div>
          <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-border/50">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-in-out ${getProgressBarColor(status)}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

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
