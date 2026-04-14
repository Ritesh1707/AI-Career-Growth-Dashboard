import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function SkillCategoryComparison({ categories }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Current vs Target</CardTitle>
        <Text variant="small">
          Simple comparison bars keep the signal clear without overcomplicating the first Skills milestone.
        </Text>
      </CardHeader>

      <CardContent className="space-y-5">
        {categories.map((category) => {
          const gap = Math.max(category.targetLevel - category.currentLevel, 0);

          return (
            <div key={category.id} className="rounded-2xl border border-border bg-surface-raised/70 p-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-content">
                      {category.label}
                    </h3>
                    <Badge variant={gap >= 20 ? 'warning' : 'default'}>
                      Gap {gap}
                    </Badge>
                  </div>
                  <Text variant="small" className="max-w-2xl leading-relaxed">
                    {category.aiRationale}
                  </Text>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:min-w-[220px]">
                  <div className="rounded-xl border border-border bg-surface px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-content-tertiary">
                      Current
                    </p>
                    <p className="mt-2 text-lg font-semibold text-content">{category.currentLevel}%</p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-content-tertiary">
                      Target
                    </p>
                    <p className="mt-2 text-lg font-semibold text-content">{category.targetLevel}%</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-content-tertiary">
                    <span>Current level</span>
                    <span>{category.currentLevel}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${category.currentLevel}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-content-tertiary">
                    <span>Target level</span>
                    <span>{category.targetLevel}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface">
                    <div
                      className="h-full rounded-full bg-content-secondary/60"
                      style={{ width: `${category.targetLevel}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
