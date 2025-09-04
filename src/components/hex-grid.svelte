<script lang="ts">
    import { onMount } from 'svelte';

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let animationId: number;
    let colors = ['#738290', '#A1B5D8', '#FFFCF7', '#E4F0D0', '#C2D8B9']
    // const colors = ['rgb(0,0,99)', 'rgb(200,50,200)', 'rgb(23,23,223)', 'rgb(80,80,235)'];

    interface Shape {
        x: number;
        y: number;
        size: number;
        scale: number;
        scale2: number;
        row: number;
        col: number;
        color: string;
        a: number;
        targetScale: number;
        animationStartTime: number;
        colorAnimationStartTime: number;
        baseColor: string;
    }

    const shapes: Shape[] = [];
    const columns = 35;
    const rows = 35;
    const baseScale = 0.95;
    const minScale = 0.12;
    let max = 0;
    let cRect: DOMRect;
    const mouse = { x: 0, y: 0, r: 0, targetX: 0, targetY: 0 };

    function randomColor(): string {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function easeInOut(t: number): number {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function setSizes() {
        max = Math.max(window.innerWidth, window.innerHeight);
        mouse.r = max / 2.6;
        canvas.width = canvas.height = max;
        cRect = canvas.getBoundingClientRect();
        
        const hexagonSize = max / (columns + 1);
        const verticalSpacing = hexagonSize / Math.tan(Math.PI / 6);
        const total = rows * columns;
        
        for (let i = 0; i < total; i++) {
            const row = Math.floor(i / columns);
            const col = i % columns;
            const x = col * hexagonSize * 1.5;
            const y = row * verticalSpacing + (col % 2) * (verticalSpacing / 2);
            
            if (shapes.length < total) {
                const color = randomColor();
                shapes.push({
                    x,
                    y,
                    size: hexagonSize,
                    scale: baseScale,
                    scale2: 1,
                    row,
                    col,
                    color,
                    baseColor: color,
                    a: 1,
                    targetScale: baseScale,
                    animationStartTime: Date.now(),
                    colorAnimationStartTime: Date.now() + Math.random() * 2000
                });
                
                // Random animation for some shapes
                if (Math.random() > 0.5) {
                    shapes[i].scale2 = 0.65 + Math.random() * 0.2;
                }
            } else {
                shapes[i].x = x;
                shapes[i].y = y;
                shapes[i].size = hexagonSize;
            }
        }
    }

    function updateMouse() {
        const dx = mouse.targetX - mouse.x;
        const dy = mouse.targetY - mouse.y;
        mouse.x += dx * 0.1;
        mouse.y += dy * 0.1;
    }

    function render() {
        if (!ctx) return;
        
        updateMouse();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const currentTime = Date.now();
        
        shapes.forEach(shape => {
            const dist = getDistance(shape);
            const newTargetScale = dist <= mouse.r 
                ? Math.min(baseScale, 1 + (minScale - 1) * (1 - (dist / mouse.r)))
                : baseScale;
            
            if (Math.abs(shape.targetScale - newTargetScale) > 0.001) {
                shape.targetScale = newTargetScale;
                shape.animationStartTime = currentTime;
            }
            
            // Animate scale
            const scaleProgress = Math.min((currentTime - shape.animationStartTime) / 3000, 1);
            const easedProgress = easeInOut(scaleProgress);
            shape.scale = shape.scale + (shape.targetScale - shape.scale) * easedProgress * 0.1;
            
            // Animate scale2 (breathing effect)
            const breathingCycle = Math.sin((currentTime - shape.colorAnimationStartTime) * 0.002) * 0.1;
            shape.scale2 = 0.75 + breathingCycle;
            
            // Color animation
            const colorCycle = (currentTime - shape.colorAnimationStartTime) % 4000;
            if (colorCycle < 2000) {
                const colorProgress = colorCycle / 2000;
                if (colorProgress > 0.9) {
                    shape.color = randomColor();
                }
            }
            
            drawHexagon(ctx, shape.x, shape.y, shape.size * shape.scale * shape.scale2, shape.color);
        });
        
        animationId = requestAnimationFrame(render);
    }

    function getDistance(shape: Shape): number {
        const dx = mouse.x - shape.x;
        const dy = mouse.y - shape.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function drawHexagon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) {
        const angle = Math.PI / 3;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const currentAngle = i * angle;
            const pointX = x + size * Math.cos(currentAngle);
            const pointY = y + size * Math.sin(currentAngle);
            i === 0 ? ctx.moveTo(pointX, pointY) : ctx.lineTo(pointX, pointY);
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }

    function handleResize() {
        if (canvas && canvas.width !== Math.max(window.innerWidth, window.innerHeight)) {
            setSizes();
        }
    }

    function handlePointerMove(e: PointerEvent) {
        if (cRect) {
            mouse.targetX = e.clientX - cRect.left;
            mouse.targetY = e.clientY - cRect.top;
        }
    }

    function handlePointerLeave() {
        mouse.targetX = window.innerWidth / 2;
        mouse.targetY = window.innerHeight / 2;
    }

    onMount(() => {
        ctx = canvas.getContext('2d')!;
        setSizes();
        mouse.x = mouse.targetX = max / 2;
        mouse.y = mouse.targetY = max / 2;
        render();

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    });
</script>

<svelte:window on:resize={handleResize} />

<canvas 
    bind:this={canvas} 
    class="absolute top-0 left-0§ w-screen h-full z-[-1]"
    on:pointermove={handlePointerMove}
    on:pointerleave={handlePointerLeave}
></canvas>