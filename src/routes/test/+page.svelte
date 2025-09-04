<script lang="ts">
  import { onMount } from "svelte";

  let alertBox: HTMLDivElement;
  let downloadBar: HTMLDivElement;
  let bitsCounter: HTMLDivElement;

  onMount(() => {
    const textElements = document.querySelectorAll('.typewriter-text');
    console.log(textElements);
  //   typeWrite({
  //     textElementsArr: textElements,
  //     durationMs     : 1000,
  //     delayMs        : 1250,
  //     callback       : () => {
  //       setTimeout(() => {
  //         alertBox.classList.add('loaded');
  //         DLBitsEffect(1500);
  //       }, 150);
  //     }
  //   });
  });
</script>

<svelte:head>
  <title>Intro test</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>


<!-- <div class="wrapper">
  <div bind:this={alertBox} class="alert">
    <div class="cheer">
      OPDEV
    </div>
    <div class="">
      ¤
    </div>

    <div class="vertical-bars">
      <div class="dot top"></div>
      <div class="thin-line"></div>
      <div class="big-line"></div>
      <div class="thin-line"></div>
      <div class="dot bottom"></div>
    </div>

     <div class="message">
      <p class="sm o-5 typewriter-text blink1-delay1">VISR&nbsp;.&nbsp;OS&nbsp;\>&nbsp;CHEER</p>
      <p>
        <span class="typewriter-text greener blink1-delay4">[&nbsp;XENARLEHIRO&nbsp;]&nbsp;</span>
        <span class="typewriter-text blink1-delay4">MERCI&nbsp;BEAUCOUP&nbsp;!</span>
      </p>
      <p class="sm o-8 typewriter-text blink1-delay3">//&nbsp;New_Awesome_Viewer_Found</p>
      <p class="sm o-5 typewriter-text blink1">//&nbsp;HALO&nbsp;.&nbsp;CRÉA&nbsp;\>&nbsp;DL&nbsp;BITS</p>
      <div class="dl-effect blink1-delay2">
        <div bind:this={downloadBar} class="dl-bar">░░░░░░░░░░░</div>
        <div bind:this={bitsCounter} class="nb-bits">100</div>
      </div>
    </div>
  </div>
</div> -->
<div class="flex items-center justify-center w-screen h-screen bg-transparent">
  <div
    bind:this={alertBox}
    class="relative flex items-center overflow-hidden w-[450px] py-10 text-amber-300"
  >
    <!-- CHEER badge -->
    <div class="relative inline-block px-3 py-1 bg-amber-300 text-black text-[11px] font-bold tracking-[3px] uppercase whitespace-nowrap shadow-[0_0_20px_0] shadow-amber-300 animate-cheerIn">
      WELCOME
    </div>

    <!-- Disc -->
    <div class="disc px-3 text-lg text-amber-300 animate-discIn">¤</div>

    <!-- Vertical bars -->
    <div class="flex flex-col justify-center items-start h-[114px] animate-verticalBarsIn">
      <div class="w-[2px] h-[2px] bg-amber-300 opacity-0 animate-topDotIn"></div>
      <div class="w-px h-[30px] bg-amber-300/30"></div>
      <div class="w-[2px] h-[40px] bg-amber-300"></div>
      <div class="w-px h-[30px] bg-amber-300/30"></div>
      <div class="w-[2px] h-[2px] bg-amber-300 opacity-0 animate-bottomDotIn"></div>
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
        <div bind:this={downloadBar} class="dl-bar border-x-2 border-amber-300 text-xs px-2">
          ░░░░░░░░░░░
        </div>
        <div bind:this={bitsCounter} class="nb-bits pl-2">100</div>
      </div>
    </div>
  </div>
  <!-- <HexGrid /> -->
</div>



<style>
html, body, .wrapper {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-family: 'Ropa Sans', sans-serif;
  background: black;
}

.wrapper {
  background-color: rgba(0, 0, 0, .2);
}

.wrapper,
.alert {
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert {
  width: 450px;
  padding: 40px 0;
  overflow: hidden;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 10px, rgba(0, 0, 0, 1) 30px);
  text-shadow: var(--color-green-light) 1px 0 10px;
}

.cheer {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  flex: none;
  width: auto;
  padding: 3px 9px;
  background-color: var(--color-green-light);
  box-shadow: var(--shadow-green-neon);
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;

  width: 0;
  animation: cheerIn 1s var(--transition-easing) forwards;
}

