import { useEffect, useRef } from "react";

interface Circle {
  x: number;
  y: number;
  color: string;
}
function animate(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  let circles: Circle[] = [];
  let counter = 0;
  let animationId: number;

  const hoverListener = (ev: MouseEvent) => {
    circles.push({
      x: ev.offsetX,
      y: ev.offsetY,
      color: `hsl(${counter++}, 100%, 50%)`,
    });
  };
  const exitListener = () => {
    circles = [];
  };

  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, 30, 0, 2 * Math.PI);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    animationId = requestAnimationFrame(loop);
  };
  animationId = requestAnimationFrame(loop);

  canvas.addEventListener("mousemove", hoverListener);
  canvas.addEventListener("mouseleave", exitListener);

  return () => {
    canvas.removeEventListener("mousemove", hoverListener);
    canvas.removeEventListener("mouseleave", exitListener);
    cancelAnimationFrame(animationId);
  };
}
export function MouseInteractionView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;
    const resizeListener = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeListener();
    window.addEventListener("resize", resizeListener);
    const cancelAnimation = animate(canvas, ctx);

    return () => {
      window.removeEventListener("resize", resizeListener);
      cancelAnimation();
    };
  }, []);
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 5: Mouse Interaction</h1>
      <p className="text-muted-foreground">
        Track mouse position on the canvas and have a shape follow the cursor
        (or change color on hover).
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas ref={canvasRef} className="bg-neutral-800 w-full h-full" />
      </div>
    </div>
  );
}
