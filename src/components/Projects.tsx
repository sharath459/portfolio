'use client';

import { projectData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }: { project: (typeof projectData)[0]; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Card className="flex flex-col h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
            <CardHeader>
                <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-6">
                <div 
                    className="text-muted-foreground leading-relaxed prose prose-sm prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: project.details }}
                />
                <div className="mt-auto pt-4 border-t border-muted/20">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <motion.span 
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="px-3 py-1.5 text-xs font-medium text-primary-foreground bg-primary/90 rounded-full hover:bg-primary transition-colors duration-200 cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

const SectionHeader = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/70"
    >
        {children}
    </motion.h2>
);

export function Projects() {
  const topProjects = projectData.filter(p => p.category === 'Top Project');
  const aiProjects = projectData.filter(p => p.category === 'AI & Automation');
  const sideProjects = projectData.filter(p => p.category === 'Side Project');

  return (
    <AnimatedSection>
      <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 space-y-20">
          
          {/* Top Projects */}
          <div>
            <SectionHeader>Featured Projects</SectionHeader>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {topProjects.map((project, index) => (
                <ProjectCard key={`top-${index}`} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* AI & Automation */}
          <div>
            <SectionHeader delay={0.2}>AI & Automation</SectionHeader>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {aiProjects.map((project, index) => (
                <ProjectCard key={`ai-${index}`} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Side Projects */}
          <div>
            <SectionHeader delay={0.2}>Side Ventures</SectionHeader>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {sideProjects.map((project, index) => (
                <ProjectCard key={`side-${index}`} project={project} index={index} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}
