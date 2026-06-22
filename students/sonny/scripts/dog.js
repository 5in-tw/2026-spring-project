import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "/images/Duck.glb";
const scale = 2;
const position = {
    x: 4,
    y: 5,
    z: -5,
}

dog.load(model, scale);
dog.loadFloor();
dog.cameraPosition(position);


dog.animate();