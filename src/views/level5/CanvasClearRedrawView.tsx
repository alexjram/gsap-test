import { useEffect, useRef } from "react";

function drawElements(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
) {
  let counter = 1;
  ctx.fillStyle = `hsl(${counter}, 100%, 50%)`;
  ctx.fillRect(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    Math.random() * 500,
    Math.random() * 500,
  );

  return setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = `hsl(${++counter}, 100%, 50%)`;

    ctx.fillRect(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 500,
      Math.random() * 500,
    );
  }, 500);
}
export function CanvasClearRedrawView() {
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
    const id = drawElements(ctx, canvas);

    return () => {
      window.removeEventListener("resize", resizeListener);
      clearInterval(id);
    };
  }, [canvasRef]);
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 5: Canvas Clear & Redraw</h1>
      <p className="text-muted-foreground">
        Draw a shape, then clear the canvas (clearRect), then draw it in a new
        position. Understand that canvas is "immediate mode" - it doesn't
        remember what you drew.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas className="bg-neutral-800 w-full h-full" ref={canvasRef} />
      </div>
    </div>
  );
}
