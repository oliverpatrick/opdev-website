import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IPostProps {
  post: any;
}

function Post({ post }: IPostProps) {
  return (
    <div className="card">
      <Image src={post.frontmatter.cover_image} alt="" />

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
}

export default Post;
