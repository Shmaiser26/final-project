import {
    keyboard
} from "./keyboard";

function buttonsArr() {
    keyboard.buttons = Array.from(document.querySelectorAll(".keyboard-btn"));
    keyboard.spaceButton = document.querySelector(".space");
}
export {
    buttonsArr
};