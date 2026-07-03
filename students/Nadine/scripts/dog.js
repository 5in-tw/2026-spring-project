import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "./images/Nadine_dog.glb";
const scale = 1;
const position ={
    x:3,
    y:3,
    z:9,
};


dog.load(model, scale);
dog.cameraPosition(position);

dog.loadFloor();

dog.animate();
