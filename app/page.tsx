import { Navbar } from '@/components/portfolio/navbar';
import { HeroSection } from '@/components/portfolio/hero-section';
import { AboutSection } from '@/components/portfolio/about-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { SkillsSection } from '@/components/portfolio/skills-section';

import { ContactSection } from '@/components/portfolio/contact-section';
import { Footer } from '@/components/portfolio/footer';
import { ScrollToTopButton } from '@/components/portfolio/scroll-to-top-button';

export const metadata = {
  title: 'Francis Quintinita | Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my projects and get in touch.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />

      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
