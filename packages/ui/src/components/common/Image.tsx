import NextImage, { ImageProps } from "next/image";

interface ImagePropsExtended extends ImageProps {
  basePath?: string;
}

const Image: React.FC<ImagePropsExtended> = ({
  basePath,
  src,
  ...rest
}: ImagePropsExtended) => (
  <NextImage src={`${basePath || ""}${src}`} {...rest} />
);

export default Image;
