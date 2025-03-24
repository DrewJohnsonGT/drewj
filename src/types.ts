export enum Technology {
  Printing = '3D Printing',
  Android = 'Android',
  Arduino = 'Arduino',
  Capacitor = 'Capacitor',
  ChromeAPI = 'Chrome API',
  CSS = 'CSS',
  Firebase = 'Firebase',
  HTML = 'HTML',
  Ionic = 'Ionic',
  iOS = 'iOS',
  MatterJS = 'Matter.js',
  MSSQL = 'MSSQL',
  Next = 'Next.js',
  NodeJS = 'Node.js',
  P5 = 'P5.js',
  PostgreSQL = 'PostgreSQL',
  Prisma = 'Prisma',
  Python = 'Python',
  RaspberryPi = 'Raspberry Pi',
  React = 'React',
  Redux = 'Redux',
  Shadcn = 'Shadcn',
  Tailwind = 'Tailwind',
  TypeScript = 'TypeScript',
  Vercel = 'Vercel',
  Vite = 'Vite',
}

export interface Project {
  banner: string;
  date: string;
  description: string;
  link?: string;
  repository?: string;
  slug: string;
  technologies: Technology[];
  title: string;
}
