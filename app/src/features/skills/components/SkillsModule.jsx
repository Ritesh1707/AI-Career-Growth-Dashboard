import { mockSkillsData } from '../data';
import { SkillsHeroCard } from './SkillsHeroCard';
import { SkillCategoryComparison } from './SkillCategoryComparison';
import { MissingSkillsCard } from './MissingSkillsCard';

export function SkillsModule() {
  return (
    <div className="flex flex-col gap-6">
      <div className="mb-1">
        <h2 className="font-display text-3xl font-bold tracking-tight text-content">
          Skills Command
        </h2>
        <p className="mt-1 text-content-secondary">
          A compact view of how your current skill profile compares with your target role.
        </p>
      </div>

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
    </div>
  );
}
