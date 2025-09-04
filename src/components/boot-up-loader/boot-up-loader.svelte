<style>
:root {
        --color-green-light: #ccff99;
        --color-green: #80ff00;
        --shadow-green-neon: 0 0 20px 0 var(--color-green-light);
        --transition-easing: cubic-bezier(.17, .67, .16, .99);
    }

    .wrapper {
        margin: 0; 
        padding: 0;
        width: 100vw; 
        height: 100vh;
        font-family: 'Ropa Sans', sans-serif;
        background: black;
        background-color: rgba(0, 0, 0, .2);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .alert {
        display: flex;
        justify-content: center;
        align-items: center;
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

    .dot {
        width: 2px;
        height: 2px;
        opacity: 0;
    }

    .dot.top {
        animation: topDotIn .5s var(--transition-easing) forwards;
        animation-delay: .4s;
    }

    .dot.bottom {
        animation: bottomDotIn .5s var(--transition-easing) forwards;
        animation-delay: .4s;
    }

    .big-line {
        width: 2px;
        height: 40px;
    }

    .thin-line {
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

    .sm {
        font-size: 10px;
    }

    .o-5 {
        opacity: .5;
    }

    .o-8 {
        opacity: .8;
    }

    .greener {
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

    .dl-bar {
        padding: 0 6px;
        border-left: 2px solid var(--color-green-light);
        border-right: 2px solid var(--color-green-light);
        font-size: 12px;
    }

    .nb-bits {
        padding-left: 10px;
    }

    .alert.loaded .dot.top,
    .alert.loaded .dot.bottom {
        opacity: 1;
        animation: unset;
        transition: opacity .25s linear .75s, transform .25s var(--transition-easing) .75s;
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
        from {
            height: 0;
        }
        to {
            height: 114px;
        }
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

<!-- Only starts once; refresh the page to see it again -->
<div class="wrapper">
  <div id="js-alert" class="alert">
    <div class="cheer">
      CHEER
    </div>
    <div class="disc">
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
      <p class="sm o-5 js-typewriting blink1-delay1">VISR&nbsp;.&nbsp;OS&nbsp;\>&nbsp;CHEER</p>
      <p>
        <span class="js-typewriting greener blink1-delay4">[&nbsp;XENARLEHIRO&nbsp;]&nbsp;</span>
        <span class="js-typewriting blink1-delay4">MERCI&nbsp;BEAUCOUP&nbsp;!</span>
      </p>
      <p class="sm o-8 js-typewriting blink1-delay3">//&nbsp;New_Awesome_Viewer_Found</p>
      <p class="sm o-5 js-typewriting blink1">//&nbsp;HALO&nbsp;.&nbsp;CRÉA&nbsp;\>&nbsp;DL&nbsp;BITS</p>
      <div class="dl-effect blink1-delay2">
        <div id="js-dl-bar" class="dl-bar">░░░░░░░░░░░</div>
        <div id="js-bits-counter" class="nb-bits">100</div>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
    interface TypeWriteOptions {
    textElementsArr?: NodeListOf<Element> | Element[];
    durationMs?: number;
    delayMs?: number;
    callback?: () => void;
}

interface CharacterStore {
    el: Element;
    character: string;
}

interface AnimateValueOptions {
    el: Element;
    progressBarEl: Element;
    startValue?: number;
    endValue: number;
    durationMs?: number;
    callback?: () => void;
}

interface ProgressBarOptions {
    el: Element;
    currentValue: number;
    totalValue: number;
}

const typeWrite = ({
    textElementsArr = [],
    durationMs = 1000,
    delayMs = 0,
    callback = () => {}
}: TypeWriteOptions): void => {
    const store: CharacterStore[] = [];
    
    textElementsArr.forEach((el: Element) => {
        const textAsArr: string[] = (el as HTMLElement).innerText.split('');
        textAsArr.forEach((character: string) => store.push({ el, character }));
        (el as HTMLElement).innerText = '';
    });

    const itvl: number = Math.round(durationMs / store.length);
    
    setTimeout(() => {
        let current: number = 0;
        const typeItvl: number = setInterval(() => {
            const currentItem = store[current];
            (currentItem.el as HTMLElement).innerText = 
                (currentItem.el as HTMLElement).innerText + currentItem.character;
            current++;

            if (current >= store.length) {
                clearInterval(typeItvl);
                callback();
            }
        }, itvl); 
    }, delayMs);
};

const DLBitsEffect = (durationMs: number = 1000): void => {
    const dlBarEl = document.querySelector('#js-dl-bar');
    const bitsCounterEl = document.querySelector('#js-bits-counter'); 
    
    if (!dlBarEl || !bitsCounterEl) return;
    
    const nbBits: number = parseInt((bitsCounterEl as HTMLElement).innerText);
    
    animateValue({
        el: bitsCounterEl,
        progressBarEl: dlBarEl,
        endValue: nbBits,
        durationMs: 1500,
        callback: () => {
            setTimeout(() => {
                const msgBoxEl = document.querySelector('#js-alert');
                msgBoxEl?.classList.add('completed');
            }, 1000);
        }
    });
};

const animateValue = ({
    el, 
    progressBarEl, 
    startValue = 0, 
    endValue, 
    durationMs = 1000,
    callback = () => {}
}: AnimateValueOptions): void => {
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number): void => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress: number = Math.min((timestamp - startTimestamp) / durationMs, 1);
        const val: number = Math.floor(progress * (endValue - startValue) + startValue);
        
        (el as HTMLElement).innerHTML = val.toString();
        
        setProgressBarValue({
            el: progressBarEl,
            currentValue: val,
            totalValue: endValue
        });
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            callback();
        }
    };
    
    window.requestAnimationFrame(step);
};

const setProgressBarValue = ({ el, currentValue, totalValue }: ProgressBarOptions): void => {
    const current: number = Math.floor(currentValue / totalValue * 10);
    (el as HTMLElement).innerText = '';
    
    for (let i = 0; i < 10; i++) {
        let char: string = '░';
        if (i <= current) {
            char = '▓';
        }
        (el as HTMLElement).innerText = (el as HTMLElement).innerText + char;
    }
};

document.addEventListener('DOMContentLoaded', (): void => {
    const msgBoxEl = document.querySelector('#js-alert');
    const textElements = document.querySelectorAll('.js-typewriting');
    
    typeWrite({
        textElementsArr: textElements,
        durationMs: 1000,
        delayMs: 1250,
        callback: () => {
            setTimeout(() => {
                msgBoxEl?.classList.add('loaded');
                DLBitsEffect(1500);
            }, 150);
        }
    });
});

</script>