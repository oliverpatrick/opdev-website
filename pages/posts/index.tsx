import type { NextPage } from 'next';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { IPagePostsProps, IPost } from '../../types/IPost';
import { PostGridItem } from '../../components/Grid';
import Layout from '../../components/layouts/content';
import { sortByDate } from '../../utils/sortByDate';

import { Container, SimpleGrid } from '@chakra-ui/react';
import Section from '../../components/Section';

const Posts: NextPage<IPagePostsProps> = ({ posts }: IPagePostsProps) => {
  return (
    <Layout title="Posts">
      <Container>
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
