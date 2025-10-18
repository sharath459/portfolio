"use client";

import { motion } from "framer-motion";
import { FaAward, FaTrophy, FaBriefcase, FaUsers, FaChartLine, FaCrown } from "react-icons/fa";

const journeySteps = [
  {
    year: "2012",
    month: "Sep",
    title: "Catalog Associate",
    company: "Amazon India",
    icon: FaBriefcase,
    description: "Started career in catalog operations, learning Amazon systems and processes",
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "2013",
    month: "Nov",
    title: "Subject Matter Expert",
    company: "Amazon India",
    icon: FaAward,
    description: "Promoted to SME for exceptional performance and deep system knowledge",
    color: "from-cyan-500 to-teal-500"
  },
  {
    year: "2015",
    month: "Jul",
    title: "Business Analyst",
    company: "Amazon India",
    icon: FaChartLine,
    description: "Promoted to BA with 'Outstanding' rating—delivered 18 projects, saved 8 FTEs",
    color: "from-teal-500 to-green-500"
  },
  {
    year: "2017",
    month: "May",
    title: "Business Intelligence Engineer",
    company: "Amazon Compliance",
    icon: FaTrophy,
    description: "Promoted to BIE—architected data infrastructure unifying 90+ sources",
    color: "from-green-500 to-emerald-500"
  },
  {
    year: "2020",
    month: "Feb",
    title: "Senior BIE",
    company: "Amazon Alexa",
    icon: FaCrown,
    description: "Promoted to Sr. BIE—built 4-person team, delivered $2.3MM impact",
    color: "from-emerald-500 to-lime-500"
  },
  {
    year: "2025",
    month: "Mar",
    title: "Engineering Manager, Data",
    company: "CitiusTech",
    icon: FaUsers,
    description: "Leading 8-person data team, delivering 10x ROI on $1.2MM projects",
    color: "from-lime-500 to-yellow-500"
  }
];

export default function PromotionJourney() {
  return (
    <section id="journey" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/70">
            Career Progression Journey
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-3xl mx-auto">
            13 years across 2 companies and 2 countries—from SME to Analytics Engineering Manager, 
            spanning 6 domains with 6 promotions (4 vertical, 2 horizontal) across 4 Amazon organizations
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full"></div>
          
          <div className="grid grid-cols-6 gap-4 relative">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  {/* Icon Node */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-primary/50 ring-4 ring-background mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <div className="bg-card/50 backdrop-blur-sm border border-muted/20 rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 min-h-[200px] flex flex-col justify-between">
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">
                        {step.month} {step.year}
                      </div>
                      <h3 className="font-bold text-sm mb-1 leading-tight">
                        {step.title}
                      </h3>
                      <div className="text-xs text-muted-foreground mb-2">
                        {step.company}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-500 rounded-full"></div>
          
          <div className="space-y-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  {/* Icon Node */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-primary/50 ring-4 ring-background flex-shrink-0`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <div className="flex-1 bg-card/50 backdrop-blur-sm border border-muted/20 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-semibold text-primary">
                        {step.month} {step.year}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {step.company}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-7xl mx-auto"
        >
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20">
            <div className="text-3xl font-bold text-primary mb-1">2</div>
            <div className="text-xs text-muted-foreground">Companies</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20">
            <div className="text-3xl font-bold text-primary mb-1">2</div>
            <div className="text-xs text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20">
            <div className="text-3xl font-bold text-primary mb-1">3</div>
            <div className="text-xs text-muted-foreground">Roles</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20">
            <div className="text-3xl font-bold text-primary mb-1">4</div>
            <div className="text-xs text-muted-foreground">Amazon Orgs</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20">
            <div className="text-3xl font-bold text-primary mb-1">6</div>
            <div className="text-xs text-muted-foreground">Domains</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20">
            <div className="text-3xl font-bold text-primary mb-1">6</div>
            <div className="text-xs text-muted-foreground">Promotions</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20">
            <div className="text-3xl font-bold text-primary mb-1">8</div>
            <div className="text-xs text-muted-foreground">Managers</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-muted/20">
            <div className="text-3xl font-bold text-primary mb-1">13</div>
            <div className="text-xs text-muted-foreground">Years</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
