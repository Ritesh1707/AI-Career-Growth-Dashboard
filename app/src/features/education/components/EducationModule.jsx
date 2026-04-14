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
          Show your formal and self-driven learning journey. Keep your learning tracks aligned with
          your target roles and current industry demands.
        </Text>
      </div>

      {/* Education Cards Grid */}
      <section className="space-y-4">
        <div>
          <Heading level={3}>Your Learning Journey</Heading>
          <Text variant="small" className="mt-1">
            Formal education and self-driven learning tracks ranked by career relevance.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockEducationData.map((entry) => (
            <EducationCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
