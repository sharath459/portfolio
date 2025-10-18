"use client";

import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaHeart, FaLightbulb, FaChartLine } from 'react-icons/fa';

export function AboutMe() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted/10 to-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600">
            Beyond the Data
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            The story behind the numbers
          </p>

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-invert max-w-none mb-12"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 leading-relaxed text-muted-foreground">
              <p className="text-lg mb-4">
                Born and raised in <strong className="text-primary">Bangalore, India</strong>, I started my career at Amazon as a Catalog Associate in 2012—learning the fundamentals of operations, process optimization, and data-driven problem solving from the ground up.
              </p>
              <p className="text-lg mb-4">
                Over 13 years, I&apos;ve had the privilege of working across <strong className="text-primary">4 Amazon organizations</strong> (Retail, Compliance, Advertising, Alexa), progressing from SME to Business Analyst to Business Intelligence Engineer, and eventually to Senior BIE—earning <strong className="text-primary">6 promotions</strong> through consistent delivery of high-impact projects.
              </p>
              <p className="text-lg mb-4">
                In 2017, I had the opportunity to relocate to <strong className="text-primary">Seattle, USA</strong>, where I spent 4 transformative years building data infrastructure for Amazon Alexa&apos;s Connected Device organization, managing 260+ stakeholders, and delivering an estimated <strong className="text-primary">$2.3MM in annual business impact</strong>.
              </p>
              <p className="text-lg">
                Today, as an <strong className="text-primary">Engineering Manager at CitiusTech</strong>, I lead an 8-person data team, drive AI-powered automation initiatives, and continue my journey of lifelong learning—recently pivoting into AI/ML, Agentic workflows, and quantitative trading while mentoring the next generation of data professionals.
              </p>
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1">
              <FaGlobeAmericas className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Global Perspective</h3>
              <p className="text-sm text-muted-foreground">
                Lived and worked across 2 continents, 2 countries, bringing diverse cultural insights to problem-solving
              </p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1">
              <FaChartLine className="w-8 h-8 text-purple-500 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Trading Enthusiast</h3>
              <p className="text-sm text-muted-foreground">
                Manage ₹3Cr+ derivative portfolios with 20% CAGR, applying quantitative analysis and risk management
              </p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:-translate-y-1">
              <FaHeart className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Mentor & Teacher</h3>
              <p className="text-sm text-muted-foreground">
                Mentored 10+ analysts and traders, passionate about knowledge sharing and building next-gen talent
              </p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1">
              <FaLightbulb className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Lifelong Learner</h3>
              <p className="text-sm text-muted-foreground">
                Constantly exploring new tech: AI agents, MCP, GenAI, React—building hands-on projects to master skills
              </p>
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-6 rounded-xl bg-primary/5 border border-primary/20"
          >
            <p className="text-muted-foreground italic">
              <span className="text-primary font-semibold">Fun fact:</span> When I&apos;m not building data pipelines or analyzing markets, 
              you&apos;ll find me exploring AI-powered side projects—from building Tinder-style apps for non-romantic relationships 
              to creating GenAI chatbots that accelerate knowledge retrieval. I believe the best way to learn is by building! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
