import { FaGithub } from 'react-icons/fa6';
import { Button, Heading, IconButton, Text } from '@chakra-ui/react';
import { compileMDX } from 'next-mdx-remote/rsc';
import Head from 'next/head';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { TechnologyChip } from '~/components/TechnologyChip';
import { Project } from '~/types';
import { readProjectsFile } from '~/utils/projects';

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
        <meta property="og:image" content={frontmatter.banner} key="ogimg" />
        <meta property="og:type" content="article" />
      </Head>
      <article className="container">
        {frontmatter.banner && (
          <Image
            src={frontmatter.banner}
            alt={frontmatter.title}
            width={800}
            height={800}
          />
        )}
        <div>
          {frontmatter.title && <Heading>{frontmatter.title}</Heading>}
          {frontmatter.description && <Text>{frontmatter.description}</Text>}
          {frontmatter.technologies?.map((technology) => (
            <TechnologyChip key={technology} technology={technology} />
          ))}
          <div>
            {frontmatter.repository && (
              <IconButton
                as="a"
                aria-label="GitHub Repository"
                href={frontmatter.repository}
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaGithub />}
              />
            )}
          </div>
        </div>
      </article>
      {content}
    </div>
  );
};

export default ProjectsPage;
