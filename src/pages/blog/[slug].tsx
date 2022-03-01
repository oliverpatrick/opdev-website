import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Link from "next/link";
import { IPost } from "../../types/post";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import styles from "../../styles/Blog.module.css";

const PostPage: NextPage<IPost> = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}: IPost) => {
  return (
    <>
      <Link href="/">
        <a className={styles.btn + styles.btn_back}>Go Back</a>
      </Link>
      <div className={styles.card + styles.card_page}>
        <h1 className={styles.post_title}>{title}</h1>
        <div className={styles.post_date}>Posted on {date}</div>
        <img src={cover_image} alt="" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("_posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("_posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
};

export default PostPage;
