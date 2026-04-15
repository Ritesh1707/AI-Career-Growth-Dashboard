import { useState, useEffect } from 'react';
import { mockOverviewData } from '../data';
import { PredictiveActionCard } from './PredictiveActionCard';
import { CareerScoreCard } from './CareerScoreCard';
import { TopPrioritiesList } from './TopPrioritiesList';
import { CardSkeleton } from '../../../components/ui/LoadingState';

export function OverviewModule() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const { user, predictiveNextStep, topPriorities, careerProgress } = mockOverviewData;

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

      {isLoading ? (
        <>
          {/* 
            Grid Layout:
            - Mobile: Single column stack
            - Desktop: 12-column grid.
              - Left column (8 cols) holds the primary focal PredictiveActionCard
              - Right column (4 cols) holds the CareerScoreCard
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col">
              <CardSkeleton className="h-[280px]" />
            </div>
            <div className="lg:col-span-4 flex flex-col">
              <CardSkeleton className="h-[280px]" />
            </div>
          </div>
          {/* 
            Second row:
            - Mobile: Single column
            - Desktop: 12-column grid
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col">
              <CardSkeleton className="h-[240px]" />
            </div>
            <div className="lg:col-span-4 flex flex-col">
              <CardSkeleton className="h-[240px]" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col">
              <PredictiveActionCard nextStep={predictiveNextStep} />
            </div>
            <div className="lg:col-span-4 flex flex-col">
              <CareerScoreCard user={user} careerProgress={careerProgress} />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col">
              <TopPrioritiesList priorities={topPriorities} />
            </div>
            {/* Empty space or future module in the remaining 4 columns */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center rounded-lg border border-dashed border-border bg-surface-raised/20 p-6 text-center">
              <span className="text-content-tertiary text-sm">Future Module Space</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
