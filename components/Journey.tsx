import React, { useState, useEffect, useRef } from 'react';
import { JOURNEY_TIMELINE } from '../constants';
import AnimatedSection from './AnimatedSection';
import { GraduationCapIcon, HomeIcon, BikeIcon } from './Icons';

const Journey: React.FC = () => {
  const journeyRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [bikePosition, setBikePosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!journeyRef.current || !timelineRef.current) return;
      
      const rect = journeyRef.current.getBoundingClientRect();
      const timelineHeight = timelineRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the component.
      // 0 when top of section hits bottom of viewport.
      // 1 when bottom of section hits top of viewport.
      let progress = (windowHeight - rect.top) / (rect.height + windowHeight);
      progress = Math.max(0, Math.min(progress, 1)); // Clamp between 0 and 1

      // Map progress to the timeline height
      setBikePosition(progress * (timelineHeight - 24)); // -24 for icon height buffer
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatedSection className="py-24" id="journey" ref={journeyRef}>
      <h2 className="text-3xl font-bold text-center mb-16 font-heading tracking-wider">
        MY <span className="aurora-text">JOURNEY</span>
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div 
          ref={timelineRef}
          className="absolute left-4 sm:left-1/2 top-2 h-full w-px -translate-x-1/2 bg-repeat-y"
          style={{ backgroundImage: 'linear-gradient(to bottom, var(--accent-1) 2px, transparent 2px, transparent 8px)' }}
        ></div>

        <BikeIcon
          className="w-8 h-8 absolute left-4 sm:left-1/2 -ml-4 text-accent-2 transition-all duration-100 ease-linear z-20 p-1 bg-background-color rounded-full"
          style={{ top: `${bikePosition}px`, transform: 'translateX(-50%)' }}
        />

        {JOURNEY_TIMELINE.map((item, index) => (
          <div key={index} className={`relative mb-12 pl-12 sm:pl-0`}>
             <div className={`sm:flex items-center ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
              <div className="absolute left-4 sm:left-1/2 top-1 w-8 h-8 -translate-x-1/2 flex items-center justify-center rounded-full bg-background-color border-2 border-accent-1 shadow-lg z-10" style={{ boxShadow: '0 0 20px var(--accent-1)' }}>
                <div className="w-4 h-4 rounded-full bg-accent-1 animate-ping absolute opacity-75"></div>
                {item.title === 'Born and Raised' ? (
                  <HomeIcon className="text-white z-10 w-4 h-4" />
                ) : (
                  <GraduationCapIcon className="text-white z-10 w-4 h-4" />
                )}
              </div>
              
              <div className={`w-full sm:w-1/2 ${index % 2 === 1 ? 'sm:pl-8' : 'sm:pr-8'}`}>
                <div className="glass-card p-6 rounded-xl shadow-lg glowing-edge">
                    <p className="font-semibold aurora-text mb-1 text-sm tracking-wider">{item.period}</p>
                    <h3 className="font-bold text-white text-lg font-heading">{item.title}</h3>
                    <p className="text-text-secondary mb-2 text-sm">{item.institution}</p>
                    <p className="text-text-primary leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
              <div className="hidden sm:block w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Journey;