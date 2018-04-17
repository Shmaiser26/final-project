import {keyboard} from "./keyboard";
const buttons = Array.from(document.querySelectorAll(".keyboard-btn"));

const spaceButton = document.querySelector(".space");
const keysArr = () => {
  const curr = localStorage.getItem("lang");
  const top = keyboard.layouts[curr].topRow.reduce((n, i) => n + i);
  const mid = keyboard.layouts[curr].middleRow.reduce((n, i) => n + i);
  const bottom = keyboard.layouts[curr].bottomRow.reduce((n, i) => n + i);
  return top + mid + bottom;
};
let keys = keysArr();

const pressed = {
  node: null
};

function setActiveKey(event){
  let pressedKeyIndex = keys.indexOf(event.key);
  if (keys.indexOf(event.key) >= 0) {
    if (pressed.node) {
      pressed.node.classList.remove("keyboard-btn-active");
    } else {
      pressed.node = buttons[pressedKeyIndex];
      pressed.node.classList.add("keyboard-btn-active");
    }
    console.log(pressed.node);
    pressed.node = buttons[pressedKeyIndex];
    pressed.node.classList.add("keyboard-btn-active");
  } else if (event.key === " ") {
    if (pressed.node) {
      pressed.node.classList.remove("keyboard-btn-active");
    } else {
      pressed.node = spaceButton;
      pressed.node.classList.add("keyboard-btn-active");
    }
    pressed.node = spaceButton;
    pressed.node.classList.add("keyboard-btn-active");
  }
}
window.addEventListener("keydown", setActiveKey);

export {pressed, setActiveKey};
