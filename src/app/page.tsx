import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import PromotionJourney from '@/components/PromotionJourney';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <PromotionJourney />
        <ExperienceTimeline />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

