'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ProfileCardInfo } from './profile-card-info';
import Link from 'next/link';
// import Link from '../Link'
// import { SpotifyNowPlaying } from './SpotifyNowPlaying'

export function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return;

    const { clientX, clientY } = e;
    const { width, height, x, y } =
      ref.current.getBoundingClientRect();
    const mouseX = Math.abs(clientX - x);
    const mouseY = Math.abs(clientY - y);
    const rotateMin = -15;
    const rotateMax = 15;
    const rotateRange = rotateMax - rotateMin;

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    };

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' });
  }, []);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;
    current.addEventListener('mousemove', onMouseMove);
    current.addEventListener('mouseleave', onMouseLeave);
    return () => {
      if (!current) return;
      current.removeEventListener('mousemove', onMouseMove);
      current.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseLeave, onMouseMove]);

  return (
    <div
      className="relative z-10 mb-8 flex scale-100 flex-col items-center justify-center p-2 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15]"
      ref={ref}
      // style={{ perspective: '600px' }}
    >
      <div
        style={style}
        // xl:rounded-full
        className={clsx(
          'flex flex-col overflow-hidden rounded-full border-2 border-dark transition-all duration-200 ease-out dark:border-white',
          'shadow-demure dark:shadow-mondegreen bg-white dark:bg-dark',
          'w-56 outline outline-1 outline-gray-100 dark:outline-gray-600 sm:w-72'
        )}
      >
        <Image
          src={'/static/images/calgary.png'}
          alt={'Oliver Patrick'}
          width={300}
          height={300}
          style={{
            objectPosition: '100% 50%',
            objectFit: 'cover',
            width: '100%',
            // height: '100%',
            // aspectRatio: '10 / 7',
          }}
          priority
        />
        {/* <SpotifyNowPlaying /> */}
        <span className="h- bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      </div>
      <ProfileCardInfo />
    </div>
  );
}
