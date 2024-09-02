import { Authors, allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import AuthorLayout from '@/layouts/AuthorLayout';
import { coreContent } from 'pliny/utils/contentlayer';
import { genPageMetadata } from 'app/seo';
import PageLayout from '@/layouts/page-layout';
import Timeline from '@/components/about/timeline';

export const metadata = genPageMetadata({ title: 'About' });

export default function Page() {
  const author = allAuthors.find(
    (p) => p.slug === 'default'
  ) as Authors;
  const mainContent = coreContent(author);

  return (
    <PageLayout>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <Timeline />
      </AuthorLayout>
    </PageLayout>
  );
}
