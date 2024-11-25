import { Base } from "./base/base";
import { ctx } from "../store/canvas";

export class Weapon extends Base {
  constructor(image, width, height, positionX, positionY) {
    super(positionX, positionY);
    this.image = Object.assign(new Image(), { src: `${image}` });
    this.swinging = false;
    this.swingOffsetX = 0;
    this.swingOffsetY = 0;
    this.swingDirection = 1;
    this.swingSpeed = 5;
    this.width = width;
    this.height = height;
    this.maxSwingDistance = height * 3.5;
  }

  draw(direction) {
    if (this.swinging) {
      ctx.save()

      const centerX = this.canvasWidth / 2;
      const centerY = this.canvasHeight / 2;

      switch (direction) {
        case 0:
          ctx.translate(centerX + this.swingOffsetX - 5, centerY + this.swingOffsetY + 20);
          ctx.rotate((180 * Math.PI) / 180);
          this.swingOffsetY += this.swingSpeed * this.swingDirection;
          break;
        case 1:
          ctx.translate(centerX + this.swingOffsetX - 10, centerY + this.swingOffsetY - 20);
          ctx.rotate((0 * Math.PI) / 180);
          this.swingOffsetY -= this.swingSpeed * this.swingDirection;
          break;
        case 2:
          ctx.translate(centerX + this.swingOffsetX - 20, centerY + this.swingOffsetY + 10);
          ctx.rotate((270 * Math.PI) / 180);
          this.swingOffsetX -= this.swingSpeed * this.swingDirection;
          break;
        case 3:
          ctx.translate(centerX + this.swingOffsetX + 20, centerY + this.swingOffsetY + 10);
          ctx.rotate((90 * Math.PI) / 180);
          this.swingOffsetX += this.swingSpeed * this.swingDirection;
          break;
      }
      ctx.drawImage(
        this.image,
        -this.width * 1.75,
        -this.height * 1.75,
        this.width * 3.5,
        this.height * 3.5
      );
      ctx.restore()

      this.swingSpeed = this.swingDirection === 1 ? 15 : 5;
      if (
        Math.abs(this.swingOffsetY) >= this.maxSwingDistance ||
        Math.abs(this.swingOffsetX) >= this.maxSwingDistance
      ) {
        this.swingDirection = -1;
      }
      if (this.swingDirection === -1 && this.swingOffsetY === 0 && this.swingOffsetX === 0) {
        this.swingDirection = 1;
        this.swinging = false;
      }
    }
  }

  attack() {
    if (!this.swinging) {
      this.swingOffsetY = 0;
      this.swingOffsetX = 0;
      this.swinging = true;
    }
  }
}

