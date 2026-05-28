import { useState, useMemo } from "react";
import { GitHubRepo } from "@/types/api";

export interface UseRepoFiltersProps {
  repos: GitHubRepo[] | undefined;
}

export const useRepoFilters = ({ repos }: UseRepoFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "stars" | "updated">("stars");
  const [languageFilter, setLanguageFilter] = useState("");

  const filteredAndSortedRepos = useMemo(() => {
    if (!repos) return [];

    const filtered = repos.filter((repo: GitHubRepo) => {
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
  }, [repos, searchTerm, sortBy, languageFilter]);

  const availableLanguages = useMemo(() => {
    if (!repos) return [];
    const languages = [
      ...new Set(
        repos.map((repo: GitHubRepo) => repo.language).filter(Boolean)
      ),
    ];
    return languages.sort() as string[];
  }, [repos]);

  return {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    languageFilter,
    setLanguageFilter,
    filteredAndSortedRepos,
    availableLanguages,
  };
};

export default useRepoFilters;
