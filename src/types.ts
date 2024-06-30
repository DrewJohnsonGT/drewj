export enum Technology {
  React = 'React',
  Next = 'Next.js',
  TypeScript = 'TypeScript',
  Tailwind = 'Tailwind CSS',
  MatterJS = 'Matter.js',
  Vite = 'Vite',
}

export interface Project {
  banner: string;
  slug: string;
  title: string;
  description: string;
  technologies: Technology[];
  repository?: string;
  link?: string;
}
