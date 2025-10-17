'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroData } from '@/lib/data';
import { 
  FaDatabase, 
  FaChartBar, 
  FaBrain, 
  FaRobot,
  FaCheckCircle 
} from 'react-icons/fa';
import { 
  SiPython, 
  SiDatabricks, 
  SiTableau, 
  SiAmazonredshift,
  SiGithub,
} from 'react-icons/si';
import { MdDataExploration, MdAutoAwesome } from 'react-icons/md';

const skillCategories = [
  {
    icon: FaDatabase,
    color: '#3B82F6',
    title: 'Data & Business Intelligence',
    skills: ['Data Warehousing', 'ETL/ELT', 'dbt', 'Data Pipelining', 'Reporting', 'Data Quality Frameworks'],
  },
  {
    icon: SiPython,
    color: '#3776AB',
    title: 'Databases & Languages',
    skills: ['SQL', 'Python', 'VBA', 'Databricks', 'Redshift', 'MySQL', 'S3', 'Athena'],
  },
  {
    icon: FaChartBar,
    color: '#10B981',
    title: 'BI & Visualization Tools',
    skills: ['Looker', 'Tableau', 'Power BI', 'AWS QuickSight', 'Advanced Excel', 'MS Office'],
  },
  {
    icon: FaBrain,
    color: '#8B5CF6',
    title: 'AI & New Age Tech',
    skills: ['Agentic Workflows', 'Model Context Protocol (MCP)', 'VS Code & AI Integration', 'Claude', 'GitHub Copilot'],
  },
];

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10"></div>
      
      <div className="container px-4 md:px-6 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Name & Title */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-primary/60 pb-2"
            >
              Sharath Somashekar
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light"
            >
              Senior Data Leader & AI Innovator
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              href="/Resume/Sharath_Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-12 items-center justify-center rounded-lg bg-primary px-10 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-primary/20 bg-background/50 backdrop-blur-sm px-10 text-sm font-semibold shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Let&apos;s Connect
            </Link>
          </motion.div>

          {/* Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-6xl pt-12"
          >
            <h3 className="text-2xl font-bold mb-8 text-muted-foreground/80">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                  className="group p-6 rounded-xl bg-gradient-to-br from-muted/20 to-muted/5 backdrop-blur-sm border border-muted/20 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
                  style={{
                    boxShadow: `0 0 0 0 ${category.color}15`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 24px ${category.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 0 ${category.color}15`;
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <category.icon 
                        className="text-xl" 
                        style={{ color: category.color }}
                      />
                    </div>
                    <h4 className="font-semibold text-sm text-left">{category.title}</h4>
                  </div>
                  <ul className="space-y-2 text-left">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.li
                        key={skillIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1 + idx * 0.1 + skillIdx * 0.05 }}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <FaCheckCircle 
                          className="text-[10px] mt-0.5 flex-shrink-0" 
                          style={{ color: category.color }}
                        />
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Value Propositions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-5xl mx-auto pt-16 space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.4 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
              >
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
                  Why Hire Me?
                </h2>
                <p 
                  className="text-muted-foreground leading-relaxed text-base sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: heroData.pitch }}
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.6 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
              >
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
                  My Philosophy
                </h2>
                <p 
                  className="text-muted-foreground leading-relaxed text-base sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: heroData.philosophy }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="pt-12"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
              >
                <motion.div className="w-1.5 h-1.5 rounded-full bg-primary"></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
