import Image from 'next/image';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import { IPost } from '../../types/IPost';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Layout from '../../components/layouts/content';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

const PostPage: NextPage<IPost> = ({
  frontmatter: { title, date, cover_image },
  slug,
  content
}: IPost) => {
  if (!content) {
    content = 'Error! Sorry no content is available!';
  }

  return (
    <Layout title={slug}>
      <Container maxW="container.lg">
        <Heading>{title}</Heading>
        <Text fontSize={12}>Posted on {date}</Text>
        <Box w="100%" display="flex" justifyContent="center">
          <Image
            width={700}
            height={350}
            style={{ display: 'flex', maxWidth: '100%', height: 'auto' }}
            src={cover_image}
            alt={title}
            className="grid-item-thumbnail"
            loading="lazy"
          />
        </Box>
        <Prose dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('_posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('_posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content
    }
  };
};

export default PostPage;
