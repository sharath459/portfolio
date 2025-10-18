import { testimonials } from '@/lib/data';
import { Card, CardContent } from './ui/Card';

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/10 to-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600">
          What Others Are Saying
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feedback from managers, peers, and cross-functional partners throughout my career
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <blockquote className="text-base italic border-l-4 border-primary pl-4 mb-4 text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-auto pt-4 border-t border-muted/20">
                  {testimonial.role && (
                    <p className="font-semibold text-foreground">{testimonial.role}</p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    {testimonial.relationship && (
                      <span className="text-xs text-primary/80 bg-primary/10 px-2 py-1 rounded">
                        {testimonial.relationship}
                      </span>
                    )}
                    {testimonial.year && (
                      <span className="text-xs text-muted-foreground">{testimonial.year}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
