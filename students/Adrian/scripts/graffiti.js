import { CanvasEraser } from "../../../scripts/canvas-eraser.js";
import { StickyClickyImage } from "../../../scripts/sticky-clicky-image.js";
const stickyMustache=new StickyClickyImage('mustache');
stickyMustache.setContainerID('dog-picture');
/* 
*HTML elements

*/
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const cleanButton = document.getElementById("clean");
const colorinput = document.getElementById("color-input");
const sizeinput = document.getElementById("size-input");
const toolSelect = document.getElementById("tool-select");
const eraser = new CanvasEraser(surface);
/*
*Graffiti style
*/

surface.lineJoin = "round";
function changecolor() {
    surface.strokeStyle = colorinput.value;
}
function changesize() {
    surface.lineWidth = sizeinput.value;
}
changesize();
sizeinput.addEventListener("change", changesize)
changecolor();
colorinput.addEventListener("change", changecolor);

let tool;
function changeTool() {
    tool = toolSelect.value;
}
changeTool();
toolSelect.addEventListener("change", changeTool);



/*
*shapes
 */

/*
 * Clean
 */
function cleanCanvas() {
    surface.clearRect(0, 0, 400, 400)

}


/**
 * Graffiti
 */
let oldX = 0
let oldY = 0
function graffiti(event) {

    const x = event.offsetX;
    const y = event.offsetY;
    

    if (event.buttons === 1) {
        if (tool === "eraser") {
           const radius = sizeinput.value/2;
           eraser.circle(x,y,radius);

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
graffitiCanvas.addEventListener("mousemove", graffiti)