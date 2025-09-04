<button class="button">
  <span class="button__text">View Project</span>
</button>

<style>
  .button {
    width: 50vw;
    background: none;
    height: 64px;
    padding: 0 26px;
    border: 0;
    margin: 0;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    display: inline-flex;
    align-items: center;
    color: 17, 17, 17;
    text-decoration: none;
    font-family: inherit;
    position: relative;
    z-index: 1;
    aspect-ratio: 16 / 9;
  }

  .button:before {
    content: '';
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: #20640d;
    clip-path: polygon(
      0 20%,
      /* 0 */ 2% 10%,
      /* 1 */ 20% 10%,
      /* 2 */ 22% 0,
      /* 3 */ 38.5% 0,
      /* 4 */ 40.5% 10%,
      /* 5 */ 96% 10%,
      /* 6 */ 100% 30%,
      /* 7 */ 100% 80%,
      /* 8 */ 98% 90%,
      /* 9 */ 18% 90%,
      /* 10 */ 16% 100%,
      /* 11 */ 2% 100%,
      /* 12 */ 0 90% /* 13 */
    );
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .button:after {
    content: '';
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: #4d8933;
    clip-path: polygon(
      0 20%,
      /* 0 */ 2% 10%,
      /* 1 */ 20% 10%,
      /* 2 */ 22% 0,
      /* 3 */ 38.5% 0,
      /* 4 */ 40.5% 10%,
      /* 5 */ 96% 10%,
      /* 6 */ 100% 30%,
      /* 7 */ 100% 80%,
      /* 8 */ 98% 90%,
      /* 9 */ 18% 90%,
      /* 10 */ 16% 100%,
      /* 11 */ 2% 100%,
      /* 12 */ 0 90% /* 13 */
    );
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    scale: 1.1;
  }

  /* border-[#4d8933] bg-[#20640d] */

  .button:hover,
  .button:focus {
    outline: none;
    transform: scale(1.05);
  }

  .button:hover:after,
  .button:focus:after {
    background: #60ab40;
  }

  .button:hover .button__icon {
    transform: translate3d(3px, 0, 0);
  }

  .button:focus:before {
    opacity: 1;
  }

  .button:active {
    transform: scale(1);
    transition-duration: 0.1s;
  }

  .button__text {
    text-transform: uppercase;
    font-weight: 700;
    color: #a8d874;
    text-align: start;
    line-height: 1.2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .button__icon {
    margin-left: 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    fill: 17, 17, 17;
  }
</style>
