import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhyHireMe } from '@/components/WhyHireMe';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import PromotionJourney from '@/components/PromotionJourney';
import { Projects } from '@/components/Projects';
import { AboutMe } from '@/components/AboutMe';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhyHireMe />
        <PromotionJourney />
        <ExperienceTimeline />
        <Projects />
        <AboutMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ThemeToggle />
    </div>
  );
}

