export interface Skill {
  name: string;
  level: number;
  description?: string;
}

export const skills: Skill[] = [
  { 
    name: 'Full Stack Development', 
    level: 85,
    description: 'Laravel, JavaScript, HTML/CSS, PostgreSQL, MVC Architecture' 
  },
  { 
    name: 'Python & Data Science', 
    level: 90,
    description: 'Model training, hyperparameter optimization, predictive analytics' 
  },
  { 
    name: 'AI Solutions Development', 
    level: 85,
    description: 'Computer vision (YOLO), intelligent systems, automation pipelines' 
  },
  { 
    name: 'Database Management', 
    level: 85,
    description: 'PostgreSQL, MySQL, query optimization, data modeling' 
  },
  { 
    name: 'Agile Development', 
    level: 90,
    description: 'Scrum, sprint planning, Git version control, CI/CD practices' 
  }
];