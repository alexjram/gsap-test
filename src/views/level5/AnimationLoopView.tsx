import { useEffect, useRef } from "react";

function animateElement(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
) {
  let animationId: number;
  let counter = 0;
  const circle = {
    x: 100,
    y: canvas.height / 2 - 100,
    speedX: Math.random() * 2.5,
    speedY: Math.random() * 2.5,
  };
  const animation = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, 100, 0, 2 * Math.PI);
    ctx.fillStyle = `hsl(${counter}, 100%, 50%)`;
    ctx.fill();

    if (circle.x < 100) {
      circle.speedX = Math.random() * 2.5;
      counter++;
    } else if (circle.x > canvas.width - 100) {
      circle.speedX = Math.random() * -2.5;
      counter++;
    }
    circle.x += circle.speedX;

    if (circle.y < 100) {
      counter++;
      circle.speedY = Math.random() * 2.5;
    } else if (circle.y > canvas.height - 100) {
      circle.speedY = Math.random() * -2.5;
      counter++;
    }
    circle.y += circle.speedY;

    animationId = requestAnimationFrame(animation);
  };
  animationId = requestAnimationFrame(animation);

  return () => cancelAnimationFrame(animationId);
}

export function AnimationLoopView() {
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
    const cancelAnimation = animateElement(canvas, ctx);

    return () => {
      window.removeEventListener("resize", resizeListener);
      cancelAnimation();
    };
  }, []);
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 5: Animation Loop</h1>
      <p className="text-muted-foreground">
        Use requestAnimationFrame to animate a circle moving across the screen.
        Learn the pattern: clear, update position, draw, request next frame.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas className="bg-neutral-800 w-full h-full" ref={canvasRef} />
      </div>
    </div>
  );
}
