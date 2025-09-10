"use client";

import React from "react";
import { GitHubRepo } from "@/types/api";
import RepoCard from "@/components/ui/cards/repo-card";

export interface RepoListProps {
  repos: GitHubRepo[];
  className?: string;
}

export const RepoList: React.FC<RepoListProps> = ({
  repos,
  className = "",
}) => {
  if (repos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No repositories found matching your criteria.
      </div>
    );
  }

  console.log(repos);

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {repos.map((repo: GitHubRepo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
