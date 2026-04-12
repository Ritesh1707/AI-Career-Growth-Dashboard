import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Text } from '../../../components/ui/Typography';
import { useNavigate } from 'react-router-dom';

export function PredictiveActionCard({ nextStep }) {
  const navigate = useNavigate();

  if (!nextStep) return null;

  const { title, type, estimatedTime, aiRationale, confidenceScore, urgency, actionLink } = nextStep;

  return (
    <Card className="border-accent/40 bg-accent-subtle/10 relative overflow-hidden">
      {/* Decorative background glow for premium feel */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="accent" className="uppercase tracking-wider text-[10px] font-bold">
            ✨ AI Suggested Action
          </Badge>
          <div className="flex gap-2">
            {urgency === 'high' && (
              <Badge variant="danger">High Urgency</Badge>
            )}
            <Badge variant="default" className="text-content-secondary font-medium">
              {confidenceScore}% Match
            </Badge>
          </div>
        </div>
        <CardTitle className="text-2xl leading-tight">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5 relative z-10">
        <div className="bg-surface border border-accent/10 rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-accent text-lg" aria-hidden="true">💡</span>
            <div>
              <Text variant="small" className="font-semibold text-content mb-1">
                Copilot Rationale
              </Text>
              <Text variant="muted" className="text-sm leading-relaxed">
                {aiRationale}
              </Text>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm text-content-secondary font-body">
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true">⏱️</span>
            <span>{estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true">📚</span>
            <span className="capitalize">{type}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2 relative z-10">
        <Button 
          variant="primary" 
          onClick={() => navigate(actionLink)}
          disabled={!actionLink}
          className="w-full sm:w-auto"
        >
          Start Action
        </Button>
      </CardFooter>
    </Card>
  );
}
