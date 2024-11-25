import { ctx } from "../../store/canvas";

export class Game {
  constructor(image, canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.location = 'HomeVillage';
    this.currentIndex = 0;
    this.prevIndex = -1;
    this.image = Object.assign(new Image(), { src: `${image}` });
    this.positionX = 0;
    this.positionY = 0;
  }
  draw(Camera) {
    const drawX = this.positionX - Camera.cameraX;
    const drawY = this.positionY - Camera.cameraY;
    ctx.drawImage(this.image, drawX, drawY);
  }
}
