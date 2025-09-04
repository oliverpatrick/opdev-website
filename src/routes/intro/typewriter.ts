export interface TypewriterOptions {
  textElementsArr: NodeListOf<Element>;
  delayMs?: number;
  callback?: () => void;
}

export class Typewriter {
  private textElementsArr: NodeListOf<Element>;
  private delayMs: number;
  private callback: () => void;

  constructor({ textElementsArr, delayMs = 500, callback = () => {} }: TypewriterOptions) {
    this.textElementsArr = textElementsArr;
    this.delayMs = delayMs;
    this.callback = callback;
  }

  async run() {
    for (let i = 0; i < this.textElementsArr.length; i++) {
      const el = this.textElementsArr[i] as HTMLElement;
      const fullText = el.innerText;
      el.innerText = "";

      for (let j = 0; j < fullText.length; j++) {
        el.innerText += fullText[j];
        await new Promise(r => setTimeout(r, 30)); // typing speed
      }

      await new Promise(r => setTimeout(r, this.delayMs)); // pause between lines
    }

    this.callback();
  }
}


export interface AnimateValueOptions {
  el: Element;
  progressBarEl: Element;
  startValue?: number;
  endValue: number;
  durationMs?: number;
  callback?: () => void;
}

export class ProgressBar {
  private el: Element;
  private progressBarEl: Element;
  private startValue: number;
  private endValue: number;
  private durationMs: number;
  private callback: () => void;
  private barLength: number;

  constructor({
    el,
    progressBarEl,
    startValue = 0,
    endValue,
    durationMs = 1000,
    callback = () => {},
  }: AnimateValueOptions) {
    this.el = el;
    this.progressBarEl = progressBarEl;
    this.startValue = startValue;
    this.endValue = endValue;
    this.durationMs = durationMs;
    this.callback = callback;

    // Use the initial number of characters in the bar element (fallback to 10)
    const initialText = (this.progressBarEl as HTMLElement).innerText.trim();
    this.barLength = initialText.length > 0 ? initialText.length : 10;
  }

  run() {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / this.durationMs,
        1
      );
      const val = Math.floor(
        progress * (this.endValue - this.startValue) + this.startValue
      );

      (this.el as HTMLElement).innerText = val.toString();
      this.setProgressBarValue(val);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        this.callback();
      }
    };

    window.requestAnimationFrame(step);
  }

  private setProgressBarValue(currentValue: number) {
    const totalValue = this.endValue;
    const filledSlots = Math.floor((currentValue / totalValue) * this.barLength);
    let bar = "";

    for (let i = 0; i < this.barLength; i++) {
      bar += i < filledSlots ? "▓" : "░";
    }

    (this.progressBarEl as HTMLElement).innerText = bar;
  }
}