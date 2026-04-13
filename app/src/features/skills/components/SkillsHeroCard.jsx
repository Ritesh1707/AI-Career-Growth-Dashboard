import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function SkillsHeroCard({ targetRole, overallMatch, summary }) {
  return (
    <Card className="relative overflow-hidden border-accent/20 bg-gradient-to-br from-accent-subtle via-surface-raised to-surface-raised shadow-lg">
      <div className="absolute -left-16 top-8 h-36 w-36 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <CardHeader className="relative z-10 gap-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="accent" className="w-fit uppercase tracking-[0.18em]">
              Skill Gap Snapshot
            </Badge>
            <div className="space-y-2">
              <CardTitle className="text-3xl leading-tight lg:text-4xl">
                Skills alignment for {targetRole}
              </CardTitle>
              <Text variant="lead" className="max-w-xl leading-relaxed">
                {summary}
              </Text>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface/80 px-6 py-5 lg:min-w-[220px]">
            <p className="text-xs uppercase tracking-[0.18em] text-content-tertiary">
              Overall match
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span className="font-display text-5xl font-bold tracking-tight text-content">
                {overallMatch}
              </span>
              <span className="pb-1 text-sm font-medium text-content-secondary">/ 100</span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-surface">
              <div className="h-full rounded-full bg-accent" style={{ width: `${overallMatch}%` }} />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="rounded-2xl border border-border bg-surface/75 p-5">
          <Text variant="small" className="leading-relaxed">
            This module stays deliberately compact: compare your strongest capability areas against
            the target role, then focus on the few missing skills that create the biggest readiness gap.
          </Text>
        </div>
      </CardContent>
    </Card>
  );
}
