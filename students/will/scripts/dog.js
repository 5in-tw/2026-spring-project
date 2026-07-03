import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator ('dog-3D');
const model ="./images/will_dog_head.glb";
const scale = 1;
const position = {
    x:5,
    y:3,
    z:-5,
};



//dog.loadCube();
dog.animate();
dog.load(model, scale);
dog.loadFloor();
dog.cameraPosition(position);
