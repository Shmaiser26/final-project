function addKeyboardLayout(arr) {
  const makeArr = [...arr];
  const keyboard = new Array();
  const firstLetterSecondRow = 12;
  const firstLetterThirdRow = 23;
  keyboard[0] = makeArr.slice(0, firstLetterSecondRow);
  keyboard[1] = makeArr.slice(firstLetterSecondRow, firstLetterThirdRow);
  keyboard[2] = makeArr.slice(firstLetterThirdRow);
  return keyboard;
}
const engAlphabet = addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm,./");
const uaAlphabet = addKeyboardLayout("йцукенгшщзхїфівапролджєячсмитьбю.");
const ruAlphabet = addKeyboardLayout("йцукенгшщзхъфывапролджэячсмитьбю.");
const keyboard = {
  layouts: {
    en: {
      topRow: engAlphabet[0],
      middleRow: engAlphabet[1],
      bottomRow: engAlphabet[2]
    },
    ru: {
      topRow: ruAlphabet[0],
      middleRow: ruAlphabet[1],
      bottomRow: ruAlphabet[2]
    },
    ua: {
      topRow: uaAlphabet[0],
      middleRow: uaAlphabet[1],
      bottomRow: uaAlphabet[2]
    }
  },
  langs: ["en", "ru", "ua"],
  currentLang: localStorage.getItem("lang")
};

const keyboardBody = document.querySelector(".keyboard");
const firstRow = document.querySelector("#first-row");
const secondRow = document.querySelector("#second-row");
const thirdRow = document.querySelector("#third-row");
const spaceBtn = document.querySelector("#space");

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
console.log("shit");
