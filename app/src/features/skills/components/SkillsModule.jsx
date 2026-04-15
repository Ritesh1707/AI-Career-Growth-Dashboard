import { useState, useEffect } from 'react';
import { mockSkillsData } from '../data';
import { SkillsHeroCard } from './SkillsHeroCard';
import { SkillCategoryComparison } from './SkillCategoryComparison';
import { MissingSkillsCard } from './MissingSkillsCard';
import { CardSkeleton } from '../../../components/ui/LoadingState';
import { EmptyState } from '../../../components/ui/EmptyState';

export function SkillsModule() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Determine if we truly have no data (or are simulating it for this milestone)
  const hasNoData = !mockSkillsData || !mockSkillsData.categoryComparisons || mockSkillsData.categoryComparisons.length === 0;

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

      {isLoading ? (
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
      ) : hasNoData ? (
        <EmptyState 
          title="No Skills Logged Yet"
          description="Log your first skills or import them from a resume to see how you match up against your target role."
        />
      ) : (
        <>
          <SkillsHeroCard
            targetRole={mockSkillsData.targetRole}
            overallMatch={mockSkillsData.overallMatch}
            summary={mockSkillsData.summary}
          />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
            <div className="xl:col-span-7">
              <SkillCategoryComparison categories={mockSkillsData.categoryComparisons} />
            </div>
            <div className="xl:col-span-5">
              <MissingSkillsCard skills={mockSkillsData.missingSkills} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
