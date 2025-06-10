export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Jimmy'blog",
    description: 'A modern personal blog, simple but not simplistic',
    tech: ['Next.js', 'shadcn/ui', 'Tailwind CSS'],
    image: '../project5.png',
    link: 'https://www.jimmy-blog.top/',
  },
  {
    title: 'GO TODO',
    description: 'Todo list command-line tool',
    tech: ['Go', 'Cobra', 'CLI'],
    image: '../project2.png',
    link: 'https://github.com/Lily-404/todo',
  },

  {
    title: 'BrowseBase',
    description: 'Skeuomorphic resource website',
    tech: ['Typescript', 'React', 'vite','Supabase'],
    image: 'project3.png',
    link: 'https://browsebase.pages.dev',
  },
  {
    title: 'NextForge',
    description: 'Next.js personal landing page generator',
    tech: [' Next.js', 'Tailwind CSS', 'Radix UI'],
    image: '../project4.png',
    link: 'https://next-forge-eta-henna.vercel.app/',
  },
  {
    title: 'GO Search',
    description: 'Fast terminal search',
    tech: ['Go', 'Cobra', 'CLI'],
    image: '../project1.png',
    link: 'https://github.com/Lily-404/search',
  },
  {
    title: 'Ashes',
    description: 'A furnace for burning secrets',
    tech: ['Next.js',  'Tailwind CSS'],
    image: '../project6.png',
    link: 'https://secret.ashes.cloud/',
  },
];