import { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa6';
import { FaRaspberryPi } from 'react-icons/fa6';
import { FaCss3Alt } from 'react-icons/fa6';
import { FaHtml5 } from 'react-icons/fa6';
import { FaChrome } from 'react-icons/fa6';
import { RiNextjsLine } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { RiFirebaseFill } from 'react-icons/ri';
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
    backgroundColor: '#2B6CB0',
    color: '#BEE3F8',
    icon: FaReact,
    label: 'React',
  },
  [Technology.TypeScript]: {
    backgroundColor: '#2C5282',
    color: '#90CDF4',
    icon: SiTypescript,
    label: 'TypeScript',
  },
  [Technology.Next]: {
    backgroundColor: '#171923',
    color: '#E2E8F0',
    icon: RiNextjsLine,
    label: 'Next.js',
  },
  [Technology.Tailwind]: {
    backgroundColor: '#3182CE',
    color: '#BEE3F8',
    icon: RiTailwindCssFill,
    label: 'Tailwind CSS',
  },
  [Technology.MatterJS]: {
    backgroundColor: '#38A169',
    color: '#C6F6D5',
    icon: SiMatterdotjs,
    label: 'Matter.js',
  },
  [Technology.Vite]: {
    backgroundColor: '#805AD5',
    color: '#E9D8FD',
    icon: SiVite,
    label: 'Vite',
  },
  [Technology.NodeJS]: {
    backgroundColor: '#276749',
    color: '#9AE6B4',
    icon: FaNodeJs,
    label: 'Node.js',
  },
  [Technology.Redux]: {
    backgroundColor: '#553C9A',
    color: '#D6BCFA',
    icon: SiRedux,
    label: 'Redux',
  },
  [Technology.MSSQL]: {
    backgroundColor: '#2D3748',
    color: '#E2E8F0',
    icon: SiMicrosoftsqlserver,
    label: 'MSSQL',
  },
  [Technology.Printing]: {
    backgroundColor: '#718096',
    color: '#EDF2F7',
    icon: TbCube3dSphere,
    label: '3D Printing',
  },
  [Technology.Python]: {
    backgroundColor: '#2C5282',
    color: '#ECC94B',
    icon: FaPython,
    label: 'Python',
  },
  [Technology.RaspberryPi]: {
    backgroundColor: '#C53030',
    color: '#FED7D7',
    icon: FaRaspberryPi,
    label: 'Raspberry Pi',
  },
  [Technology.Arduino]: {
    backgroundColor: '#3182CE',
    color: '#9AE6B4',
    icon: SiArduino,
    label: 'Arduino',
  },
  [Technology.HTML]: {
    backgroundColor: '#e34c26',
    color: '#fce8e0',
    icon: FaHtml5,
    label: 'HTML',
  },
  [Technology.CSS]: {
    backgroundColor: '#274de5',
    color: '#bcccf7',
    icon: FaCss3Alt,
    label: 'CSS',
  },
  [Technology.Firebase]: {
    backgroundColor: '#ff9103',
    color: '#dd2c01',
    icon: RiFirebaseFill,
    label: 'Firebase',
  },
  [Technology.ChromeAPI]: {
    backgroundColor: '#057ccc',
    color: '#fcea00',
    icon: FaChrome,
    label: 'Chrome API',
  },
};

export const TechnologyChip = ({ technology }: { technology: Technology }) => {
  const tech = TECHNOLOGY_CHIP_MAP[technology];
  return (
    <Badge
      color={tech.color}
      backgroundColor={tech.backgroundColor}
      boxShadow={`inset 0 0 0px 1px ${tech.color}`}
      rounded="md"
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
