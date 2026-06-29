import type { Project } from "../../Types";
import NibbleWise from '../../assets/NibbleWise.jpg'
import CrowdControl from '../../assets/CrowdControl.jpg'
import PokemonFlipGame from '../../assets/PokemonFlipGame.jpg'

export const projects: Project[] = [
  {
    id: '1',
    title: 'NibbleWise',
    description: 'A kahoot-style quiz game focuing on educating students about edible plants native to Vancouver. Utlized ',
    image: NibbleWise,
    video: 'https://youtu.be/xuxqXuT15vU',
    projectUrl : 'https://nibblewise.onrender.com/',
    githubUrl: 'https://github.com/annie-ayzf/2800-202610-BBY09',
    techStack: ['EJS', 'CSS', 'JavaScript' , 'Node.js', 'MongoDB'],
  },
  {
    id: '2',
    title: 'CrowdControl',
    description: 'A web application designed to locate crowded areas through a live social feed.',
    image: CrowdControl,
    projectUrl : 'https://1800-202610-bby09.fly.dev/',
    // video: '/videos/crowdcontrol-demo.mp4',
    githubUrl: 'https://github.com/JDeni1/1800_202610_BBY09',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Firebase'],
  },
];

export const miniProjects: Project[] = [
  {
    id: '1',
    title: ' Pokemon Flip Game',
    description: 'A memory card game based on pokemon.',
    image: PokemonFlipGame,
    projectUrl : 'https://calm-faloodeh-a5c6b7.netlify.app/',
    githubUrl: 'https://github.com/yourusername/nibblewise',
    video: 'https://youtu.be/U5KD78bmJSU',
    techStack: ['TypeScript', 'React', 'Node.js'],
  },
  {
    id: '2',
    title: 'Test2',
    projectUrl : '',
    description: 'Real-time crowd density dashboard using websocket feeds.',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixli...',
    video: '/videos/crowdcontrol-demo.mp4',
    githubUrl: 'https://github.com/yourusername/crowdcontrol',
    techStack: ['React', 'Express.js', 'AWS'],
  },
];

// techColors.ts
export const techColors: Record<string, string> = {
  TypeScript: '#21548b',
  React: '#2aa5c8',
  'Node.js': '#3c873a',
  'Next.js': '#000000',
  'Express.js': '#4a1c1c',
  AWS: '#ff9900',
  CSS: '#264de4',
  HTML: '#e34c26',
  Tailwind: '#38f8a2',
  Firebase: '#ca4040',
  EJS: '#dfbb61',
  JavaScript: '#ffb700',
  MongoDB: '#40a03b',
  OpenAIAPI: '#3a1919',
  Bootstrap: '#552d57'
};

// Fallback color for anything not in the map
export const defaultPillColor = '#868484';