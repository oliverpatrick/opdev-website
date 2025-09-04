<div class="xb-dashboard">
  <div class="xb-modal">
    <header>Memory</header>
    <section></section>
    <footer></footer>
  </div>
  <div class="xb-modal">
    <header>Music</header>
    <section></section>
    <footer></footer>
  </div>
  <div class="xb-modal">
    <header>Xbox Live</header>
    <section></section>
    <footer></footer>
  </div>
  <div class="xb-modal">
    <header>Settings</header>
    <section></section>
    <footer></footer>
  </div>
</div>

<style>
  .xb-dashboard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .xb-modal {
    width: 50vw;
    position: relative;
    margin: 0 0 40px 0;
  }

  .xb-modal::before,
  .xb-modal::after {
    position: absolute;
    content: '';
  }

  .xb-modal::before {
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

  .xb-modal::after {
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

  .xb-modal header {
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

  .xb-modal header::before {
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

  .xb-modal section {
    position: relative;
  }

  .xb-modal section::before,
  .xb-modal section::after {
    position: absolute;
    content: '';
    z-index: -1;
  }

  .xb-modal section::before {
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

  .xb-modal section::after {
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
</style>
