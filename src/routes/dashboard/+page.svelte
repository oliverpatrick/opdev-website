<script lang="ts">
	import NavMenu from '$lib/components/nav-menu.svelte';
	import Carousel from '$lib/components/carousel.svelte';
	import FooterControls from '$lib/components/footer.svelte';
	import Avatar from '$lib/components/avatar.svelte';
	import { githubAPI, type GitHubRepo } from '$lib/utils/github';

	import { onMount } from 'svelte';

	let pRepos: GitHubRepo[] = [];
	let fRepos: GitHubRepo[] = [];

	onMount(async () => {
    try {
      const { personalRepos, forkedRepos } = await githubAPI.getUserStats();
			pRepos = personalRepos;
			fRepos = forkedRepos;

		} catch (error) {
			console.error('Error fetching repositories:', error);
		}
	});

  interface WelcomeCards {
    title: string;
    link: string;
    icon: string;
  }

  interface WorkExperienceCards {
    title: string;
    employer: string;
    durationOfEmployment: string;
    description: string;
    stack: string;
  }

  interface GithubRepoCards {
    title: string;
    description: string;
    stack: string;
    forks: string | number;
    stars: string | number;
  }

  interface GamesCards {
    title: string;
    
  }

  $: cardItemsMap = {
    "Welcome": [
      { title: "Contact", image: "/games/dashboard.jpg" },
      { title: "Github", image: "/games/recent.jpg" },
      { title: "LinkedIn", image: "/games/live.jpg" },
      { title: "About", image: "/games/profile.jpg" }
    ],
    "Work Experience": [
      { title: "Junior Software Engineer", image: "/community/friends.jpg" },
      { title: "Software Developer", image: "/community/messages.jpg" },
      { title: "Mid-Level Software Engineer", image: "/community/party.jpg" },
      { title: "Senior Software Engineer", image: "/community/feed.jpg" }
    ],
    "Github Projects": pRepos.map((personal: GitHubRepo) => {
      return {
        title: personal.name, 
        image: "/github/repo.jpg"
      };
    }),
    "Github Contributions": fRepos.map((forked: GitHubRepo) => {
      return {
        title: forked.name, 
        image: "/github/repo.jpg"
      };
    }),
    "Games": [
      { title: "Wordle", image: "/games/blackops.jpg" },
    ],
    "My Blog": [
      { title: "System Settings", image: "/system/settings.jpg" },
      { title: "Storage", image: "/system/storage.jpg" },
      { title: "Network Settings", image: "/system/network.jpg" },
      { title: "Account Management", image: "/system/account.jpg" }
    ]
  };

	let activeNavIndex = 0;

	$: navItems = Object.keys(cardItemsMap || {});
	$: currentNavItem = navItems[activeNavIndex] || '';
	$: currentCardItems = cardItemsMap?.[currentNavItem as keyof typeof cardItemsMap] || [];
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white w-full">
  <div class="flex flex-col gap-2 sm:gap-4 lg:gap-6 relative">
    <NavMenu items={navItems} bind:activeIndex={activeNavIndex} />
    <Carousel cardItems={currentCardItems} />
    <Avatar />
  </div>
  <FooterControls />
</div>
