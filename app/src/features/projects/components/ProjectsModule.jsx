import { useFetchProjects } from '../hooks/useFetchProjects';
import { ProjectCard } from './ProjectCard';
import { Heading, Text } from '../../../components/ui/Typography';
import { CardSkeleton } from '../../../components/ui/LoadingState';
import { EmptyState } from '../../../components/ui/EmptyState';

export function ProjectsModule() {
  const { data: projects, isLoading, error, refetch } = useFetchProjects();

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
        
        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CardSkeleton className="h-[320px]" />
            <CardSkeleton className="h-[320px]" />
            <CardSkeleton className="h-[320px]" />
          </div>
        )}

        {error && !isLoading && (
          <EmptyState 
            title="Unable to load projects" 
            description="We encountered an issue retrieving your project portfolio. Please check your connection and try again."
            actionLabel="Try Again"
            onAction={refetch}
          />
        )}

        {!error && !isLoading && (!projects || projects.length === 0) && (
          <EmptyState 
            title="No Projects Found" 
            description="You haven't added any projects to your portfolio yet. Start building projects to stand out to employers."
            actionLabel="Refresh Data"
            onAction={refetch}
          />
        )}

        {projects && projects.length > 0 && !isLoading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
