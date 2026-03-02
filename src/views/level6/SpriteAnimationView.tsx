import { getResizeCanvasListener } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { sprites } from "@/contants/images";
import { loadImage } from "@/lib/images";

async function spriteAnimation(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
) {
  const images = (await Promise.all(sprites.map((s) => loadImage(s)))).map(
    (i) => {
      const sp = {
        height: i.naturalHeight,
        totalFrames: i.naturalWidth / i.naturalHeight,
        width: i.naturalHeight,
        images: i,
        frame: 0,
      };
      gsap.to(sp, {
        frame: sp.totalFrames - 1,
        snap: "frame",
        repeat: -1,
        duration: 0.125 * sp.totalFrames,
        ease: "none",
      });

      return sp;
    },
  );

  let animationId = 0;
  const loop = () => {
    let currentX = 0;
    let currentY = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    images.forEach((i) => {
      const sx = i.frame * i.width;

      ctx.drawImage(
        i.images,
        sx,
        0,
        i.width,
        i.height,
        currentX,
        currentY,
        i.width,
        i.height,
      );
      currentX += i.width;

      if (currentX > canvas.width - i.width) {
        currentX = 0;
        currentY += i.height;
      }
    });
    animationId = requestAnimationFrame(loop);
  };

  animationId = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(animationId);
  };
}
export function SpriteAnimationView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeListener = getResizeCanvasListener(canvas, () => {});
    window.addEventListener("resize", resizeListener);
    resizeListener();

    const animation = spriteAnimation(canvas, ctx);

    return () => {
      window.removeEventListener("resize", resizeListener);
      animation.then((a) => a());
    };
  }, []);
  return (
    <div className="flex flex-col gap-4 p-4 h-scree h-screen">
      <h1 className="text-3xl font-bold">Level 6: Canvas Sprite Animation</h1>
      <p className="text-muted-foreground">
        Load a sprite sheet onto canvas and use GSAP to control frame-by-frame
        animation timing (great for game characters).
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas
          ref={canvasRef}
          className="w-full h-full bg-linear-to-t from-blue-200 to-teal-200"
        />
      </div>
    </div>
  );
}
