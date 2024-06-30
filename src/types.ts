export enum Technology {
  React = 'React',
  Next = 'Next.js',
  TypeScript = 'TypeScript',
  Tailwind = 'Tailwind CSS',
  MatterJS = 'Matter.js',
  Vite = 'Vite',
  NodeJS = 'Node.js',
  Redux = 'Redux',
  MSSQL = 'MSSQL',
  Printing = '3D Printing',
  Python = 'Python',
  RaspberryPi = 'Raspberry Pi',
  Arduino = 'Arduino',
  HTML = 'HTML',
  CSS = 'CSS',
  Firebase = 'Firebase',
  ChromeAPI = 'Chrome API',
}

export interface Project {
  banner: string;
  slug: string;
  title: string;
  description: string;
  technologies: Technology[];
  date: string;
  repository?: string;
  link?: string;
}
