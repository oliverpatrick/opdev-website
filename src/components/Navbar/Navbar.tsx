import Link from 'next/link';
import React from 'react';
import { IconButton } from '../Button/IconButton';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 z-50">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer text-slate-50">
              OLIVER
              <span className="stroke-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl font-extrabold whitespace-nowrap">
                PATRICK
              </span>
              <p>Dev</p>
            </div>
          </Link>
          <button
            className="cursor-pointer p-2 ml-3 text-xl text-slate-50 rounded-full lg:hidden hover:bg-gradient-to-r from-pink-600 to-violet-700 border-transparent focus:outline-none outline-none"
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
          className={'lg:flex grow items-center' + (open ? ' flex' : ' hidden')}
          id="example-navbar-danger"
        >
          <ul className="z-40 flex flex-end flex-col lg:flex-row list-none lg:ml-auto">
            <li className="drop-shadow-2xl">
              <a
                href="mailto:opphdev@gmail.com"
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
              >
                <IconButton
                  text="Contact Me"
                  className="text-center uppercase border bg-transparent hover:bg-gray-700 font-bold py-2 px-4 inline-flex items-center rounded-3xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pr-1 h-5 w-5 text-lg leading-lg text-slate-50 opacity-75"
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
            <li className="drop-shadow-2xl">
              <Link href="/">
                <a
                  onBlur={() => setOpen(false)}
                  onFocus={() => setOpen(true)}
                  className="mx-3 py-2 flex items-center border-b border-gray-100 text-xs uppercase font-bold leading-snug text-slate-50 hover:opacity-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pr-1 h-5 w-5 text-lg leading-lg text-slate-50 hover:opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li className="drop-shadow-2xl">
              <Link href="/portfolio">
                <a
                  onBlur={() => setOpen(false)}
                  onFocus={() => setOpen(true)}
                  className="mx-3 py-2 flex items-center border-b border-gray-100 text-xs uppercase font-bold leading-snug text-slate-50 hover:opacity-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pr-1 h-5 w-5 text-lg leading-lg text-slate-50 hover:opacity-75"
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
                  <span>Portfolio</span>
                </a>
              </Link>
            </li>
            <li className="drop-shadow-2xl">
              <Link href="/blog" passHref>
                <a
                  onBlur={() => setOpen(false)}
                  onFocus={() => setOpen(true)}
                  className="mx-3 py-2 flex items-center border-b border-gray-100 text-xs uppercase font-bold leading-snug text-slate-50 hover:opacity-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pr-1 h-5 w-5 text-lg leading-lg text-slate-50 hover:opacity-75"
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
                  <span>Blog</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
