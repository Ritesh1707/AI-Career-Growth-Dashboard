import { mockJobsData } from '../data';
import { JobCard } from './JobCard';
import { MarketIntelligenceCard } from './MarketIntelligenceCard';
import { Heading, Text } from '../../../components/ui/Typography';

export function JobsModule() {
  const { targetRole, marketIntelligence, recommendedRoles } = mockJobsData;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Module Header */}
      <div>
        <Heading level={2}>Career Opportunities</Heading>
        <Text variant="muted" className="mt-2 max-w-3xl">
          Market analysis and role recommendations based on your current skill profile
          and trajectory toward <span className="font-semibold text-content">{targetRole}</span>.
        </Text>
      </div>

      {/* Top Section: Market Intelligence */}
      <section>
        <MarketIntelligenceCard intelligence={marketIntelligence} />
      </section>

      {/* Main Content: Recommended Roles */}
      <section className="space-y-4">
        <div>
          <Heading level={3}>Recommended Roles</Heading>
          <Text variant="small" className="mt-1">
            Top matches prioritizing your strengths while highlighting high-value skill gaps.
          </Text>
        </div>
        
        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedRoles.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
