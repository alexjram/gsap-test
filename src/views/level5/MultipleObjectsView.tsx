import { useEffect, useRef } from "react";

interface Circle {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  radius: number;
  color: string;
}

function createCircle(maxWidth: number, maxHeight: number): Circle {
  const radius = Math.random() * 25 + 25;
  return {
    x: Math.random() * maxWidth,
    y: Math.random() * maxHeight,
    speedX: Math.random() * 5 - 2.5,
    speedY: Math.random() * 5 - 2.5,
    radius,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
  };
}
function drawCircle(
  ctx: CanvasRenderingContext2D,
  circle: Circle,
  maxWidth: number,
  maxHeight: number,
) {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fillStyle = circle.color;
  ctx.fill();

  if (circle.x < circle.radius) {
    circle.speedX = Math.random() * 2.5;
  } else if (circle.x > maxWidth - circle.radius) {
    circle.speedX = Math.random() * -2.5;
  }
  circle.x += circle.speedX;
  if (circle.y < circle.radius) {
    circle.speedY = Math.random() * 2.5;
  } else if (circle.y > maxHeight - circle.radius) {
    circle.speedY = Math.random() * -2.5;
  }
  circle.y += circle.speedY;
}

function addAnimation(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
) {
  let animationId: number;
  const circles: Circle[] = [];

  for (let i = 0; i < 100; i++) {
    circles.push(createCircle(canvas.width, canvas.height));
  }

  const animation = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach((c) => {
      drawCircle(ctx, c, canvas.width, canvas.height);
    });
    animationId = requestAnimationFrame(animation);
  };
  animationId = requestAnimationFrame(animation);

  return () => cancelAnimationFrame(animationId);
}
export function MultipleObjectsView() {
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
    const cancelAnimation = addAnimation(canvas, ctx);

    return () => {
      window.removeEventListener("resize", resizeListener);
      cancelAnimation();
    };
  }, []);
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 5: Multiple Objects</h1>
      <p className="text-muted-foreground">
        Create an array of objects (each with x, y, radius, color) and loop
        through them to draw multiple moving circles.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas className="bg-neutral-800 w-full h-full" ref={canvasRef} />
      </div>
    </div>
  );
}
