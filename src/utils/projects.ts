'use server';

import { access, readdir, readFile } from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Project } from '~/types';

const PROJECTS_FOLDER = path.join(process.cwd(), '_projects');

export const readProjectsFile = async (slug: string) => {
  const filePath = path.resolve(path.join(PROJECTS_FOLDER, `${slug}.mdx`));
  try {
    await access(filePath);
  } catch (err) {
    console.error(err);
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' });
  return fileContent;
};

export const getAllProjectsFrontMatter = async () => {
  const fileNames = await readdir(PROJECTS_FOLDER);
  // Filter filenames that don't end with .mdx
  const mdxFileNames = fileNames.filter((fileName) => /\.mdx$/.test(fileName));
  const projects = mdxFileNames.map(async (fileName) => {
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
