interface AnimateValueOptions {
    el: HTMLElement;
    progressBarEl: HTMLElement;
    startValue?: number;
    endValue: number;
    durationMs?: number;
    callback?: () => void;
}

interface ProgressBarOptions {
    el: HTMLElement;
    currentValue: number;
    totalValue: number;
}

export const downloadBitsEffect = (
    durationMs: number = 1500,
    downloadBarElement: HTMLElement,
    bitsCounterElement: HTMLElement,
    alertBoxElement: HTMLElement
): void => {
    const nbBits = parseInt(bitsCounterElement.innerText);
    animateValue({
        el           : bitsCounterElement,
        progressBarEl: downloadBarElement,
        endValue     : nbBits,
        durationMs   : durationMs,
        callback     : () => {
            setTimeout(() => {
                alertBoxElement.classList.add('completed');
            }, 1000);
        }
    });
};

export const animateValue = ({
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
        const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
        const val      = Math.floor(progress * (endValue - startValue) + startValue);
        el.innerHTML   = val.toString();
        setProgressBarValue({
            el          : progressBarEl,
            currentValue: val,
            totalValue  : endValue
        });
        if (progress < 1)
            window.requestAnimationFrame(step);
        else
            callback();
    };
    window.requestAnimationFrame(step);
};

export const setProgressBarValue = ({ el, currentValue, totalValue }: ProgressBarOptions): void => {
    const current = Math.floor(currentValue / totalValue * 10);
    el.innerText = '';
    for (let i = 0; i < 10; i++) {
        let char = '░';
        if (i <= current)
            char = '▓';
        el.innerText = el.innerText + char;
    }
};
