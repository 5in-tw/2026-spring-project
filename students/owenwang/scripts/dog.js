import { ModelRotator } from "../../../scripts/model-rotator.js";
import { Color } from "three";

const dog = new ModelRotator("dog-3d");
const model = "/images/Owen Dog.glb";
const scale = 1;
const position = {
    x: 8,
    y: 0,
    z: -4,
}

dog.load(model, scale);
dog.cameraPosition(position);
dog.scene.background = new Color(0xffffff);
dog.animate();