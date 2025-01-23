import { compileMDX } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AiOutlineLink } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa6';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TechnologyChip } from '~/components/TechnologyChip';
import { Button } from '~/components/ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/Tooltip';
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
          className="inline-block text-orange-500"
        />
      ),
    },
    options: { parseFrontmatter: true },
    source: markdown,
  });
  return (
    <div className="mx-auto flex max-w-[clamp(300px,90vw,550px)] flex-col items-center justify-center text-xl">
      <meta property="og:title" content={frontmatter.title} key="ogtitle" />
      <meta
        property="og:description"
        content={frontmatter.description}
        key="ogdescription"
      />
      <meta property="og:image" content={frontmatter.banner} key="ogimage" />
      <meta property="og:type" content="article" />

      <div className="mb-16 flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full justify-between">
          <h1 className="mb-4 text-4xl font-bold">{frontmatter.title}</h1>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/projects">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Back to All Projects"
                    >
                      <IoMdArrowRoundBack className="h-4 w-4" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Back to All Projects</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {frontmatter.repository && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      aria-label="GitHub Repository"
                    >
                      <a
                        href={frontmatter.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>GitHub Repository</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {frontmatter.link && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      aria-label="Project Link"
                    >
                      <a
                        href={frontmatter.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Live Project Link</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>

        {frontmatter.description && (
          <p className="mb-4">{frontmatter.description}</p>
        )}

        <div className="flex justify-center">
          {frontmatter.technologies?.map((technology) => (
            <TechnologyChip key={technology} technology={technology} />
          ))}
        </div>

        {frontmatter.banner && (
          <Image
            src={frontmatter.banner}
            alt={frontmatter.title}
            width={300}
            height={300}
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        {content}
      </div>
    </div>
  );
};

export default ProjectsPage;
