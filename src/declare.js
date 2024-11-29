import { View } from './classes/camera';
import { Player } from './classes/player'
import { Weapon } from './classes/weapon';
import { Enemy } from './classes/enemy';
import { Game } from './classes/game'
import { WeaponMetaData } from './meta/weapon';
import { MapMetaData } from "./meta/maps";

export const Camera = new View();
export const Snake = new Enemy('./Actor/Monsters/Skull/SpriteSheet.png', 150, 150);
export const Snake2 = new Enemy('./Actor/Monsters/Skull/SpriteSheet.png', 200, 300);
export const Map = new Game(MapMetaData)
export const Hero = new Player('./Actor/Characters/Princess/SpriteSheet.png');
export const Sword = new Weapon(WeaponMetaData.Sword)
export const Spear = new Weapon(WeaponMetaData.Spear)

Hero.addWeapon(Sword)
Hero.addWeapon(Spear)
