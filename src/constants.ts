import { SVGProps, JSX } from 'react';
import * as LOGOS from './assets/logos';
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { FaRegAddressCard } from 'react-icons/fa6';
import { FiLayers } from 'react-icons/fi';
import { RiFileUserLine } from 'react-icons/ri';

export const ROUTES = [
  {
    icon: FaHome,
    label: 'Home',
    title: '',
    value: '',
  },
  {
    icon: FiLayers,
    label: 'Projects',
    value: 'projects',
  },
  {
    icon: RiFileUserLine,
    label: 'Resume',
    value: 'resume',
  },
  { icon: FaUserCircle, label: 'About', value: 'about' },
  {
    icon: FaRegAddressCard,
    label: 'Contact',
    value: 'contact',
  },
];

export const PUG_SEARCH =
  'https://www.google.com/search?biw=1618&bih=916&tbm=isch&sa=1&ei=IgAyXc7oI5HbtAaFpoaoDQ&q=cute+pugs&oq=cute+pugs&gs_l=img.12..0l10.3742.4211..6198...0.0..0.98.467.5......0....1..gws-wiz-img.......0i7i30.RXCuQBPhb7U&ved=0ahUKEwjOgb-Uw8HjAhWRLc0KHQWTAdUQ4dUDCAY';

export const LINKED_IN_URL = 'https://www.linkedin.com/in/drewjohnsongt/';
export const GITHUB_URL = 'https://github.com/DrewJohnsonGT/';
export const INSTAGRAM_URL = 'https://www.instagram.com/sdrewjohnson/';

export const MANDO_VIDEO_URL = 'https://www.youtube.com/embed/I97jYWG01Ss';

export const SKILLS: {
  icon: string;
  logo: (props: SVGProps<SVGElement>) => JSX.Element;
  score: number;
}[] = [
  { icon: 'angular', logo: LOGOS.Angular, score: 20 },
  { icon: 'aws', logo: LOGOS.AWS, score: 80 },
  { icon: 'aws2', logo: LOGOS.AWS2, score: 80 },
  { icon: 'css', logo: LOGOS.CSS, score: 90 },
  { icon: 'cucumber', logo: LOGOS.Cucumber, score: 30 },
  { icon: 'cypress', logo: LOGOS.Cypress, score: 45 },
  { icon: 'docker', logo: LOGOS.Docker, score: 80 },
  { icon: 'firebase', logo: LOGOS.Firebase, score: 50 },
  { icon: 'gcp', logo: LOGOS.GCP, score: 55 },
  { icon: 'git', logo: LOGOS.Git, score: 75 },
  { icon: 'graphql', logo: LOGOS.GraphQL, score: 90 },
  { icon: 'html', logo: LOGOS.HTML, score: 95 },
  { icon: 'java', logo: LOGOS.Java, score: 40 },
  { icon: 'javascript', logo: LOGOS.JavaScript, score: 95 },
  { icon: 'jenkins', logo: LOGOS.Jenkins, score: 45 },
  { icon: 'jest', logo: LOGOS.Jest, score: 50 },
  { icon: 'kafka', logo: LOGOS.Kafka, score: 15 },
  { icon: 'mssql', logo: LOGOS.MSSQL, score: 30 },
  { icon: 'netsuite', logo: LOGOS.NetSuite, score: 20 },
  { icon: 'newrelic', logo: LOGOS.NewRelic, score: 40 },
  { icon: 'nextjs', logo: LOGOS.Next, score: 90 },
  { icon: 'nodejs', logo: LOGOS.NodeJS, score: 90 },
  { icon: 'openai', logo: LOGOS.OpenAI, score: 50 },
  { icon: 'python', logo: LOGOS.Python, score: 80 },
  { icon: 'react', logo: LOGOS.React, score: 95 },
  { icon: 'redux', logo: LOGOS.Redux, score: 75 },
  { icon: 'scala', logo: LOGOS.Scala, score: 45 },
  { icon: 'sql', logo: LOGOS.SQL, score: 55 },
  { icon: 'storybook', logo: LOGOS.Storybook, score: 60 },
  { icon: 'tailwind', logo: LOGOS.Tailwind, score: 80 },
  { icon: 'terraform', logo: LOGOS.Terraform, score: 60 },
  { icon: 'typescript', logo: LOGOS.TypeScript, score: 80 },
];
