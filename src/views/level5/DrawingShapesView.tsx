import { useEffect, useRef } from "react";

function drawElements(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  for (let i = 0; i < 200; i++) {
    const color = `hsl(${i * 3}, 100%, 50%)`;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.random() * 10;

    const isStroke = Math.random() * 10 < 5;
    switch (i % 4) {
      case 0:
        ctx.beginPath();
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 25,
          0,
          2 * Math.PI,
        );
        isStroke ? ctx.stroke() : ctx.fill();
        break;
      case 1:
        !isStroke
          ? ctx.fillRect(
              Math.random() * canvas.width,
              Math.random() * canvas.height,
              Math.random() * 50,
              Math.random() * 50,
            )
          : ctx.strokeRect(
              Math.random() * canvas.width,
              Math.random() * canvas.height,
              Math.random() * 50,
              Math.random() * 50,
            );
        break;
      case 2:
        ctx.beginPath();
        const origin = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        };
        const point2 = {
          x: origin.x + (Math.random() * 50 - 25),
          y: origin.y + (Math.random() * 50 - 25),
        };
        const point3 = {
          x: point2.x + (Math.random() * 50 - 25),
          y: point2.y + (Math.random() * 50 - 25),
        };
        ctx.moveTo(origin.x, origin.y);
        ctx.lineTo(point2.x, point2.y);
        ctx.lineTo(point3.x, point3.y);
        ctx.closePath();
        isStroke ? ctx.stroke() : ctx.fill();
        break;
      case 3:
        const originL = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        };
        const end = {
          x: originL.x + (Math.random() * 50 - 25),
          y: originL.y + (Math.random() * 50 - 25),
        };
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(originL.x, originL.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        break;
    }
  }
}
export function DrawingShapesView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resizeListener = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      drawElements(canvas);
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [canvasRef]);
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 5: Drawing Shapes</h1>
      <p className="text-muted-foreground">
        Draw multiple shapes: circles (arc), rectangles (fillRect), lines
        (lineTo), and triangles (path with moveTo/lineTo). Use different fill
        colors and stroke colors.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas ref={canvasRef} className="bg-neutral-800 w-full h-full" />
      </div>
    </div>
  );
}
