import clsx from 'clsx';
import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Mastodon,
  Threads,
  Instagram,
} from './icons';

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        href
      ))
  )
    return null;

  const SocialSvg = components[kind];

  const hoverColors: { [key in keyof typeof components]: string } = {
    mail: 'hover:text-orange-500',
    github: 'hover:text-gray-800',
    facebook: 'hover:text-[#1877F2]',
    youtube: 'hover:text-youtube',
    linkedin: 'hover:text-linkedin',
    twitter: 'hover:text-[#1DA1F2]',
    x: 'hover:text-gray-900',
    mastodon: 'hover:text-[#6364FF]',
    threads: 'hover:text-black',
    instagram: 'hover:text-[#E1306C]',
  };

  const hoverColour = hoverColors[kind];

  return (
    <a
      className={
        'text-sm text-gray-500 transition hover:text-gray-600'
      }
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={clsx(
          `fill-current text-gray-700 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`,
          hoverColour
        )}
      />
    </a>
  );
};

export default SocialIcon;
