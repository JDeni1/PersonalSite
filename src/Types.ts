export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  githubUrl: string;
  techStack: string[];
}

export type SocialIconName = 'email' | 'instagram' | 'linkedin' | 'discord';

export interface ContactInfo {
  id: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
  icon: SocialIconName;
}
