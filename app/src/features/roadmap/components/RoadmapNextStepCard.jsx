import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Text } from '../../../components/ui/Typography';
import { useNavigate } from 'react-router-dom';

export function RoadmapNextStepCard({ nextAction }) {
  const navigate = useNavigate();

  return (
    <Card className="border-accent/20 bg-surface-raised shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="accent" className="uppercase tracking-[0.18em]">
            Next Recommended Action
          </Badge>
          <Badge variant="default">{nextAction.impact}</Badge>
        </div>
        <CardTitle className="mt-3 text-2xl leading-tight">
          {nextAction.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-border bg-accent-subtle/30 p-4">
          <Text variant="small" className="leading-relaxed text-content">
            {nextAction.aiRationale}
          </Text>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-content-tertiary">
              Time block
            </p>
            <p className="mt-2 text-sm font-medium text-content">
              {nextAction.estimatedTime}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-content-tertiary">
              Checkpoint
            </p>
            <p className="mt-2 text-sm font-medium text-content">
              {nextAction.checkpoint}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="secondary" onClick={() => navigate('/dashboard')}>
          Return to Overview
        </Button>
      </CardFooter>
    </Card>
  );
}
