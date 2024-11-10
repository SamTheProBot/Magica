class Game {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.location = 'HomeVillage';
    this.currentIndex = 0;
    this.prevIndex = -1;
    this.background = new Image();
  }
  draw(offset) {
    ctx.drawImage(this.background, offset.positionX, offset.positionY);
  }
}
