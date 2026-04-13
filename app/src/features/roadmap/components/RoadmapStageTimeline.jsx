import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';
import { cn } from '../../../utils/cn';

const stageStyles = {
  complete: {
    dot: 'bg-success shadow-[0_0_0_6px_rgba(5,150,105,0.12)]',
    line: 'bg-success/70',
    badge: 'success',
    label: 'Complete',
  },
  current: {
    dot: 'bg-accent shadow-[0_0_0_6px_rgba(79,70,229,0.12)]',
    line: 'bg-border',
    badge: 'accent',
    label: 'Current',
  },
  upcoming: {
    dot: 'bg-content-tertiary/40',
    line: 'bg-border',
    badge: 'default',
    label: 'Upcoming',
  },
};

export function RoadmapStageTimeline({ stages }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Stage Timeline</CardTitle>
        <Text variant="small">
          A compact view of the sequence from core skill repair to interview readiness.
        </Text>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          {stages.map((stage, index) => {
            const style = stageStyles[stage.status] ?? stageStyles.upcoming;

            return (
              <div key={stage.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className={cn('mt-1 h-3.5 w-3.5 rounded-full', style.dot)} />
                  {index < stages.length - 1 && (
                    <span className={cn('mt-2 h-full min-h-14 w-px', style.line)} />
                  )}
                </div>

                <div className="flex-1 rounded-xl border border-border bg-surface-raised/70 p-4">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-semibold text-content">
                          {stage.title}
                        </h3>
                        <Badge variant={style.badge}>{style.label}</Badge>
                      </div>
                      <Text variant="small" className="leading-relaxed">
                        {stage.focus}
                      </Text>
                    </div>

                    <div className="space-y-2 lg:max-w-[220px]">
                      <p className="text-xs uppercase tracking-[0.18em] text-content-tertiary">
                        {stage.timeframe}
                      </p>
                      <Text variant="small" className="leading-relaxed">
                        {stage.outcome}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
