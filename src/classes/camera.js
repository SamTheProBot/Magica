import { canvasWidth, canvasHeight } from '../store/canvas'
import { ctx } from '../store/canvas';

export class View {
  constructor() {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.worldWidth = 2560;
    this.worldHeight = 1920;
    this.X = 0;
    this.Y = 0;
    this.fadeState = false;
    this.alpha = 1;
    this.frame
  }

  fade() {
    this.fadeState = true;
    if (!this.fadeState) {
      let fade = 1;
      this.alpha < 0 ? fade * -1 : fade;
      ctx.globalAlpha = this.alpha;
      this.alpha -= 0.1 * fade;
      if (fade = 1) this.fadeState = false;
    }
  }

  update(playerY, playerX) {
    this.X = playerX - this.canvasWidth / 2;
    this.Y = playerY - this.canvasHeight / 2;

  }
}
