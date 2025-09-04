<script>
    export let size = 240;
    export let duration = 10;
    export let color = '#b5d334';
</script>

<div 
    class="halo" 
    style="--size: {size}px; --duration: {duration}s; --color: {color};"
>
</div>

<style>
.halo {
    position: absolute;
    top: 50%;
    left: 50%;
}

.halo::before, 
.halo::after {
    content: '';
    display: block;
    position: absolute;
    width: var(--size);
    height: var(--size);
    left: calc(var(--size) / -2);
    top: calc(var(--size) / -2);
    border-radius: var(--size);
    animation: grow var(--duration) infinite linear;
}

.halo::before {
    box-shadow: 0px 0px 100px 10px var(--color);
}

.halo::after {
    box-shadow: inset 0px 0px 100px 10px var(--color);
}

@keyframes grow {
    0% {
        transform: scale(0.1);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
</style>
