import { CanvasEraser } from "../../../scripts/canvas-eraser.js";
import { StickyClickyImage } from "../../../scripts/sticky-clicky-image.js";

/*
 *HTML elements
 */
let stickyMustache= new StickyClickyImage('mustache');
stickyMustache.setContainerID('dog-picture')
let myGraffiti = document.getElementById("my-graffiti");
let surface = myGraffiti.getContext("2d");
let colorInput = document.getElementById("color-input");
let sizeInput = document.getElementById("size-input");
let toolSelect = document.getElementById("tool-select")
let eraser = new CanvasEraser(surface);
/*
 *Graffiti style
 */

surface.lineJoin = "round"
function changeColor() {
    surface.strokeStyle = colorInput.value;
};
changeColor();
colorInput.addEventListener("change", changeColor);

function changeSize() {
    surface.lineWidth = sizeInput.value
};
changeSize();
sizeInput.addEventListener("change", changeSize);

let tool;
function changeTool() {
    tool = toolSelect.value;

}
changeTool();
toolSelect.addEventListener("change", changeTool)


/*
 *shapes
 */
/*function shapes() {
    surface.rect(150, 200, 100, 100);
    surface.stroke();

    surface.beginPath();
    surface.moveTo(200, 50);
    surface.lineTo(150, 200);
    surface.closePath();
    surface.stroke();

    surface.beginPath();
    surface.moveTo(250, 50);
    surface.lineTo(350, 50);
    surface.moveTo(350, 50);
    surface.lineTo(270, 300);
    surface.closePath();
    surface.stroke();

}
shapes();
*/


/*
*graffiti
*/


let oldX = 0;
let oldY = 0;
function graffiti(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    
    if (event.buttons === 1) {
       if (tool === "eraser") {
    let radius = sizeInput.value/2; 
    eraser.circle(x,y,radius);
    
} else {
            {
                surface.beginPath();
                surface.moveTo(oldX, oldY);
                surface.lineTo(x, y);
                surface.closePath();
                surface.stroke();
            }
        }
    }

    oldX = x;
    oldY = y;

}


myGraffiti.addEventListener("mousemove", graffiti);

