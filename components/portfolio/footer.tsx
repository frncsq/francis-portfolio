import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/frncsq', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/francis-quintinita-5b492b3ab', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:quintinitafrancis8@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Francis Quintinita</h3>
            <p className="text-white/70">Full Stack Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-white/70 hover:text-white">
                Home
              </a>
              <a href="#about" className="block text-white/70 hover:text-white">
                About
              </a>
              <a href="#projects" className="block text-white/70 hover:text-white">
                Projects
              </a>
              <a href="#contact" className="block text-white/70 hover:text-white">
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
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>
            &copy; {currentYear} Francis Quintinita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
