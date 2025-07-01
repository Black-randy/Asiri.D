import { Github, Mail, Linkedin } from 'lucide-react';
// import { Github, Mail, Linkedin, Figma, Codepen } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: 'https://github.com/black-randy',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/asiri-bandara/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:asiri.2704gg@gmail.com',
    label: 'Email',
  },
  // {
  //   icon: Figma,
  //   href: 'https://www.figma.com/@asirid',
  //   label: 'Design Portfolio',
  // },
  // {
  //   icon: Codepen,
  //   href: 'https://codepen.io/asirid',
  //   label: 'Code Samples',
  // },
];