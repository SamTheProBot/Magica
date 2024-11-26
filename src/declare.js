import { View } from './classes/base/camera';
import { Player } from './classes/player'
import { Weapon } from './classes/weapon';
import { Enemy } from './classes/enemy';
import { Game } from './classes/base/map'
import { canvasWidth, canvasHeight } from './store/canvas';
import { WeaponMetaData } from './meta/weapon';

export const Camera = new View();
export const Snake = new Enemy('./Actor/Monsters/Skull/SpriteSheet.png', 150, 150);
export const Snake2 = new Enemy('./Actor/Monsters/Skull/SpriteSheet.png', 200, 300);
export const Map = new Game('./Map/HomeVillage.png', canvasWidth, canvasHeight)
export const Hero = new Player('./Actor/Characters/GreenNinja/SpriteSheet.png');
export const Sword = new Weapon(WeaponMetaData.Sword)

Hero.addWeapon(Sword)
