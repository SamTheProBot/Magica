import { ctx, canvasHeight, canvasWidth } from './store/canvas';
import { keybindings, preventDefaultBehavior } from './util/keybinding';
import { UpdateGameLoop } from './updateLoop';
import { EventListener } from './eventListener';

const animation = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  UpdateGameLoop();
  requestAnimationFrame(animation);
};

window.onload = async () => {
  EventListener();
  animation();
  keybindings();
  preventDefaultBehavior();
}

