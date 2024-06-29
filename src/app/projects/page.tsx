import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { getAllProjectsFrontMatter } from '~/utils/projects';

const ProjectsPage = async () => {
  const projects = await getAllProjectsFrontMatter();

  return (
    <SimpleGrid minChildWidth="500px" spacing="40px" m={4}>
      {projects.map((project) => (
        <Card maxW="xxl" key={project.title} cursor="pointer">
          <CardBody>
            <Image
              src={project.thumbnail}
              alt={project.title}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{project.title}</Heading>
              <Text>{project.description}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              {project.repository && (
                <Button
                  as="a"
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer">
                  Repository
                </Button>
              )}
              {project.link && (
                <Button
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  Visit
                </Button>
              )}
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default ProjectsPage;
