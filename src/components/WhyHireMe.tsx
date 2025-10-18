"use client";

import { motion } from 'framer-motion';
import { FaRocket, FaDollarSign, FaUsers, FaBrain, FaChartLine, FaClock } from 'react-icons/fa';

const valuePropositions = [
  {
    icon: FaRocket,
    color: '#3B82F6',
    title: 'Fast Execution & Delivery',
    stat: '18 Projects in 12 Months',
    description: 'Delivered 18 high-impact projects in a single year at Amazon, achieving 2x the organizational target with consistent outstanding performance ratings.',
    highlights: ['Rapid prototyping', 'Agile delivery', '2x target achievement']
  },
  {
    icon: FaDollarSign,
    color: '#10B981',
    title: 'Proven Business Impact',
    stat: '$2.3MM+ Annual Value',
    description: 'Drove quantifiable business results through data infrastructure, automation, and strategic initiatives recognized in NIE letter.',
    highlights: ['$2.3MM+ impact', '30+ FTE savings', '10x ROI delivered']
  },
  {
    icon: FaUsers,
    color: '#8B5CF6',
    title: 'Team Building & Leadership',
    stat: '8-Person Team Led',
    description: 'Built and led high-performing BI/data teams from scratch, mentored analysts, and established data cultures in multiple organizations.',
    highlights: ['Built 4-person BI team', 'Mentored 10+ analysts', '8 direct reports']
  },
  {
    icon: FaBrain,
    color: '#F59E0B',
    title: 'AI & Innovation Pioneer',
    stat: '90% Efficiency Gain',
    description: 'Pioneered AI-driven automation reducing manual development by 90%, transforming year-long projects into weeks through Agentic workflows.',
    highlights: ['Agentic AI adoption', 'GenAI chatbots', 'LLM automation']
  },
  {
    icon: FaChartLine,
    color: '#EF4444',
    title: 'Scalable Architecture',
    stat: '1000+ Users Served',
    description: 'Architected data ecosystems serving 260+ person orgs, unified 90+ data sources, and built self-service platforms transforming weeks to hours.',
    highlights: ['Self-service platforms', 'Enterprise-scale', '90+ sources unified']
  },
  {
    icon: FaClock,
    color: '#06B6D4',
    title: 'Rapid Skill Acquisition',
    stat: 'T-Shaped Expertise',
    description: 'Rapidly master new technologies through hands-on building. Recent pivot to AI (Agentic workflows, MCP, GenAI) demonstrates learning velocity.',
    highlights: ['Deep + Broad', 'Quick learner', 'Multi-domain expert']
  },
];

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/70">
            Why Companies Choose Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Six proven strengths that deliver measurable value from day one
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {valuePropositions.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6" style={{ color: prop.color }} />
                </div>

                {/* Title & Stat */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {prop.title}
                </h3>
                <div className="text-2xl font-bold text-primary mb-3">
                  {prop.stat}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {prop.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {prop.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary/90 border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to bring data-driven results to your organization?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-10 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
