import { useFetchJobs } from '../hooks/useFetchJobs';
import { JobCard } from './JobCard';
import { MarketIntelligenceCard } from './MarketIntelligenceCard';
import { Heading, Text } from '../../../components/ui/Typography';
import { CardSkeleton } from '../../../components/ui/LoadingState';
import { EmptyState } from '../../../components/ui/EmptyState';

export function JobsModule() {
  const { data, isLoading, error, refetch } = useFetchJobs(false);

  const targetRole = data?.targetRole || '...';
  const hasNoData = !data || (!data.marketIntelligence && (!data.recommendedRoles || data.recommendedRoles.length === 0));

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

      {isLoading && (
        <>
          <section>
            <CardSkeleton className="h-[200px]" />
          </section>

          <section className="space-y-4">
            <div>
              <Heading level={3}>Recommended Roles</Heading>
              <Text variant="small" className="mt-1">
                Top matches prioritizing your strengths while highlighting high-value skill gaps.
              </Text>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <CardSkeleton className="h-[300px]" />
              <CardSkeleton className="h-[300px]" />
              <CardSkeleton className="h-[300px]" />
            </div>
          </section>
        </>
      )}

      {error && !isLoading && (
        <EmptyState
          title="Unable to load jobs"
          description="There was a problem loading your jobs data. Please check your connection and try again."
          actionLabel="Try Again"
          onAction={refetch}
        />
      )}

      {!error && !isLoading && hasNoData && (
        <EmptyState
          title="No Career Data Available"
          description="Your job recommendations and market intelligence will appear here once you've set a target role and added skills."
        />
      )}

      {!error && !isLoading && !hasNoData && (
        <>
          <section>
            <MarketIntelligenceCard intelligence={data.marketIntelligence} />
          </section>

          <section className="space-y-4">
            <div>
              <Heading level={3}>Recommended Roles</Heading>
              <Text variant="small" className="mt-1">
                Top matches prioritizing your strengths while highlighting high-value skill gaps.
              </Text>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {data.recommendedRoles.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
