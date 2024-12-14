import { Base } from "./base/base";
import { MagnificationFactor } from "../constants/magnification";
import { ctx } from "../store/canvas";
import { Direction } from "../constants/direction";

export class Weapon extends Base {
  constructor(MetaData, Parent) {
    super(0, 0);
    this.image = Object.assign(new Image(), { src: `${MetaData.Image}` });
    this.swinging = false;
    this.swingOffsetX = 0;
    this.swingOffsetY = 0;
    this.swingDirection = -1;
    this.swingSpeed = 5;
    this.name = MetaData.name;
    this.parent = Parent;
    this.damage = MetaData.damage;
    this.type = MetaData.type;
    this.size = 16 * MagnificationFactor;
    this.width = MetaData.width;
    this.height = MetaData.height;
    this.maxSwingDistance = MetaData.height * 3.8;
  }

  draw(positionX, positionY, direction) {
    if (this.swinging) {

      let centerY = positionY + this.swingOffsetY;
      let centerX = positionX + this.swingOffsetX;
      let buffer = this.size / 2;

      this.positionX = centerX;
      this.positionY = centerY;
      if (this.parent === 'player') {
        centerX = this.canvasWidth / 2;
        centerY = this.canvasHeight / 2;
      }

      ctx.save()
      switch (direction) {
        case Direction.down:
          ctx.translate(centerX + this.swingOffsetX / 1.3 - 10 + buffer, centerY + this.swingOffsetY / 1.3 + buffer + 25);
          ctx.rotate((180 * Math.PI) / 180);
          this.swingOffsetY += this.swingSpeed * this.swingDirection;
          break;
        case Direction.up:
          ctx.translate(centerX + this.swingOffsetX / 1.3 - 10 + buffer, centerY + this.swingOffsetY / 1.3 - 25 + buffer);
          ctx.rotate((0 * Math.PI) / 180);
          this.swingOffsetY -= this.swingSpeed * this.swingDirection;
          break;
        case Direction.left:
          ctx.translate(centerX + this.swingOffsetX / 1.3 - 25 + buffer, centerY + this.swingOffsetY / 1.3 + 15 + buffer);
          ctx.rotate((270 * Math.PI) / 180);
          this.swingOffsetX -= this.swingSpeed * this.swingDirection;
          break;
        case Direction.right:
          ctx.translate(centerX + this.swingOffsetX / 1.3 + 25 + buffer, centerY + this.swingOffsetY / 1.3 + 15 + buffer);
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

      ctx.fillStyle = 'blue';
      //ctx.fillRect(
      //  this.canvasWidth / 2 + this.swingOffsetX,
      //  this.canvasHeight / 2 + this.swingOffsetY,
      //  this.size, this.size);

      this.swingSpeed = this.swingDirection === 1 ? 10 : 5;
      if (
        Math.abs(this.swingOffsetY) >= this.maxSwingDistance ||
        Math.abs(this.swingOffsetX) >= this.maxSwingDistance
      ) {
        this.swingDirection = -1;
      }
      if (this.swingDirection === -1 && this.swingOffsetY === 0 && this.swingOffsetX === 0) {
        this.positionX = 0;
        this.positionY = 0;
        this.swingOffsetY = 0;
        this.swingOffsetX = 0;
        this.swingDirection = 1;
        this.swinging = false;
      }
    }
  }

  attack() {
    if (!this.swinging) {
      this.swingDirection = 1;
      this.swinging = true;
    }
  }

  collisionBoundries() {
    return {
      top: this.positionY + 10,
      left: this.positionX - (this.size) / 2 + 10,
      bottom: this.positionY + (this.size) - 10,
      right: this.positionX + (this.size) / 2 - 10,
    };
  }
}

