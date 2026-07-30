'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Explorer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 px-4 pt-24 pb-12 sm:py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
          Francis <span className="text-primary">Quintinita</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 min-h-[2.5rem]">
          <span>{roles[roleIndex].substring(0, charIndex)}</span>
          <span className="inline-block w-[2px] h-5 sm:h-6 bg-primary ml-0.5 align-middle animate-pulse" />
        </p>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-balance">
          I specialize in building responsive, scalable applications using modern
          technologies like React, Node.js, and PostgreSQL. Let's bring your
          ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto">
          <Button
            size="lg"
            onClick={() => handleScroll('#projects')}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-sm sm:text-base px-8"
          >
            View Projects <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll('#contact')}
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 text-sm sm:text-base px-8"
          >
            Get in Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-20 flex justify-center animate-bounce">
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
