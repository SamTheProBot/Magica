import { ctx, canvasWidth, canvasHeight } from "../store/canvas";
import { Node } from "./base/node";

export class Game {
  constructor(MetaData) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.nodes = {};
    this.currentNode = null;
    this.positionX = 0;
    this.positionY = 0;
    this.loadMapMetaData(MetaData)
  }

  loadMapMetaData(metaData) {
    for (const i in metaData) {
      const { Name, Image, neighbours } = metaData[i];
      this.nodes[Name] = new Node(Name, Image, neighbours)
    }
    this.currentNode = this.getNode('home')
  }

  getNode(name) {
    return this.nodes[`${name}`];
  }

  draw(Camera) {
    const drawX = this.positionX - Camera.X;
    const drawY = this.positionY - Camera.Y;
    ctx.drawImage(
      this.currentNode.image,
      drawX,
      drawY
    )
  }
}


// GAME NODE
// add nodes
// current node 
// change node
// hold node data
//
// BASIC OF THE MAP NODE
// map image of the schenery
// array containing data related to selected map
// connection to adjencent maps
// change map function based on the tiling hitting
