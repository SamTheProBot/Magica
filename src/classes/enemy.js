import { Living } from "./base/living";
import { ctx } from "../store/canvas";
import { MagnificationFactor } from "../constants/magnification";
import { Direction } from "../constants/direction";

export class Enemy extends Living {
  constructor(MetaData, positionX, positionY) {
    super(positionX, positionY);
    this.type = 'enemy'
    this.width = 16;
    this.height = 16;
    this.moving = false;
    this.movementSpeed = MetaData.Speed;
    this.proximity = MetaData.Range;
    this.attack = MetaData.Attack;
    this.hp = MetaData.Hp;
    this.image = MetaData.Image;
  }

  draw(Camera) {
    let playerX = Camera.X + this.canvasWidh / 2;
    let playerY = Camera.Y + this.canvasHeight / 2;
    this.movement(playerX, playerY)

    ctx.drawImage(
      this.image,
      this.direction * 16,
      this.frame * 16,
      this.width,
      this.height,
      this.positionX - Camera.X,
      this.positionY - Camera.Y,
      this.width * MagnificationFactor,
      this.height * MagnificationFactor
    );

    ctx.fillStyle = 'blue';
    ctx.fillRect(
      this.positionX - Camera.X,
      this.positionY - Camera.Y,
      8, 8);

    if (this.moving && this.gameframe % Math.floor(6) === 0) {
      if (this.frame < 3) this.frame++;
      else this.frame = 0;
    }
    this.gameframe++;
  }

  movement(playerX, playerY) {
    if (
      this.positionX + this.proximity > playerX &&
      this.positionX - this.proximity < playerX &&
      this.positionY + this.proximity > playerY &&
      this.positionY - this.proximity < playerY
    ) {
      this.moving = true;
      this.idleCounter = 0;
      switch (this.getDirection(playerX, playerY)) {
        case Direction.down:
          this.direction = Direction.down;
          this.positionY += this.movementSpeed;
          break;
        case Direction.up:
          this.direction = Direction.up;
          this.positionY -= this.movementSpeed;
          break;
        case Direction.left:
          this.direction = Direction.left;
          this.positionX -= this.movementSpeed;
          break;
        case Direction.right:
          this.direction = Direction.right;
          this.positionX += this.movementSpeed;
          break;
      }
    } else {
      this.moving = false
    }
  }

  getDirection(playerX, playerY) {
    const distances = {
      up: playerY - this.positionY,
      down: this.positionY - playerY,
      left: this.positionX - playerX,
      right: playerX - this.positionX,
    };

    const max = Math.max(distances.up, distances.down, distances.left, distances.right);
    const buffer = 5;

    const weight = 0.7;
    if (this.direction === Direction.down && distances.up + buffer >= max * weight) return Direction.down;
    if (this.direction === Direction.up && distances.down + buffer >= max * weight) return Direction.up;
    if (this.direction === Direction.left && distances.left + buffer >= max * weight) return Direction.left;
    if (this.direction === Direction.right && distances.right + buffer >= max * weight) return Direction.right;

    if (distances.up === max) return Direction.down;
    if (distances.down === max) return Direction.up;
    if (distances.left === max) return Direction.left;
    if (distances.right === max) return Direction.right;
  }

  damageTaken(dmg) {
    this.hp -= dmg;
    if (this.hp <= 0) {
      this.dead = true;
    }
  }
}
