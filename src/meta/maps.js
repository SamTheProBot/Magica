import { Position } from "../classes/base/positionHolder"
import { Direction } from "../constants/direction"

export const MapMetaData = {
  Home: {
    Name: 'home',
    Image: Object.assign(new Image(), { src: './Map/home.png' }),
    neighbours: [new Position('village', 730, 460, Direction.down)],

  },
  Graveyard: {
    Name: 'graveyard',
    Image: Object.assign(new Image(), { src: './Map/graveyard.png' }),
    neighbours: [new Position('village', 870, 1680, Direction.up)],
  },
  Village: {
    Name: 'village',
    Image: Object.assign(new Image(), { src: './Map/village.png' }),
    neighbours: [new Position('home', 765, 1050, Direction.up), new Position('graveyard', 730, 120, Direction.down)],
  }
}
