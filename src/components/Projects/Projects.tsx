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

function Tag({ text }: any) {
  return (
    <div className="drop-shadow-lg m-1 p-1 px-2 text-xs h-auto w-auto border-green-600 border-2 bg-lime-600 bg-opacity-30">
      {text}
    </div>
  );
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
    <div className="flex flex-col justify-between m-5 p-4 w-80 border-6 border-white bg-slate-400 text-slate-50 drop-shadow-xl">
      <h3 className="text-xl font-semibold drop-shadow-md">{title}</h3>
      <div className="flex flex-wrap">
        {techStack.map((stack: string, id: number) => (
          <Tag key={id} text={stack}></Tag>
        ))}
      </div>
      <p className="my-4 drop-shadow-lg">{exerpt}</p>
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
    <div className="flex w-full justify-center items-center flex-col bg-slate-300">
      <h1 className="uppercase text-center text-5xl my-8 font-extrabold">
        <span className="drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Projects
        </span>
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
