import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function MissingSkillsCard({ skills }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Prioritized Missing Skills</CardTitle>
        <Text variant="small">
          These are the most useful capability gaps to close next for visible role alignment.
        </Text>
      </CardHeader>

      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.id} className="rounded-2xl border border-border bg-surface-raised/70 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-content-tertiary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-content">{skill.label}</h3>
                </div>
                <Text variant="small" className="leading-relaxed">
                  {skill.reason}
                </Text>
              </div>

              <Badge variant={skill.priority === 'high' ? 'danger' : 'warning'}>
                {skill.priority === 'high' ? 'High Priority' : 'Medium Priority'}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
