<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';

	let isPortrait = false;
	let isVideoReady = false;
	let hasError = false;
	let videoElement: HTMLVideoElement;

	const landscapeVideoSrc = 'http://media.w3.org/2010/05/sintel/trailer.ogv';
	const portraitVideoSrc =
		'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

	function checkOrientation() {
		isPortrait = window.innerHeight > window.innerWidth;
		console.log('Orientation changed:', isPortrait ? 'Portrait' : 'Landscape');
	}

	function handleVideoEnd() {
		goto('/dashboard');
	}

	function handleSkip() {
		goto('/dashboard');
	}

	function handleKeyPress(event: KeyboardEvent) {
		handleSkip();
	}

	function handleClick() {
		handleSkip();
	}

	function handleTouch(event: TouchEvent) {
		// Handle touch events for mobile
		event.preventDefault();
		handleSkip();
	}

	function handleVideoLoad() {
		isVideoReady = true;

		if (videoElement) {
			videoElement.play().catch(console.error);
		}
	}

	onMount(() => {
		checkOrientation();

		window.addEventListener('resize', checkOrientation);
		window.addEventListener('orientationchange', () => {
			setTimeout(checkOrientation, 100);
		});

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('resize', checkOrientation);
			window.removeEventListener('orientationchange', checkOrientation);
			window.removeEventListener('keydown', handleKeyPress);
		};
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', checkOrientation);
			window.removeEventListener('orientationchange', checkOrientation);
			window.removeEventListener('keydown', handleKeyPress);
		}
	});

	$: videoSrc = isPortrait ? portraitVideoSrc : landscapeVideoSrc;
</script>

<svelte:head>
	<title>Orientation Video</title>
</svelte:head>

<div
	class="fixed inset-0 z-50 flex cursor-pointer touch-manipulation items-center justify-center bg-black"
	on:click={handleClick}
	on:touchstart={handleTouch}
	role="button"
	tabindex="0"
	on:keydown={handleKeyPress}
>

	{#if !isVideoReady}
		<div class="px-4 text-center text-lg text-white sm:text-2xl">Loading video...</div>
	{/if}

	<video
		bind:this={videoElement}
		src={videoSrc}
		class="h-full w-full object-cover"
		autoplay
		muted
		playsinline
		on:ended={handleVideoEnd}
		on:loadeddata={handleVideoLoad}
		on:error={() => {
			console.error('Video failed to load');
			goto('/dashboard');
		}}
	>
		<track kind="captions" />
		Your browser does not support the video tag.
	</video>

	<div
		class="bg-opacity-50 absolute top-4 right-4 rounded-lg bg-black px-2 py-1 text-xs text-white sm:px-4 sm:py-2 sm:text-sm"
	>
		<span class="hidden sm:inline">Click or press any key to skip</span>
		<span class="sm:hidden">Tap to skip</span>
	</div>

	<div
		class="bg-opacity-50 absolute top-4 left-4 rounded-lg bg-black px-2 py-1 text-xs text-white sm:px-4 sm:py-2 sm:text-sm"
	>
		{isPortrait ? 'Portrait' : 'Landscape'} Mode
	</div>
</div>

<style>
	video:fullscreen {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	}
</style>
