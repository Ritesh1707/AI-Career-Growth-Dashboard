import { useFetchJobs } from '../hooks/useFetchJobs';
import { JobCard } from './JobCard';
import { MarketIntelligenceCard } from './MarketIntelligenceCard';
import { Heading, Text } from '../../../components/ui/Typography';
import { CardSkeleton } from '../../../components/ui/LoadingState';
import { EmptyState } from '../../../components/ui/EmptyState';

export function JobsModule() {
  const { data, isLoading, error, refetch } = useFetchJobs(false);

  if (isLoading) {
    return (
      <div className="space-y-8 animate-fade-in">
        {/* Module Header */}
        <div>
          <Heading level={2}>Career Opportunities</Heading>
          <Text variant="muted" className="mt-2 max-w-3xl">
            Market analysis and role recommendations based on your current skill profile
            and trajectory toward <span className="font-semibold text-content">...</span>.
          </Text>
        </div>

        {/* Top Section: Market Intelligence */}
        <section>
          <CardSkeleton className="h-[200px]" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <CardSkeleton className="h-[300px]" />
            <CardSkeleton className="h-[300px]" />
            <CardSkeleton className="h-[300px]" />
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8 animate-fade-in">
        <div>
          <Heading level={2}>Career Opportunities</Heading>
        </div>
        <EmptyState
          title="Failed to load jobs data"
          description="There was a problem connecting to the server. Please try again."
          actionLabel="Retry"
          onAction={refetch}
        />
      </div>
    );
  }

  if (!data || (!data.marketIntelligence && (!data.recommendedRoles || data.recommendedRoles.length === 0))) {
    return (
      <div className="space-y-8 animate-fade-in">
        <div>
          <Heading level={2}>Career Opportunities</Heading>
        </div>
        <EmptyState
          title="No Career Data Available"
          description="Your job recommendations and market intelligence will appear here once you've set a target role and added skills."
        />
      </div>
    );
  }

  const { targetRole, marketIntelligence, recommendedRoles } = data;

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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {recommendedRoles.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
