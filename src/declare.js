import { View } from './classes/camera';
import { Player } from './classes/player'
import { Weapon } from './classes/weapon';
import { Game } from './classes/game'
import { WeaponMetaData } from './meta/weapon';
import { MapMetaData } from "./meta/maps";
import { PushGameObjectArray } from './store/gameObject';

export const Camera = new View();
export const Map = new Game(MapMetaData)
export const Hero = new Player('./Actor/Characters/GreenNinja/SpriteSheet.png');
const Sai = new Weapon(WeaponMetaData.sword, 'player')

Hero.addWeapon(Sai)
PushGameObjectArray(Hero)
