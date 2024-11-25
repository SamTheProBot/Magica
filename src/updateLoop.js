/** @type {HTMLCanvasElement} */
import { Hero, Map, Snake, Lance } from "./declare";

export const UpdateGameLoop = (camera) => {
  Map.draw(camera);
  Hero.draw(camera);
  Snake.draw(camera)
}