.vertical-bars {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  height: 114px;
  animation: verticalBarsIn 1s var(--transition-easing) forwards;
}

.vertical-bars > * {
  margin: 1px;
  background-color: var(--color-green-light);
  box-shadow: var(--shadow-green-neon);
}

.vertical-bars .dot {
  width: 2px;
  height: 2px;
  opacity: 0;
}

.vertical-bars .dot.top {
  animation: topDotIn .5s var(--transition-easing) forwards;
  animation-delay: .4s;
}

.vertical-bars .dot.bottom {
  animation: bottomDotIn .5s var(--transition-easing) forwards;
  animation-delay: .4s;
}

.vertical-bars .big-line {
  width: 2px;
  height: 40px;
}

.vertical-bars .thin-line {
  width: 1px;
  height: 30px;
  opacity: .3;
}

.disc {
  padding: 10px;
  font-size: 16px;
  font-weight: light;
  color: var(--color-green-light);
  animation: discIn 1s var(--transition-easing) forwards;
}

.message {
  position: relative;
  box-sizing: border-box;
  flex: none;
  width: 0;
  height: 100%;
  padding: 15px 0 15px 20px;
  overflow: hidden;
  color: var(--color-green-light);
  letter-spacing: 2px;
  opacity: 0;
  white-space: nowrap;
  animation: messageIn .75s var(--transition-easing) forwards;
  animation-delay: 1.15s;
}

.message > p {
  margin: 20px 0;
}

.message .sm {
  font-size: 10px;
}

.message .o-5 {
  opacity: .5;
}

.message .o-8 {
  opacity: .8;
}

.message .greener {
  color: var(--color-green);
}

.alert:not(.loaded) .dl-effect {
  opacity: 0;
}

.dl-effect {
  position: absolute;
  bottom: 0;
  left: 20px;
  display: flex;
  align-items: center;
  opacity: 1;
  transition: opacity .15s linear;
}

.dl-effect .dl-bar {
  padding: 0 6px;
  border-left: 2px solid var(--color-green-light);
  border-right: 2px solid var(--color-green-light);
  font-size: 12px;
}

.dl-effect .nb-bits {
  padding-left: 10px;
}

.alert.loaded .dot.top,
.alert.loaded .dot.bottom {
  opacity: 1;
  animation: unset;
  transition: opacity .25s linear .75s,
              transform .25s var(--transition-easing) .75s;
}

.alert.loaded .vertical-bars {
  animation: unset;
  opacity: 1;
  height: 114px;
}

.alert.completed .blink1,
.alert.completed .blink1-delay1,
.alert.completed .blink1-delay2,
.alert.completed .blink1-delay3,
.alert.completed .blink1-delay4 {
  animation: blink1 1s linear forwards;
}

.alert.completed .blink1-delay1 {
  animation-delay: .25s;
}

.alert.completed .blink1-delay2 {
  animation-delay: .5s;
}

.alert.completed .blink1-delay3 {
  animation-delay: .66s;
}

.alert.completed .blink1-delay4 {
  animation-delay: .75s;
}

.alert.completed .vertical-bars {
  transition: height 1s var(--transition-easing) 1s;
  height: 0;
}

.alert.completed .dot {
  opacity: 0 !important;
}

.alert.completed .dot.top {
  transform: translate3d(0, -40px, 0);
}

.alert.completed .dot.bottom {
  transform: translate3d(0, 40px, 0);
}

@keyframes cheerIn {
  0% {
    width: 0;
    left: -150px;
  }
  25% {
    width: 60px;
  }
  100% {
    width: 60px;
    left: 0;
  }
}

@keyframes discIn {
  0% {
    padding: 30px;
    opacity: 0;
  }
  25% {
    padding: 15px;
    opacity: .25;
  }
  100% {
    padding: 15px;
    opacity: 1;
  }
}

@keyframes verticalBarsIn {
  from { height: 0; }
  to { height: 114px; }
}

@keyframes topDotIn {
  from {
    opacity: 0;
    transform: translate3d(0, -40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bottomDotIn {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes messageIn {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 500px;
  }
}

@keyframes blink1 {
  0%, 15%, 39%, 50%, 55%, 70% {
    opacity: 1;
  }
  10%, 12%, 40%, 49%, 71%, 100% {
    opacity: 0;
  }
}

</style>