const canvas = document.querySelector('#canvas');
export const ctx = canvas.getContext('2d');

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
const updateCanvasSize = () => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  canvas.height = windowHeight;
  canvas.width = windowWidth;
  canvas.style.height = `100%`;
  canvas.style.width = `100%`;
};

window.addEventListener('resize', updateCanvasSize);
updateCanvasSize();

export const canvasHeight = (canvas.height = windowHeight);
export const canvasWidth = (canvas.width = windowWidth);
