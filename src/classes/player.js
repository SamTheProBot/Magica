import { Living } from "./base/living";
import { ctx } from "../store/canvas";
import { MagnificationFactor } from "../constants/magnification";
import { Direction } from "../constants/direction";

export class Player extends Living {
  constructor(image, positionX, positionY) {
    super(positionX, positionY);
    this.positionX = 1900;
    this.positionY = 1300;
    this.width = 16;
    this.height = 16;
    this.equipedWeapon = null;
    this.inventry = [];
    this.movementSpeed = 8;
    this.moving = false;
    this.movementRestriction = {
      up: true,
      down: true,
      left: true,
      right: true,
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
    const drawX = this.canvasWidth / 2;
    const drawY = this.canvasHeight / 2;
    this.equipedWeapon.draw(this.positionX, this.positionY, this.direction);

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
        case Direction.down:
          if (this.movementRestriction.down) {
            this.positionY += this.movementSpeed;
            this.movementRestriction.right = true;
            this.movementRestriction.left = true;
            this.movementRestriction.up = true;
          }
          break;
        case Direction.up:
          if (this.movementRestriction.up) {
            this.positionY -= this.movementSpeed;
            this.movementRestriction.right = true;
            this.movementRestriction.left = true;
            this.movementRestriction.down = true;
          }
          break;
        case Direction.left:
          if (this.movementRestriction.left) {
            this.positionX -= this.movementSpeed;
            this.movementRestriction.right = true;
            this.movementRestriction.down = true;
            this.movementRestriction.up = true;
          }
          break;
        case Direction.right:
          if (this.movementRestriction.right) {
            this.positionX += this.movementSpeed;
            this.movementRestriction.down = true;
            this.movementRestriction.left = true;
            this.movementRestriction.up = true;
          } break;
        default:
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

  restrictMovement(direction) {
    switch (direction) {
      case Direction.up:
        this.movementRestriction.up = false;
        break;
      case Direction.down:
        this.movementRestriction.down = false;
        break;
      case Direction.left:
        this.movementRestriction.left = false;
        break;
      case Direction.right:
        this.movementRestriction.right = false;
        break;
    }
  }
}
