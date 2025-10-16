import { testimonials } from '@/lib/data';
import { Card, CardContent } from './ui/Card';

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
          What Others Are Saying
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex-grow flex flex-col justify-between">
                <blockquote className="text-lg italic border-l-4 border-primary pl-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-right mt-4 font-semibold text-muted-foreground">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
