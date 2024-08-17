import { AiOutlineLink, AiOutlineZoomIn } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { Link } from 'react-transition-progress/next';
import {
  Box,
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
import { TechnologyChip } from '~/components/TechnologyChip';
import { getAllProjectsFrontMatter } from '~/utils/projects';

const ProjectsPage = async () => {
  const projects = await getAllProjectsFrontMatter();
  const projectsSortedByDate = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <SimpleGrid minChildWidth="350px" spacing="2rem" m={4}>
      {projectsSortedByDate.map((project) => (
        <Card maxW="xxl" key={project.title}>
          <CardBody p={4}>
            <Image
              src={project.banner}
              alt={project.title}
              borderRadius="lg"
              maxHeight={200}
              mx="auto"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{project.title}</Heading>
              <Text>{project.description}</Text>
              <Box>
                {project.technologies?.map((technology) => (
                  <TechnologyChip key={technology} technology={technology} />
                ))}
              </Box>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              {project.repository && (
                <Button
                  as="a"
                  href={project.repository}
                  rightIcon={<RiGitRepositoryLine />}
                  target="_blank"
                  rel="noopener noreferrer">
                  Repo
                </Button>
              )}
              {project.link && (
                <Button
                  as="a"
                  href={project.link}
                  rightIcon={<AiOutlineLink />}
                  target="_blank"
                  rel="noopener noreferrer">
                  Visit
                </Button>
              )}
              {project.slug && (
                <Link href={`/projects/${project.slug}`}>
                  <Button rightIcon={<AiOutlineZoomIn />}>Details</Button>
                </Link>
              )}
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default ProjectsPage;
