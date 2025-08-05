export interface Project {
  title: string;
  description: string;
  tech: string[];
  light_image: string;
  dark_image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Restaurant Management System",
    description: "Manage restaurant inventory and suppliers.",
    tech: ['Laravel', 'PostgreSQL', 'MVC', 'Git', 'Agile'],
    light_image: './project-place-holder-v4 white.jpg',
    dark_image: './project-place-holder-v4 black.jpg',
    link: 'https://rms.asirid.me/',
  },
  {
    title: "Parking Spot Detection AI",
    description: "Detects parking spaces in real time with AI.",
    tech: ['Python', 'YOLO', 'Computer Vision', 'AI'],
    light_image: './project-place-holder-v4 white.jpg',
    dark_image: './project-place-holder-v4 black.jpg',
    link: '#',
  },
  {
    title: "E-Commerce Platform",
    description: "Fullstack shopping app with REST API.",
    tech: ['JavaScript', 'HTML/CSS', 'REST API', 'Frontend'],
    light_image: './project-place-holder-v4 white.jpg',
    dark_image: './project-place-holder-v4 black.jpg',
    link: '#',
  },
  {
    title: "Automated Greenhouse IoT",
    description: "IoT for greenhouse monitoring and control.",
    tech: ['IoT', 'Sensors', 'Automation', 'Monitoring'],
    light_image: './project-place-holder-v4 white.jpg',
    dark_image: './project-place-holder-v4 black.jpg',
    link: '#',
  },
  {
    title: "Pizza Shop Management",
    description: "Order and inventory for pizza shops.",
    tech: ['PHP', 'MySQL', 'Inventory', 'Reporting'],
    light_image: './project-place-holder-v4 white.jpg',
    dark_image: './project-place-holder-v4 black.jpg',
    link: '#',
  },
  {
    title: "Data Science Pipeline",
    description: "Automated pipeline for model predictions.",
    tech: ['Python', 'Data Science', 'Automation', 'CI/CD'],
    light_image: './project-place-holder-v4 white.jpg',
    dark_image: './project-place-holder-v4 black.jpg',
    link: '#',
  }
];