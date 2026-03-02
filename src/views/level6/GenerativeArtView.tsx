import { getResizeCanvasListener } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}
interface Shape {
  center: Point;
  color: string;
  type: "circle" | "square" | "triangle";
  angle: number;
  size: number;
  filled: boolean;
}
function drawCircle(circle: Shape, ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.arc(circle.center.x, circle.center.y, circle.size / 2, 0, 2 * Math.PI);
  if (circle.filled) {
    ctx.fillStyle = circle.color;
    ctx.fill();
    return;
  }
  ctx.strokeStyle = circle.color;
  ctx.lineWidth = 2;
  ctx.stroke();
}
function drawSquare(square: Shape, ctx: CanvasRenderingContext2D) {
  const bl: Point = {
    x: square.center.x - (square.size / 2) * Math.cos(square.angle),
    y: square.center.y - (square.size / 2) * Math.sin(square.angle),
  };
  const br: Point = {
    x: bl.x + square.size * Math.cos(square.angle + Math.PI / 2),
    y: bl.y + square.size * Math.sin(square.angle + Math.PI / 2),
  };
  const tr: Point = {
    x: br.x + square.size * Math.cos(square.angle),
    y: br.y + square.size * Math.sin(square.angle),
  };
  const tl: Point = {
    x: bl.x + square.size * Math.cos(square.angle),
    y: bl.y + square.size * Math.sin(square.angle),
  };
  ctx.beginPath();
  ctx.strokeStyle = square.color;
  ctx.moveTo(bl.x, bl.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(tr.x, tr.y);
  ctx.lineTo(tl.x, tl.y);
  ctx.lineTo(bl.x, bl.y);

  if (square.filled) {
    ctx.fillStyle = square.color;
    ctx.fill();
  } else ctx.stroke();
}
function drawTriangle(triangle: Shape, ctx: CanvasRenderingContext2D) {
  const bl: Point = {
    x:
      triangle.center.x -
      (triangle.size / 2) * Math.cos(triangle.angle) +
      (triangle.size / 2) * Math.cos(triangle.angle + Math.PI / 2),
    y:
      triangle.center.y -
      (triangle.size / 2) * Math.sin(triangle.angle) +
      (triangle.size / 2) * Math.sin(triangle.angle + Math.PI / 2),
  };

  const br: Point = {
    x: bl.x + triangle.size * Math.cos(triangle.angle - Math.PI / 2),
    y: bl.y + triangle.size * Math.sin(triangle.angle - Math.PI / 2),
  };
  const t: Point = {
    x: triangle.center.x + (triangle.size / 2) * Math.cos(triangle.angle),
    y: triangle.center.y + (triangle.size / 2) * Math.sin(triangle.angle),
  };

  ctx.beginPath();
  ctx.moveTo(bl.x, bl.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(t.x, t.y);
  ctx.lineTo(bl.x, bl.y);
  ctx.strokeStyle = triangle.color;
  ctx.stroke();
}
function animate(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const layers: Shape[][] = [];

  let layer = 0;
  const center = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };
  let shapeType: "circle" | "square" | "triangle" = "circle";
  while (layer * 45 < canvas.width && layer * 45 < canvas.height) {
    switch (layer % 3) {
      case 0:
        shapeType = "square";
        break;
      case 1:
        shapeType = "circle";
        break;
      case 2:
        shapeType = "triangle";
        break;
    }
    if (layer === 0) {
      layers.push([
        {
          center: {
            x: canvas.width / 2,
            y: canvas.height / 2,
          },
          color: `hsl(${Math.random() * 360}, 100%, 50%)`,
          type: shapeType,
          angle: 0,
          size: 40,
          filled: false,
        },
      ]);
      layer++;
      continue;
    }
    const l: Shape[] = [];
    const radius = layer * 45;
    const circunference = radius * 2 * Math.PI;
    const itemWidth = 40 + (circunference % 40);

    let item = 0;
    while (item * itemWidth < circunference) {
      const angle = (itemWidth * item * 2 * Math.PI) / circunference;
      l.push({
        center: {
          x: radius * Math.cos(angle) + center.x,
          y: radius * Math.sin(angle) + center.y,
        },
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: 40,
        angle,
        filled: Math.random() < 0.5,
        type: shapeType,
      });
      item++;
    }

    layers.push(l);

    layer++;
  }

  layers.forEach((l) => {
    l.forEach((s) => {
      switch (s.type) {
        case "circle":
          drawCircle(s, ctx);
          break;
        case "square":
          drawSquare(s, ctx);
          break;
        case "triangle":
          drawTriangle(s, ctx);
      }
    });
  });
}

export function GenerativeArtView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const resizeListener = getResizeCanvasListener(canvas, () => {});
    window.addEventListener("resize", resizeListener);
    resizeListener();

    animate(canvas, ctx);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 6: Generative Art Animation</h1>
      <p className="text-muted-foreground">
        Procedurally generate shapes on canvas and animate them into patterns or
        mandalas using GSAP.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas ref={canvasRef} className="w-full h-full bg-neutral-800" />
      </div>
    </div>
  );
}
