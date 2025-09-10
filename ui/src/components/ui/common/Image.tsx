import NextImage, { ImageProps } from "next/image";

const basePath = process.env.BASE_PATH;

const Image: React.FC<ImageProps> = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`${basePath || ""}${src}`} {...rest} />
);

export default Image;
