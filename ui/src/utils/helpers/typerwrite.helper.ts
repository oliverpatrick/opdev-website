export class TypeWriter {
  private element: HTMLElement | null = null;
  private text: string = "";
  private index: number = 0;
  private speed: number = 50;
  private isTyping: boolean = false;
  private onComplete?: () => void;
  private timeoutId?: NodeJS.Timeout;

  constructor(speed: number = 50) {
    this.speed = speed;
  }

  public type(
    element: HTMLElement,
    text: string,
    onComplete?: () => void
  ): void {
    if (this.isTyping) {
      this.stop();
    }

    this.element = element;
    this.text = text;
    this.index = 0;
    this.isTyping = true;
    this.onComplete = onComplete;

    this.element.textContent = "";
    this.typeNextChar();
  }

  private typeNextChar(): void {
    if (!this.element || this.index >= this.text.length) {
      this.isTyping = false;
      this.onComplete?.();
      return;
    }

    this.element.textContent += this.text[this.index];
    this.index++;

    this.timeoutId = setTimeout(() => this.typeNextChar(), this.speed);
  }

  public stop(): void {
    this.isTyping = false;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }

  public clear(): void {
    this.stop();
    if (this.element) {
      this.element.textContent = "";
    }
  }

  public setSpeed(speed: number): void {
    this.speed = speed;
  }

  public isCurrentlyTyping(): boolean {
    return this.isTyping;
  }
}
