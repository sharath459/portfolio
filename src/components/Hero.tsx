import Link from 'next/link';
import { AnimatedSection } from './ui/AnimatedSection';
import { heroData } from '@/lib/data';

export function Hero() {
  return (
    <AnimatedSection>
      <section id="home" className="w-full py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col items-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
                Sharath Somashekar
              </h1>
              <p className="text-2xl text-muted-foreground">
                Senior Data Leader & AI Innovator
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center">
              <Link
                href="/Resume/Sharath_Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Download Resume
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Me
              </Link>
            </div>
            
            <div className="max-w-4xl mx-auto pt-12 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Hire Me?</h2>
                    <p className="text-muted-foreground md:text-xl/relaxed" dangerouslySetInnerHTML={{ __html: heroData.pitch }}></p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Philosophy</h2>
                    <p className="text-muted-foreground md:text-xl/relaxed" dangerouslySetInnerHTML={{ __html: heroData.philosophy }}></p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
