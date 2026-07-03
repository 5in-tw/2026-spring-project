import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "./images/JA33.glb";
const scale = 1;
const position = {
    x:10,
    y:5,
    z:-4,
};

//dog.loadCube();
dog.load(model);
dog.cameraPosition(position);

dog.animate();