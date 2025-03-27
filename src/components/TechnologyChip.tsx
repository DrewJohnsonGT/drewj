import { IconType } from 'react-icons';
import { DiMsqlServer } from 'react-icons/di';
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
  SiP5Dotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiShadcnui,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { TbCube3dSphere } from 'react-icons/tb';
import { Badge } from '~/components/ui/Badge';
import { Technology } from '~/types';

const TECHNOLOGY_CHIP_MAP: Record<
  Technology,
  { backgroundColor: string; color: string; icon?: IconType; label: string }
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
  [Technology.PostgreSQL]: {
    backgroundColor: '#2C5282',
    color: '#90CDF4',
    icon: SiPostgresql,
    label: 'PostgreSQL',
  },
  [Technology.Prisma]: {
    backgroundColor: '#090a15',
    color: '#E2E8F0',
    icon: SiPrisma,
    label: 'Prisma',
  },
  [Technology.Vercel]: {
    backgroundColor: '#171923',
    color: '#E2E8F0',
    icon: SiVercel,
    label: 'Vercel',
  },
  [Technology.Shadcn]: {
    backgroundColor: '#171923',
    color: '#E2E8F0',
    icon: SiShadcnui,
    label: 'Shadcn',
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
    label: 'Tailwind',
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
    icon: DiMsqlServer,
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
      className="inline-flex items-center justify-center gap-[0.15rem] p-1 px-2"
      style={{
        backgroundColor: tech.backgroundColor,
        boxShadow: `0px 0px 0px 2px ${tech.color}`,
        color: tech.color,
      }}
    >
      {tech?.icon && (
        <tech.icon style={{ color: tech.color }} className="text-[22px]" />
      )}
      <span style={{ color: tech.color }}>{tech?.label}</span>
    </Badge>
  );
};
