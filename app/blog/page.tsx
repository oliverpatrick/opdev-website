import ListLayout from '@/layouts/ListLayoutWithTags';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { genPageMetadata } from 'app/seo';
import tagData from 'app/tag-data.json';
import Tag from '@/components/Tag';
import Link from 'next/link';
import { slug } from 'github-slugger';
import Header from '@/components/navbar/header';
import PageLayout from '@/layouts/page-layout';

const POSTS_PER_PAGE = 5;

export const metadata = genPageMetadata({ title: 'Blog' });

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs));
  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort(
    (a, b) => tagCounts[b] - tagCounts[a]
  );

  return (
    <PageLayout>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
      <div className="flex items-center justify-start space-x-1 divide-y-0 divide-gray-200 text-center dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 text-center md:space-y-5">
          <h1 className="border-r-2 px-2 text-xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:border-r-2 md:px-6 md:text-xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mx-1">
                <Tag text={t} />
                <Link
                  href={`/blog/${slug(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`}
                >
                  {` (${tagCounts[t]})`}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
