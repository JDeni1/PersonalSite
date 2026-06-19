
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

export interface Intro {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface HobbiesGalleryItem {
  id: string
  image: string
  title: string
  description: string
  date: string
}

export interface TimelineItem {
  id: string
  text: string
  date: string
  description?: string
  category: {
    tag: string
    color: string
  }
  link?: {
    url: string
    text: string
  }
}