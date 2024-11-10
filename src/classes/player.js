import { Living } from "./base/living";
import { ctx } from "../store/canvas";
export class Player extends Living {
  constructor(image, positionX, positionY) {
    super(positionX, positionY);
    this.positionY = this.canvasHeight / 2 - 16;
    this.positionX = this.canvasWidth / 2 - 16;
    this.width = 16;
    this.height = 16;
    this.moving = false;
    this.movementParameter = {
      up: false,
      down: false,
      left: false,
      right: false,
    };
    this.image = Object.assign(new Image(), { src: `${image}` });
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.direction * 16,
      this.frame * 16,
      this.width,
      this.height,
      this.positionX,
      this.positionY,
      this.width * 3,
      this.height * 3
    );
    if (this.moving && this.gameframe % Math.floor(6) === 0) {
      if (this.frame < 3) this.frame++;
      else this.frame = 0;
    } else if (!this.moving && this.frame !== 0) {
      this.frame = 0;
    }
    this.gameframe++;
  }
}
