import { useFetchSkills } from '../hooks/useFetchSkills';
import { SkillsHeroCard } from './SkillsHeroCard';
import { SkillCategoryComparison } from './SkillCategoryComparison';
import { MissingSkillsCard } from './MissingSkillsCard';
import { CardSkeleton } from '../../../components/ui/LoadingState';
import { EmptyState } from '../../../components/ui/EmptyState';

export function SkillsModule() {
  const { data, isLoading, error, refetch } = useFetchSkills();

  // Determine if we truly have no data
  const hasNoData = !data || !data.categoryComparisons || data.categoryComparisons.length === 0;

  return (
    <div className="flex flex-col gap-6">
      <div className="mb-1 flex items-start justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-content">
            Skills Command
          </h2>
          <p className="mt-1 text-content-secondary">
            A compact view of how your current skill profile compares with your target role.
          </p>
        </div>
      </div>

      {isLoading && (
        <>
          <CardSkeleton className="h-[200px]" />
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
            <div className="xl:col-span-7">
              <CardSkeleton className="h-[400px]" />
            </div>
            <div className="xl:col-span-5">
              <CardSkeleton className="h-[400px]" />
            </div>
          </div>
        </>
      )}

      {error && !isLoading && (
        <EmptyState
          title="Unable to load skills"
          description={error.message || 'There was a problem fetching your skills data. Please try again later.'}
          actionLabel="Retry"
          onAction={refetch}
        />
      )}

      {!error && !isLoading && hasNoData && (
        <EmptyState 
          title="No Skills Logged Yet"
          description="Log your first skills or import them from a resume to see how you match up against your target role."
        />
      )}

      {data && !isLoading && !error && !hasNoData && (
        <>
          <SkillsHeroCard
            targetRole={data.targetRole}
            overallMatch={data.overallMatch}
            summary={data.summary}
          />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
            <div className="xl:col-span-7">
              <SkillCategoryComparison categories={data.categoryComparisons} />
            </div>
            <div className="xl:col-span-5">
              <MissingSkillsCard skills={data.missingSkills} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
