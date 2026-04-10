'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Francis <span className="text-primary">Quintinita</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
          Full Stack Developer crafting beautiful and functional web experiences
        </p>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          I specialize in building responsive, scalable applications using modern
          technologies like React, Node.js, and cloud services. Let's bring your
          ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => handleScroll('#projects')}
            className="bg-primary hover:bg-primary/90 text-white text-base px-8"
          >
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll('#contact')}
            className="border-primary text-primary hover:bg-primary/10 text-base px-8"
          >
            Get in Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
