import { mockEducationData } from '../data';
import { EducationCard } from './EducationCard';
import { Heading, Text } from '../../../components/ui/Typography';

export function EducationModule() {
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
        
        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockEducationData.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </section>
    </div>
  );
}
