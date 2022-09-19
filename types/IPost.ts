export interface IPost {
  frontmatter: {
    [key: string]: any;
  };
  slug: string;
  content?: string;
}

export interface IPagePostsProps {
  posts: [IPost];
}
