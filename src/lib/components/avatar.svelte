<script lang="ts">
    import { onMount } from 'svelte';
    
    let totalForks = 0;
    let totalStars = 0;
    let image = '';
    let name = '';
    let loading = true;
    
    onMount(async () => {
        try {
            const response = await fetch('https://api.github.com/users/oliverpatrick/repos');
            const repos = await response.json();
            const githubResponse = await fetch('https://api.github.com/users/oliverpatrick');
            const githubData = await githubResponse.json();
            console.log('Fetched repos:', githubData);

            image = githubData.avatar_url || '';
            name = githubData.login || '';

            totalForks = repos.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);
            totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
        } finally {
            loading = false;
        }
    });
</script>

<div 
class="absolute right-0 top-0 flex p-3"
>


<div class="flex items-center space-x-4 text-white p-16 rounded-lg">
    <!-- Gamertag & Gamerscore -->
    <div class="flex flex-col">
        <span class="text-xl font-bold">{name}</span>
        <div class="flex items-center text-lg">
            <span>{totalForks}</span>
            <span class="ml-1 text-green-400 font-bold">Forks</span>
        </div>
        <div class="flex items-center text-lg">
            <span>{totalStars}</span>
            <span class="ml-1 text-green-400 font-bold">Stars</span>
        </div>
    </div>

    <!-- Avatar -->
    <div class="w-20 h-20 rounded-sm overflow-hidden border-2 border-green-400 flex-shrink-0">
        <img src={image} alt={`${image} avatar`} class="object-cover w-full h-full" />
    </div>
    
</div>
</div>