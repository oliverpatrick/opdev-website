const typeWrite = ({
  textElementsArr,
  durationMs = 1000,
  delayMs = 0,
  callback = () => {}
}: {
  textElementsArr: NodeListOf<HTMLElement>;
  durationMs?: number;
  delayMs?: number;
  callback?: () => void;
}) => {
  const store: { el: HTMLElement; character: string }[] = [];
  textElementsArr.forEach(el => {
    const textAsArr = el.innerText.split('');
    textAsArr.forEach((character: string) => store.push({ el, character }));
    el.innerText = '';
  });

  const itvl = Math.round(durationMs / store.length);
  setTimeout(() => {
    let   current  = 0;
    const typeItvl = setInterval(() => {
      store[current].el.innerText = store[current].el.innerText + store[current].character;
      current++;

      if (current >= store.length) {
          clearInterval(typeItvl);
          callback();
      }
    }, itvl); 
  }, delayMs);
};