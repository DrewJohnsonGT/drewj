import { getAllProjectsFrontMatter } from '~/utils/projects';

const ProjectsPage = async () => {
  const projects = await getAllProjectsFrontMatter();

  return <div>{JSON.stringify(projects)}</div>;
};

export default ProjectsPage;
