import { eventEmmiter, EventMaping } from './util/eventBinding';
import { Hero, Map } from './declare';
import { ItemSpawnList } from './adjecentLists/item';
import { Weapon } from './classes/weapon';
import { WeaponMetaData } from './meta/weapon';


export const EventListener = () => {
  eventEmmiter.on(EventMaping.UP_KEY, (_, onMove) => {
    Hero.moveUp();
    if (onMove) {
      Hero.moving = true;
    }
    else Hero.moving = false;
  })
  eventEmmiter.on(EventMaping.DOWN_KEY, (_, onMove) => {
    Hero.moveDown();
    if (onMove) {
      Hero.moving = true;
    }
    else Hero.moving = false;
  });
  eventEmmiter.on(EventMaping.LEFT_KEY, (_, onMove) => {
    Hero.moveLeft();
    if (onMove) {
      Hero.moving = true;
    }
    else Hero.moving = false;
  });
  eventEmmiter.on(EventMaping.RIGHT_KEY, (_, onMove) => {
    Hero.moveRight();
    if (onMove) {
      Hero.moving = true;
    }
    else Hero.moving = false;
  });
  eventEmmiter.on(EventMaping.SPACE_KEY, () => {
    Hero.attack()
  })
  eventEmmiter.on(EventMaping.SWITCH_WEAPON, () => {
    Hero.switchWeapon();
  })
  eventEmmiter.on(EventMaping.SWITCH_MAP, (_, name) => {
    Map.switchMap(Hero, name);
  })
  eventEmmiter.on(EventMaping.COLLISION_BOUNDARY, (_, direction) => {
    Hero.restrictMovement(direction);
  })
  eventEmmiter.on(EventMaping.COLLISION_ITEM_SCORE, (_, val) => {
    Map.updateScore(val[0]);
    Map.updateAdjacentList(ItemSpawnList, Map.currentNode.name, val[1])
  })
  eventEmmiter.on(EventMaping.COLLISION_ITEM_WEAPON, (_, val) => {
    Hero.addWeapon(new Weapon(WeaponMetaData[val[0]], 'player'))
    Map.updateAdjacentList(ItemSpawnList, Map.currentNode.name, val[1])
  })
  eventEmmiter.on(EventMaping.COLLISION_ITEM_FOOD, (_, val) => {
    if (Hero.eatFood())
      Map.updateAdjacentList(ItemSpawnList, Map.currentNode.name, val)
  })
}
