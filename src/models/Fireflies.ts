export default class Firefly {
  x: number;
  y: number;
  color: string;
  size: number;

  maxX: number;
  maxY: number;

  constructor(maxWidth: number, maxHeight: number) {
    this.maxX = maxWidth;
    this.maxY = maxHeight;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.size = 10 + Math.random() * 20;
    this.x = Math.random() * maxWidth;
    this.y = Math.random() * maxHeight;
  }
}
