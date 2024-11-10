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
  COLLISON_PLAYER: ` COLLISON_PLAYER`,
  COLLISON_ENEMY: `COLLISON_ENEMY`,
};
