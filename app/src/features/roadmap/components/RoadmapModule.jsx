import { mockRoadmapData } from '../data';
import { RoadmapHeroCard } from './RoadmapHeroCard';
import { RoadmapStageTimeline } from './RoadmapStageTimeline';
import { RoadmapMilestoneList } from './RoadmapMilestoneList';
import { RoadmapNextStepCard } from './RoadmapNextStepCard';

export function RoadmapModule() {
  const currentStage =
    mockRoadmapData.stages.find((stage) => stage.id === mockRoadmapData.currentStageId) ??
    mockRoadmapData.stages[0];

  return (
    <div className="flex flex-col gap-6">
      <div className="mb-1">
        <h2 className="font-display text-3xl font-bold tracking-tight text-content">
          Career Roadmap
        </h2>
        <p className="mt-1 text-content-secondary">
          A compact sequence of milestones that turns growth into deliberate execution.
        </p>
      </div>

      <RoadmapHeroCard
        targetRole={mockRoadmapData.targetRole}
        planningHorizon={mockRoadmapData.planningHorizon}
        completionRate={mockRoadmapData.completionRate}
        currentStage={currentStage}
        summary={mockRoadmapData.summary}
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-7">
          <RoadmapStageTimeline stages={mockRoadmapData.stages} />
        </div>
        <div className="xl:col-span-5">
          <RoadmapNextStepCard nextAction={mockRoadmapData.nextAction} />
        </div>
      </div>

      <RoadmapMilestoneList milestones={mockRoadmapData.activeMilestones} />
    </div>
  );
}
