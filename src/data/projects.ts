export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Restaurant Management System",
    description: "Manage restaurant inventory and suppliers.",
    tech: ['Laravel', 'PostgreSQL', 'MVC', 'Git', 'Agile'],
    image: './project-test-rms.png',
    link: '#',
  },
  {
    title: "Parking Spot Detection AI",
    description: "Detects parking spaces in real time with AI.",
    tech: ['Python', 'YOLO', 'Computer Vision', 'AI'],
    image: './project-place-holder.png',
    link: '#',
  },
  {
    title: "E-Commerce Platform",
    description: "Fullstack shopping app with REST API.",
    tech: ['JavaScript', 'HTML/CSS', 'REST API', 'Frontend'],
    image: './project-place-holder.png',
    link: '#',
  },
  {
    title: "Automated Greenhouse IoT",
    description: "IoT for greenhouse monitoring and control.",
    tech: ['IoT', 'Sensors', 'Automation', 'Monitoring'],
    image: './project-place-holder.png',
    link: '#',
  },
  {
    title: "Pizza Shop Management",
    description: "Order and inventory for pizza shops.",
    tech: ['PHP', 'MySQL', 'Inventory', 'Reporting'],
    image: './project-place-holder.png',
    link: '#',
  },
  {
    title: "Data Science Pipeline",
    description: "Automated pipeline for model predictions.",
    tech: ['Python', 'Data Science', 'Automation', 'CI/CD'],
    image: './project-place-holder.png',
    link: '#',
  }
];