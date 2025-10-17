import Link from 'next/link';
import { AnimatedSection } from './ui/AnimatedSection';

export function Contact() {
  return (
    <AnimatedSection>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
        <div className="container text-center px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
          </p>
          <div className="flex justify-center gap-4">
              <Link
                  href="https://www.linkedin.com/in/sharath-somashekar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                  Connect on LinkedIn
              </Link>
              <Link
                  href="mailto:sharath459@gmail.com"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-10 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
              >
                  Send an Email
              </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
