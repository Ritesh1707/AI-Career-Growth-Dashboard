import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { skillsData } from '../data';

export function SkillGapVisualizer() {
  const { targetRole, overallMatch, aiRationale, categories } = skillsData;

  return (
    <Card className="w-full">
      <CardHeader className="border-b border-border pb-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            <Badge variant="accent" className="mb-3">Target Role Alignment</Badge>
            <CardTitle className="text-2xl">{targetRole}</CardTitle>
            <CardDescription className="mt-2 max-w-2xl leading-relaxed">
              <span className="font-semibold text-content">AI Insight:</span> {aiRationale}
            </CardDescription>
          </div>
          <div className="sm:text-right flex items-center sm:block gap-3">
            <div className="text-4xl font-display font-bold text-content">{overallMatch}%</div>
            <div className="text-xs text-content-tertiary uppercase tracking-wider font-medium sm:mt-1">Match</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-8">
        {categories.map((category) => (
          <div key={category.name}>
            <h4 className="text-sm font-semibold text-content uppercase tracking-wider mb-4 border-b border-border/50 pb-2">
              {category.name}
            </h4>
            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  {/* Skill Name & Badge */}
                  <div className="w-full sm:w-48 shrink-0 flex items-center justify-between sm:justify-start sm:gap-3">
                    <span className="text-sm font-medium text-content">{skill.name}</span>
                    {skill.isGap && <Badge variant="warning" className="text-[10px] px-1.5 py-0">Gap</Badge>}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="flex-1 relative h-2.5 bg-surface rounded-full overflow-hidden flex items-center">
                    {/* Required marker line */}
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-content/40 z-10"
                      style={{ left: `${skill.required}%`, transform: 'translateX(-50%)' }}
                      title={`Required: ${skill.required}%`}
                    />
                    
                    {/* Current progress fill */}
                    <div 
                      className={`absolute top-0 left-0 bottom-0 rounded-full transition-all duration-500 ${
                        skill.isGap ? 'bg-warning/80' : 'bg-success/80'
                      }`}
                      style={{ width: `${skill.current}%` }}
                    />
                  </div>
                  
                  {/* Metrics */}
                  <div className="w-full sm:w-24 shrink-0 flex justify-between sm:justify-end text-xs text-content-secondary font-medium">
                    <span className="sm:hidden">Current / Req: </span>
                    <span>{skill.current}% <span className="text-content-tertiary">/ {skill.required}%</span></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
