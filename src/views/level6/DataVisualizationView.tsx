import { getResizeCanvasListener } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function DataVisualizationView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeListener = getResizeCanvasListener(canvas, () => {});
    window.addEventListener("resize", resizeListener);
    resizeListener();

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">
        Level 6: Animated Data Visualization
      </h1>
      <p className="text-muted-foreground">
        Build an animated bar chart or line graph using Canvas API, with GSAP
        tweening the data values and drawing animations.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas ref={canvasRef} className="w-full h-full bg-neutral-200" />
      </div>
    </div>
  );
}
