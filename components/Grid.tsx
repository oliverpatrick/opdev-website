import { ReactNode } from 'react';
import NextLink from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

interface IPostGridItem {
  children?: ReactNode;
  href: string;
  title: string;
  thumbnail: StaticImageData;
  timestamp: ReactNode;
}

export const PostGridItem = ({
  children,
  href,
  title,
  thumbnail,
  timestamp
}: IPostGridItem) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        width={230}
        height={130}
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text fontWeight={600} mt={2}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={12} m={2}>
        {children}
      </Text>
      <Text fontWeight={600} fontSize={10}>
        Posted on: {timestamp}
      </Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }: any) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
