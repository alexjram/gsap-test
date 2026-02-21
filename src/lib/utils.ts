import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

export function getResizeCanvasListener(
  canvas: HTMLCanvasElement,
  callback: () => void,
) {
  return () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    callback();
  };
}

export function createCircle(
  x: number,
  y: number,
  maxSpeed?: number | null,
  color?: string | null,
  size?: number | null,
): Circle {
  if (!maxSpeed) maxSpeed = 5;
  if (!color) color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  if (!size) size = Math.random() * 20;
  return {
    x,
    y,
    speedX: Math.random() * maxSpeed - maxSpeed / 2,
    speedY: Math.random() * maxSpeed - maxSpeed / 2,
    size,
    color,
  };
}

export function updateCircleInBounds(
  circle: Circle,
  maxWidth: number,
  maxHeight: number,
  maxSpeed: number,
): Circle {
  if (circle.x <= circle.size) circle.speedX = Math.random() * (maxSpeed / 2);
  if (circle.x >= maxWidth - circle.size)
    circle.speedX = (-Math.random() * maxSpeed) / 2;
  if (circle.y <= circle.size) circle.speedY = Math.random() * (maxSpeed / 2);
  if (circle.y >= maxHeight - circle.size)
    circle.speedY = (-Math.random() * maxSpeed) / 2;

  return {
    ...circle,
    x: circle.x + circle.speedX,
    y: circle.y + circle.speedY,
  };
}

export function drawCircle(circle: Circle, ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
  ctx.fillStyle = circle.color;
  ctx.fill();
}
