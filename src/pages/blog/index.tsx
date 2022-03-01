import type { NextPage } from "next";
import Head from "next/head";
import Post from "../../components/Post/Post";
import { sortByDate } from "../../utils/sortByDate";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import styles from "../../styles/Blog.module.css";
import { IPost } from "../../types/post";

type BlogProps = {
  posts: [IPost];
};

const Blog: NextPage<BlogProps> = ({ posts }: BlogProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oliver Patrick (Dev) - Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.posts}>
        {posts.map((post: any, index: number) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("_posts"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("_posts", fileName),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default Blog;
