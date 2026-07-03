import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3D');

// dog.loadCube();
dog.animate();
const modle = "./images/adriansuDogHead.glb";
const scale=1;
const position={
    x:0,
    y:1,
    z:5,

};
dog.load(modle, scale);
dog.cameraPosition(position);
