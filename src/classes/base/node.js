export class Node {
  constructor(name, image, neighbour = []) {
    this.name = name;
    this.image = image;
    this.neighbour = neighbour;
  }
}

