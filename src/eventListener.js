import { eventEmmiter, EventMaping } from './util/eventBinding';
import { Hero, Map } from './declare';


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
  eventEmmiter.on(EventMaping.SWITCH_WEAPON, (_, index) => {
    Hero.switchWeapon(parseInt(index))
  })
  eventEmmiter.on(EventMaping.SWITCH_MAP, (_, data) => {
    const location = Map.returnData(data)
    Map.switchMap(data)
    Hero.updatePlayerLocaion(location.positionX, location.positionY, location.direction)
  })
  eventEmmiter.on(EventMaping.COLLISION, () => {

  }),
    eventEmmiter.on(EventMaping.COLLISION_PLAYER, (_, direction) => {
      Hero.restrictMovement(direction);
    })
}
