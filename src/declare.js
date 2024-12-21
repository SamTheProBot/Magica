import { View } from './classes/camera';
import { Player } from './classes/player'
import { Weapon } from './classes/weapon';
import { Game } from './classes/game'
import { WeaponMetaData } from './meta/weapon';
import { MapMetaData } from "./meta/maps";
import { PushGameObjectArray } from './store/gameObject';

export const Camera = new View();
export const Map = new Game(MapMetaData)
export const Hero = new Player('./Actor/Characters/BlueNinja/SpriteSheet.png');
const Sai = new Weapon(WeaponMetaData.spear, 'player')
const Vd = new Weapon(WeaponMetaData.shuriken, 'player')
const Va = new Weapon(WeaponMetaData.bow, 'player')
const Vw = new Weapon(WeaponMetaData.staff, 'player')
const Vq = new Weapon(WeaponMetaData.sword, 'player')
const Vs = new Weapon(WeaponMetaData.axe, 'player')

Hero.addWeapon(Vd)
Hero.addWeapon(Va)
Hero.addWeapon(Vw)
Hero.addWeapon(Sai)
Hero.addWeapon(Vq)
Hero.addWeapon(Vs)
PushGameObjectArray(Hero)
