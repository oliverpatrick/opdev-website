import { queryOptions, useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { GitHubRepo } from "@/types/api";

export const getGithubRepos = (): Promise<GitHubRepo[]> => {
  return api.get("https://api.github.com/users/oliverpatrick/repos");
};

export const getGithubReposQueryOptions = () => {
  return queryOptions({
    queryKey: ["repos"],
    queryFn: getGithubRepos,
  });
};

type UseGithubReposOptions = {
  queryConfig?: QueryConfig<typeof getGithubReposQueryOptions>;
};

export const useGithubRepos = ({ queryConfig }: UseGithubReposOptions = {}) => {
  return useQuery({
    ...getGithubReposQueryOptions(),
    ...queryConfig,
  });
};
