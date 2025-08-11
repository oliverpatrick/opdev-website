<script lang="ts">
  import NavMenu from '$lib/components/nav-menu.svelte';
  import Carousel from '$lib/components/carousel.svelte';
  import FooterControls from '$lib/components/footer.svelte';
	import Avatar from '$lib/components/avatar.svelte';

  const cardItemsMap = {
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
    "Github Projects": [
      { title: "Online Friends", image: "/friends/online.jpg" },
      { title: "Recently Played", image: "/friends/recent.jpg" },
      { title: "Friend Requests", image: "/friends/requests.jpg" },
      { title: "Find Friends", image: "/friends/find.jpg" }
    ],
    "Github Contributions": [
      { title: "New Releases", image: "/video/new.jpg" },
      { title: "Popular Movies", image: "/video/movies.jpg" },
      { title: "TV Shows", image: "/video/tv.jpg" },
      { title: "My Videos", image: "/video/mine.jpg" }
    ],
    "Marketplace": [
      { title: "Call of Duty Black Ops", image: "/games/blackops.jpg" },
      { title: "Gears of War", image: "/games/gearsofwar.jpg" },
      { title: "Red Dead Redemption", image: "/games/rdr.jpg" },
      { title: "Halo Reach", image: "/games/halo.jpg" },
      { title: "FIFA 11", image: "/games/fifa.jpg" }
    ],
    "My Blog": [
      { title: "System Settings", image: "/system/settings.jpg" },
      { title: "Storage", image: "/system/storage.jpg" },
      { title: "Network Settings", image: "/system/network.jpg" },
      { title: "Account Management", image: "/system/account.jpg" }
    ]
  };

  let activeNavIndex = 0;

  // Get the current nav item name and corresponding card items
  const navItems = Object.keys(cardItemsMap);
  $: currentNavItem = navItems[activeNavIndex];
  $: currentCardItems = cardItemsMap[currentNavItem as keyof typeof cardItemsMap] || [];
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white space-y-6 w-full">
  <div class="flex flex-col gap-6">
    <NavMenu items={navItems} bind:activeIndex={activeNavIndex} />
    <Carousel cardItems={currentCardItems} />
    <Avatar />
  </div>
  <FooterControls />
</div>
