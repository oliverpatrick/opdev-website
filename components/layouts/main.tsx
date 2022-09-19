import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../navbar/Navbar';

interface ILayout {
  seoTitle: string;
  children: ReactNode;
  router: any;
}

export default function Layout({ seoTitle, children, router }: ILayout) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Olivers's homepage" />
        <meta name="author" content="Oliver Patrick" />
        <meta name="author" content="dev_op" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Oliver Patrick" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dev_op" />
        <meta name="twitter:creator" content="@dev_op" />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1520014889120677892/Wcfx6N9L_400x400.jpg"
        />
        <meta property="og:site_name" content="Oliver Patrick" />
        <meta name="og:title" content="Oliver Patrick" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1520014889120677892/Wcfx6N9L_400x400.jpg"
        />
        <title>{seoTitle}</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
}
