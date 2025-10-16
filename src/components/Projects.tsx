import { projectData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

export function Projects() {
  return (
    <AnimatedSection>
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
            Project Case Studies
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projectData.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.summary}</p>
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
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
