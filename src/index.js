import * as AFrame from "aframe";
import * as ZapparAFrame from "@zappar/zappar-aframe";

console.log("Using AFrame", AFrame.version);
console.log("Using ZapparAFrame", ZapparAFrame);

window.addEventListener("load", setup);

function setup() {

    let myImageGroup = document.getElementById("image-group");

    let imageVisible = false;

    myImageGroup.addEventListener("zappar-visible", () => {
        // The image has appeared so show the group
        myImageGroup.setAttribute("visible", "true");
        imageVisible = true;
    });

    myImageGroup.addEventListener("zappar-notvisible", () => {
        // The image has disappeared so hide the group after a short delay
        imageVisible = false;
        setTimeout(() => {
            if (imageVisible === false) myImageGroup.setAttribute("visible", "false");
        }, 500)
    });
    
}
