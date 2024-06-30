import { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { SiMatterdotjs } from 'react-icons/si';
import { SiVite } from 'react-icons/si';
import { Badge, Icon, Text } from '@chakra-ui/react';
import { Technology } from '~/types';

const TECHNOLOGY_CHIP_MAP: Record<
  Technology,
  { icon?: IconType; label: string; color: string; backgroundColor: string }
> = {
  [Technology.React]: {
    backgroundColor: 'blue.600',
    color: 'blue.100',
    icon: FaReact,
    label: 'React',
  },
  [Technology.TypeScript]: {
    backgroundColor: 'blue.700',
    color: 'blue.200',
    icon: SiTypescript,
    label: 'TypeScript',
  },
  [Technology.Next]: {
    backgroundColor: 'gray.900',
    color: 'gray.200',
    icon: RiNextjsLine,
    label: 'Next.js',
  },
  [Technology.Tailwind]: {
    backgroundColor: 'blue.500',
    color: 'blue.100',
    icon: RiTailwindCssFill,
    label: 'Tailwind CSS',
  },
  [Technology.MatterJS]: {
    backgroundColor: 'green.500',
    color: 'green.100',
    icon: SiMatterdotjs,
    label: 'Matter.js',
  },
  [Technology.Vite]: {
    backgroundColor: 'purple.500',
    color: 'purple.100',
    icon: SiVite,
    label: 'Vite',
  },
};

export const TechnologyChip = ({ technology }: { technology: Technology }) => {
  const tech = TECHNOLOGY_CHIP_MAP[technology];
  return (
    <Badge
      color={tech.color}
      backgroundColor={tech.backgroundColor}
      variant="subtle"
      sx={{
        alignContent: 'center',
        display: 'inline-flex',
        gap: '0.15rem',
        justifyContent: 'center',
      }}
      p={1}
      m={1}>
      {tech?.icon && (
        <Icon fontSize={22} color={tech.color}>
          <tech.icon />
        </Icon>
      )}
      <Text color={tech.color}>{tech?.label}</Text>
    </Badge>
  );
};
