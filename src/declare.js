import { View } from './classes/base/camera';
import { Player } from './classes/player'
import { Weapon } from './classes/weapon';
import { Enemy } from './classes/enemy';
import { Game } from './classes/base/map'
import { canvasWidth, canvasHeight } from './store/canvas';
import { WeaponMetaData } from './meta/weapon';

export const Camera = new View();
export const Snake = new Enemy('./Monsters/BambooYellow/SpriteSheet.png', 100, 100);
export const Map = new Game('./Map/HomeVillage.png', canvasWidth, canvasHeight)
export const Hero = new Player('./SpriteSheet.png');
export const Spear = new Weapon('./assets/Items/Weapons/Lance2/Sprite.png', WeaponMetaData.Spear.width, WeaponMetaData.Spear.height)
export const Lance = new Weapon('./assets/Items/Weapons/Lance/Sprite.png', WeaponMetaData.Lancer.width, WeaponMetaData.Lancer.height)
export const Sword = new Weapon('./assets/Items/Weapons/Sword2/Sprite.png', WeaponMetaData.Sword.width, WeaponMetaData.Sword.height)
export const Hammer = new Weapon('./assets/Items/Weapons/Hammer/Sprite.png', WeaponMetaData.Hammer.width, WeaponMetaData.Hammer.height)
export const Katana = new Weapon('./assets/Items/Weapons/Katana/Sprite.png', WeaponMetaData.Katana.width, WeaponMetaData.Katana.height)
export const Bow = new Weapon('./assets/Items/Weapons/Bow/Sprite.png', WeaponMetaData.Bow.width, WeaponMetaData.Bow.height)
Hero.addWeapon(Spear)
Hero.addWeapon(Lance)
Hero.addWeapon(Sword)
Hero.addWeapon(Hammer)
Hero.addWeapon(Katana)
Hero.addWeapon(Bow)
