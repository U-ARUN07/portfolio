import React from 'react';
import { PROJECTS } from '../constants';
import AnimatedSection from './AnimatedSection';
import { GithubIcon, ExternalLinkIcon } from './Icons';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      className="glass-card group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent-2/10 hover:-translate-y-2 h-full"
    >
       {/* Hover Glow Effect */}
       <div className="absolute -inset-px rounded-2xl z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(147, 51, 234, 0.15), transparent 40%)`
       }} onMouseMove={(e) => {
          const target = e.currentTarget as HTMLDivElement;
          const rect = target.getBoundingClientRect();
          target.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          target.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
       }}></div>

       {/* Content Container - z-10 to ensure clicks work */}
       <div className="relative z-10 glass-card rounded-2xl flex flex-col flex-grow m-px p-1 glowing-edge">
          <div className="relative h-56 overflow-hidden rounded-t-xl bg-black/50">
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030409] to-transparent opacity-60"></div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow relative">
            <div className="absolute top-0 right-0 p-4 transform translate-x-2 -translate-y-12">
                 {/* Floating Action Buttons for quick access */}
                 <div className="flex space-x-2">
                    {project.liveUrl && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-accent-2 hover:bg-accent-2/80 text-white p-2.5 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                            title="View Live"
                        >
                            <ExternalLinkIcon className="w-5 h-5" />
                        </a>
                    )}
                     <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 p-2.5 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                        title="View Code"
                    >
                        <GithubIcon className="w-5 h-5" />
                    </a>
                 </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 font-heading leading-tight">{project.title}</h3>
            <p className="text-text-primary leading-relaxed flex-grow text-sm mb-6 opacity-90">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="bg-accent-1/10 text-accent-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-accent-1/20">{tag}</span>
              ))}
            </div>
          </div>
       </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <AnimatedSection className="py-24" id="projects">
      <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading tracking-wider">
            FEATURED <span className="aurora-text">PROJECTS</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of my recent work, featuring full-stack applications, real-time systems, and award-winning hackathon projects.
          </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
