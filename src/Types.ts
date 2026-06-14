export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  githubUrl: string;
  techStack: string[];
}