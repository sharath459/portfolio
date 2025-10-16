import { experienceData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

export function ExperienceTimeline() {
  return (
    <AnimatedSection>
      <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
            Professional Experience
          </h2>
          <div className="relative">
            {/* The timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-muted hidden md:block"></div>

            {experienceData.map((item, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:gap-12 mb-8">
                {/* Left or Right side based on index */}
                <div className={index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'}>
                  <p className="text-muted-foreground">{item.date}</p>
                </div>

                <div className={index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="absolute top-1 hidden md:block bg-primary rounded-full w-4 h-4" style={index % 2 === 0 ? {left: '-2rem'} : {right: '-2rem'}}></div>
                    <Card>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          {item.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
