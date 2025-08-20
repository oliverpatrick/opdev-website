<script lang="ts">
  import { onMount } from 'svelte';
  import { githubAPI } from '$lib/utils/github';

  let totalForks = 0;
  let totalStars = 0;
  let image = '';
  let name = '';
  let loading = true;

  onMount(async () => {
    try {
      const { user, stats } = await githubAPI.getAllData();

      image = user.avatar_url || '';
      name = user.login || '';
      totalForks = stats.totalForks;
      totalStars = stats.totalStars;
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    } finally {
      loading = false;
    }
  });
</script>

<div class="absolute top-0 right-0 flex p-1 sm:p-3">
  <div class="flex items-center space-x-2 rounded-lg p-2 text-white sm:space-x-4 sm:p-8 lg:p-16">
    <!-- Gamertag & Gamerscore -->
    <div class="order-2 flex flex-col text-right sm:order-1 sm:text-left">
      <span class="text-sm font-bold sm:text-lg lg:text-xl">{name}</span>
      <div class="flex flex-row-reverse items-center text-xs sm:flex-row sm:text-base lg:text-lg">
        <span class="ml-1 font-bold text-green-400 sm:ml-0">Forks</span>
        <span class="sm:ml-1">{totalForks}</span>
      </div>
      <div class="flex flex-row-reverse items-center text-xs sm:flex-row sm:text-base lg:text-lg">
        <span class="ml-1 font-bold text-green-400 sm:ml-0">Stars</span>
        <span class="sm:ml-1">{totalStars}</span>
      </div>
    </div>

    <!-- Avatar -->
    <div
      class="order-1 h-12 w-12 flex-shrink-0 overflow-hidden rounded-sm border-2 border-green-400 sm:order-2 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
    >
      <img src={image} alt={`${image} avatar`} class="h-full w-full object-cover" />
    </div>
  </div>
</div>
