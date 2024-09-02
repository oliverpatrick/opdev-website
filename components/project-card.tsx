'use client';

import { useEffect } from 'react';
import Image from './Image';
import Link from './Link';
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { GithubRepository } from '../interfaces/github-repository';
import Tag from './Tag';
import { Javascript, Typescript } from './stack-icons/icons';
// import getRepoData from 'app/api/github';
// import fetchGithubRepo from 'app/api/github';

interface ProjectCardProps {
  title: string;
  githubSlug?: string;
  description: string;
  thumbnail?: string;
  href?: string;
  liveHref?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  githubSlug = '',
  description,
  thumbnail,
  href,
  liveHref,
}: ProjectCardProps) => {
  console.log('Github Slug: ', githubSlug);
  const { data } = useSWR(`/api/github?repo=${githubSlug}`, fetcher);

  // console.log('Data: ', data);
  const repository: GithubRepository = data?.repository;
  console.log('repo: ', repository);
  // let data;
  // fetchGithubRepo()

  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${
          thumbnail && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {thumbnail &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={thumbnail}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={thumbnail}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {description}
          </p>

          {githubSlug && repository && (
            <>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Stack:
                </span>
                <div className="flex h-5 w-full flex-row justify-start">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {repository.languages.map((lang) => {
                      switch (lang.name) {
                        case 'TypeScript':
                          return <Typescript key={lang.name} />;
                        case 'JavaScript':
                          return <Javascript key={lang.name} />;
                      }
                    })}
                  </span>
                </div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="mt-2 flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Stars:
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {repository.stargazerCount}
                  </span>
                </div>
              </div>
            </>
          )}

          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
          {liveHref && (
            <Link
              href={liveHref}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Live demo ${title}`}
            >
              Live &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
