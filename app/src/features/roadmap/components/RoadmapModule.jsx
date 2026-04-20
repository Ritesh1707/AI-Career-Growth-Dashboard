import { useFetchRoadmap } from '../hooks/useFetchRoadmap';
import { RoadmapHeroCard } from './RoadmapHeroCard';
import { RoadmapStageTimeline } from './RoadmapStageTimeline';
import { RoadmapMilestoneList } from './RoadmapMilestoneList';
import { RoadmapNextStepCard } from './RoadmapNextStepCard';
import { EmptyState } from '../../../components/ui/EmptyState';
import { CardSkeleton } from '../../../components/ui/LoadingState';

export function RoadmapModule() {
  const { data, isLoading, error, refetch } = useFetchRoadmap();

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
          <CardSkeleton className="h-[300px]" />
        </>
      )}

      {error && !isLoading && (
        <EmptyState
          title="Failed to load roadmap"
          description="There was a problem connecting to the career trajectory service. Please try again."
          actionLabel="Try Again"
          onAction={refetch}
        />
      )}

      {!error && !isLoading && !data && (
        <EmptyState
          title="No roadmap data"
          description="Your career roadmap has not been generated yet."
        />
      )}

      {data && !isLoading && !error && (
        <>
          <RoadmapHeroCard
            targetRole={data.targetRole}
            planningHorizon={data.planningHorizon}
            completionRate={data.completionRate}
            currentStage={
              data.stages.find((stage) => stage.id === data.currentStageId) ??
              data.stages[0]
            }
            summary={data.summary}
          />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
            <div className="xl:col-span-7">
              <RoadmapStageTimeline stages={data.stages} />
            </div>
            <div className="xl:col-span-5">
              <RoadmapNextStepCard nextAction={data.nextAction} />
            </div>
          </div>

          <RoadmapMilestoneList milestones={data.activeMilestones} />
        </>
      )}
    </div>
  );
}
