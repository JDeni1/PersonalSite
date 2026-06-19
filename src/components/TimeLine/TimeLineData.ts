import type { TimelineItem } from '../../Types'

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    text: 'Built my first React project',
    date: 'June 2026',
    description: 'Built a full portfolio site using React, TypeScript, and Vite.',
    category: { tag: 'project', color: '#6c5ce7' },
    link: { url: 'https://example.com', text: 'View project' }
  },
  {
    id: '2',
    text: 'British Columbia Institute of Technology',
    date: 'January 2026',
    description: 'Studying Computer Systems Technology',
    category: { tag: 'education', color: '#00b894' },
  },
]