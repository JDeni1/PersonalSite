import type { TimelineItem } from '../../Types'

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    text: 'Started my first developer job',
    date: 'January 2023',
    category: { tag: 'work', color: '#018f69' },
    link: { url: 'https://example.com', text: 'Read more' }
  },
  {
    id: '2',
    text: 'Graduated with a degree in Computer Science',
    date: 'June 2022',
    category: { tag: 'education', color: '#e17b77' },
  },
  {
    id: '3',
    text: 'Built my first React project',
    date: 'March 2021',
    category: { tag: 'project', color: '#6c5ce7' },
    link: { url: 'https://github.com', text: 'View project' }
  },
]