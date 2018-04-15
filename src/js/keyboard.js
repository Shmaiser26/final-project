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

export {keyboard};