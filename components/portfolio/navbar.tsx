'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronRight, Clock } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

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
    <>
      {/* Mobile Backdrop Click Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-3 top-auto md:top-4 md:bottom-auto left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 flex flex-col items-center pointer-events-none">
        {/* Mobile Floating Menu Card (slides up smoothly above the pill bar) */}
        {isOpen && (
          <div className="md:hidden w-full max-w-5xl mb-2 bg-background/95 backdrop-blur-2xl border border-border/80 shadow-2xl rounded-2xl p-2.5 pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-300 ease-out">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 group"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Pill Navbar Container */}
        <nav className="w-full max-w-5xl bg-background/90 backdrop-blur-xl border border-border shadow-lg rounded-full px-4 sm:px-6 py-2 pointer-events-auto">
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

            {/* Real-time Clock, Theme Toggle & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {time && (
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-mono text-muted-foreground bg-secondary/60 border border-border/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-inner shrink-0">
                  <Clock className="h-3 w-3 text-primary animate-pulse" />
                  <span>{time}</span>
                </div>
              )}

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
                className="md:hidden text-foreground p-2 hover:bg-secondary rounded-full transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
