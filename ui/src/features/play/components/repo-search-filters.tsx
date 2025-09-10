"use client";

import React from "react";
import { Input, Select } from "@/components/ui/form";

export interface RepoSearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortBy: string;
  onSortChange: ({ value }: { value: "name" | "stars" | "updated" }) => void;
  languageFilter: string;
  onLanguageChange: (value: string) => void;
  availableLanguages: string[];
  resultCount: number;
}

export const RepoSearchFilters: React.FC<RepoSearchFiltersProps> = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  languageFilter,
  onLanguageChange,
  availableLanguages,
  resultCount,
}) => {
  return (
    <div className="mb-6 space-y-4">
      <Input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearchChange(e.target.value)
        }
        className="bg-primary w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-secondary"
      />

      <div className="flex flex-wrap gap-4">
        <Select
          value={sortBy}
          onChange={(value: string) =>
            onSortChange({
              value: value as "name" | "stars" | "updated",
            })
          }
          className="bg-primary px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-secondary"
          options={[
            { value: "name", label: "Sort by Name" },
            { value: "stars", label: "Sort by Stars" },
            { value: "updated", label: "Sort by Updated" },
          ]}
        />

        <Select
          value={languageFilter}
          onChange={(value: string) => onLanguageChange(value)}
          className="bg-primary px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-secondary"
          options={[
            { value: "", label: "All Languages" },
            ...availableLanguages.map(language => ({
              value: language,
              label: language,
            })),
          ]}
        />
      </div>

      <div className="text-sm text-primary/80">
        Showing <span className="font-medium">{resultCount}</span> repositories
      </div>
    </div>
  );
};

export default RepoSearchFilters;
