import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLink, AiOutlineZoomIn } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { TechnologyChip } from '~/components/TechnologyChip';
import { buttonVariants } from '~/components/ui/Button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/Card';
import { cn } from '~/utils/cn';
import { getAllProjectsFrontMatter } from '~/utils/projects';

const ProjectsPage = async () => {
  const projects = await getAllProjectsFrontMatter();
  const projectsSortedByDate = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <div className="grid grid-cols-1 justify-center gap-4 px-4 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projectsSortedByDate.map((project) => (
        <Card key={project.title} className="p-4">
          <CardHeader className="p-0">
            <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
              <Image
                src={project.banner}
                alt={project.title}
                placeholder="empty"
                className="object-cover"
                fill
              />
            </div>
            <div className="p-2 text-center">
              <CardTitle>{project.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-0">
            <p className="leading-snug">{project.description}</p>
            <div className="mt-auto flex flex-wrap items-end justify-center gap-1">
              {project.technologies?.map((technology) => (
                <TechnologyChip key={technology} technology={technology} />
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-2 flex items-center justify-center gap-2 p-2">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'flex flex-1 items-center gap-1',
                )}
              >
                Repo
                <RiGitRepositoryLine />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'flex flex-1 items-center gap-1',
                )}
              >
                Visit
                <AiOutlineLink />
              </a>
            )}
            {project.slug && (
              <Link
                href={`/projects/${project.slug}`}
                className={cn(
                  buttonVariants({ variant: 'primary' }),
                  'flex flex-1 items-center gap-1',
                )}
              >
                Details
                <AiOutlineZoomIn />
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsPage;
