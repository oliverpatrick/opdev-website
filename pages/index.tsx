/* eslint-disable react/no-unescaped-entities */
import NextLink from 'next/link';
import Image from 'next/image';

import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Layout from '../components/layouts/content';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { PostGridItem } from '../components/Grid';

import Typewriter from 'typewriter-effect';
import { sortByDate } from '../utils/sortByDate';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPagePostsProps } from '../types/IPost';
import Timeline from '../components/Timeline';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop: any) =>
    ['width', 'height', 'src', 'alt'].includes(prop)
});

const Home: NextPage<IPagePostsProps> = ({ posts }: IPagePostsProps) => {
  return (
    <Layout title="Home">
      <Container maxW="container.md">
        <Box
          display={{ md: 'flex' }}
          background={"url('../public/images/hero.webp')"}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Box flexGrow={1}>
            <Heading as="h2" fontFamily="inherit" variant="page-title">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("I'm Oliver Patrick").start();
                }}
              />
            </Heading>
            <p>I talk to computers. 🗣💻</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/avatar.webp"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interests
          </Heading>
          <Paragraph>
            Art, Music,{' '}
            <Link
              href="https://www.instagram.com/lifeinorangeart"
              target="_blank"
            >
              Drawing
            </Link>
            , Playing Guitar, Electric Skating, PC Building, Tinkering, Fitness,
            Climbing and Getting Dopamine.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Life Story
          </Heading>
          <Paragraph>
            Going to further education after finishing high school in 2011 to
            study Art & Design. After the year was complete I found myself back
            to my roots with working on and near computers with my second and
            third year being in Creative Media Studies. Here I found myself
            working with 3DS Max, Maya, Photoshop and dabbling in Unreal Engine.
          </Paragraph>
          <Paragraph>
            However. This was not to last as I hit the employment world and
            spent four long years jumping from labourer, to salesman, to banker.
            Whilst this allowed me to pick a multitude of useful skills. This
            would all leads me to the chapter we all would like to know; "How
            did I get into coding" I joined a bootcamp in early 2019 and landed
            my first developer job at EMIS. Starting in April of the same year
            I've been working with React.js ever since and have goals to become
            an expert!
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Timeline />

          <Box alignItems="center" my={4}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button
                rightIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    style={{ height: '1rem', width: '1rem' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                }
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                color="#f4f4f4"
                _hover={{
                  bgGradient: 'none',
                  bgColor: 'purple'
                }}
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {posts.slice(0.2).map((post, idx) => (
            <PostGridItem
              key={idx}
              href={`/posts/${post.slug}`}
              title={post.frontmatter.title}
              thumbnail={post.frontmatter.cover_image}
              timestamp={post.frontmatter.date}
            />
          ))}
        </SimpleGrid>

        <Box alignItems="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button
              rightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  style={{ height: '1rem', width: '1rem' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              }
              as="button"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              color="#f4f4f4"
              _hover={{
                bgGradient: 'none',
                bgColor: 'purple'
              }}
            >
              Recent posts
            </Button>
          </NextLink>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Find me on the internet
          </Heading>
          <List display="flex">
            <ListItem>
              <Link href="https://github.com/oliverpatrick" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={
                    <svg
                      aria-hidden="true"
                      style={{ height: '15px', width: '15px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                  }
                >
                  @oliverpatrick
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/dev_op" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={
                    <svg
                      aria-hidden="true"
                      style={{ height: '15px', width: '15px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  }
                >
                  @dev_op
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/oliverjpatrick/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={
                    <svg
                      aria-hidden="true"
                      style={{ height: '15px', width: '15px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  }
                >
                  @oliverjpatrick
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/lifeinorangeart/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={
                    <svg
                      aria-hidden="true"
                      style={{ height: '15px', width: '15px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  }
                >
                  @lifeinorangeart
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('_posts'));

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('_posts', fileName),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  };
}

export default Home;
