import { IPost } from '../types/IPost';

export const sortByDate = (a: IPost, b: IPost) => {
  return (
    new Date(b.frontmatter.date).getTime() -
    new Date(a.frontmatter.date).getTime()
  );
};
