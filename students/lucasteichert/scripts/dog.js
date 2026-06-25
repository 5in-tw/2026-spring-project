import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "./images/lucas dog.blend.glb"
const scale = 1;
const position = {
    x: 4,
    y: 3,
    z: -5,
};
dog.animate();
dog.load(model, scale);
dog.loadFloor();
dog.cameraPosition(position);