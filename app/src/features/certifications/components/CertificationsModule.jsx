import { useFetchCertifications } from '../hooks/useFetchCertifications';
import { CertificationCard } from './CertificationCard';
import { Heading, Text } from '../../../components/ui/Typography';
import { CardSkeleton } from '../../../components/ui/LoadingState';
import { EmptyState } from '../../../components/ui/EmptyState';

export function CertificationsModule() {
  const { data: certifications, isLoading, error, refetch } = useFetchCertifications();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Module Header */}
      <div>
        <Heading level={2}>Certifications</Heading>
        <Text variant="muted" className="mt-2 max-w-3xl">
          Track your completed and planned certifications. Ensure your learning path stays aligned with your target roles and industry standards.
        </Text>
      </div>

      {/* Main Content: Certification Cards */}
      <section className="space-y-4">
        <div>
          <Heading level={3}>Your Certification Path</Heading>
          <Text variant="small" className="mt-1">
            Prioritized credentials to strengthen your profile and close skill gaps.
          </Text>
        </div>
        
        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CardSkeleton className="h-[300px]" />
            <CardSkeleton className="h-[300px]" />
            <CardSkeleton className="h-[300px]" />
            <CardSkeleton className="h-[300px]" />
          </div>
        )}

        {error && !isLoading && (
          <EmptyState 
            title="Unable to load certifications" 
            description="There was a problem loading your certifications data. Please check your connection and try again."
            actionLabel="Try Again"
            onAction={refetch}
          />
        )}

        {!error && !isLoading && (!certifications || certifications.length === 0) && (
          <EmptyState 
            title="No Certifications Found" 
            description="You haven't added any certifications to your path yet. Start planning credentials to stand out to employers."
          />
        )}

        {certifications && certifications.length > 0 && !isLoading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certifications.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
