import { buttons } from "./setActive";
import {
  createKeyboard,
  keyboardBody,
  firstRow,
  secondRow,
  thirdRow,
  spaceBtn
} from "./createKeyboard";
import { keyboard } from "./keyboard";

function checkLang() {
  if (localStorage.getItem("lang")) {
    const res = localStorage.getItem("lang");
    Array.from(
      buttons,
      el => (el.textContent === res ? el.classList.add("btn-active") : false)
    );
    createKeyboard();
  } else {
    localStorage.setItem("lang", "en");
    createKeyboard();
  }
}
document.addEventListener("DOMContentLoaded", checkLang);
