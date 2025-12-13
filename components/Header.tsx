import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Scroll Spy Logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-70px 0px -50% 0px' } 
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: '#journey', label: 'Journey', id: 'journey' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`sticky top-4 z-50 transition-all duration-300 mx-auto max-w-5xl rounded-2xl ${
        isScrolled 
          ? 'py-2 px-6 bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
          : 'py-5 px-4 bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group relative z-10">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-1 to-accent-2 rounded-xl flex items-center justify-center font-bold text-white text-lg font-heading shadow-lg shadow-accent-1/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            UA
          </div>
          <span className="text-xl font-bold text-text-primary hidden sm:block font-heading tracking-wide">U ARUN</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.href} 
                href={link.href} 
                className={`
                  relative px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300
                  ${isActive ? 'text-white' : 'text-text-secondary hover:text-white'}
                `}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-1/20 to-accent-2/20 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] -z-10 animate-subtle-pulse"></span>
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/U-ARUN07" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 group">
            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/u-arun-9956a5297/" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 group">
            <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
