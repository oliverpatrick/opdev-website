import Image from "../common/Image";
import Video from "./video-background";

type BackgroundProps = {
  video?: boolean;
  poster: string;
  children?: React.ReactNode;
  className?: string;
  alt?: string;
};

/**
 * A full-screen background component that displays an image with optional video overlay.
 * The component creates a hero section with centered content over a background image.
 *
 * @param props - The component props
 * @param props.video - Whether to display a video overlay on top of the background image
 * @param props.poster - The source URL for the background image
 * @param props.children - The content to display over the background
 * @param props.className - Additional CSS classes to apply to the section element
 * @param props.alt - Alternative text for the background image for accessibility
 *
 * @returns A JSX section element with background image/video and centered content
 *
 * @example
 * ```tsx
 * <Background
 *   poster="/hero-bg.jpg"
 *   video={true}
 *   alt="Hero background"
 * >
 *   <h1>Welcome to our site</h1>
 * </Background>
 * ```
 */
function Background({
  video = false,
  poster,
  children,
  className = "",
  alt = "Background image",
}: BackgroundProps) {
  return (
    <div
      className={`font-poppins relative left-0 top-0 mb-6 flex h-screen items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {video && <Video />}
        <Image
          src={poster}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          width={1920}
          height={1080}
          priority
        />
      </div>
      {children && <div>{children}</div>}
    </div>
  );
}

export default Background;
