import type { Skill, Project, JourneyItem, SkillCategory } from './types';
import {
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NodejsIcon,
  TailwindCssIcon,
  DockerIcon,
  CodeBracketIcon,
  DatabaseIcon,
} from './components/Icons';

// Keeping SKILLS export for type safety if needed, but the app will now use SKILL_CATEGORIES
export const SKILLS: Skill[] = [];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Python", "Java"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"],
  },
  {
    category: "Database",
    skills: ["SQL", "MySQL", "AWS RDS"],
  },
  {
    category: "Operating Systems",
    skills: ["Linux", "Windows"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, RDS)", "Docker", "Jenkins", "Maven", "RDP"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitLab", "VS Code"],
  },
  {
    category: "Areas of Interest",
    skills: ["Data Structures & Algorithms", "OOPs", "Operating Systems", "DBMS", "Computer Networks"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Problem-Solving", "Teamwork"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'FinSight',
    description: 'A Smart Task & Finance Tracker built using HTML, CSS, and JavaScript. Features GitHub Actions integration for real-time data storage, expense analytics, and theme customization.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Actions'],
    imageUrl: '/projects/finsight.png',
    repoUrl: 'https://github.com/U-ARUN07/FinSight?tab=readme-ov-file',
    liveUrl: 'https://u-arun07.github.io/FinSight/',
  },
  {
    title: 'MediCare+ (Zignasa Win)',
    description: 'Award-winning project (1st Runner Up at Zignasa 2K25). A comprehensive doctor consultation platform with video calls (ZegoCloud), secure auth, and payments.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'MongoDB', 'ZegoCloud'],
    imageUrl: '/projects/medicare.png',
    repoUrl: 'https://github.com/U-ARUN07/doctor-consultation-app?tab=readme-ov-file',
    liveUrl: 'https://medicare-frontend-arun.vercel.app/',
  },
  {
    title: 'WeatherNow',
    description: 'A dynamic Weather Forecast WebApp displaying live temperature, humidity, and wind details. Features auto day/night theme switching and 5-day forecasts.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    imageUrl: '/projects/weathernow.png',
    repoUrl: 'https://github.com/U-ARUN07/WeatherNow',
    liveUrl: 'https://weather-now-iota-one.vercel.app/',
  },
  {
    title: 'To-Do List',
    description: 'A modern, responsive task management app with persistent local storage. Allows users to add, edit, delete, and mark tasks as completed.',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    imageUrl: '/projects/todo.png',
    repoUrl: 'https://github.com/U-ARUN07/todo-list?tab=readme-ov-file',
    liveUrl: 'https://u-arun07.github.io/todo-list/',
  },
];

export const JOURNEY_TIMELINE: JourneyItem[] = [
  {
    period: 'Origin',
    title: 'Born and Raised',
    institution: 'Mahabubnagar, Telangana',
    description: 'Hailing from Balsurgonda thanda, my upbringing, under the guidance of my father Babya Naik, has instilled in me a strong work ethic and a deep appreciation for community.'
  },
  {
    period: '2020 - 2021',
    title: 'High School (SSC)',
    institution: 'ZPHS Boys, Kulkacherla',
    description: 'Achieved a perfect 10/10 GPA, sparking my passion for technology and laying the foundation for my future pursuits in computer science.'
  },
  {
    period: '2021 - 2023',
    title: 'Intermediate Education (MPC)',
    institution: 'TTWRJC Boys, Kondapur',
    description: 'Secured a score of 820/1000, building a robust analytical foundation in Mathematics, Physics, and Chemistry essential for engineering.'
  },
  {
    period: '2023 - Present',
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'MLR Institute of Technology',
    description: 'Currently in my 3rd year, specializing in AI & Machine Learning with a CGPA of 7.69. Actively seeking internships to apply my skills in real-world scenarios.'
  },
  {
    period: '2025',
    title: '1st Runner Up - Zignasa 2K25',
    institution: 'MLR Institute of Technology',
    description: 'Secured 1st Runner Up in the Web Development domain during the 24-hour Zignasa 2K25 Hackathon. Built "MediCare+", an innovative doctor consultation platform under tight deadlines.'
  },
];
