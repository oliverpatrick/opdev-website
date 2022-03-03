import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { IPost } from '../../types/post';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

const PostPage: NextPage<IPost> = ({
  frontmatter: { title, date, cover_image },
  slug,
  content
}: IPost) => {
  console.log(slug);
  return (
    <div className="absolute top-16 p-4 flex jusitfy-center items-center flex-col w-full">
      <div className="absolute top-4 left-4">
        <Link href="/blog">
          <a className="flex flex-row items-center text-purple-700 hover:text-purple-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
              />
            </svg>
            <p>Go back...</p>
          </a>
        </Link>
      </div>
      <h1 className="font-semibold text-2xl">{title}</h1>
      <div className="mb-10">Posted on {date}</div>
      <img src={cover_image} alt="" />
      <div className="mt-10 max-w-5xl min-w-min mb-40">
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
