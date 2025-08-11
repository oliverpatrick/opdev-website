<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
    
    export let cardItems: { title: string; link?: string }[] = [];

    let active = 0;
    let cardWidth = 0;
    let cardEls: HTMLButtonElement[] = [];

    function setActive(index: number) {
        active = index;
    }

    function handleCardClick(index: number, card: { title: string; link?: string }) {
        if (index === active && card.link) {
            // If clicking on active card and it has a link, navigate
            goto(card.link);
        } else {
            // Otherwise just set as active
            setActive(index);
        }
    }

    function moveLeft(): void {
        active = (active - 1 + cardItems.length) % cardItems.length;
    }

    function moveRight(): void {
        active = (active + 1) % cardItems.length;
    }

    function handleKey(e: KeyboardEvent): void {
      if (e.key === "ArrowLeft") moveLeft();
      if (e.key === "ArrowRight") moveRight();
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener("keydown", handleKey);
        }

        if (cardEls[0]) {
            cardWidth = cardEls[0].offsetWidth + 16;
        }
    });
</script>

<div class="overflow-hidden relative w-full px-16">
    <div
        class="p-2 flex flex-row items-center relative"
        style="width: {cardWidth * cardItems.length}px; transform: translateX({-cardWidth * active}px); transition: transform 0.3s ease-in-out;"
    >
        {#each cardItems as card, index}
            <button 
                bind:this={cardEls[index]}
                class="flex-shrink-0 h-[300px] w-[500px] bg-red-800 p-4 m-2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor-pointer {index === active ? 'scale-110 translate-x-2' : ''}"
                on:click={() => handleCardClick(index, card)}
            >
                {card.title}
                {#if card.link}
                    <div class="text-xs mt-2 opacity-70">Click to open</div>
                {/if}
            </button>
        {/each}
    </div>
    <div>
      <span class="opacity-50">{active + 1} / {cardItems.length}</span>
    </div>
</div>