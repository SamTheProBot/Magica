import { canvasHeight, canvasWidth } from '../../store/canvas';

export class Base {
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.type = ''
    this.frame = 0;
    this.gameframe = 0;
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
