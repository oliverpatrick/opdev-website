<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

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
<div class="p-16 flex flex-col items-start overflow-hidden h-84 select-none justify-end pb-4">
  {#each displayItems as item, i (item)}
    <button
      type="button"
      on:click={() => handleClick((i + activeIndex + 1) % items.length)}
      class={`cursor-pointer transition-all duration-300 ease-out
        ${i === displayItems.length - 1
          ? 'text-6xl text-white font-bold scale-110'
          : 'text-gray-400 text-4xl scale-100 opacity-70'}
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
    </button>
  {/each}
</div>
