import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "./images/Sonny dog with color.glb"
const scale = 1;
const position = {
    x: -10,
    y: 10,
    z: 10,
}

dog.load(model, scale);
dog.loadFloor();
dog.cameraPosition(position);


dog.animate();