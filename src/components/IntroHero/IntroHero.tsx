import React from 'react';
import Typewriter from 'typewriter-effect';

function IntroHero() {
  return (
    <section className="w-full h-screen">
      <video
        autoPlay
        muted
        playsInline
        className="object-cover h-full w-full absolute"
        poster="/images/poster.webp"
      >
        <source src="/videos/background_video.webm" />
      </video>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <div className="z-1 m-10 border-4 rounded-full w-52 h-52">
          <img
            className="rounded-full"
            src="/images/avatar.webp"
            height="208px"
            width="208px"
            alt="Profile Picture"
          />
        </div>
        <div className="text-white text-4xl mobile:text-2xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("I'm Oliver Patrick").start();
            }}
          />
        </div>
        <p className="text-4xl mobile:text-2xl text-gray-300">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Full Stack Developer
          </span>
        </p>
        <div className="flex flex-row items-center">
          <a href="mailto:opphdev@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="m-2 p-1 h-10 w-10 text-lg leading-lg text-white hover:opacity-75 hover:border-b-2"
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
          </a>
          <a href="https://www.linkedin.com/in/oliver-patrick-4b6bb4ba/">
            <svg
              className="m-2 p-1 h-10 w-10 text-lg leading-lg text-white hover:opacity-75 hover:border-b-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://github.com/oliverpatrick">
            <svg
              className="m-2 p-1 h-10 w-10 text-lg leading-lg text-white hover:opacity-75 hover:border-b-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroHero;
