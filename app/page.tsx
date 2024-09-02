import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import Main from './main';
import Background from '@/components/homepage/background';
import SectionContainer from '@/components/SectionContainer';
import { ProfileCard } from '@/components/profile-card/profile-card';
import MobileNav from '@/components/navbar/mobile-nav';
import ThemeSwitch from '@/components/navbar/theme-switch';

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);
  return (
    <>
      <div className="absolute left-0 top-0 z-40 flex w-full flex-row justify-end">
        <ThemeSwitch></ThemeSwitch>
        <MobileNav />
      </div>
      <Background poster={'/static/images/canada/mountains.jpg'}>
        <ProfileCard />
      </Background>
      <SectionContainer>
        <Main posts={posts} />
      </SectionContainer>
    </>
  );
}
