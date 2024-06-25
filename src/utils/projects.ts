import { access, readdir, readFile } from 'fs/promises';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

export enum Technology {
  React = 'React',
  Next = 'Next.js',
  TypeScript = 'TypeScript',
  Tailwind = 'Tailwind CSS',
  MDX = 'MDX',
  Node = 'Node.js',
  Express = 'Express',
  MongoDB = 'MongoDB',
  GraphQL = 'GraphQL',
  Apollo = 'Apollo',
  Postgres = 'Postgres',
}

export interface Project {
  slug: string;
  date: string;
  thumbnail: string;
  coverImage: string;
  title: string;
  description: string;
  tags: string[];
  technologies: Technology[];
}

const PROJECTS_FOLDER = path.join(process.cwd(), '_projects');

export const readProjectsFile = async (slug: string) => {
  const filePath = path.resolve(path.join(PROJECTS_FOLDER, `${slug}.mdx`));
  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' });
  return fileContent;
};

export const getAllProjectsFrontMatter = async () => {
  const fileNames = await readdir(PROJECTS_FOLDER);
  const projects = fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const markdown = await readProjectsFile(slug);
    const { frontmatter } = await compileMDX<Project>({
      options: { parseFrontmatter: true },
      source: markdown ?? '',
    });

    return {
      ...frontmatter,
    };
  });

  return Promise.all(projects);
};
