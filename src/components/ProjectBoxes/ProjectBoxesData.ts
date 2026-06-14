import type { Project } from "../../Types";

export const projects: Project[] = [
  {
    id: '1',
    title: 'NibbleWise',
    description: 'A meal-planning app that generates recipes from what\'s in your fridge.',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixli...',
    githubUrl: 'https://github.com/yourusername/nibblewise',
    techStack: ['TypeScript', 'React', 'Node.js'],
  },
  {
    id: '2',
    title: 'CrowdControl',
    description: 'Real-time crowd density dashboard using websocket feeds.',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixli...',
    video: '/videos/crowdcontrol-demo.mp4',
    githubUrl: 'https://github.com/yourusername/crowdcontrol',
    techStack: ['React', 'Express.js', 'AWS'],
  },
];

// techColors.ts
export const techColors: Record<string, string> = {
  TypeScript: '#3178c6',
  React: '#61dafb',
  'Node.js': '#3c873a',
  'Next.js': '#000000',
  'Express.js': '#4a1c1c',
  AWS: '#ff9900',
  CSS: '#264de4',
  HTML: '#e34c26',
  Tailwind: '#38bdf8',
};

// Fallback color for anything not in the map
export const defaultPillColor = 'coral';