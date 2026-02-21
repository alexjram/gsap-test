import { createCircle, drawCircle, updateCircleInBounds } from "@/lib/utils";
import { useEffect, useRef } from "react";

function animation(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  let circles: Circle[] = [];
  let animationId = -1;

  const clickListener = (ev: MouseEvent) => {
    circles.push(
      createCircle(ev.offsetX, ev.offsetY, null, null, Math.random() * 50),
    );
  };

  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const newCircles: Circle[] = [];
    circles.forEach((c) => {
      let updated = updateCircleInBounds(c, canvas.width, canvas.height, 5);
      newCircles.push(updated);
      drawCircle(c, ctx);
    });
    circles = newCircles;
    animationId = requestAnimationFrame(loop);
  };
  animationId = requestAnimationFrame(loop);
  canvas.addEventListener("click", clickListener);

  return () => {
    canvas.removeEventListener("click", clickListener);
    cancelAnimationFrame(animationId);
  };
}
export function BouncingBallView() {
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
    canvas.addEventListener("resize", resizeListener);
    const cancelAnimation = animation(canvas, ctx);
    return () => {
      window.removeEventListener("resize", resizeListener);
      canvas.removeEventListener("resize", resizeListener);
      cancelAnimation();
    };
  }, []);
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 5: Bouncing Ball</h1>
      <p className="text-muted-foreground">
        Make a ball bounce off the canvas edges by detecting collision with
        canvas width/height and reversing direction.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas ref={canvasRef} className="bg-neutral-800 w-full h-full" />
      </div>
    </div>
  );
}
