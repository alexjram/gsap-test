import { getResizeCanvasListener } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$!%&?*+[]{};:,.-_()/";
function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const tweens: { char?: string; time: number }[] = [];
  const message = "THIS IS NUTS";
  const tl = gsap.timeline();
  const startWidth = 50;
  const endWidth = canvas.width - 50;
  const middle = canvas.height / 2;
  for (let i = 0; i < message.length; i++) {
    const tween = {
      char: message.at(i),
      time: 0,
    };
    tl.to(tween, {
      duration: 1,
      time: 1,
      ease: "none",
    });
    tweens.push(tween);
  }

  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let drawedMessage = "";
    tweens.forEach((t) => {
      if (t.time === 1) drawedMessage += t.char;
      if (t.time < 1 && t.time > 0)
        drawedMessage += letters.charAt(Math.random() * letters.length);
    });
    ctx.font = "50px Arial";
    ctx.fillStyle = "#00ff00";
    ctx.fillText(drawedMessage, startWidth, middle, endWidth - startWidth);
  };

  const tick = gsap.ticker.add(loop);

  return () => {
    gsap.ticker.remove(tick);
  };
}
export function CanvasTextScrambleView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const resizeListener = getResizeCanvasListener(canvas, () => {});

    window.addEventListener("resize", resizeListener);
    resizeListener();
    const cancelAnimation = draw(canvas, ctx);
    return () => {
      window.removeEventListener("resize", resizeListener);
      cancelAnimation();
    };
  }, []);
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 6: Canvas Text Scramble</h1>
      <p className="text-muted-foreground">
        Render text on canvas and use GSAP to animate a "decode" or "scramble"
        effect character by character.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <canvas
          ref={canvasRef}
          className="bg-neutral-800 bg-linear-to-tr from-gray-800 to-neutral-800 w-full h-full"
        />
      </div>
    </div>
  );
}
