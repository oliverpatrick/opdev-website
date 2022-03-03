import Link from 'next/link';
import React from 'react';
import { IconButton } from '../Button/IconButton';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 dark:bg-gray-900 z-10">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer text-gray-900 dark:text-white">
              OLIVER
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                PATRICK
              </span>
              <p>Dev</p>
            </div>
          </Link>
          <button
            className="cursor-pointer p-2 ml-3 text-xl text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 border-transparent focus:outline-none focus:outline-none outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div
          className={
            'lg:flex flex-grow items-center' + (open ? ' flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="z-40 flex flex-end flex-col lg:flex-row list-none lg:ml-auto">
            <li className="drop-shadow-2xl">
              <a href="mailto:opphdev@gmail.com">
                <IconButton text="Contact Me">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pr-1 h-5 w-5 text-lg leading-lg text-gray-900 dark:text-white opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </IconButton>
              </a>
            </li>
            <li className="">
              <a
                className="mx-3 py-2 flex items-center border-b border-gray-100 text-xs uppercase font-bold leading-snug text-gray-900 dark:text-white hover:opacity-75"
                href="#pablo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pr-1 h-5 w-5 text-lg leading-lg text-white hover:text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <Link href="/portfolio">Portfolio</Link>
              </a>
            </li>
            <li className="drop-shadow-2xl">
              <a
                className="mx-3 py-2 flex items-center border-b border-gray-100 text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
                href="#pablo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pr-1 h-5 w-5 text-lg leading-lg text-black dark:text-white hover:opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <Link href="/resume">CV</Link>
              </a>
            </li>
            <li className="drop-shadow-2xl">
              <a className="mx-3 py-2 flex items-center border-b border-gray-100 text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pr-1 h-5 w-5 text-lg leading-lg text-black dark:text-white hover:opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <Link href="/blog" passHref>
                  <span>Blog</span>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
