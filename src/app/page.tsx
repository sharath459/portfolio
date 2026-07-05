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


export default function Home() {
  return (
    // No bg-background on this wrapper: body paints the background and the fixed
    // 3D canvas must stay visible behind the content
    <div className="text-foreground">
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

    </div>
  );
}

