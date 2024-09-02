import {
  projectsData,
  githubContributions,
} from '@/data/projectsData';
import ProjectCard from '@/components/project-card';
import { genPageMetadata } from 'app/seo';
import PageLayout from '@/layouts/page-layout';

export const metadata = genPageMetadata({ title: 'Projects' });

export default function Projects() {
  return (
    <PageLayout>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Projects I've worked on.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <ProjectCard
                key={d.title}
                title={d.title}
                githubSlug={d.githubSlug}
                description={d.description}
                thumbnail={d.thumbnail}
                href={d.href}
                liveHref={d.liveHref}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Github Contributions
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Contributions to other projects
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {githubContributions.map((d) => (
              <ProjectCard
                key={d.title}
                title={d.title}
                description={d.description}
                thumbnail={d.thumbnail}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
