import { accolades } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

export function Accolades() {
  return (
    <AnimatedSection>
      <section id="accolades" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
            Career Milestones & Accolades
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {accolades.map((accolade, index) => (
              <Card key={index} className="flex flex-col text-center items-center">
                <CardHeader>
                  <CardTitle>{accolade.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{accolade.description}</p>
                  <p className="font-bold text-primary">{accolade.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
