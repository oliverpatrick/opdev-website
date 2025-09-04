<div class="x0-button w-1/2 relative transition-all duration-300 ease-out">
  <header class="uppercase font-bold bg-dark-green px-5 py-2.5 text-light-green relative">text</header>
  <section class="relative"></section>
  <footer></footer>
</div>

<style>
  :root {
    --light-green: #a8d874;
    --dark-green: #20640d;
    --medium-green: #4d8933;
    
    /* Corner cut patterns - reusable */
    --corner-cut-sm: 
      linear-gradient(135deg, transparent 2px, var(--dark-green) 0) top left,
      linear-gradient(225deg, transparent 7px, var(--dark-green) 0) top right,
      linear-gradient(315deg, transparent 2px, var(--dark-green) 0) bottom right,
      linear-gradient(45deg, transparent 2px, var(--dark-green) 0) bottom left;
      
    --corner-cut-md:
      linear-gradient(135deg, transparent 3px, var(--medium-green) 0) top left,
      linear-gradient(225deg, transparent 8px, var(--medium-green) 0) top right,
      linear-gradient(315deg, transparent 3px, var(--medium-green) 0) bottom right,
      linear-gradient(45deg, transparent 2px, var(--medium-green) 0) bottom left;
      
    --corner-cut-accent:
      linear-gradient(135deg, transparent 4px, var(--dark-green) 0) top left,
      linear-gradient(225deg, transparent 4px, var(--dark-green) 0) top right,
      linear-gradient(315deg, transparent 4px, var(--dark-green) 0) bottom right,
      linear-gradient(45deg, transparent 4px, var(--dark-green) 0) bottom left;
      
    --corner-cut-large:
      linear-gradient(135deg, transparent 5px, var(--medium-green) 0) top left,
      linear-gradient(225deg, transparent 5px, var(--medium-green) 0) top right,
      linear-gradient(315deg, transparent 5px, var(--medium-green) 0) bottom right,
      linear-gradient(45deg, transparent 5px, var(--medium-green) 0) bottom left;
  }

  .bg-dark-green {
    background-color: var(--dark-green);
  }
  
  .text-light-green {
    color: var(--light-green);
  }

  /* Top decorative elements */
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
    background: var(--corner-cut-large);
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
  
  .x0-button::after {
    width: 60px;
    height: 10px;
    left: calc(16% + 2px);
    top: -5px;
    background: var(--corner-cut-accent);
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  /* Header styling */
  .x0-button header {
    background: var(--corner-cut-sm);
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
  
  .x0-button header::before {
    position: absolute;
    left: -2px;
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: var(--corner-cut-md);
    background-size: 50% 50%;
    background-repeat: no-repeat;
    z-index: -1;
    content: '';
  }

  /* Bottom decorative elements */
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
    background: var(--corner-cut-large);
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
  
  .x0-button section::after {
    width: 50px;
    height: 10px;
    left: 0px;
    bottom: -4px;
    background: var(--corner-cut-accent);
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
</style>