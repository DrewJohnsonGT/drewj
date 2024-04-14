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
  { label: 'Games', value: 'games' },
  {
    label: 'Contact',
    value: 'contact',
  },
];

export const PUG_SEARCH =
  'https://www.google.com/search?biw=1618&bih=916&tbm=isch&sa=1&ei=IgAyXc7oI5HbtAaFpoaoDQ&q=cute+pugs&oq=cute+pugs&gs_l=img.12..0l10.3742.4211..6198...0.0..0.98.467.5......0....1..gws-wiz-img.......0i7i30.RXCuQBPhb7U&ved=0ahUKEwjOgb-Uw8HjAhWRLc0KHQWTAdUQ4dUDCAY';

export const LINKED_IN_URL = 'https://www.linkedin.com/in/sdrewjohnson/';
export const GITHUB_URL = 'https://github.com/DrewJohnsonGT/';
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
