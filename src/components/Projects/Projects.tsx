import React from 'react';
import { Button } from '../Button/Button';

interface IProjectCardProps {
  title: string;
  techStack: string[];
  exerpt: string;
  href: string;
  live: boolean;
  liveHref: string;
}

interface IProjectProps {
  projects: IProjectCardProps[] | any;
}

function ProjectCard({
  title,
  techStack,
  exerpt,
  href,
  live,
  liveHref
}: IProjectCardProps) {
  return (
    <div className="flex flex-col m-5 p-4 w-80 border-2 border-gray-300 bg-gray-500 text-white">
      <h3 className="pt-4 text-xl font-semibold">{title}</h3>
      <p>
        {techStack.map((stack: string, id: number) => (
          <li key={id}>{stack}</li>
        ))}
      </p>
      <p className="my-4">{exerpt}</p>
      <div className="flex flex-row">
        <a href={href}>
          <Button text="Source" />
        </a>
        {live ? (
          <a href={liveHref}>
            <Button text="Live" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function Projects({ projects }: IProjectProps) {
  return (
    <div className="flex w-full justify-center items-center flex-col bg-gray-200">
      <h1 className="uppercase text-center text-4xl my-8 font-semibold">
        Projects
      </h1>
      <div className="flex justify-center flex-wrap max-w-5xl">
        {projects.map((project: IProjectCardProps, id: number) => (
          <ProjectCard
            key={id}
            title={project.title}
            techStack={project.techStack}
            exerpt={project.exerpt}
            href={project.href}
            live={project.live}
            liveHref={project.liveHref}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
