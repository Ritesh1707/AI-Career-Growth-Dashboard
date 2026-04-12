import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Typography';

export function TopPrioritiesList({ priorities }) {
  if (!priorities || priorities.length === 0) return null;

  return (
    <Card className="flex flex-col h-full border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Top Priorities</CardTitle>
          <Badge variant="default" className="text-xs">
            {priorities.length} Active
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4">
        <div className="space-y-3">
          {priorities.map((priority, index) => (
            <div 
              key={priority.id}
              className={`flex flex-col p-4 rounded-lg border bg-surface-raised/30 transition-colors hover:bg-surface-raised/50 ${
                priority.impact === 'high' ? 'border-accent/30' : 'border-border'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-start gap-3">
                  <span className="text-content-secondary mt-0.5 font-medium text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Text variant="body" className="font-semibold text-content leading-tight">
                    {priority.title}
                  </Text>
                </div>
                <div className="flex gap-2 shrink-0">
                  {priority.impact === 'high' && (
                    <Badge variant="accent" className="text-[10px] uppercase tracking-wider">
                      High Impact
                    </Badge>
                  )}
                  {priority.status === 'in-progress' && (
                    <Badge variant="warning" className="text-[10px] uppercase tracking-wider">
                      In Progress
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-sm text-content-secondary ml-7 pl-1">
                <span className="text-accent/70 mt-0.5 text-xs" aria-hidden="true">↳</span>
                <p className="leading-relaxed font-body text-xs">{priority.aiRationale}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
