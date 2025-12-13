import React, { useRef, useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import Typewriter from './Typewriter';

const Hero: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [imageStyle, setImageStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageContainerRef.current) return;
      const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const rotateX = (y / height - 0.5) * -20; // Tilt intensity
      const rotateY = (x / width - 0.5) * 20;  // Tilt intensity
      setImageStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: 'transform 0.1s ease-out'
      });
      setGlareStyle({
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), transparent 40%)`,
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      setImageStyle({
        transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
        transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
      });
      setGlareStyle({
        opacity: 0,
        transition: 'opacity 0.5s ease'
      });
    };

    const currentRef = imageContainerRef.current;
    currentRef?.addEventListener('mousemove', handleMouseMove);
    currentRef?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      currentRef?.removeEventListener('mousemove', handleMouseMove);
      currentRef?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <AnimatedSection className="min-h-[calc(100vh-100px)] flex items-center justify-center py-10 sm:py-20">
      {/* On mobile (default), flex-col-reverse makes text bottom, image top. 
          Actually user said "replace the profile photo to above". 
          Usually Hero is Text Left, Image Right. 
          flex-col-reverse means Image (Right in DOM) goes to Top. 
          flex-col means Image (Right in DOM) goes to Bottom.
          If I use flex-col-reverse:
          1. Text
          2. Image
          -> Image becomes Top, Text Bottom.
      */}
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-sm font-medium text-accent-2 tracking-widest font-heading uppercase">
              Welcome to my Portfolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-heading mb-6">
            Hi, I'm <span className="text-white">U Arun</span><br />
            <span className="text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2">
              <Typewriter words={['Full-Stack Dev', 'AI/ML Enthusiast', 'Problem Solver']} />
            </span>
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed mb-8">
            A 3rd year B.Tech student passionate about full-stack development and real-time systems. I transform ideas into visually appealing, functional, and interactive digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
             <a href="#projects" className="gradient-button px-8 py-3 text-white font-bold rounded-full shadow-lg shadow-accent-1/25 hover:shadow-accent-1/40 transform hover:-translate-y-1 transition-all duration-300">
              View Work
             </a>
             <a href="#contact" className="px-8 py-3 text-white font-medium rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Contact Me
             </a>
          </div>
        </div>

        {/* Profile Image */}
        <div 
          ref={imageContainerRef} 
          className="w-3/4 max-w-xs sm:max-w-sm lg:w-2/5"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="glowing-edge rounded-full relative group" style={{...imageStyle, aspectRatio: '1 / 1'}}>
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-1 to-accent-2 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src="https://github.com/U-ARUN07.png"
              alt="U Arun"
              className="w-full h-full object-cover rounded-full border-4 border-black/50 shadow-2xl relative z-10"
            />
             <div 
                className="absolute inset-0 rounded-full pointer-events-none z-20"
                style={glareStyle}
            />
          </div>
        </div>
        
      </div>
    </AnimatedSection>
  );
};

export default Hero;
