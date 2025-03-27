import Image from 'next/image';
import { AiOutlineLink, AiOutlineZoomIn } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { ProgressLink } from '~/components/ProgressBar/Link';
import { TechnologyChip } from '~/components/TechnologyChip';
import { Button } from '~/components/ui/Button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/Card';
import { getAllProjectsFrontMatter } from '~/utils/projects';

const ProjectsPage = async () => {
  const projects = await getAllProjectsFrontMatter();
  const projectsSortedByDate = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <div className="grid grid-cols-1 justify-center gap-4 px-4 pb-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {projectsSortedByDate.map((project) => (
        <Card key={project.title} className="p-0">
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
          <CardContent className="flex flex-1 flex-col gap-4 p-4">
            <p className="leading-snug">{project.description}</p>
            <div className="mt-auto flex flex-wrap items-end justify-center gap-2">
              {project.technologies?.map((technology) => (
                <TechnologyChip key={technology} technology={technology} />
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-2 flex items-center justify-between gap-2 p-2">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primaryOutline"
                  className="flex items-center gap-1"
                >
                  <RiGitRepositoryLine />
                  Repo
                </Button>
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="primaryOutline"
                  className="flex items-center gap-1"
                >
                  <AiOutlineLink />
                  Visit
                </Button>
              </a>
            )}
            {project.slug && (
              <ProgressLink
                href={`/projects/${project.slug}`}
                className="flex-1"
              >
                <Button className="flex w-full flex-1 items-center gap-1">
                  <AiOutlineZoomIn />
                  Details
                </Button>
              </ProgressLink>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsPage;
