import { ctx, canvasWidth, canvasHeight } from "../store/canvas";
import { PushGameObjectArray, OverWrightGameObjectArray, ReadGameObjectArray } from "../store/gameObject";
import { Node } from "./base/node";
import { Collision } from "./base/collision";
import { Enemy } from './enemy'
import { EnemyMetaData } from "../meta/enemy";
import { MapMetaData } from "../meta/maps";

export class Game {
  constructor(MetaData) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.nodes = {};
    this.positionX = 0;
    this.positionY = 0;
    this.currentNode = null;
    this.loadMapMetaData(MetaData)
  }

  loadMapMetaData(metaData) {
    for (const i in metaData) {
      const { Name, DataArray, Image, neighbours } = metaData[i];
      this.nodes[Name] = new Node(Name, DataArray, Image, neighbours)
    }
    this.currentNode = this.nodes['home'];
    this.generateMap()
  }

  draw(Camera) {
    const drawX = this.positionX - Camera.X;
    const drawY = this.positionY - Camera.Y;
    ctx.drawImage(this.currentNode.image, drawX, drawY)
  }

  generateMap() {
    const filterObject = ReadGameObjectArray().filter(
      (obj) => { return obj.type !== 'collision' && obj.type !== 'location' && obj.type !== 'enemy' }
    );
    OverWrightGameObjectArray(filterObject)

    this.currentNode.dataArray.forEach((Xaxis, i) => {
      Xaxis.forEach((Yaxis, j) => {
        const x = j * Node.PixilSize;
        const y = i * Node.PixilSize;
        if (Yaxis === 1) {
          PushGameObjectArray(new Collision(x, y, Node.PixilSize, 'collision'));
        }
        else if (EnemyMetaData[Yaxis]) {
          PushGameObjectArray(new Enemy(EnemyMetaData[Yaxis], x, y));
        }
        else if (typeof Yaxis === 'string') {
          PushGameObjectArray(new Collision(x, y, Node.PixilSize, 'location', Yaxis));
        }
      })
    })
  }

  returnData(name) {
    return this.currentNode.neighbour.filter((loc) => loc.name === name)[0];
  }

  switchMap(name) {
    this.currentNode = this.nodes[name];
    this.generateMap()
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
