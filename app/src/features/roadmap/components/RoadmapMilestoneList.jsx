import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';
import { cn } from '../../../utils/cn';

const milestoneStyles = {
  done: {
    badge: 'success',
    label: 'Done',
    accent: 'border-success/30 bg-success-subtle/40',
  },
  'in-progress': {
    badge: 'warning',
    label: 'In Progress',
    accent: 'border-warning/30 bg-warning-subtle/30',
  },
  'up-next': {
    badge: 'accent',
    label: 'Up Next',
    accent: 'border-accent/25 bg-accent-subtle/30',
  },
};

export function RoadmapMilestoneList({ milestones }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Active Milestones</CardTitle>
        <Text variant="small">
          The current stage stays intentionally short so each win feels concrete and visible.
        </Text>
      </CardHeader>

      <CardContent className="space-y-4">
        {milestones.map((milestone, index) => {
          const style = milestoneStyles[milestone.status] ?? milestoneStyles['up-next'];

          return (
            <div
              key={milestone.id}
              className={cn(
                'rounded-2xl border p-5 transition-colors duration-fast',
                style.accent
              )}
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-content-tertiary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Badge variant={style.badge}>{style.label}</Badge>
                    <Badge variant="default">{milestone.ownerSignal}</Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-semibold text-content">
                      {milestone.title}
                    </h3>
                    <Text variant="small" className="leading-relaxed">
                      {milestone.aiRationale}
                    </Text>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-content-secondary">
                  {milestone.estimatedTime}
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
