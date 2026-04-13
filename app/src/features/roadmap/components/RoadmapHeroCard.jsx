import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function RoadmapHeroCard({
  targetRole,
  planningHorizon,
  completionRate,
  currentStage,
  summary,
}) {
  return (
    <Card className="relative overflow-hidden border-accent/20 bg-gradient-to-br from-accent-subtle via-surface-raised to-surface-raised shadow-lg">
      <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <CardHeader className="relative z-10 gap-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="accent" className="w-fit uppercase tracking-[0.2em]">
              Guided Action Plan
            </Badge>
            <div className="space-y-2">
              <CardTitle className="text-3xl leading-tight lg:text-4xl">
                Roadmap to {targetRole}
              </CardTitle>
              <Text variant="lead" className="max-w-xl leading-relaxed">
                {summary}
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:min-w-[280px]">
            <div className="rounded-xl border border-border bg-surface/80 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-content-tertiary">
                Horizon
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-content">
                {planningHorizon}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface/80 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-content-tertiary">
                Progress
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-content">
                {completionRate}%
              </p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="rounded-2xl border border-border bg-surface/75 p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-content-tertiary">
                Current stage
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-semibold text-content">
                  {currentStage.title}
                </h3>
                <Badge variant="warning">{currentStage.timeframe}</Badge>
              </div>
            </div>

            <div className="max-w-md">
              <Text variant="small" className="leading-relaxed">
                {currentStage.focus}
              </Text>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
