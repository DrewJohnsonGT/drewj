import { AiOutlineLink, AiOutlineZoomIn } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';
import Link from 'next/link';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
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
    <SimpleGrid minChildWidth="350px" spacing={4} className="container">
      {projectsSortedByDate.map((project) => (
        <Card maxW="xxl" key={project.title} p={1}>
          <CardBody p={2}>
            <Heading size="lg" textAlign="center" mb={2}>
              {project.title}
            </Heading>
            <Image
              src={project.banner}
              alt={project.title}
              borderRadius="lg"
              maxHeight={200}
              mx="auto"
            />
            <Stack mt="2" spacing="1">
              <Text lineHeight={1.25}>{project.description}</Text>
              <Box
                mt={2}
                justifyContent="center"
                alignItems="center"
                display="flex"
                flexWrap="wrap">
                {project.technologies?.map((technology) => (
                  <TechnologyChip key={technology} technology={technology} />
                ))}
              </Box>
            </Stack>
          </CardBody>
          <CardFooter p={2} justifyContent="center" alignItems="center">
            <ButtonGroup>
              {project.repository && (
                <Button
                  as="a"
                  size="sm"
                  href={project.repository}
                  rightIcon={<RiGitRepositoryLine />}
                  target="_blank"
                  variant="solid"
                  rel="noopener noreferrer">
                  Repo
                </Button>
              )}
              {project.link && (
                <Button
                  as="a"
                  size="sm"
                  variant="solid"
                  href={project.link}
                  rightIcon={<AiOutlineLink />}
                  target="_blank"
                  rel="noopener noreferrer">
                  Visit
                </Button>
              )}
              {project.slug && (
                <Link href={`/projects/${project.slug}`}>
                  <Button
                    size="sm"
                    variant="solid"
                    rightIcon={<AiOutlineZoomIn />}>
                    Details
                  </Button>
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
