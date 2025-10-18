'use client';

import { experienceData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { motion } from 'framer-motion';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="container px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/70"
          >
            Professional Journey
          </motion.h2>
          <div className="relative">
            {/* The timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 hidden md:block rounded-full"></div>

            {experienceData.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="md:grid md:grid-cols-2 md:gap-12 mb-12 last:mb-0"
              >
                {/* Left or Right side based on index */}
                <div className={index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'}>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="text-muted-foreground font-semibold text-sm md:text-base mb-2 md:mb-0"
                  >
                    {item.date}
                  </motion.p>
                </div>

                <div className={index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1, type: "spring" }}
                      className="absolute top-6 hidden md:block bg-gradient-to-br from-primary to-primary/60 rounded-full w-6 h-6 shadow-lg shadow-primary/50 ring-4 ring-background" 
                      style={index % 2 === 0 ? {left: '-3.25rem'} : {right: '-3.25rem'}}
                    ></motion.div>
                    <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/30 bg-gradient-to-br from-card to-card/50">
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium">
                          {item.company}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.summary}
                        </p>
                        <ul className="space-y-3">
                          {item.details.slice(0, 3).map((detail, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                              className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                            >
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
