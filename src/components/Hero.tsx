import Link from 'next/link';
import { AnimatedSection } from './ui/AnimatedSection';

export function Hero() {
  return (
    <AnimatedSection>
      <section id="home" className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
                  Sharath Somashekar
                </h1>
                <p className="text-2xl text-muted-foreground">
                  Senior Data Leader & AI Innovator
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Transforming complex data into actionable business strategy. From BI leadership to pioneering Agentic AI workflows, I build solutions that drive results.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/Resume/Sharath_Resume_Mod.pdf" // Assuming this is the path to your resume
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
            {/* Placeholder for a potential image or graphic */}
            <div className="hidden lg:flex items-center justify-center">
               {/* You could add an image here, e.g., <Image src="/profile-pic.png" ... /> */}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
