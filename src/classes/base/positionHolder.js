export class Position {
  constructor(name, positionX, positionY, direction) {
    this.name = name;
    this.positionX = positionX;
    this.positionY = positionY;
    this.direction = direction;
    this.parent = '';
  }
}
