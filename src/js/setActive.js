import {createKeyboard, keyboardBody, firstRow, secondRow, thirdRow, spaceBtn} from "./createKeyboard";
import { keyboard } from "./keyboard";
import "./../sass/style.scss";
const langs = document.querySelector(".lang-ctrls-body");
const buttons = Array.from(document.querySelectorAll(".lang-ctrls-btn"));
const active = {
  lang: ""
};

function setActive(event) {
  Array.from(buttons, el => el.classList.remove("btn-active"));
  event.target.classList.add("btn-active");
  active.lang = event.target.textContent;
  localStorage.setItem("lang", active.lang);
  createKeyboard();
}

langs.addEventListener("click", setActive);
export {buttons};


