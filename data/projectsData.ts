interface Project {
  title: string;
  githubSlug?: string;
  description: string;
  href?: string;
  thumbnail?: string;
  liveHref?: string;
}

// const projectsData: Project[] = [
//   {
//     title: 'A Search Engine',
//     description: `What if you could look up any information in the world? Webpages, images, videos
//     and more. Google has many features to help you find exactly what you're looking
//     for.`,
//     thumbnail: '/static/images/google.png',
//     href: 'https://www.google.com',
//   },
//   {
//     title: 'The Time Machine',
//     description: `Imagine being able to travel back in time or to the future. Simple turn the knob
//     to the desired date and press "Go". No more worrying about lost keys or
//     forgotten headphones with this simple yet affordable solution.`,
//     thumbnail: '/static/images/time-machine.jpg',
//     href: '/blog/the-time-machine',
//   },
// ]

const projectsData: Project[] = [
  {
    title: 'Utility Tool',
    githubSlug: 'oliverpatrick/utility-tool',
    description:
      'Desktop utility application built in winforms. Complete with disc formatter. Cache cleaner. Temporary file remover. Disc Defragger.',
    href: 'https://github.com/oliverpatrick/utility-tool',
    liveHref: '',
    thumbnail: '/static/images/utility.webp',
  },
  {
    title: 'Discord Bot (Deprecated)',
    githubSlug: 'oliverpatrick/landscape-discord-bot',
    description:
      'Discord bot, build from the discord.js library. Youtube support, Weather and Recipe API integration. Inclusion of coinflip and dice roll randomiser',
    href: 'https://github.com/oliverpatrick/landscape-discord-bot',
    liveHref: '',
    thumbnail: '/static/images/discord_logo.webp',
  },
  {
    title: 'Work Admin Panel',
    githubSlug: 'oliverpatrick/employee-dashboard',
    description:
      'Professional dashboard for booking holidays, employee information and, team information with chain of command.',
    href: 'https://github.com/oliverpatrick/employee-dashboard.git',
    liveHref: 'https://oliverpatrick.github.io/employee-dashboard/',
    thumbnail: '/static/images/work-dashboard.webp',
  },
  {
    title: 'Gym App/Day by Day Social',
    description: '{placement}',
    href: '',
    liveHref: '',
    thumbnail: '',
  },
];

const githubContributions: Project[] = [
  {
    title: 'RuneLite/Enhanced-Discord-Notifications',
    githubSlug: 'oliverpatrick/Enhanced-Discord-Notifications',
    description:
      'Extension of the popular RuneLite plugin to notify the player for collection logs and other options missed by the original plugin.',
    href: 'https://github.com/oliverpatrick/Enhanced-Discord-Notifications',
    thumbnail: '/static/images/runelite.webp',
  },
  {
    title: 'OSRS ColorBot',
    description:
      'Extension of the popular RuneLite plugin to add additional chat commands for the player to use.',
    href: 'https://github.com/kelltom/OS-Bot-COLOR/pull/108',
    thumbnail: '/static/images/osbotcolor.png',
  },
];

export { projectsData, githubContributions };
