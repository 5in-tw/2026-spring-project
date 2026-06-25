import { ModelRotator } from "../../../scripts/model-rotator.js";
import { Color } from "three";

const dog = new ModelRotator("dog-3d");
const model = "/images/Duck.glb";
const model2 = "/students/Rex/images/Dog/Rex dog.glb";
const scale = 1;
const position = {
    x: 6,
    y: 5,
    z: -5,
};

//dog.loadCube();x  
dog.scene.background = new Color('0xff0000');
//dog.load(model, scale);
dog.cameraPosition(position);
//dog.loadFloor();
dog.load(model2, scale);


dog.animate();

