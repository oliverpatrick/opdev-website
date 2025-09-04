<script lang="ts">
  import { onMount } from 'svelte';
  import { Typewriter, ProgressBar } from './typewriter';
    import HexGrid from '../../components/hex-grid.svelte';

  let alertBox: HTMLDivElement;
  let dlBarEl: HTMLDivElement;
  let bitsCounterEl: HTMLDivElement;

onMount(() => {
  const textElements = document.querySelectorAll('.typewriter-text');

  const typewriter = new Typewriter({
    textElementsArr: textElements,
    delayMs: 500,
    callback: () => {
      alertBox?.classList.add('loaded');

      // Commented out because the corresponding HTML elements are commented out
      // if (bitsCounterEl && dlBarEl) {
      //   const endValue = parseInt(bitsCounterEl.innerText);
      //   const progressBar = new ProgressBar({
      //     el: bitsCounterEl,
      //     progressBarEl: dlBarEl,
      //     endValue,
      //     durationMs: 2000,
      //     callback: () => {
      //       setTimeout(() => {
      //         alertBox?.classList.add('completed');
      //       }, 1000);
      //     }
      //   });
      //   progressBar.run();
      // }
    }
  });

  typewriter.run();
});

</script>

<div class="flex items-center justify-center w-screen h-screen bg-transparent">
  <div
    bind:this={alertBox}
    class="relative flex items-center overflow-hidden w-[450px] py-10 text-amber-300"
  >
    <!-- CHEER badge -->
    <div class="cheer relative inline-block px-3 py-1 bg-amber-300 text-black text-[11px] font-bold tracking-[3px] uppercase whitespace-nowrap shadow-[0_0_20px_0] shadow-amber-300 animate-cheerIn">
      WELCOME
    </div>

    <!-- Disc -->
    <div class="disc px-3 text-lg text-amber-300 animate-discIn">¤</div>

    <!-- Vertical bars -->
    <div class="vertical-bars flex flex-col justify-center items-start h-[114px] animate-verticalBarsIn">
      <div class="dot top w-[2px] h-[2px] bg-amber-300 opacity-0 animate-topDotIn"></div>
      <div class="thin-line w-px h-[30px] bg-amber-300/30"></div>
      <div class="big-line w-[2px] h-[40px] bg-amber-300"></div>
      <div class="thin-line w-px h-[30px] bg-amber-300/30"></div>
      <div class="dot bottom w-[2px] h-[2px] bg-amber-300 opacity-0 animate-bottomDotIn"></div>
    </div>

    <!-- Message -->
    <div class="message relative flex flex-col justify-center text-amber-300 tracking-[2px] overflow-hidden opacity-100 whitespace-nowrap pl-5 animate-messageIn">
      <p class="text-xs opacity-100 typewriter-text">VISR . OS > CHEER</p>
      <p class="typewriter-text">
        <span class="text-amber-600">[ XENARLEHIRO ]</span>
        MERCI BEAUCOUP !
      </p>
      <p class="text-xs opacity-80 typewriter-text">// New_Awesome_Viewer_Found</p>
      <p class="text-xs opacity-50 typewriter-text">// HALO . CRÉA > DL BITS</p>

      Download effect
      <div class="dl-effect absolute bottom-0 left-5 flex items-center opacity-100">
        <div bind:this={dlBarEl} class="dl-bar border-x-2 border-amber-300 text-xs px-2">
          ░░░░░░░░░░░
        </div>
        <div bind:this={bitsCounterEl} class="nb-bits pl-2">100</div>
      </div>
    </div>
  </div>
  <!-- <HexGrid /> -->
</div>
