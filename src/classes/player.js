import { Living } from "./base/living";
import { ctx } from "../store/canvas";
import { MagnificationFactor } from "../constants/magnification";
import { Direction } from "../constants/direction";

export class Player extends Living {
  constructor(image, positionX, positionY) {
    super(positionX, positionY);
    this.positionX = 1000;
    this.positionY = 750;
    this.width = 16;
    this.height = 16;
    this.equipedWeapon = null;
    this.inventry = [];
    this.movementSpeed = 7;
    this.moving = false;
    this.movementParameter = {
      up: false,
      down: false,
      left: false,
      right: false,
    };
    this.shadowImage = Object.assign(new Image(), { src: `./Actor/Characters/Shadow.png` });
    this.image = Object.assign(new Image(), { src: `${image}` });
    this.type = 'player'
  }

  addWeapon(weapon) {
    this.inventry.push(weapon);
    if (!this.equipedWeapon) {
      this.equipedWeapon = weapon;
    }
  }

  switchWeapon(index) {
    if (this.inventry.length >= index && index >= 0) {
      this.equipedWeapon = this.inventry[index];
    }
  }

  attack() {
    if (this.equipedWeapon) {
      this.equipedWeapon.attack();
    }
  }

  draw() {
    const drawX = (this.canvasWidth - this.width * 3.5) / 2;
    const drawY = (this.canvasHeight - this.height * 3.5) / 2;

    this.equipedWeapon.draw(this.direction, this.moving)
    ctx.drawImage(
      this.shadowImage,
      0,
      0,
      this.width,
      this.height,
      drawX + this.width / 2,
      drawY + this.height * 2.7,
      this.width * MagnificationFactor,
      this.height * MagnificationFactor
    );

    ctx.drawImage(
      this.image,
      this.direction * 16,
      this.frame * 16,
      this.width,
      this.height,
      drawX,
      drawY,
      this.width * MagnificationFactor,
      this.height * MagnificationFactor
    )

    if (this.moving) {
      switch (this.direction) {
        case 0:
          this.positionY += this.movementSpeed;
          break;
        case 1:
          this.positionY -= this.movementSpeed;
          break;
        case 2:
          this.positionX -= this.movementSpeed;
          break;
        case 3:
          this.positionX += this.movementSpeed;
          break;
      }
      if (this.equipedWeapon.swinging) {
        this.frame = 4;
      }
      else if (this.gameframe % Math.floor(8) === 0) {
        if (this.frame < 3) this.frame++;
        else this.frame = 0;
      }
    }
    else if (this.equipedWeapon.swinging) {
      this.frame = 4;
    }
    else {
      this.frame = 0;
    }
    this.gameframe++;
  }

  updatePlayerLocaion(positionX, positionY, direction) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.direction = direction;
  }


  moveDown() {
    if (!this.equipedWeapon.swinging) {
      this.direction = Direction.down;
    }
  }
  moveUp() {
    if (!this.equipedWeapon.swinging) {
      this.direction = Direction.up;
    }
  }
  moveLeft() {
    if (!this.equipedWeapon.swinging) {
      this.direction = Direction.left;
    }
  }
  moveRight() {
    if (!this.equipedWeapon.swinging) {
      this.direction = Direction.right;
    }
  }
}
