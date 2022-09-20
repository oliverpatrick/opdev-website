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

interface IWorkGridItem {
  children?: ReactNode;
  title: string;
  thumbnail: string;
  href?: string;
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

export const WorkGridItem = ({
  children,
  title,
  thumbnail,
  href
}: IWorkGridItem) => (
  <Box w="100%" textAlign="center">
    <NextLink href={href ? href : `/projects/${title}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          width={230}
          height={130}
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="grid-item-thumbnail"
        />
        <LinkOverlay href={href ? href : `/projects/${title}`}>
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
