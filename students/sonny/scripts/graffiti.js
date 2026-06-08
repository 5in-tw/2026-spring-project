/*
* HTML element
*/
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
//const cleanButton = document.getElementById("clean");
const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("Size-Input");
const toolSelect = document.getElementById("tool-select");
console.log(toolSelect);

/*
* graffiti style.
*/
surface.lineJoin = "round";
//surface.strokeStyle ="red";
function changecolor() {
    surface.strokeStyle = colorInput.value;
}
changecolor();
colorInput.addEventListener("change", changecolor);

function changeSize() {
    surface.lineWidth = sizeInput.value;
}
changeSize();
sizeInput.addEventListener("change", changeSize);

let tool;
function changeTool() {
    tool = toolSelect.value;
    console.log(tool);
}
changeTool();
toolSelect.addEventListener("change", changeTool);
/*
*shapes
*/
function shapes() {
    surface.rect(150, 200, 100, 80);
    surface.stroke();
    surface.beginPath();
    surface.moveTo(200, 50);
    surface.lineTo(150, 200);
    //Add a 7.
    surface.moveTo(250, 50);
    surface.lineTo(350, 50);
    surface.moveTo(350, 50);
    surface.lineTo(270, 300);

    surface.closePath();
    surface.stroke();
}
shapes();

/*function cleanCanvas() {
    surface.clearRect(0, 0, 400, 400,);
};
cleanButton.addEventListener("click", cleanCanvas);*/

let oldX = 0;
let oldY = 0;

function graffiti(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y, event.buttons);

    if (event.buttons > 0) {
        if (tool === "eraser") {
            const width = sizeInput.value;
            surface.clearRect(x,y,width, width);

        } else {
            surface.beginPath();
            surface.moveTo(oldX, oldY);
            surface.lineTo(x, y);
            surface.closePath();
            surface.stroke();
        }
    };
    oldX = x;
    oldY = y;
}
    graffitiCanvas.addEventListener("mousemove", graffiti);
