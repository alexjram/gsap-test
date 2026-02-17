import { useEffect, useRef } from "react";

export function HelloCanvasView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    canvasRef.current.width = canvasRef.current.clientWidth;
    canvasRef.current.height = canvasRef.current.clientHeight;

    ctx.fillStyle = "#ffff00";
    ctx.fillRect(
      canvasRef.current.width / 2 - 100,
      canvasRef.current.height / 2 - 50,
      200,
      100,
    );
    return () => {
      if (!ctx || !canvasRef.current) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 5: Hello Canvas</h1>
      <p className="text-muted-foreground">
        Create a canvas element, get the 2D context, and draw a colored
        rectangle in the center. Learn the coordinate system (0,0 is top-left).
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <canvas
          className="w-full h-100 bg-linear-to-br from-green-800 to-blue-800"
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
}
