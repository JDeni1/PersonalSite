import type { ContactInfo } from '../../Types';

export const contactInfo: ContactInfo[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'denissebauts@gmail.com',
    href: 'mailto:denissebauts@gmail.com',
    external: false,
    icon: 'email',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'in/jilldenissebautista',
    href: 'https://www.linkedin.com/in/jilldenissebautista/',
    external: true,
    icon: 'linkedin',
  },
];