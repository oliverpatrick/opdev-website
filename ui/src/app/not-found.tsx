"use client";

import { Button } from "@/components/ui/button/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="text-center animate-bounce mb-8">
        <div className="text-9xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
          404
        </div>
      </div>

      <div className="text-center mb-8 animate-pulse">
        <h1 className="text-4xl font-bold mb-4">Oops! Page Lost in Space 🚀</h1>
        <p className="text-xl text-gray-300 mb-2">
          This page has drifted into the digital void...
        </p>
        <p className="text-lg text-gray-400">
          But don&apos;t worry, we&apos;ll help you find your way back!
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <Link
          href="/"
          replace
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Return Home
        </Link>
        <Button
          onClick={() => window.history.back()}
          className="bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Go Back
        </Button>
      </div>

      <div className="mt-12 text-6xl animate-spin">🛸</div>
    </div>
  );
};

export default NotFoundPage;
