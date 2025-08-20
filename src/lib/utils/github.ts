export interface GitHubUser {
	login: string;
	avatar_url: string;
	name: string;
	bio: string;
	public_repos: number;
	followers: number;
	following: number;
}

export interface GitHubRepo {
	id: number;
	name: string;
	full_name: string;
	description: string;
	html_url: string;
	stargazers_count: number;
	forks_count: number;
	language: string;
	fork: boolean;
	created_at: string;
	updated_at: string;
}

export interface GitHubStats {
	totalForks: number;
	totalStars: number;
	personalRepos: GitHubRepo[];
	forkedRepos: GitHubRepo[];
}

class GitHubAPI {
	private baseUrl = 'https://api.github.com';
	private username: string;

	constructor(username: string) {
		this.username = username;
	}

	private async fetchWithErrorHandling<T>(url: string): Promise<T> {
		try {
			const response = await fetch(url, {
				headers: {
					Accept: 'application/vnd.github.v3+json'
				}
			});

			if (!response.ok) {
				throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
			}

			return await response.json();
		} catch (error) {
			console.error(`Error fetching from ${url}:`, error);
			throw error;
		}
	}

	async getUser(): Promise<GitHubUser> {
		return this.fetchWithErrorHandling<GitHubUser>(`${this.baseUrl}/users/${this.username}`);
	}

	async getRepos(): Promise<GitHubRepo[]> {
		return this.fetchWithErrorHandling<GitHubRepo[]>(`${this.baseUrl}/users/${this.username}/repos`);
	}

	async getUserStats(): Promise<GitHubStats> {
		const repos = await this.getRepos();

		const personalRepos = repos.filter((repo) => !repo.fork);
		const forkedRepos = repos.filter((repo) => repo.fork);

		const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
		const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

		return {
			totalForks,
			totalStars,
			personalRepos,
			forkedRepos
		};
	}

	async getAllData(): Promise<{ user: GitHubUser; stats: GitHubStats }> {
		const [user, stats] = await Promise.all([this.getUser(), this.getUserStats()]);

		return { user, stats };
	}
}

export const githubAPI = new GitHubAPI('oliverpatrick');

export { GitHubAPI };