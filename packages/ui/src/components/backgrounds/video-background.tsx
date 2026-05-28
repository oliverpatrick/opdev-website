import { VideoHTMLAttributes } from "react";

type VideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "poster"> & {
  videoSourceM4v?: string;
  videoSourceWebm?: string;
  poster?: string;
  className?: string;
};

/**
 * A React component that renders a video background element with multiple source formats.
 *
 * This component supports both WebM and MP4 video formats and includes fallback handling.
 * It's designed to be used as a background video element with customizable styling and properties.
 *
 * @param videoSourceM4v - URL to the MP4 video source (H.265/HEVC codec)
 * @param videoSourceWebm - URL to the WebM video source (VP9 codec)
 * @param poster - Fallback poster image URL displayed before video loads. Defaults to a placeholder image
 * @param className - CSS classes for styling the video element. Defaults to absolute positioning with opacity
 * @param videoProps - Additional HTML video element properties that will be spread to the video tag
 *
 * @returns JSX element containing a video with multiple source formats, or null if no video sources provided
 *
 * @example
 * ```tsx
 * <VideoBackground
 *   videoWebm="/path/to/video.webm"
 *   videoM4v="/path/to/video.mp4"
 *   poster="/path/to/poster.jpg"
 *   autoPlay
 *   muted
 *   loop
 * />
 * ```
 */
const VideoBackground: React.FC<VideoProps> = ({
  videoSourceM4v,
  videoSourceWebm,
  poster = "https://picsum.photos/1920/1080",
  className = "absolute inset-0 object-cover min-w-full min-h-full opacity-30",
  ...videoProps
}) => {
  if (!videoSourceM4v && !videoSourceWebm) {
    return null;
  }

  return (
    <video className={className} poster={poster} playsInline {...videoProps}>
      {videoSourceWebm && (
        <source src={videoSourceWebm} type="video/webm; codecs=vp9" />
      )}
      {videoSourceM4v && (
        <source src={videoSourceM4v} type="video/mp4; codecs=hvc1" />
      )}
    </video>
  );
};

export default VideoBackground;
