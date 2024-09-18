import { IconType } from 'react-icons';
import { FaApple, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  FaChrome,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaRaspberryPi,
} from 'react-icons/fa6';
import { IoLogoAndroid } from 'react-icons/io';
import {
  RiFirebaseFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from 'react-icons/ri';
import {
  SiArduino,
  SiCapacitor,
  SiIonic,
  SiMatterdotjs,
  SiMicrosoftsqlserver,
  SiP5Dotjs,
  SiRedux,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
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
  [Technology.iOS]: {
    backgroundColor: '#000000',
    color: '#ffffff',
    icon: FaApple,
    label: 'iOS',
  },
  [Technology.Android]: {
    backgroundColor: '#3ddc84',
    color: '#185634',
    icon: IoLogoAndroid,
    label: 'Android',
  },
  [Technology.Capacitor]: {
    backgroundColor: '#3880ff',
    color: '#ffffff',
    icon: SiCapacitor,
    label: 'Capacitor',
  },
  [Technology.Ionic]: {
    backgroundColor: '#3880ff',
    color: '#ffffff',
    icon: SiIonic,
    label: 'Ionic',
  },
  [Technology.P5]: {
    backgroundColor: '#6b1b32',
    color: '#fa9bb6',
    icon: SiP5Dotjs,
    label: 'P5.js',
  },
};

export const TechnologyChip = ({ technology }: { technology: Technology }) => {
  const tech = TECHNOLOGY_CHIP_MAP[technology];
  return (
    <Badge
      color={tech.color}
      backgroundColor={tech.backgroundColor}
      boxShadow={`inset 0 0 0px 2px ${tech.color}`}
      rounded="sm"
      size="xs"
      sx={{
        alignItems: 'center',
        display: 'inline-flex',
        gap: '0.15rem',
        justifyContent: 'center',
      }}
      p={1}
      m={0.5}>
      {tech?.icon && (
        <Icon fontSize={22} color={tech.color}>
          <tech.icon />
        </Icon>
      )}
      <Text color={tech.color}>{tech?.label}</Text>
    </Badge>
  );
};
