<script lang="ts">
  import { onMount } from 'svelte';

  interface Button {
    key: string;
    label: string;
    colorClasses: string;
  }

  interface ProgressAnimation {
    active: boolean;
    progress: number;
  }
  const buttons: Button[] = [
    { key: 'E', label: 'Select', colorClasses: 'border-green-500 bg-green-600' },
    { key: 'G', label: 'Eject', colorClasses: 'border-blue-500 bg-blue-600' },
    { key: 'D', label: 'Details', colorClasses: 'border-yellow-500 bg-yellow-600' }
  ];

  let pressedKeys: Record<string, boolean> = {};
  let progressAnimations: Record<string, ProgressAnimation> = {};

  const keyColors: Record<string, string> = {
    'E': 'stroke-green-300',
    'G': 'stroke-blue-300',
    'D': 'stroke-yellow-300'
  };

  function handleKeyDown(event: KeyboardEvent): void {
    const key = event.key.toUpperCase();
    if (['E', 'G', 'D'].includes(key) && !pressedKeys[key]) {
      pressedKeys[key] = true;
      startProgressAnimation(key);
    }
  }

  function handleKeyUp(event: KeyboardEvent): void {
    const key = event.key.toUpperCase();
    if (['E', 'G', 'D'].includes(key)) {
      pressedKeys[key] = false;
      stopProgressAnimation(key);
    }
  }

  function startProgressAnimation(key: string): void {
    progressAnimations[key] = { active: true, progress: 0 };
    const startTime = Date.now();
    const duration = 2000; // 2 seconds

    function animate(): void {
      if (!pressedKeys[key]) return;
      
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      progressAnimations[key] = { active: true, progress };
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    
    requestAnimationFrame(animate);
  }

  function stopProgressAnimation(key: string): void {
    progressAnimations[key] = { active: false, progress: 0 };
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  });
</script>

<footer class="px-2 sm:px-8 lg:px-16 flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 text-white text-xs sm:text-sm mt-4">
  {#each buttons as button}
    <div class="flex items-center">
      <div class="relative">
      <button class="{button.colorClasses} border-2 p-1 m-1 rounded-full focus:outline-none w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm">
        {button.key}
      </button>
        {#if progressAnimations[button.key]?.active}
          <svg class="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 m-1 -rotate-90 pointer-events-none" viewBox="0 0 32 32">
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke-width="3"
              class="{keyColors[button.key]}"
              stroke-dasharray="87.96"
              stroke-dashoffset="{87.96 - (progressAnimations[button.key].progress * 87.96)}"
              stroke-linecap="round"
            />
          </svg>
        {/if}
    </div>
      <span class="text-white ml-1 sm:ml-2 hidden sm:inline">{button.label}</span>
      <span class="text-white ml-1 sm:hidden text-xs">{button.label.charAt(0)}</span>
    </div>
  {/each}
</footer>
