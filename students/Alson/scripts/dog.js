import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const dog3d = "/students/Alson/images/Alson's dog blend.glb";
const scale = 1;
const position = {
    x: 6,
    y: 5,
    z: -5,
};

//dog.loadCube();
dog.cameraPosition(position);
//dog.loadFloor();   
dog.load(dog3d, scale);


dog.animate();
