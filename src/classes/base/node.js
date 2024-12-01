export class Node {
  static PixilSize = 32;
  constructor(name, dataArray, image, neighbour = []) {
    this.Name = name;
    this.dataArray = dataArray;
    this.image = image;
    this.neighbour = neighbour;
  }
}

