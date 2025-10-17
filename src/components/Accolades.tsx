'use client';

import { accolades } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';
import { motion } from 'framer-motion';

export function Accolades() {
  return (
    <AnimatedSection>
      <section id="accolades" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/70"
          >
            Career Milestones
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accolades.map((accolade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col text-center items-center h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="pb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"
                    >
                      <span className="text-2xl font-bold text-primary-foreground">{accolade.year}</span>
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {accolade.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {accolade.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
