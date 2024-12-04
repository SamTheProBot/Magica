import { GraveyardDataArray, HomeDataArray, OutpostDataArray, VillageDataArray } from "./mapdata"
import { Position } from "../classes/base/positionHolder"
import { Direction } from "../constants/direction"

export const MapMetaData = {
  Home: {
    Name: 'home',
    DataArray: HomeDataArray,
    Image: Object.assign(new Image(), { src: './Map/home.png' }),
    neighbours: [new Position('village', 705, 440, Direction.down)],

  },
  Graveyard: {
    Name: 'graveyard',
    DataArray: GraveyardDataArray,
    Image: Object.assign(new Image(), { src: './Map/graveyard.png' }),
    neighbours: [new Position('village', 870, 1680, Direction.up), new Position('outpost', 100, 750, Direction.right)],
  },
  Village: {
    Name: 'village',
    DataArray: VillageDataArray,
    Image: Object.assign(new Image(), { src: './Map/village.png' }),
    neighbours: [new Position('home', 736, 1020, Direction.up), new Position('graveyard', 730, 120, Direction.down)],
  },
  Outpost: {
    Name: 'outpost',
    DataArray: OutpostDataArray,
    Image: Object.assign(new Image(), { src: './Map/outpost.png' }),
    neighbours: [new Position('graveyard', 2400, 1450, Direction.left), new Position('home', 765, 1050, Direction.up),],
  }
}
