import siteMetadata from '@/data/siteMetadata';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="relative">
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="font-semibold">
            <span className="text-xl font-bold">O</span>
            LIVER
            <span className="text-xl font-bold">P</span>
            ATRICK
            <span className="to-lime-600' bg-gradient-to-r from-emerald-500 bg-clip-text text-sm font-bold text-transparent">
              Dev.co.uk
            </span>
          </div>
        </div>
      </Link>
      {siteMetadata.openToWork && (
        <div className="absolute right-0 top-6 xl:hidden">
          <Link href={'/cv'}>
            <div className="focus:ring-ring text-primary ml-0 inline-flex max-w-full items-center rounded-full bg-transparent px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors duration-150 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-green-400/50 sm:ml-0 md:ml-0">
              <div
                className="mr-1 flex aspect-square h-[14px] w-[14px] animate-pulse rounded-full border border-green-500 "
                aria-hidden="true"
              >
                <div className="m-auto h-2 w-2 rounded-full bg-green-500 dark:bg-green-400"></div>
              </div>
              <span className="inline animate-pulse whitespace-nowrap dark:text-white ">
                Open To Work
              </span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Logo;
