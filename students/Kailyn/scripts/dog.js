import { ModelRotator } from "../../../scripts/model-rotator.js"

let dog= new ModelRotator('dog-3d');
let model="./images/Kailyn-dog.glb";
let scale=1.4;
let position={
    x:17,
    y:10,
    z:-5,
};

//dog.loadCube();
dog.load(model, scale)
dog.cameraPosition(position);
dog.animate();