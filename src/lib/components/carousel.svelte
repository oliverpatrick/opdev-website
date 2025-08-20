<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
    
    export let cardItems: { title: string; link?: string }[] = [];

    let active = 0;
    let cardWidth = 0;
    let cardEls: HTMLButtonElement[] = [];
    let containerWidth = 0;
    let containerEl: HTMLDivElement;
    let touchStartX = 0;
    let touchEndX = 0;

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

    function updateDimensions() {
        if (cardEls[0] && containerEl) {
            cardWidth = cardEls[0].offsetWidth + 16; // card width + margin
            containerWidth = containerEl.offsetWidth;
        }
    }

    function handleTouchStart(e: TouchEvent) {
        touchStartX = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e: TouchEvent) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }

    function handleSwipeGesture() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                moveLeft();
            } else {
                moveRight();
            }
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener("keydown", handleKey);
          window.addEventListener("resize", updateDimensions);
        }

        updateDimensions();
        
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("keydown", handleKey);
                window.removeEventListener("resize", updateDimensions);
            }
        };
    });
</script>

<div class="overflow-hidden relative w-full px-2 sm:px-8 lg:px-16" bind:this={containerEl} on:touchstart={handleTouchStart} on:touchend={handleTouchEnd}>
    <div
        class="p-1 sm:p-2 flex flex-row items-center relative touch-manipulation"
        style="width: {cardWidth * cardItems.length}px; transform: translateX({-cardWidth * active}px); transition: transform 0.3s ease-in-out;"
    >
        {#each cardItems as card, index}
            <button 
                bind:this={cardEls[index]}
                class="flex-shrink-0 h-[180px] w-[280px] sm:h-[220px] sm:w-[360px] lg:h-[300px] lg:w-[500px] bg-red-800 p-2 sm:p-4 m-1 sm:m-2 shadow-lg transition-transform duration-300 ease-in-out cursor-pointer text-sm sm:text-base touch-manipulation {index === active ? 'scale-105 sm:scale-110 translate-x-1 sm:translate-x-2' : ''}"
                on:click={() => handleCardClick(index, card)}
            >
                {card.title}
                {#if card.link}
                    <div class="text-xs mt-2 opacity-70">Click to open</div>
                {/if}
            </button>
        {/each}
    </div>
    <div class="mt-2 text-center sm:text-left">
      <span class="opacity-50 text-sm">{active + 1} / {cardItems.length}</span>
    </div>
</div>