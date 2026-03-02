import { Button } from "@/components/ui/button";
import { getResizeCanvasListener } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
function draw(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  setLine: (line: Circle[]) => void,
  line: Circle[],
) {
  let counter = 0;
  let animationId: number;

  const hoverListener = (ev: MouseEvent) => {
    line.push({
      x: ev.offsetX,
      y: ev.offsetY,
      color: `hsl(${counter++}, 100%, 50%)`,
      size: 30,
      speedX: 0,
      speedY: 0,
    });
  };
  const exitListener = () => {
    setLine(line);
  };

  canvas.addEventListener("mouseleave", exitListener);

  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    line.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    animationId = requestAnimationFrame(loop);
  };
  animationId = requestAnimationFrame(loop);
  canvas.addEventListener("mousemove", hoverListener);
  return () => {
    cancelAnimationFrame(animationId);
    canvas.removeEventListener("mousemove", hoverListener);
    canvas.removeEventListener("mouseleave", exitListener);
  };
}
function animate(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  line: Circle[],
) {
  let animationId: number;
  const controller = {
    step: 0,
  };

  const animation = gsap.to(controller, {
    step: line.length - 1,
    duration: line.length / 60,
  });
  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < controller.step; i++) {
      const c = line[i];
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
      ctx.fillStyle = c.color;
      ctx.fill();
    }
    animationId = requestAnimationFrame(loop);
  };
  animationId = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(animationId);
    if (animation.isActive()) animation.kill();
  };
}
export function DrawingPlaybackView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [line, setLine] = useState<Circle[]>([]);
  const [mode, setMode] = useState<"Draw" | "Animate">("Draw");
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeListener = getResizeCanvasListener(canvas, () => {});
    window.addEventListener("resize", resizeListener);

    resizeListener();
    if (mode === "Animate") {
      const cleanup = animate(canvas, ctx, line);
      return () => {
        window.removeEventListener("resize", resizeListener);
        cleanup();
      };
    }
    const cleanup = draw(canvas, ctx, setLine, line);
    return () => {
      window.removeEventListener("resize", resizeListener);
      cleanup();
    };
  }, [mode, line]);
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">
        Level 6: Interactive Drawing Playback
      </h1>
      <p className="text-muted-foreground">
        Users draw on canvas, then GSAP animates the strokes with replay, morph,
        or dissolve effects.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1 relative">
        <div className="absolute top-12 left-12">
          <Button onClick={() => setMode(mode === "Draw" ? "Animate" : "Draw")}>
            {mode === "Draw" ? "Animate" : "Draw"}
          </Button>
        </div>
        <canvas ref={canvasRef} className="bg-neutral-800 w-full h-full" />
      </div>
    </div>
  );
}
