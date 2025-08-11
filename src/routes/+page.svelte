<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  let isPortrait = false;
  let isVideoReady = false;
  let hasError = false;
  let videoElement: HTMLVideoElement;

  // Placeholder video URLs - you'll need to replace these with actual video files
  // For testing, you can use any online video URLs or local video files
  const landscapeVideoSrc = 'http://media.w3.org/2010/05/sintel/trailer.ogv';
  const portraitVideoSrc = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

  function checkOrientation() {
    // Check if height is greater than width (portrait)
    isPortrait = window.innerHeight > window.innerWidth;
    console.log('Orientation changed:', isPortrait ? 'Portrait' : 'Landscape');
  }

  function handleVideoEnd() {
    // Navigate to dashboard when video ends
    goto('/dashboard');
  }

  function handleSkip() {
    // Navigate to dashboard when user skips
    goto('/dashboard');
  }

  function handleKeyPress(event: KeyboardEvent) {
    // Skip video on any key press
    handleSkip();
  }

  function handleClick() {
    // Skip video on click
    handleSkip();
  }

  function handleVideoLoad() {
    isVideoReady = true;
    // Auto-play the video
    if (videoElement) {
      videoElement.play().catch(console.error);
    }
  }

  onMount(() => {
    // Initial orientation check
    checkOrientation();
    
    // Listen for orientation changes
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', () => {
      // Small delay to ensure orientation change is complete
      setTimeout(checkOrientation, 100);
    });
    
    // Listen for key presses
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  onDestroy(() => {
    // Clean up event listeners
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('keydown', handleKeyPress);
    }
  });

  // Reactive video source based on orientation
  $: videoSrc = isPortrait ? portraitVideoSrc : landscapeVideoSrc;
</script>

<svelte:head>
  <title>Orientation Video</title>
</svelte:head>

<!-- Fullscreen container -->
<div 
  class="fixed inset-0 z-50 bg-black flex items-center justify-center cursor-pointer"
  on:click={handleClick}
  role="button"
  tabindex="0"
  on:keydown={handleKeyPress}
>
  <!-- Loading indicator -->
  {#if !isVideoReady}
    <div class="text-white text-2xl">
      Loading video...
    </div>
  {/if}

  <!-- Video element -->
  <video
    bind:this={videoElement}
    src={videoSrc}
    class="w-full h-full object-cover"
    autoplay
    playsinline
    on:ended={handleVideoEnd}
    on:loadeddata={handleVideoLoad}
    on:error={() => {
      console.error('Video failed to load');
      // Navigate to dashboard if video fails to load
      goto('/dashboard');
    }}
  >
    <track kind="captions" />
    Your browser does not support the video tag.
  </video>

  <!-- Skip instruction overlay -->
  <div class="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-sm">
    Click or press any key to skip
  </div>

  <!-- Orientation indicator (for debugging) -->
  <div class="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-sm">
    {isPortrait ? 'Portrait' : 'Landscape'} Mode
  </div>
</div>

<style>
  /* Ensure fullscreen on mobile */
  video:fullscreen {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
</style>
