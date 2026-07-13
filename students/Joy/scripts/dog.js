import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "./images/JoyDog.glb";
const scale = 2;
const position = {
    x:20,
    y:4,
    z:10,
};


dog.load(model, scale);

//dog.loadCube()
dog.animate();
dog.cameraPosition(position);
