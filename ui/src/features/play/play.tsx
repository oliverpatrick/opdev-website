"use client";

import React from "react";
import { useGithubRepos } from "./api/get-github-repos";
import { useRepoFilters } from "./hooks/use-repo-filters";
import { RepoSearchFilters, RepoList } from "./components";
import { Spinner } from "@/components/ui/loaders/spinner";
import ErrorRetry from "@/components/error/error-retry";
import Link from "next/link";

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
        <Spinner size="xl" message="Loading repositories..." />
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
      {/* <div className="flex flex-col items-center mb-8">
        Want to play a{" "}
        <Link href="/wordle">
          <span className="font-bold animate-pulse">game?</span>
        </Link>
      </div> */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          GitHub Repositories
        </h1>
        <p className="text-gray-600">
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
