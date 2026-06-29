import type { Project } from "../../Types";
import NibbleWise from '../../assets/NibbleWise.jpg'
import CrowdControl from '../../assets/CrowdControl.jpg'
import PokemonFlipGame from '../../assets/PokemonFlipGame.jpg'

export const projects: Project[] = [
  {
    id: '1',
    title: 'NibbleWise',
    description: 'A Kahoot-style quiz game focusing on educating students about edible plants native to Vancouver. Utilized a Node.js/Express backend with EJS templating, MongoDB Atlas for storing users, plants, and sessions, and the OpenAI API to auto-generate student-friendly plant descriptions, called once per plant and cached back to the database. Core features include bcrypt authentication, a gamified points system, a searchable plant info library, and per-question correct/incorrect feedback, all secured with Joi validation, session management, and NoSQL injection protection.',
    image: NibbleWise,
    video: 'https://youtu.be/xuxqXuT15vU',
    projectUrl : 'https://nibblewise.onrender.com/',
    githubUrl: 'https://github.com/annie-ayzf/2800-202610-BBY09',
    techStack: ['EJS', 'CSS', 'JavaScript' , 'Node.js', 'MongoDB'],
  },
  {
    id: '2',
    title: 'CrowdControl',
    description: 'A web application designed to locate crowded areas through a live social feed. Utilized a vanilla HTML/CSS/JavaScript frontend bundled with Vite,  and Firestore as the real-time database — allowing users to log in, submit crowd reports, and view an interactive heatmap that reflects user-generated busyness data alongside a social feed of recent posts, all containerized with Docker and deployed via Fly.io with a GitHub Actions CI/CD pipeline.',
    image: CrowdControl,
    projectUrl : 'https://1800-202610-bby09.fly.dev/',
    githubUrl: 'https://github.com/JDeni1/1800_202610_BBY09',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Firebase'],
  },
];

export const miniProjects: Project[] = [
  {
    id: '1',
    title: ' Pokemon Flip Game',
    description: 'A memory card game based on Pokemon. Core focus is to fetch data from the Pokemon API and dynamically build a card grid from live data, managing game state across card flipping logic, a countdown timer, difficulty levels, and a one-time peek power-up — all wired together with jQuery event handling and async/await. ',
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