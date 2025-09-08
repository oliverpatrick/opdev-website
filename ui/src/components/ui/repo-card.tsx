import { GitHubRepo } from "@/types/api";
import React from "react";

type RepoCardProps = {
  repo: GitHubRepo;
};

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className="w-full max-w-md rounded-2xl shadow-md bg-white dark:bg-gray-800 p-6 transition hover:shadow-lg">
      {/* Repo name with link */}
      <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {repo.name}
        </a>
      </h2>

      {/* Description */}
      {repo.description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {repo.description}
        </p>
      )}

      {/* Repo details */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        {repo.language && (
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>👀 {repo.watchers_count}</span>
      </div>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {repo.topics.map((topic: string) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoCard;
