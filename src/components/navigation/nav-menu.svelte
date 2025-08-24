<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import NavigationItem from './NavigationItem.svelte';

  export let items: string[] = [];
  export let activeIndex: number = 0;

  function moveUp(): void {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
  }

  function moveDown(): void {
    activeIndex = (activeIndex + 1) % items.length;
  }

  function handleKey(e: KeyboardEvent): void {
    if (e.key === "ArrowUp") moveUp();
    if (e.key === "ArrowDown") moveDown();
  }

  function handleClick(index: number): void {
    activeIndex = index;
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("keydown", handleKey);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener("keydown", handleKey);
    }
  });

  $: displayItems = items.map((_, i) => {
    // Rotate array so activeIndex appears last in the rendered list
    return items[(i + activeIndex + 1) % items.length];
  });
</script>

<!-- Container -->
<div class="container flex flex-col items-start justify-end h-auto p-4 pb-2 overflow-hidden select-none sm:p-8 lg:p-16 sm:h-84 sm:pb-4">
  {#each displayItems as item, i (item)}
  <!-- <a href="/xbox"> -->
    <!-- <button
    type="button"
    on:click={() => handleClick((i + activeIndex + 1) % items.length)}
    class={`cursor-pointer transition-all duration-300 ease-out w-full text-left
        ${i === displayItems.length - 1
        ? 'text-2xl sm:text-4xl lg:text-6xl text-white font-bold scale-110'
        : 'text-gray-400 text-lg sm:text-2xl lg:text-4xl scale-100 opacity-70'}
        hover:text-green-400 bg-transparent border-none outline-none`}
      style="transform-origin: left;"
      transition:fly={{
        y: i === displayItems.length - 1 ? 30 : -30,
        duration: 250,
        easing: quintOut,
        opacity: 0
      }}
      aria-current={i === displayItems.length - 1 ? "true" : undefined}
      tabindex="0"
      >
      {item}
    </button> -->
    <NavigationItem 
        text={item} 
        on:click={() => handleClick((i + activeIndex + 1) % items.length)} 
        index={i}
        itemsLength={displayItems.length}
        isActive={i === displayItems.length - 1}
    />
  <!-- </a> -->
  {/each}
</div>