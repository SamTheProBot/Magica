import { Base } from "./base/base";
import { ctx } from "../store/canvas";
import { MagnificationFactor } from "../constants/magnification";
import { Direction } from "../constants/direction";

export class Projetile extends Base {
  constructor(MetaData, positionX, positionY) {
    super(positionX, positionY)
    this.width = MetaData.width,
      this.height = MetaData.height,
      this.noFrame = MetaData.frames,
      this.duration = MetaData.duration,
      this.image = Object.assign(new Image(), { src: `${MetaData.Image}` })
  }

  draw() {

    ctx.drawImage(
      this.image,
      this.width * this.frame,
      0,
      this.width,
      this.height,
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      this.width * MagnificationFactor / 1.5,
      this.height * MagnificationFactor / 1.5
    )

    if (this.gameframe % this.duration === 0) {
      if (this.frame < this.noFrame - 1) this.frame++;
      else this.frame = 0;
    }
    this.gameframe++;
  }
}
