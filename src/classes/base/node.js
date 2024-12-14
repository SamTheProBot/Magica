export class Node {
  static PixilSize = 32;
  constructor(name, dataArray, weather, image, neighbour = []) {
    this.name = name;
    this.dataArray = dataArray;
    this.image = image;
    this.weather = weather;
    this.neighbour = neighbour;
  }
}
