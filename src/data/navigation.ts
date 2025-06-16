import { House, Code2, Award, MessageSquare,} from 'lucide-react';
// import { House, Code2, Award, MessageSquare, BookOpen } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'about', label: 'About', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: Award },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
];