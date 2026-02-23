import { getResizeCanvasListener } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Bar {
  x: number;
  y: number;
  height: number;
  width: number;
  color: string;
}
interface Offset {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

function drawLine(
  height: number,
  width: number,
  ctx: CanvasRenderingContext2D,
  offset: Offset,
) {
  const interval = (height - offset.bottom - offset.top) / 10;
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.moveTo(offset.left, offset.top + interval * i);
    ctx.lineTo(width - offset.right, offset.top + interval * i);
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(offset.left, offset.top);
  ctx.lineTo(offset.left, height - offset.bottom);
  ctx.lineTo(width - offset.right, height - offset.bottom);
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function drawBar(bar: Bar, ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.rect(bar.x - bar.width, bar.y, bar.width, bar.height);
  ctx.fillStyle = bar.color;
  ctx.fill();
}
function drawGraphic(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const offset = {
    left: 50,
    right: 50,
    bottom: 80,
    top: 50,
  };
  const interval = (canvas.width - offset.left - offset.right) / 5;
  drawLine(canvas.height, canvas.width, ctx, offset);
  const bars: Bar[] = [];
  for (let i = 1; i <= 5; i++) {
    const height = Math.random() * (canvas.height - offset.bottom - offset.top);
    const bar: Bar = {
      x: offset.left + interval * i - interval / 2,
      y: canvas.height - height - offset.bottom,
      height: height,
      width: 100,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    };
    gsap.from(bar, {
      y: canvas.height - offset.bottom,
      height: 0,
      duration: 1,
    });
    drawBar(bar, ctx);
    bars.push(bar);
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLine(canvas.height, canvas.width, ctx, offset);
    bars.forEach((b) => {
      drawBar(b, ctx);
    });
  };
  gsap.ticker.add(animate);

  return () => {
    gsap.ticker.remove(animate);
  };
}
export function DataVisualizationView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeListener = getResizeCanvasListener(canvas, () => {});
    window.addEventListener("resize", resizeListener);
    resizeListener();
    const terminateDrawing = drawGraphic(canvas, ctx);

    return () => {
      window.removeEventListener("resize", resizeListener);
      terminateDrawing();
    };
  });
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">
        Level 6: Animated Data Visualization
      </h1>
      <p className="text-muted-foreground">
        Build an animated bar chart or line graph using Canvas API, with GSAP
        tweening the data values and drawing animations.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas ref={canvasRef} className="w-full h-full bg-neutral-200" />
      </div>
    </div>
  );
}
