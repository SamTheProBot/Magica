import { EventEmmiter } from '../classes/base/event.js';

export const eventEmmiter = new EventEmmiter();

export const EventMaping = {
  UP_KEY: `UP_KEY`,
  LEFT_KEY: `LEFT_KEY`,
  RIGHT_KEY: `RIGHT_KEY`,
  DOWN_KEY: `DOWN_KEY`,
  SPACE_KEY: `SPACE_KEY`,
  SHIFT_KEY: `SHIFT_KEY`,
  ENTER_KEY: `ENTER_KEY`,
  SWITCH_MAP: `SWITCH_MAP`,
  SWITCH_WEAPON: `SWITCH_WEAPON`,
  COLLISION: `COLLISION`,
  COLLISION_PLAYER: ` COLLISON_PLAYER`,
  COLLISION_OBJECT: ` COLLISON_OBJECT`,
  COLLISION_ENEMY: `COLLISON_ENEMY`,
};
