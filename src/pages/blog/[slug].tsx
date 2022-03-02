import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { IPost } from '../../types/post';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const PostPage: NextPage<IPost> = ({
  frontmatter: { title, date, cover_image },
  slug,
  content
}: IPost) => {
  console.log(slug);
  return (
    <div className="absolute top-16">
      <h1 className="">{title}</h1>
      <div className="">Posted on {date}</div>
      <img src={cover_image} alt="" />
      <div className="post-body">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </div>
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
