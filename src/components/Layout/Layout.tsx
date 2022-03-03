import React from 'react';
// import { useDarkMode } from '../../utils/hooks/useDarkMode';

import Navbar from '../Navbar/Navbar';
// import Switch from '../Switch/Switch';

type ILayout = {
  children: any;
};

export default function Layout({ children }: ILayout) {
  // const [darkMode, setDarkMode] = useDarkMode();

  return (
    <>
      <Navbar />
      {/* <div className="z-10 fixed right-10 bottom-10 h-12 w-12 flex items-center justify-center text-2xl p-1 border-2 shadow-lg rounded-full">
        <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
      </div> */}
      <main>{children}</main>
    </>
  );
}
