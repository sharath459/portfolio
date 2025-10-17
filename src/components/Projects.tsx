import { projectData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

const ProjectCard = ({ project }: { project: (typeof projectData)[0] }) => (
    <Card className="flex flex-col">
        <CardHeader>
            <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
            <div className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: project.details }}></div>
            <div className="mt-auto">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium text-primary-foreground bg-primary/80 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </CardContent>
    </Card>
);

export function Projects() {
  const topProjects = projectData.filter(p => p.category === 'Top Project');
  const aiProjects = projectData.filter(p => p.category === 'AI & Automation');
  const sideProjects = projectData.filter(p => p.category === 'Side Project');

  return (
    <AnimatedSection>
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
        <div className="container px-4 md:px-6 space-y-16">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Top Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {topProjects.map((project, index) => (
                <ProjectCard key={`top-${index}`} project={project} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              AI & Automation Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {aiProjects.map((project, index) => (
                <ProjectCard key={`ai-${index}`} project={project} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Side Projects & Ventures
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {sideProjects.map((project, index) => (
                <ProjectCard key={`side-${index}`} project={project} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}
