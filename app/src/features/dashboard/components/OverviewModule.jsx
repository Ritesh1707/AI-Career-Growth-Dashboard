import { useFetchOverview } from '../hooks/useFetchOverview';
import { PredictiveActionCard } from './PredictiveActionCard';
import { CareerScoreCard } from './CareerScoreCard';
import { TopPrioritiesList } from './TopPrioritiesList';
import { CardSkeleton } from '../../../components/ui/LoadingState';
import { EmptyState } from '../../../components/ui/EmptyState';
import { m, AnimatePresence } from 'framer-motion';
import { useMotionVariants } from '../../../utils/motion';

export function OverviewModule() {
  const { data, isLoading, error, refetch } = useFetchOverview();
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
      {/* Header section for the module */}
      <div className="mb-2">
        <h2 className="font-display text-3xl font-bold text-content tracking-tight">
          Career Command Center
        </h2>
        <p className="text-content-secondary mt-1">
          Your personalized overview and predictive next steps.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isLoading && (
          <m.div key="loading" {...fadeTransition} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 flex flex-col">
                <CardSkeleton className="h-[280px]" />
              </div>
              <div className="lg:col-span-4 flex flex-col">
                <CardSkeleton className="h-[280px]" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 flex flex-col">
                <CardSkeleton className="h-[240px]" />
              </div>
              <div className="lg:col-span-4 flex flex-col">
                <CardSkeleton className="h-[240px]" />
              </div>
            </div>
          </m.div>
        )}

        {error && !isLoading && (
          <m.div key="error" {...fadeTransition}>
            <EmptyState
              title="Unable to load overview"
              description={error.message || 'There was a problem fetching your career data. Please try again later.'}
              actionLabel="Retry"
              onAction={refetch}
            />
          </m.div>
        )}

        {!data && !isLoading && !error && (
          <m.div key="empty" {...fadeTransition}>
            <EmptyState
              title="No career data found"
              description="We couldn't find any career data to display."
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <m.div variants={slideUp} className="lg:col-span-8 flex flex-col">
                <PredictiveActionCard nextStep={data.predictiveNextStep} />
              </m.div>
              <m.div variants={slideUp} className="lg:col-span-4 flex flex-col">
                <CareerScoreCard user={data.user} careerProgress={data.careerProgress} />
              </m.div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <m.div variants={slideUp} className="lg:col-span-8 flex flex-col">
                <TopPrioritiesList priorities={data.topPriorities} />
              </m.div>
              {/* Empty space or future module in the remaining 4 columns */}
              <m.div variants={slideUp} className="lg:col-span-4 flex flex-col justify-center items-center rounded-lg border border-dashed border-border bg-transparent p-6 text-center">
                <span className="text-content-tertiary text-sm">Future Module Space</span>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
