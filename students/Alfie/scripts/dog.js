import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "./images/Alfie-dog2.glb";
const scale = 1;
const position = {
    x: -10,
    y: 6,
    z: 7,
}

//dog.loadCube();

dog.load(model, scale);
//dog.loadFloor();
dog.cameraPosition(position);

dog.animate();


