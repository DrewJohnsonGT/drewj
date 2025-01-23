export enum Technology {
  React = 'React',
  Next = 'Next.js',
  TypeScript = 'TypeScript',
  Tailwind = 'Tailwind',
  Shadcn = 'Shadcn',
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
  PostgreSQL = 'PostgreSQL',
  Prisma = 'Prisma',
  Vercel = 'Vercel',
  CSS = 'CSS',
  Firebase = 'Firebase',
  ChromeAPI = 'Chrome API',
  iOS = 'iOS',
  Android = 'Android',
  Capacitor = 'Capacitor',
  Ionic = 'Ionic',
  P5 = 'P5.js',
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
