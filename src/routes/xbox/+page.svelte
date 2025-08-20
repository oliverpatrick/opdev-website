<script lang="ts">
  type ModalItem = {
    title: string
  }

  export let modals: ModalItem[] = [
    { title: "Memory" },
    { title: "Music" },
    { title: "Xbox Live" },
    { title: "Settings" }
  ]
</script>

<div class="w-screen h-screen flex items-center justify-center bg-[#163b08] font-['Roboto_Mono']">
  <div class="flex flex-col items-center justify-center">
    {#each modals as modal}
      <div class="relative w-[50vw] mb-10">
        <!-- Top Bevel -->
        <div
          class="absolute left-[16%] -top-[7px] w-16 h-[14px] 
                 bg-gradient-to-br from-transparent to-[#4d8933]"></div>
        <div
          class="absolute left-[calc(16%+2px)] -top-[5px] w-[60px] h-[10px] 
                 bg-gradient-to-br from-transparent to-[#20640d]"></div>

        <!-- Header -->
        <header
          class="relative uppercase font-bold bg-[#20640d] text-[#a8d874] px-5 py-2">
          {modal.title}
          <!-- Header border bevel -->
          <div
            class="absolute -left-[2px] -top-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)]
                   bg-gradient-to-br from-transparent to-[#4d8933] -z-10"></div>
        </header>

        <!-- Section -->
        <section class="relative">
          <!-- Section bevel bottom -->
          <div
            class="absolute -left-[2px] -bottom-[6px] w-[54px] h-[14px] 
                   bg-gradient-to-br from-transparent to-[#4d8933] -z-10"></div>
          <div
            class="absolute left-0 -bottom-[4px] w-[50px] h-[10px] 
                   bg-gradient-to-br from-transparent to-[#20640d] -z-10"></div>
        </section>

        <footer></footer>
      </div>
    {/each}
  </div>
</div>
