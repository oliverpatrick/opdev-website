import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from './logo';
import Link from '../Link';
import MobileNav from './mobile-nav';
import ThemeSwitch from './theme-switch';
import SearchButton from './search-button';

const Header = () => {
  let headerClass =
    'flex items-center w-full bg-white dark:bg-dark justify-between py-10';
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50';
  }

  return (
    <header className={headerClass}>
      <Logo />
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-fit items-center space-x-4 overflow-x-auto sm:flex sm:space-x-5 md:max-w-fit lg:max-w-fit">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
