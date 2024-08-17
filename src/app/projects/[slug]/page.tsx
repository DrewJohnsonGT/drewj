import { AiOutlineLink } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa6';
import {
  Box,
  CSSReset,
  Flex,
  Heading,
  IconButton,
  Text,
  Tooltip,
} from '@chakra-ui/react';
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
    components: {
      ExternalLink: (props) => (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--orange)',
            display: 'inline-block',
          }}
        />
      ),
    },
    options: { parseFrontmatter: true },
    source: markdown,
  });
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        maxWidth: '800px',
      }}>
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
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="1rem"
        mb="4rem"
        maxWidth={600}>
        <div>
          <Flex justify="space-between">
            <Heading size="xl" mb={4}>
              {frontmatter.title}
            </Heading>
            <Flex gap={2}>
              {frontmatter.repository && (
                <Tooltip
                  label="GitHub Repository"
                  aria-label="GitHub Repository">
                  <IconButton
                    as="a"
                    aria-label="GitHub Repository"
                    href={frontmatter.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<FaGithub />}
                  />
                </Tooltip>
              )}
              {frontmatter.link && (
                <Tooltip
                  label="Live Project Link"
                  aria-label="Live Project Link">
                  <IconButton
                    as="a"
                    aria-label="Project link"
                    href={frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<AiOutlineLink />}
                  />
                </Tooltip>
              )}
            </Flex>
          </Flex>
          {frontmatter.description && (
            <Text mb={4}>{frontmatter.description}</Text>
          )}
          <Flex justifyContent="center">
            {frontmatter.technologies?.map((technology) => (
              <TechnologyChip key={technology} technology={technology} />
            ))}
          </Flex>
        </div>
        {frontmatter.banner && (
          <Image
            src={frontmatter.banner}
            alt={frontmatter.title}
            width={300}
            height={300}
          />
        )}
      </Flex>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
        }}>
        <CSSReset />
        {content}
      </Box>
    </div>
  );
};

export default ProjectsPage;
