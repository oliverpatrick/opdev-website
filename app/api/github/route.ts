// File: app/api/github/route.ts

import {
  GraphqlResponseError,
  graphql,
  type GraphQlQueryResponseData,
} from '@octokit/graphql';
import { NextResponse } from 'next/server';

// Define the GET request handler
export async function GET(request: Request) {
  console.log('url: ', request.url);
  const { searchParams } = new URL(request.url);
  console.log('Search Params: ', searchParams);
  const repo = searchParams.get('repo');

  console.log('Repo: ', repo);

  if (!repo) {
    return NextResponse.json(
      { error: 'Repository is required' },
      { status: 400 }
    );
  }

  if (!process.env.GITHUB_API_TOKEN) {
    return NextResponse.json(
      { message: 'Missing `GITHUB_API_TOKEN` env variable' },
      { status: 500 }
    );
  }

  let owner = 'oliverpatrick';
  let repositoryName = repo;

  if (repo.includes('/')) {
    [owner, repositoryName] = repo.split('/');
  }

  try {
    const { repository }: GraphQlQueryResponseData = await graphql(
      `
        query repository($owner: String!, $repo: String!) {
          repository(owner: $owner, name: $repo) {
            stargazerCount
            description
            homepageUrl
            languages(
              first: 10
              orderBy: { field: SIZE, direction: DESC }
            ) {
              edges {
                node {
                  color
                  name
                }
              }
            }
            name
            nameWithOwner
            url
            forkCount
            repositoryTopics(first: 20) {
              edges {
                node {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      `,
      {
        owner,
        repo: repositoryName,
        headers: {
          authorization: `token ${process.env.GITHUB_API_TOKEN}`,
        },
      }
    );

    // Format the repository languages and topics
    const formattedLanguages = repository.languages.edges.map(
      (edge) => ({
        color: edge.node.color,
        name: edge.node.name,
      })
    );

    const formattedTopics = repository.repositoryTopics.edges.map(
      (edge) => edge.node.topic.name
    );

    // Build the response object
    const repositoryData = {
      ...repository,
      languages: formattedLanguages,
      repositoryTopics: formattedTopics,
    };

    return NextResponse.json(
      { message: 'ok', repository: repositoryData },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof GraphqlResponseError) {
      return NextResponse.json(
        { message: error.errors![0].message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          message: 'Unable to fetch repo data: ' + error?.toString(),
        },
        { status: 500 }
      );
    }
  }
}
