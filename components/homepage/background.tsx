import React from 'react';
import Video from './video';
import Image from '../Image';

interface BackgroundProps {
  video?: boolean;
  poster: string;
  children: React.ReactNode;
}

function Background({ video, poster, children }: BackgroundProps) {
  return (
    <section className="font-poppins relative left-0 top-0 mb-6 flex h-screen items-center justify-center">
      <div className="absolute h-full w-full overflow-hidden">
        {video && <Video />}
        <Image
          src={poster}
          alt="poster"
          className="absolute inset-0 min-h-full min-w-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
      </div>
      <div className="z-10 px-8 text-center shadow-black drop-shadow-lg">
        {/* <p className="mb-4 text-sm uppercase">{smallTitle}</p>
        <h4 className="text-5xl">
          {mainTitle}
          {highlightText && (
            <span className="text-orange">{` ${highlightText}`}</span>
          )}
        </h4>
        <p className="mt-4 text-sm uppercase">{subTitle}</p> */}
        {children}
      </div>
    </section>
  );
}

export default Background;
