'use client';

import { useState } from 'react';
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Main Navbar Pill */}
      <nav className="w-full max-w-5xl bg-background/80 backdrop-blur-md border border-border shadow-md hover:shadow-lg hover:border-primary/20 rounded-full px-4 sm:px-6 py-2 transition-all duration-300">
        <div className="flex justify-between items-center h-10 sm:h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-xl font-bold text-primary tracking-tight"
            >
              FQ
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground/80 hover:text-primary hover:bg-primary/10 px-3.5 py-1.5 rounded-full transition-all duration-200 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme and Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground h-9 w-9 rounded-full hover:bg-secondary"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Mobile Dropdown Menu Card */}
      {isOpen && (
        <div className="md:hidden w-full max-w-5xl mt-2 bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-3 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-150 group"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
