import { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa6';
import { FaRaspberryPi } from 'react-icons/fa6';
import { RiNextjsLine } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { SiMatterdotjs } from 'react-icons/si';
import { SiVite } from 'react-icons/si';
import { SiArduino } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { TbCube3dSphere } from 'react-icons/tb';
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
  [Technology.NodeJS]: {
    backgroundColor: 'green.700',
    color: 'green.200',
    icon: FaNodeJs,
    label: 'Node.js',
  },
  [Technology.Redux]: {
    backgroundColor: 'purple.700',
    color: 'purple.200',
    icon: SiRedux,
    label: 'Redux',
  },
  [Technology.MSSQL]: {
    backgroundColor: 'grey.700',
    color: 'grey.200',
    icon: SiMicrosoftsqlserver,
    label: 'MSSQL',
  },
  [Technology.Printing]: {
    backgroundColor: 'gray.500',
    color: 'gray.100',
    icon: TbCube3dSphere,
    label: '3D Printing',
  },
  [Technology.Python]: {
    backgroundColor: 'blue.700',
    color: 'yellow.400',
    icon: FaPython,
    label: 'Python',
  },
  [Technology.RaspberryPi]: {
    backgroundColor: 'red.600',
    color: 'red.100',
    icon: FaRaspberryPi,
    label: 'Raspberry Pi',
  },
  [Technology.Arduino]: {
    backgroundColor: 'blue.500',
    color: 'green.200',
    icon: SiArduino,
    label: 'Arduino',
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
