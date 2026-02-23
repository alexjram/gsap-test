import { gsap } from "gsap";

export default class Bubble {
  x: number;
  y: number;
  color: string;
  stroke: string;
  size: number;

  constructor(maxWidth: number, maxHeight: number) {
    this.x = Math.random() * maxWidth;
    const colorNumber = Math.random() * 360;
    this.color = `hsla(${colorNumber}, 100%, 75%, 30%)`;
    this.stroke = `hsl(${colorNumber}, 100%, 50%)`;
    this.size = 30 + Math.random() * 20;
    this.y = maxHeight - this.size;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.strokeStyle = this.stroke;
    ctx.fillStyle = this.color;
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }
}

export function bubbleLoop(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
) {
  const bubbles: Bubble[] = [];
  for (let i = 0; i < 20; i++) {
    const bubble = new Bubble(canvas.width, canvas.height);
    bubbles.push(bubble);
    const duration = 4 + Math.random() * 3;
    gsap
      .timeline({
        repeat: -1,
      })
      .to(bubble, {
        y: bubble.size,
        duration,
        ease: "none",
      })
      .to(
        bubble,
        {
          x: "+=30",
          yoyo: true,
          repeat: 4,
          duration: duration / 4,
        },
        "<",
      );
  }
  const drawBubbles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((b) => {
      b.draw(ctx);
    });
  };
  gsap.ticker.add(drawBubbles);

  return () => {
    gsap.ticker.remove(drawBubbles);
  };
}
