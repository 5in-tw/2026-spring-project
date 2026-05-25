/*
*HTML elements
*/
const graffitiCanvas = document.getElementById('my-graffiti');
const surface = graffitiCanvas.getContext("2d"); 
const cleanButton = document.getElementById("clean");
/*
* Graffiti style.
*/
surface.lineWidth = 13;
surface.lineJoin ="round"
surface.strokeStyle="red"

/*
* Shapes
*/
function shapes (){
    surface.rect(150,200,100,100);
    surface.stroke();
surface.beginPath();
surface.moveTo(200,50);
surface.lineTo(150,200);
// Add a 7.
surface.moveTo(250,50);
surface.lineTo(350,50);
surface.moveTo(350,50);
surface.lineTo(270,300);

surface.closePath();
surface.stroke();
}
shapes();

/*
* Clean up
*/
function cleanCanvas(){
    surface.clearRect(0,0,400,400);

}
cleanButton.addEventListener("click", cleanCanvas);