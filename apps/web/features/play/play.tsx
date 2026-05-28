"use client";

import React from "react";
import { useGithubRepos } from "./api/get-github-repos";
import { useRepoFilters } from "./hooks/use-repo-filters";
import { RepoSearchFilters, RepoList } from "./components";
import { Loader } from "@repo/ui/components/loader/loader";
import ErrorRetry from "../../components/error/error-retry";

function Play() {
  const reposQuery = useGithubRepos();

  const {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    languageFilter,
    setLanguageFilter,
    filteredAndSortedRepos,
    availableLanguages,
  } = useRepoFilters({ repos: reposQuery.data });

  if (reposQuery.isLoading) {
    return (
      <div className="flex items-center justify-center py-8 w-full h-full">
        <Loader message="Loading repositories..." />
      </div>
    );
  }

  if (reposQuery.isError) {
    return (
      <ErrorRetry
        message={`Error loading repositories: ${reposQuery.error.message}`}
        onRetry={() => reposQuery.refetch()}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">
          GitHub Repositories
        </h1>
        <p className="text-primary">
          Explore my open source projects and contributions
        </p>
      </div>

      <RepoSearchFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortBy={sortBy}
        onSortChange={({ value }) => setSortBy(value)}
        languageFilter={languageFilter}
        onLanguageChange={setLanguageFilter}
        availableLanguages={availableLanguages}
        resultCount={filteredAndSortedRepos.length}
      />

      <RepoList repos={filteredAndSortedRepos} />
    </div>
  );
}

export default Play;
