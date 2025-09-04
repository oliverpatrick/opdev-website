<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { createEventDispatcher } from 'svelte';

  export let text: string = 'Placeholder';
  export let index: number = 0;
  export let itemsLength: number = 1;
  export let isActive: boolean = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<div
  class="mb-4 flex cursor-pointer flex-row items-center transition-all duration-300 ease-out hover:scale-105"
  class:active={isActive}
  on:click={handleClick}
  on:keydown={(e) => e.key === 'Enter' && handleClick()}
  tabindex="0"
  role="button"
  style="margin-left: {index === 0 ? -8 : (itemsLength - 1 - index) * 8}px"
  transition:fly={{
    y: index === itemsLength - 1 ? 30 : -30,
    duration: 250,
    easing: quintOut,
    opacity: 0
  }}
>
  <div
    class="m-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#4d8933] bg-[#20640d] transition-all duration-300"
    class:active-circle={isActive}
  >
    {#if isActive}
      <div class="morphing-circle"></div>
    {/if}
  </div>

  <div class="x0-button" class:active-button={isActive}>
    <header>{text}</header>
    <section></section>
    <footer></footer>
  </div>
</div>

<style>
  .x0-button {
    width: 50vw;
    position: relative;
    transition: all 0.3s ease-out;
  }

  /* Existing styles */
  .x0-button::before,
  .x0-button::after {
    position: absolute;
    content: '';
  }

  .x0-button::before {
    width: 64px;
    height: 14px;
    left: 16%;
    top: -7px;
    background:
      linear-gradient(135deg, transparent 5px, #4d8933 0) top left,
      linear-gradient(225deg, transparent 5px, #4d8933 0) top right,
      linear-gradient(315deg, transparent 5px, #4d8933 0) bottom right,
      linear-gradient(45deg, transparent 0px, #4d8933 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .x0-button::after {
    width: 60px;
    height: 10px;
    left: calc(16% + 2px);
    top: -5px;
    background:
      linear-gradient(135deg, transparent 4px, #20640d 0) top left,
      linear-gradient(225deg, transparent 4px, #20640d 0) top right,
      linear-gradient(315deg, transparent 4px, #20640d 0) bottom right,
      linear-gradient(45deg, transparent 0px, #20640d 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .x0-button header {
    text-transform: uppercase;
    font-weight: 700;
    background-color: #20640d;
    padding: 10px 20px;
    color: #a8d874;
    position: relative;
    background:
      linear-gradient(135deg, transparent 2px, #20640d 0) top left,
      linear-gradient(225deg, transparent 7px, #20640d 0) top right,
      linear-gradient(315deg, transparent 2px, #20640d 0) bottom right,
      linear-gradient(45deg, transparent 2px, #20640d 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .x0-button header::before {
    position: absolute;
    left: -2px;
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background:
      linear-gradient(135deg, transparent 3px, #4d8933 0) top left,
      linear-gradient(225deg, transparent 8px, #4d8933 0) top right,
      linear-gradient(315deg, transparent 3px, #4d8933 0) bottom right,
      linear-gradient(45deg, transparent 2px, #4d8933 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    z-index: -1;
    content: '';
  }

  .x0-button section {
    position: relative;
  }

  .x0-button section::before,
  .x0-button section::after {
    position: absolute;
    content: '';
    z-index: -1;
  }

  .x0-button section::before {
    width: 54px;
    height: 14px;
    left: -2px;
    bottom: -6px;
    background:
      linear-gradient(135deg, transparent 5px, #4d8933 0) top left,
      linear-gradient(225deg, transparent 5px, #4d8933 0) top right,
      linear-gradient(315deg, transparent 5px, #4d8933 0) bottom right,
      linear-gradient(45deg, transparent 5px, #4d8933 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .x0-button section::after {
    width: 50px;
    height: 10px;
    left: 0px;
    bottom: -4px;
    background:
      linear-gradient(135deg, transparent 4px, #20640d 0) top left,
      linear-gradient(225deg, transparent 4px, #20640d 0) top right,
      linear-gradient(315deg, transparent 4px, #20640d 0) bottom right,
      linear-gradient(45deg, transparent 4px, #20640d 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .morphing-circle {
    position: relative;
    width: fit-content;
    height: fit-content;
    padding: 1rem;
    border-radius: 50%;
    background-color: rgb(176, 255, 119);
    animation: morph 2s ease-in-out infinite;
  }

  @keyframes morph {
    0%,
    100% {
      border-radius: 50%;
      transform: scale(1) rotate(0deg);
    }
    25% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      transform: scale(1.1) rotate(90deg);
    }
    50% {
      border-radius: 50% 20% 50% 20% / 60% 40% 60% 40%;
      transform: scale(0.9) rotate(180deg);
    }
    75% {
      border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
      transform: scale(1.05) rotate(270deg);
    }
  }

  .active {
    transform: scale(1.1);
  }

  .active-circle {
    border-color: #a8d874;
    background-color: #4d8933;
    box-shadow: 0 0 20px rgba(168, 216, 116, 0.3);
  }

  .active-button::before,
  .active-button::after {
    position: absolute;
    content: '';
  }

  .active-button header {
    /* background-color: #5baf37; */
    color: #ffffff;
    background:
      linear-gradient(135deg, transparent 2px, #5baf37 0) top left,
      linear-gradient(225deg, transparent 7px, #5baf37 0) top right,
      linear-gradient(315deg, transparent 2px, #5baf37 0) bottom right,
      linear-gradient(45deg, transparent 2px, #5baf37 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .active-button header::before {
    background:
      linear-gradient(135deg, transparent 3px, #a8d874 0) top left,
      linear-gradient(225deg, transparent 8px, #a8d874 0) top right,
      linear-gradient(315deg, transparent 3px, #a8d874 0) bottom right,
      linear-gradient(45deg, transparent 2px, #a8d874 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .active-button::before {
    background:
      linear-gradient(135deg, transparent 5px, #a8d874 0) top left,
      linear-gradient(225deg, transparent 5px, #a8d874 0) top right,
      linear-gradient(315deg, transparent 5px, #a8d874 0) bottom right,
      linear-gradient(45deg, transparent 0px, #a8d874 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .active-button::after {
    background:
      linear-gradient(135deg, transparent 4px, #4d8933 0) top left,
      linear-gradient(225deg, transparent 4px, #4d8933 0) top right,
      linear-gradient(315deg, transparent 4px, #4d8933 0) bottom right,
      linear-gradient(45deg, transparent 0px, #4d8933 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .active-button section::before {
    background:
      linear-gradient(135deg, transparent 5px, #a8d874 0) top left,
      linear-gradient(225deg, transparent 5px, #a8d874 0) top right,
      linear-gradient(315deg, transparent 5px, #a8d874 0) bottom right,
      linear-gradient(45deg, transparent 5px, #a8d874 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .active-button section::after {
    background:
      linear-gradient(135deg, transparent 4px, #4d8933 0) top left,
      linear-gradient(225deg, transparent 4px, #4d8933 0) top right,
      linear-gradient(315deg, transparent 4px, #4d8933 0) bottom right,
      linear-gradient(45deg, transparent 4px, #4d8933 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
</style>
