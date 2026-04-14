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
          Connect your learning to visible output. Track ongoing projects, map them to your skills, and measure their readiness value for your resume and interviews.
        </Text>
      </div>

      {/* Main Content: Project Cards */}
      <section className="space-y-4">
        <div>
          <Heading level={3}>Your Project Portfolio</Heading>
          <Text variant="small" className="mt-1">
            Prioritized projects to strengthen your profile and close skill gaps.
          </Text>
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
