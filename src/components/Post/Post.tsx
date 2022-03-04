import React from 'react';
import Link from 'next/link';

interface IPostProps {
  post: any;
}

function Post({ post }: IPostProps) {
  return (
    <div className="p-2 m-2 max-w-sm bg-gray-100 shadow-md">
      <Link href={`/blog/${post.slug}`} passHref>
        <img
          className="cursor-pointer"
          src={post.frontmatter.cover_image}
          alt=""
        />
      </Link>

      <div className="text-gray-500 font-light text-sm">
        Posted on {post.frontmatter.date}
      </div>

      <Link href={`/blog/${post.slug}`} passHref>
        <h3 className="font-semibold cursor-pointer">
          {post.frontmatter.title}
        </h3>
      </Link>

      <p className="my-3">{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} passHref>
        <a className="text-purple-700">Read More...</a>
      </Link>
    </div>
  );
}

export default Post;
