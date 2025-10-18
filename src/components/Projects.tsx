'use client';

import { projectData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { motion } from 'framer-motion';
import { getTechIcon } from '@/lib/tech-icons';
import { FaDollarSign, FaClock, FaUsers } from 'react-icons/fa';

// Helper function to extract impact metrics from project details
const getImpactMetrics = (project: (typeof projectData)[0]) => {
  const metrics = [];
  
  // Check for dollar impact
  if (project.details.includes('$2.3MM') || project.title.includes('Alexa')) {
    metrics.push({ icon: FaDollarSign, value: '$2.3MM', label: 'Annual Impact', color: '#10B981' });
  } else if (project.details.includes('$1.2MM')) {
    metrics.push({ icon: FaDollarSign, value: '$1.2MM', label: 'Project Value', color: '#10B981' });
  }
  
  // Check for time savings
  if (project.details.includes('90%')) {
    metrics.push({ icon: FaClock, value: '90%', label: 'Time Saved', color: '#3B82F6' });
  } else if (project.details.includes('2 weeks to under 1 hour') || project.details.includes('weeks to hours')) {
    metrics.push({ icon: FaClock, value: 'Weeks→Hours', label: 'Speed Boost', color: '#3B82F6' });
  }
  
  // Check for people impact
  if (project.details.includes('260+')) {
    metrics.push({ icon: FaUsers, value: '260+', label: 'Users Served', color: '#8B5CF6' });
  } else if (project.details.includes('6,000+')) {
    metrics.push({ icon: FaUsers, value: '6,000+', label: 'Org Size', color: '#8B5CF6' });
  }
  
  return metrics.slice(0, 2); // Max 2 badges per card
};

// Status badge based on category
const getStatusBadge = (category: string) => {
  if (category === 'Top Project') {
    return { text: '⭐ Featured', color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' };
  } else if (category === 'AI & Automation') {
    return { text: '🤖 AI-Powered', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' };
  } else {
    return { text: '💡 Side Project', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' };
  }
};

const ProjectCard = ({ project, index }: { project: (typeof projectData)[0]; index: number }) => {
  const impactMetrics = getImpactMetrics(project);
  const statusBadge = getStatusBadge(project.category);

  return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Card className="flex flex-col h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statusBadge.color}`}>
                {statusBadge.text}
              </span>
            </div>

            <CardHeader>
                <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors duration-300 pr-24">
                    {project.title}
                </CardTitle>
                
                {/* Impact Metrics Badges */}
                {impactMetrics.length > 0 && (
                  <div className="flex gap-3 mt-3">
                    {impactMetrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50"
                        >
                          <Icon className="w-3.5 h-3.5" style={{ color: metric.color }} />
                          <div className="text-xs">
                            <div className="font-bold" style={{ color: metric.color }}>{metric.value}</div>
                            <div className="text-[10px] text-muted-foreground">{metric.label}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-6">
                <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.summary}
                </p>
                <div 
                    className="text-muted-foreground leading-relaxed prose prose-sm prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: project.details }}
                />
                <div className="mt-auto pt-4 border-t border-muted/20">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => {
                            const { icon: Icon, color } = getTechIcon(tech);
                            return (
                                <motion.span 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    className="group/tech px-3 py-2 text-xs font-medium text-primary-foreground bg-primary/90 rounded-lg hover:bg-primary transition-all duration-200 cursor-default flex items-center gap-2 hover:scale-105 hover:shadow-lg"
                                    style={{
                                        boxShadow: `0 0 0 0 ${color}15`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = `0 4px 12px ${color}40`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = `0 0 0 0 ${color}15`;
                                    }}
                                >
                                    <Icon className="text-sm" style={{ color }} />
                                    <span>{tech}</span>
                                </motion.span>
                            );
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
  );
};

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
  const topProjects = projectData
    .filter(p => p.category === 'Top Project')
    .sort((a, b) => {
      // Custom order: Alexa first, HS3C second, HeadCT third, Agency fourth
      const order = ['Alexa', 'HS3C', 'Head Count', 'Agency'];
      const aIndex = order.findIndex(keyword => a.title.includes(keyword));
      const bIndex = order.findIndex(keyword => b.title.includes(keyword));
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  const aiProjects = projectData.filter(p => p.category === 'AI & Automation');
  const sideProjects = projectData.filter(p => p.category === 'Side Project');

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto space-y-20">
          
          {/* Top Projects */}
          <div>
            <SectionHeader>Featured Projects</SectionHeader>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2 lg:gap-10 mx-auto">
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
  );
}
