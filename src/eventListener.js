import { eventEmmiter, EventMaping } from './util/eventBinding';
import { Hero } from './declare';

export const EventListener = () => {
  eventEmmiter.on(EventMaping.UP_KEY, (_, onMove) => {
    Hero.direction = 1;
    if (onMove) Hero.moving = true;
    else Hero.moving = false;
  })
  eventEmmiter.on(EventMaping.DOWN_KEY, (_, onMove) => {
    Hero.direction = 0;
    if (onMove) Hero.moving = true;
    else Hero.moving = false;
  });
  eventEmmiter.on(EventMaping.LEFT_KEY, (_, onMove) => {
    Hero.direction = 2;
    if (onMove) Hero.moving = true;
    else Hero.moving = false;
  });
  eventEmmiter.on(EventMaping.RIGHT_KEY, (_, onMove) => {
    Hero.direction = 3;
    if (onMove) Hero.moving = true;
    else Hero.moving = false;
  });
  eventEmmiter.on(EventMaping.SPACE_KEY, () => {
    Hero.frame = 4;
  })
}
