import { mockCertificationsData } from '../data';
import { CertificationCard } from './CertificationCard';
import { Heading, Text } from '../../../components/ui/Typography';

export function CertificationsModule() {
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
        
        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockCertificationsData.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </section>
    </div>
  );
}
