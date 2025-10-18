import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhyHireMe } from '@/components/WhyHireMe';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import PromotionJourney from '@/components/PromotionJourney';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

