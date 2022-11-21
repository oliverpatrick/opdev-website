import type { NextPage } from 'next';
import NextLink from 'next/link';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { IPagePostsProps, IPost } from '../../types/IPost';
import { PostGridItem } from '../../components/Grid';
import Layout from '../../components/layouts/content';
import { sortByDate } from '../../utils/sortByDate';

import {
  Box,
  Button,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid
} from '@chakra-ui/react';
import Section from '../../components/Section';

const LinkTag = ({ text, href }: any) => {
  return (
    <NextLink href={href} passHref scroll={false}>
      <LinkBox>
        <Box>
          <LinkOverlay href={href} target="_blank">
            <Button color="#f4f4f4" _hover={{ color: 'pink' }}>
              {text}
            </Button>
          </LinkOverlay>
        </Box>
      </LinkBox>
    </NextLink>
  );
};

const Posts: NextPage<IPagePostsProps> = ({ posts }: IPagePostsProps) => {
  return (
    <Layout title="Posts">
      <Container maxW="container.md">
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {posts.map((post: IPost, idx: number) => (
              <PostGridItem
                key={idx}
                href={`/posts/${post.slug}`}
                title={post.frontmatter.title}
                thumbnail={post.frontmatter.cover_image}
                timestamp={post.frontmatter.date}
              >
                {post.frontmatter.excerpt}
              </PostGridItem>
            ))}
          </SimpleGrid>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Principles
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <LinkTag
              href="https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"
              text="SOLID"
            />
          </SimpleGrid>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Design
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <LinkTag
              href="https://en.wikipedia.org/wiki/Domain-driven_design"
              text="Domain Driven Design"
            />
          </SimpleGrid>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Testing
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <LinkTag
              href="https://en.wikipedia.org/wiki/Test-driven_development"
              text="Test Driven Development"
            />
            <LinkTag
              href="https://en.wikipedia.org/wiki/Behavior-driven_development"
              text="Behaviour Driven Development"
            />
          </SimpleGrid>
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

export default Posts;
