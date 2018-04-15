import { keyboard } from "keyboard";

const keyboardBody = document.querySelector(".keyboard");
const firstRow = document.querySelector("#first-row");
const secondRow = document.querySelector("#second-row");
const thirdRow = document.querySelector("#third-row");
const spaceBtn = document.querySelector("#space");
console.log("shit");
function createKeyboard() {
  const curr = keyboard.currentLang;

  const row1 = keyboard.layouts[curr].topRow.reduce(
    (n, i) => n + '<button class="keyboard-btn">' + i + "</button>",
    ""
  );
  const row2 = keyboard.layouts[curr].middleRow.reduce(
    (n, i) => n + '<button class="keyboard-btn">' + i + "</button>",
    ""
  );
  const row3 = keyboard.layouts[curr].bottomRow.reduce(
    (n, i) => n + '<button class="keyboard-btn">' + i + "</button>",
    ""
  );
  if (curr === "en") {
    spaceBtn.innerHTML = "<button class='keyboard-btn space'>SPACE</button>";
  } else if (curr === "ru") {
    spaceBtn.innerHTML = "<button class='keyboard-btn space'>ПРОБЕЛ</button>";
  } else if (curr === "ua") {
    spaceBtn.innerHTML = "<button class='keyboard-btn space'>ПРОБIЛ</button>";
  }
  firstRow.innerHTML = row1;
  secondRow.innerHTML = row2;
  thirdRow.innerHTML = row3;
}
createKeyboard();

