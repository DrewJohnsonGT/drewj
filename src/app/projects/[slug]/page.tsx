import { access, readFile } from 'fs/promises';
import { compileMDX } from 'next-mdx-remote/rsc';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import path from 'path';

enum Technology {
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

async function readProjectsFile(slug: string) {
  const filePath = path.resolve(path.join(PROJECTS_FOLDER, `${slug}.mdx`));
  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' });
  return fileContent;
}

const ProjectsPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const markdown = await readProjectsFile(slug);

  if (!markdown) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<Project>({
    options: { parseFrontmatter: true },
    source: markdown,
  });
  return (
    <div>
      <Head>
        <title>{frontmatter?.title}</title>
        <meta property="og:title" content={frontmatter.title} key="ogtitle" />
        <meta
          property="og:description"
          content={frontmatter.description}
          key="ogtitle"
        />
        <meta property="og:image" content={frontmatter.thumbnail} key="ogimg" />
        <meta property="og:type" content="article" />
      </Head>
      <article className="container">
        <div>
          <div>
            {/* {frontmatter.thumbnail && (
                <Thumbnail
                  title={frontmatter.title ? frontmatter.title : ''}
                  src={frontmatter.thumbnail}
                />
              )} */}
          </div>
          <div>
            {frontmatter.title && <h1>{frontmatter.title}</h1>}
            {frontmatter.description && <p>{frontmatter.description}</p>}
            {/* {frontmatter.tags && <Tags tags={frontmatter.tags} />} */}
          </div>
        </div>
      </article>
      {content}
    </div>
  );
};

export default ProjectsPage;
