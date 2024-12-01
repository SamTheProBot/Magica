import { ctx } from "../../store/canvas";

export class Collision {
  constructor(positionX, positionY, size, type, location) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = size;
    this.height = size;
    this.type = type;
    this.location = location;
  }

  draw(camera) {
    if (this.type === 'collision') {
      ctx.fillStyle = `rgba(255,255,0,0.5)`;
    } else {
      ctx.fillStyle = `rgba(0,255,255,0.5)`;
    }
    ctx.fillRect(this.positionX - camera.X, this.positionY - camera.Y, 32, 32);
  }

  collisionBoundries() {
    return {
      top: this.positionY,
      left: this.positionX - this.width / 2,
      bottom: this.positionY + this.height,
      right: this.positionX + this.width / 2,
    };
  }
}
