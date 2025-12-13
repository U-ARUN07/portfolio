import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-text-secondary mt-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="flex justify-center space-x-6 mb-4 mt-8">
        <a href="https://github.com/U-ARUN07" target="_blank" rel="noopener noreferrer" className="text-text-secondary transition-all duration-300 hover:text-accent-1 hover:scale-110" style={{'--glow-color': 'var(--accent-1)'} as React.CSSProperties}>
          <GithubIcon className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/u-arun-9956a5297/" target="_blank" rel="noopener noreferrer" className="text-text-secondary transition-all duration-300 hover:text-accent-2 hover:scale-110" style={{'--glow-color': 'var(--accent-2)'} as React.CSSProperties}>
          <LinkedinIcon className="w-6 h-6" />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} U Arun. All rights reserved.</p>
    </footer>
  );
};

export default Footer;