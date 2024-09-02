// import { Backpack, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import siteMetadata from '@/data/siteMetadata';
import { Typewriter } from '../homepage/typewriter';
import SocialIcon from '../social-icons';
import headerNavLinks from '@/data/headerNavLinks';
import Link from '../Link';

export function ProfileCardInfo() {
  return (
    <div className="flex flex-col items-center justify-center py-4 xl:px-6">
      <h3 className="bg-gradient-to-l from-emerald-500 to-lime-600 bg-clip-text text-6xl font-semibold text-transparent">
        Welcome!
      </h3>
      <div className="h-20">
        <Typewriter />
      </div>

      <div className="mb-3 mt-3 flex space-x-4">
        <SocialIcon
          kind="mail"
          href={`mailto:${siteMetadata.email}`}
          size={6}
        />
        <SocialIcon
          kind="linkedin"
          href={siteMetadata.linkedin}
          size={6}
        />
        <SocialIcon
          kind="youtube"
          href={siteMetadata.youtube}
          size={6}
        />
        <SocialIcon
          kind="github"
          href={siteMetadata.github}
          size={6}
        />
        <SocialIcon kind="x" href={siteMetadata.x} size={6} />
        <SocialIcon
          kind="instagram"
          href={siteMetadata.instagram}
          size={6}
        />
      </div>
      <div className="no-scrollbar hidden max-w-fit items-center space-x-4 overflow-x-auto sm:flex sm:space-x-5 md:max-w-fit lg:max-w-fit">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="block border-b border-dark p-1 font-medium text-gray-900 hover:border-primary-500 hover:text-primary-500 dark:border-white dark:text-gray-100 dark:hover:text-primary-400"
            >
              {link.title}
            </Link>
          ))}
      </div>
    </div>
  );
}
