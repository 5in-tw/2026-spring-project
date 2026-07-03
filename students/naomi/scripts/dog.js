import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "./images/bigbabababaab.glb";
const scale = 1;
const position = {
   x:5,
   y:4,
   z:-5,

};

//dog.loadCube();
dog.load(model, scale);

dog.animate();
dog.cameraPosition(position);
