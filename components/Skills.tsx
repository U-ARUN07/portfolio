import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import AnimatedSection from './AnimatedSection';

const Skills: React.FC = () => {
  return (
    <AnimatedSection className="py-24" id="skills">
      <h2 className="text-3xl font-bold text-center mb-16 font-heading tracking-wider">
        MY <span className="aurora-text">SKILLS</span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {SKILL_CATEGORIES.map((category, index) => (
          <div 
            key={index} 
            className="glass-card p-6 rounded-2xl glowing-edge hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
          >
             <h3 className="text-xl font-bold text-white mb-6 font-heading border-b border-white/10 pb-2 inline-block">
                {category.category}
             </h3>
             <div className="flex flex-wrap gap-2.5">
                {category.skills.map(skill => (
                    <span 
                        key={skill} 
                        className="px-4 py-1.5 rounded-full bg-accent-1/10 border border-accent-1/20 text-accent-1 text-sm font-medium hover:bg-accent-1/20 hover:text-white transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
             </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
