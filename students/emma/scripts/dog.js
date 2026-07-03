import { ModelRotator } from "../../../scripts/model-rotator.js";
import{ Color } from "three";
const dog = new ModelRotator('dog-3d');
const model = "/students/emma/Images/imadog1.glb";
const scale = 1;
const position = {
    x: 4,
    y: 3,
    z: -5,
}

dog.scene.background = new Color(0xf8f8f8);

//dog.loadCube();
dog.load(model, scale);
dog.cameraPosition(position);


dog.animate();