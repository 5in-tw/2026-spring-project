import { CanvasEraser } from "../../../scripts/canvas-eraser.js";
import { StickyClickyImage } from "../../../scripts/sticky-clicky-image.js";

const stickyMustache = new StickyClickyImage('mustache');
stickyMustache.setContainerID('dog-picture');

/*
 * HTML elements
 */
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const eraser = new CanvasEraser(surface);
const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");
const toolSelect = document.getElementById("tool-select");

/*
 * Graffiti style.
 */
surface.lineWidth = 13;
surface.lineJoin = "round";

changeColor()
function changeColor() {
  surface.strokeStyle = colorInput.value;
}

changeSize()
function changeSize() {
  surface.lineWidth = sizeInput.value;
}

let tool;
function changeTool() {
  tool = toolSelect.value;
}
changeTool();
colorInput.addEventListener("change", changeColor);
sizeInput.addEventListener("change", changeSize);
toolSelect.addEventListener("change", changeTool);

/*
 * Shapes
 */
function shapes() {
  surface.rect(150, 200, 100, 100);
  surface.stroke();

  surface.beginPath();
  surface.moveTo(200, 50);
  surface.lineTo(150, 200);
  // Add a 7.
  surface.moveTo(250, 50);
  surface.lineTo(350, 50);
  surface.moveTo(350, 50);
  surface.lineTo(270, 300);

  surface.closePath();
  surface.stroke();
}
shapes();

/*
 * Clean up
 */
function cleanCanvas() {
  surface.clearRect(0, 0, 400, 400);
}
let oldX = 0;
let oldY = 0;
function graffiti(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (event.buttons === 1) {
    if (tool === "eraser") {
      const radius = sizeInput.value/2;
      eraser.circle(x, y, radius);
    } else {
      surface.beginPath();
      surface.moveTo(oldX, oldY);
      surface.lineTo(x, y);
      surface.closePath();
      surface.stroke();
    }
  }


  oldX = x;
  oldY = y;
}

graffitiCanvas.addEventListener("mousemove", graffiti);