import React from 'react';

import Navbar from '../Navbar/Navbar';
import Switch from '../Switch/Switch';

type ILayout = {
  children: any;
};

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      <div className="z-10 fixed right-10 bottom-10 h-12 w-12 flex items-center justify-center text-2xl p-1 border-2 shadow-lg rounded-full">
        <Switch />
      </div>
      <main>{children}</main>
    </>
  );
}

// bg-gradient-to-r from-cyan-500 to-blue-500
