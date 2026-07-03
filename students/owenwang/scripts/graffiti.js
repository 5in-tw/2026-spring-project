import { CanvasEraser } from "../../../scripts/canvas-eraser.js";

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
 * Graffiti style
 */
surface.lineJoin = "round";

let tool;
function changeTool() {
    tool = toolSelect.value;
}
toolSelect.addEventListener("change", changeTool);
changeTool();

function changeColor() {
    surface.strokeStyle = colorInput.value;
}
colorInput.addEventListener("change", changeColor);
changeColor();

function changeSize() {
    surface.lineWidth = sizeInput.value;
}
sizeInput.addEventListener("change", changeSize);
changeSize();

/*
 * Graffiti
 */
let oldX = 0;
let oldY = 0;

function graffiti(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (event.buttons > 0) {
        if (tool === "eraser") {
            const radius = sizeInput.value / 2;
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