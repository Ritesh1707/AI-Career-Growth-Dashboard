import { SkillGapVisualizer } from './SkillGapVisualizer';

export function SkillsModule() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="lg:col-span-12">
        <SkillGapVisualizer />
      </div>
    </div>
  );
}
