/** @type {HTMLCanvasElement} */
import { Hero, Map, Snake, Snake2 } from "./declare";

export const UpdateGameLoop = (camera) => {
  Map.draw(camera);
  Hero.draw(camera);
  Snake.draw(camera)
  Snake2.draw(camera);
}
