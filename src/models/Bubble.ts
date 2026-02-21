export default class Bubble {
  x: number;
  y: number;
  color: string;
  size: number;

  constructor(maxWidth: number, maxHeight: number) {
    this.y = maxHeight;
    this.x = Math.random() * maxWidth;
    this.color = `hsla(${Math.random() * 360}, 100%, 75%, 30%)`;
    this.size = 30 + Math.random() * 20;
  }

  updatePosition() {
    this.y += Math.random() * 2;
    this.x += Math.random() * 5 - 2.5;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}
