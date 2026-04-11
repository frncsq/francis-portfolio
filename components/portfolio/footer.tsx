import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/frncsq', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/francis-quintinita-5b492b3ab', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:quintinitafrancis8@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-foreground text-background py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Francis Quintinita</h3>
            <p className="text-background/70">Full Stack Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-background/70 hover:text-background">
                Home
              </a>
              <a href="#about" className="block text-background/70 hover:text-background">
                About
              </a>
              <a href="#projects" className="block text-background/70 hover:text-background">
                Projects
              </a>
              <a href="#contact" className="block text-background/70 hover:text-background">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>
            &copy; {currentYear} Francis Quintinita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
