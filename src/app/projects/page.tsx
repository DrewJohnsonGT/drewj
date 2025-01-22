import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLink, AiOutlineZoomIn } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';
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
    <div className="grid grid-cols-1 justify-center gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {projectsSortedByDate.map((project) => (
        <Card key={project.title} className="p-1">
          <CardHeader className="space-y-2 p-2">
            <CardTitle className="text-center">{project.title}</CardTitle>
            <div className="relative h-[200px] w-full">
              <Image
                src={project.banner}
                alt={project.title}
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-2 p-2">
            <p className="leading-snug">{project.description}</p>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {project.technologies?.map((technology) => (
                <TechnologyChip key={technology} technology={technology} />
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-2 p-2">
            {project.repository && (
              <Button asChild size="sm" variant="secondary">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  Repo
                  <RiGitRepositoryLine />
                </a>
              </Button>
            )}
            {project.link && (
              <Button asChild size="sm" variant="secondary">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  Visit
                  <AiOutlineLink />
                </a>
              </Button>
            )}
            {project.slug && (
              <Button asChild size="sm" variant="secondary">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-1"
                >
                  Details
                  <AiOutlineZoomIn />
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsPage;
