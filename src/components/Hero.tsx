import Link from 'next/link';
import { AnimatedSection } from './ui/AnimatedSection';
import { heroData } from '@/lib/data';

export function Hero() {
  return (
    <AnimatedSection>
      <section id="home" className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
                  Sharath Somashekar
                </h1>
                <p className="text-2xl text-muted-foreground">
                  Senior Data Leader & AI Innovator
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Hire Me?</h2>
                    <p className="text-muted-foreground md:text-xl" dangerouslySetInnerHTML={{ __html: heroData.pitch }}></p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Philosophy</h2>
                    <p className="text-muted-foreground md:text-xl" dangerouslySetInnerHTML={{ __html: heroData.philosophy }}></p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
