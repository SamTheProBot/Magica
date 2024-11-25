import { canvasWidth, canvasHeight } from '../../store/canvas'

export class View {
  constructor() {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.worldWidth = 2560;
    this.worldHeight = 1920;
    this.cameraX = 0;
    this.cameraY = 0;
  }

  update(playerY, playerX) {
    this.cameraX = playerX - this.canvasWidth / 2;
    this.cameraY = playerY - this.canvasHeight / 2;

  }
}
