import React from 'react';

// Set by API
interface VideoProps {
  videoM4v?: string;
  videoWebm?: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

const Video: React.FC<VideoProps> = ({
  videoM4v,
  videoWebm,
  poster = 'https://picsum.photos/1920/1080',
  autoPlay,
  muted,
  loop,
  className,
}: VideoProps) => {
  if (!className) {
    className =
      'absolute inset-0 object-cover min-w-full min-h-full opacity-30';
  }

  return (
    <video
      className={className}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
    >
      <source src={videoWebm} type="video/webm; codecs=vp9" />
      <source src={videoM4v} type="video/mp4; codecs=hvc1" />
    </video>
  );
};

export default Video;
