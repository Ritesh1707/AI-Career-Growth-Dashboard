import { useFetchEducation } from '../hooks/useFetchEducation';
import { EducationCard } from './EducationCard';
import { Heading, Text } from '../../../components/ui/Typography';
import { CardSkeleton } from '../../../components/ui/LoadingState';
import { EmptyState } from '../../../components/ui/EmptyState';

export function EducationModule() {
  const { data: educationEntries, isLoading, error, refetch } = useFetchEducation();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Module Header */}
      <div>
        <Heading level={2}>Education</Heading>
        <Text variant="muted" className="mt-2 max-w-3xl">
          Track your formal and self-driven learning journey. Map your educational milestones, certifications, and ongoing courses directly to your career trajectory.
        </Text>
      </div>

      {/* Main Content: Education Cards */}
      <section className="space-y-4">
        <div>
          <Heading level={3}>Your Learning Path</Heading>
          <Text variant="small" className="mt-1">
            Current and past education shaping your skill profile.
          </Text>
        </div>
        
        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CardSkeleton className="h-[320px]" />
            <CardSkeleton className="h-[320px]" />
            <CardSkeleton className="h-[320px]" />
          </div>
        )}

        {error && !isLoading && (
          <EmptyState 
            title="Unable to load education history" 
            description="There was a problem loading your education data. Please check your connection and try again."
            actionLabel="Try Again"
            onAction={refetch}
          />
        )}

        {!error && !isLoading && (!educationEntries || educationEntries.length === 0) && (
          <EmptyState 
            title="No Education Entries Found" 
            description="You haven't added any formal or self-driven education to your profile yet. Add your learning milestones to track your progress."
          />
        )}

        {educationEntries && educationEntries.length > 0 && !isLoading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {educationEntries.map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
