<script>
  const buttons = [
    { key: 'E', label: 'Select', colorClasses: 'border-green-500 bg-green-600' },
    { key: 'G', label: 'Eject', colorClasses: 'border-blue-500 bg-blue-600' },
    { key: 'D', label: 'Details', colorClasses: 'border-yellow-500 bg-yellow-600' }
  ];
</script>

<footer class="px-16 flex space-x-4 text-white text-sm mt-4">
  {#each buttons as button}
    <div class="flex items-center">
      <button class="{button.colorClasses} border-2 p-1 m-1 rounded-full focus:outline-none w-8 h-8 flex items-center justify-center">
        {button.key}
      </button>
      <span class="text-white ml-2">{button.label}</span>
    </div>
  {/each}
</footer>
