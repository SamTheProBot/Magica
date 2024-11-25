import { ctx, canvasHeight, canvasWidth } from './store/canvas';
import { keybindings, preventDefaultBehavior } from './util/keybinding';
import { UpdateGameLoop } from './updateLoop';
import { EventListener } from './eventListener';
import { Camera, Hero } from './declare';

const animation = () => {
  Camera.update(Hero.positionY, Hero.positionX);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  UpdateGameLoop(Camera);
  requestAnimationFrame(animation);
};

window.onload = async () => {
  EventListener();
  animation();
  keybindings();
  preventDefaultBehavior();
}

