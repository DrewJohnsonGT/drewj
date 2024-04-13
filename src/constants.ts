export const HEADER_HEIGHT = 50;
export const FOOTER_HEIGHT = 40;
export const MOBILE_SCREEN_WIDTH = 820;
export const MIN_SCREEN_WIDTH = 325;
export const ARTICLE_WIDTH = 600;
export const MAX_LIST_WIDTH = 600;

export const ROUTES = [
  {
    label: 'Posts',
    value: 'posts',
  },
  {
    label: 'Projects',
    value: 'projects',
  },
  {
    label: 'Resume',
    value: 'resume',
  },
  { label: 'About', value: 'about' },
  {
    label: 'Contact',
    value: 'contact',
  },
];

export const COLORS = {
  DARK_ORANGE: '#d25401',
  DARK_ORANGE_TEXT: '#5b5242',
  DISABLED: '#dfdfdf',
  DISABLED_TEXT: '#b2b2b2',
  GITHUB_LIGHT_PURPLE: '#b802b8',
  GITHUB_PURPLE: '#7c007c',
  GREEN: '#2ea44f',
  INSTAGRAM: '#e4405f',
  INSTAGRAM_LIGHT: '#f092a7',
  LIGHT_ORANGE: '#ff9651',
  LINKED_IN_BLUE: '#0072b1',
  LINKED_IN_LIGHT_BLUE: '#00a0dc',
  OFF_WHITE: '#f7f8fa',
  ORANGE: '#ff7400',
  PURPLE: '#212173',
  RED: '#ff0000',
  TWITTER_BLUE: '#00aced',
  TWITTER_LIGHT_BLUE: '#1dcaff',
  YELLOW: '#ff9900',
};

export const PUG_SEARCH =
  'https://www.google.com/search?biw=1618&bih=916&tbm=isch&sa=1&ei=IgAyXc7oI5HbtAaFpoaoDQ&q=cute+pugs&oq=cute+pugs&gs_l=img.12..0l10.3742.4211..6198...0.0..0.98.467.5......0....1..gws-wiz-img.......0i7i30.RXCuQBPhb7U&ved=0ahUKEwjOgb-Uw8HjAhWRLc0KHQWTAdUQ4dUDCAY';

export const LINKED_IN_URL = 'https://www.linkedin.com/in/sdrewjohnson/';
export const GITHUB_URL = 'https://github.com/DrewJohnsonGT/';
export const TWITTER_URL = 'https://twitter.com/drewjohnsongt';
export const INSTAGRAM_URL = 'https://www.instagram.com/sdrewjohnson/';

export const PROJECTS = [
  {
    client: 'Schenck Process',
    clientLogo: 'SchenckLogo',
    clientWebsite: 'https://www.schenckprocess.com',
    description: `Internal tool used by engineering and sales teams to appropriately 
                size and report on various explosion vents. Accepts a wide set of
                parameters and performs standards based calculations. Role based
                administrative systems allow lead engineers to handle standards
                updates with code changes`,
    image: 'Vent',
    location: 'Kansas City, KS',
    name: 'Explosion Vent Sizing Tool',
    tech: ['React', 'Redux', 'Node.js', 'SQL', 'IIS', 'HTML/CSS'],
    type: 'Web Application',
  },
  {
    client: 'Federal Aviation Administration',
    clientLogo: 'FAALogo',
    clientWebsite: 'https://www.faa.gov',
    description: `Utilized by Atlanta based air traffic controllers to reserve rooms for
             various events. Administrative roles can manipulate calendar events, with real-time
             updates to other team members. Support for repeat events and dynamic UI for mobile use.`,
    image: 'AirTraffic',
    location: 'Atlanta, GA',
    name: 'Room Scheduler',
    tech: ['React', 'Redux', 'FireBase', 'styled components', 'HTML/CSS'],
    type: 'Progressive Web Application ',
  },
  {
    client: 'Meridian Business Services',
    clientLogo: 'MeridianLogo',
    clientWebsite: 'https://www.meridianbusiness.com/',
    description: `Facilitate use of shared client NetSuite accounts by implementation 
                engineers by providing and tracking access. Administrative roles can
                assign access to others with abstracted/obfuscated login information.
                Prevents multi-logging of client accounts and the resulting loss of progress.`,
    image: 'ChromeNetSuite',
    location: 'Kansas City, KS',
    name: 'NetSuite Login Chrome Extension',
    tech: [
      'React',
      'Redux',
      'Chrome API',
      'Firebase',
      'styled components',
      'HTML/CSS',
    ],
    type: 'Chrome Extension',
  },
];
