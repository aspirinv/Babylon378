import * as _ from 'lodash';

import { scene } from "./Scene";

function run(){
    const root = document.createElement("div");
    root.style.width = "480px";
    root.style.height = "640px";
    root.style.backgroundColor = "aliceblue";

    new scene(root);
    return root;
}

document.body.appendChild(run());