import { getResizeCanvasListener } from "@/lib/utils";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function animate(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  let animationId: number;
  const circles: Circle[] = [
    {
      x: canvas.width / 4,
      y: 40,
      speedX: Math.random() * 20 - 20,
      speedY: 0,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: 40,
    },
    {
      x: (canvas.width / 4) * 3,
      y: 0,
      speedX: Math.random() * 20 - 20,
      speedY: 0,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: 40,
    },
  ];

  circles.forEach((c) => {
    gsap.to(c, {
      duration: 5,
      y: canvas.height - c.size,
      ease: "bounce.out",
      physics2D: {
        gravity: 10,
        velocity: Math.cos(Math.atan2(c.speedY, c.speedX)) * c.speedX,
        angle: (Math.atan2(c.speedY, c.speedX) / (2 * Math.PI)) * 360,
        yProp: "y",
      },
    });
  });

  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
      ctx.fillStyle = c.color;
      ctx.fill();
    });

    animationId = requestAnimationFrame(loop);
  };
  animationId = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(animationId);
  };
}
export function PhysicsAnimationView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const resizeListener = getResizeCanvasListener(canvas, () => {});
    resizeListener();

    window.addEventListener("resize", resizeListener);

    const cancelAnimation = animate(canvas, ctx);

    return () => {
      window.removeEventListener("resize", resizeListener);
      cancelAnimation();
    };
  });
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 6: Physics-Based Animation</h1>
      <p className="text-muted-foreground">
        Canvas-drawn objects with GSAP-controlled physics (bounce, gravity,
        collision detection).
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas className="bg-neutral-800 h-full w-full" ref={canvasRef} />
      </div>
      ,
    </div>
  );
}
