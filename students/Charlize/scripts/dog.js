import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "./images/Dobby.glb";
const scale = 1;
const position ={
    x: 10,
    y: 8,
    z: -10,
};


/*dog.loadCube();*/
dog.load(model, scale);

dog.cameraPosition(position);
dog.animate();