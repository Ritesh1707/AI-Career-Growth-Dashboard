import { useFetchRoadmap } from '../hooks/useFetchRoadmap';
import { RoadmapHeroCard } from './RoadmapHeroCard';
import { RoadmapStageTimeline } from './RoadmapStageTimeline';
import { RoadmapMilestoneList } from './RoadmapMilestoneList';
import { RoadmapNextStepCard } from './RoadmapNextStepCard';
import { EmptyState } from '../../../components/ui/EmptyState';
import { CardSkeleton } from '../../../components/ui/LoadingState';
import { m, AnimatePresence } from 'framer-motion';
import { useMotionVariants } from '../../../utils/motion';

export function RoadmapModule() {
  const { data, isLoading, error, refetch } = useFetchRoadmap();
  const { fadeTransition, slideUp } = useMotionVariants();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        ...fadeTransition.animate.transition,
        staggerChildren: 0.1,
      }
    },
    exit: fadeTransition.exit
  };

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

      <AnimatePresence mode="wait">
        {isLoading && (
          <m.div key="loading" {...fadeTransition} className="flex flex-col gap-6">
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
          </m.div>
        )}

        {error && !isLoading && (
          <m.div key="error" {...fadeTransition}>
            <EmptyState
              title="Failed to load roadmap"
              description="There was a problem connecting to the career trajectory service. Please try again."
              actionLabel="Try Again"
              onAction={refetch}
            />
          </m.div>
        )}

        {!error && !isLoading && !data && (
          <m.div key="empty" {...fadeTransition}>
            <EmptyState
              title="No roadmap data"
              description="Your career roadmap has not been generated yet."
            />
          </m.div>
        )}

        {data && !isLoading && !error && (
          <m.div 
            key="content"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-6"
          >
            <m.div variants={slideUp}>
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
            </m.div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
              <m.div variants={slideUp} className="xl:col-span-7">
                <RoadmapStageTimeline stages={data.stages} />
              </m.div>
              <m.div variants={slideUp} className="xl:col-span-5">
                <RoadmapNextStepCard nextAction={data.nextAction} />
              </m.div>
            </div>

            <m.div variants={slideUp}>
              <RoadmapMilestoneList milestones={data.activeMilestones} />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
