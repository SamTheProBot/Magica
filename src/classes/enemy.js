
import { Living } from "./base/living";
import { ctx } from "../store/canvas";
import { MagnificationFactor } from "../util/constants";

export class Enemy extends Living {
  constructor(image, positionX, positionY) {
    super(positionX, positionY);
    this.width = 16;
    this.height = 16;
    this.moving = false;
    this.image = Object.assign(new Image(), { src: `${image}` });
  }

  draw(Camera) {
    ctx.drawImage(
      this.image,
      this.direction * 16,
      this.frame * 16,
      this.width,
      this.height,
      this.positionX - Camera.cameraX,
      this.positionY - Camera.cameraY,
      this.width * MagnificationFactor,
      this.height * MagnificationFactor
    );
    if (this.moving && this.gameframe % Math.floor(6) === 0) {
      if (this.frame < 3) this.frame++;
      else this.frame = 0;
    }
    this.gameframe++;
  }


}
