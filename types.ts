import React from 'react';

export interface Skill {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl: string;
}

export interface JourneyItem {
  period: string;
  title: string;
  institution: string;
  description: string;
}
