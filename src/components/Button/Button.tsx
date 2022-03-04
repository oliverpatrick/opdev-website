import React from 'react';

type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return (
    <button
      type="button"
      className="pointer-cursor mr-2 rounded-3xl text-center uppercase border bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-green-700 text-gray-100 font-bold py-2 px-4 inline-flex items-center focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
    >
      {text}
    </button>
  );
}
