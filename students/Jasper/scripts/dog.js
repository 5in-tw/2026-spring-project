import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator("dog-3d");
const model = "../images/jasper dog.glb";
const scale = 1;
const position = {
    x: 5,
    y: 5,
    z: 15,
}

//dog.loadCube();
dog.load(model, scale);
dog.loadFloor();
dog.cameraPosition(position);

dog.animate();