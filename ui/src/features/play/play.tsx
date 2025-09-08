"use client";

import React, { useState, useMemo } from "react";
import { useGithubRepos } from "./api/get-github-repos";
import { GitHubRepo } from "@/types/api";
import RepoCard from "@/components/ui/repo-card";

function Play() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "stars" | "updated">("stars");
  const [languageFilter, setLanguageFilter] = useState("");

  const reposQuery = useGithubRepos();

  const filteredAndSortedRepos = useMemo(() => {
    if (!reposQuery.data) return [];

    const filtered = reposQuery.data.filter((repo: GitHubRepo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ??
          false);
      const matchesLanguage =
        !languageFilter || repo.language === languageFilter;
      return matchesSearch && matchesLanguage;
    });

    return filtered.sort((a: GitHubRepo, b: GitHubRepo) => {
      switch (sortBy) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "updated":
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [reposQuery.data, searchTerm, sortBy, languageFilter]);

  const availableLanguages = useMemo(() => {
    if (!reposQuery.data) return [];
    const languages = [
      ...new Set(
        reposQuery.data.map((repo: GitHubRepo) => repo.language).filter(Boolean)
      ),
    ];
    return languages.sort();
  }, [reposQuery.data]);

  if (reposQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (reposQuery.isError) {
    return <div>Error: {reposQuery.error.message}</div>;
  }

  return (
    <div>
      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-wrap gap-4">
          <select
            value={sortBy}
            onChange={e =>
              setSortBy(e.target.value as "name" | "stars" | "updated")
            }
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="stars">Sort by Stars</option>
            <option value="updated">Sort by Updated</option>
          </select>

          <select
            value={languageFilter}
            onChange={e => setLanguageFilter(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Languages</option>
            {availableLanguages.map(language => (
              <option key={language} value={language!}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className="text-sm text-gray-600">
          Showing {filteredAndSortedRepos.length} repositories
        </div>
      </div>

      <div className="flex flex-wrap space-x-1 space-y-1">
        {filteredAndSortedRepos.map((repo: GitHubRepo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default Play;
