import { GitHubRepo } from "@/types/api";
import React from "react";
import { CodeForkIcon, StarIcon, WatcherIcon } from "../common/icons";
import { getLanguageColor } from "@/utils/helpers/language-brand-color.helper";

type RepoCardProps = {
  repo: GitHubRepo;
};

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className="flex flex-col justify-between box-border border border-secondary bg-primary m-2 p-5 text-sm flex-1 min-w-2xs rounded-b-lg">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <h2 className="mt-0 font-bold text-secondary hover:text-accent mb-2">
          {repo.name}
        </h2>
      </a>
      {repo.description ? (
        <p className="text-secondary/80 text-sm mb-4 line-clamp-2">
          {repo.description}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-secondary hover:text-accent-secondary/80 ml-1"
          >
            ...Read More
          </a>
        </p>
      ) : (
        <p className="text-secondary/80 text-sm mb-4 line-clamp-2">
          No description for this repository.
        </p>
      )}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {repo.topics.map((topic: string) => (
            <span
              key={topic}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-accent/20 hover:bg-accent/20 transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="flex flex-row items-center space-x-1">
          <div
            className="size-3 rounded-full "
            style={{
              background: getLanguageColor(
                // This is dirty but the api is incorrect.
                repo.language
                  ? repo.name === "OSRS-Bot-COLOR"
                    ? "Python"
                    : repo.language
                  : null
              ),
            }}
          />
          <div className="text-xs">{repo.language || "N/A"}</div>
        </div>

        <div className="flex flex-row space-x-4 mt-2">
          <div className="flex flex-row items-center space-x-1">
            <StarIcon className="w-4 h-4" />
            <span className="font-medium">{repo.stargazers_count}</span>
          </div>

          <div className="flex flex-row items-center space-x-1">
            <CodeForkIcon className="w-3 h-3" />
            <span className="font-medium">{repo.forks_count}</span>
          </div>

          <div className="flex flex-row items-center space-x-1">
            <WatcherIcon className="w-4 h-4" />
            <span className=" font-medium">{repo.watchers_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
