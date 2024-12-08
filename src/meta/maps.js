import {
  HouseDataArray,
  IchigoRamamDataArray,
  HomeDataArray,
  AbandonedHouseDataArray,
  DustValeDataArray,
  RavenFortHallDataArray,
  RavenFortHall2DataArray,
  IchiranRamamDataArray,
  HammerFlameDataArray,
  EmeraldRiftDataArray,
  ElderWoodDataArray,
  FrostSpireLakeDataArray,
  RavenFortDataArray,
  SilentVeilDataArray,
  WoodPassDataArray
} from "./mapdata"
import { Position } from "../classes/base/positionHolder"
import { Direction } from "../constants/direction"

export const MapMetaData = {
  home: {
    Name: 'home',
    DataArray: HomeDataArray,
    Image: Object.assign(new Image(), { src: './Map/home.png' }),
    neighbours: [new Position('elderWood', 705, 420, Direction.down)],
  },
  house: {
    Name: 'house',
    DataArray: HouseDataArray,
    Image: Object.assign(new Image(), { src: './Map/house.png' }),
    neighbours: [new Position('ravenFort', 930, 805, Direction.down)],
  },
  abandonedHouse: {
    Name: 'abandonedHouse',
    DataArray: AbandonedHouseDataArray,
    Image: Object.assign(new Image(), { src: './Map/home.png' }),
    neighbours: [new Position('elderWood', 705, 425, Direction.down)],
  },
  elderWood: {
    Name: 'elderWood',
    DataArray: ElderWoodDataArray,
    Image: Object.assign(new Image(), { src: './Map/Elderwood.png' }),
    neighbours: [new Position('woodPass', 350, 100, Direction.down), new Position('ichigoRaman', 650, 360, Direction.up), new Position('home', 738, 1010, Direction.up),],
  },
  woodPass: {
    Name: 'woodPass',
    DataArray: WoodPassDataArray,
    Image: Object.assign(new Image(), { src: './Map/WoodPass.png' }),
    neighbours: [new Position('elderWood', 850, 1600, Direction.up), new Position('ravenFort', 150, 750, Direction.right)],
  },
  ravenFort: {
    Name: 'ravenFort',
    DataArray: RavenFortDataArray,
    Image: Object.assign(new Image(), { src: './Map/Ravenfort.png' }),
    neighbours: [new Position('woodPass', 2350, 1250, Direction.left), new Position('ichiranRaman', 650, 360, Direction.up), new Position('house', 483, 420, Direction.up), new Position('emeraldRift', 340, 1670, Direction.up), new Position('ravenFortHall', 370, 420, Direction.up), new Position('frostSpireLake', 210, 1600, Direction.right), new Position('hammerFlame', 400, 420, Direction.up)],
  },
  ravenFortHall: {
    Name: 'ravenFortHall',
    DataArray: RavenFortHallDataArray,
    Image: Object.assign(new Image(), { src: './Map/Ravenforthall.png' }),
    neighbours: [new Position('ravenFort', 1510, 805, Direction.down), new Position('ravenFortHall2', 325, 280, Direction.left)],
  },
  ravenFortHall2: {
    Name: 'ravenFortHall2',
    DataArray: RavenFortHall2DataArray,
    Image: Object.assign(new Image(), { src: './Map/Ravenforthall2.png' }),
    neighbours: [new Position('ravenFortHall', 670, 310, Direction.left)],
  },
  emeraldRift: {
    Name: 'emeraldRift',
    DataArray: EmeraldRiftDataArray,
    Image: Object.assign(new Image(), { src: './Map/EmeraldRift.png' }),
    neighbours: [new Position('ravenFort', 2120, 100, Direction.down), new Position('silentVeilNecropolis', 630, 130, Direction.down),],
  },
  silentVeil: {
    Name: 'silentVeilNecropolis',
    DataArray: SilentVeilDataArray,
    Image: Object.assign(new Image(), { src: './Map/SilentVeilNecropolis.png' }),
    neighbours: [new Position('emeraldRift', 2150, 1650, Direction.up), new Position('dustVale', 100, 100, Direction.right)],
  },
  dustVale: {
    Name: 'dustVale',
    DataArray: DustValeDataArray,
    Image: Object.assign(new Image(), { src: './Map/Dustvale.png' }),
    neighbours: [new Position('silentVeilNecropolis', 2400, 1450, Direction.left), new Position()],
  },
  frostSpireLake: {
    Name: 'frostSpireLake',
    DataArray: FrostSpireLakeDataArray,
    Image: Object.assign(new Image(), { src: './Map/FrostspireLake.png' }),
    neighbours: [new Position('ravenFort', 2300, 1650, Direction.left)],
  },
  hammerFlame: {
    Name: 'hammerFlame',
    DataArray: HammerFlameDataArray,
    Image: Object.assign(new Image(), { src: '../Map/HammerFlame.png' }),
    neighbours: [new Position('ravenFort', 1795, 1090, Direction.down)],
  },
  ichiranRaman: {
    Name: 'ichiranRaman',
    DataArray: IchiranRamamDataArray,
    Image: Object.assign(new Image(), { src: './Map/IchiranRaman.png' }),
    neighbours: [new Position('ravenFort', 1120, 560, Direction.down)],
  },
  ichigoRaman: {
    Name: 'ichigoRaman',
    DataArray: IchigoRamamDataArray,
    Image: Object.assign(new Image(), { src: './Map/IchiranRaman.png' }),
    neighbours: [new Position('elderWood', 1660, 715, Direction.down)],
  },
}
