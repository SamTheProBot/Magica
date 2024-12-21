const canvas = document.querySelector('#canvas');
export const ctx = canvas.getContext('2d');

const ScalingFactor = 1.4;
let windowHeight = window.innerHeight * ScalingFactor;
let windowWidth = window.innerWidth * ScalingFactor;

const updateCanvasSize = () => {
  windowHeight = window.innerHeight * ScalingFactor;
  windowWidth = window.innerWidth * ScalingFactor;
  canvas.height = windowHeight;
  canvas.width = windowWidth;
  canvas.style.height = `95%`;
  canvas.style.width = `92%`;
};

window.addEventListener('resize', updateCanvasSize())
updateCanvasSize();

export const canvasHeight = (canvas.height = windowHeight);
export const canvasWidth = (canvas.width = windowWidth);
