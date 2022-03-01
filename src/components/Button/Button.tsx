import React from "react";

type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return <button type="button" className="text-center uppercase border bg-green-600 hover:bg-green-700 text-gray-100 font-bold py-2 px-4 inline-flex items-center">{text}</button>;
}
