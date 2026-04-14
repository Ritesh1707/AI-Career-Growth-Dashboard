import { mockProjectsData } from '../data';
import { ProjectCard } from './ProjectCard';
import { Heading, Text } from '../../../components/ui/Typography';

export function ProjectsModule() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Module Header */}
      <div>
        <Heading level={2}>Projects</Heading>
        <Text variant="muted" className="mt-2 max-w-3xl">
          Connect your learning to visible output. Track ongoing and planned projects, map them to
          skills, and gauge their readiness value for resumes and interviews.
        </Text>
      </div>

      {/* Project Cards Grid */}
      <section className="space-y-4">
        <div>
          <Heading level={3}>Your Project Portfolio</Heading>
          <Text variant="small" className="mt-1">
            Active and upcoming projects ranked by their career impact.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
