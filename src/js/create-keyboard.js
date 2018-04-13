const keyboardBody = document.querySelector(".keyboard");
const firstRow = document.querySelector("#first-row");
const secondRow = document.querySelector("#second-row");
const thirdRow = document.querySelector("#third-row");
const spaceBtn = document.querySelector("#space");

function addKeyboardLayout(arr) {
    const makeArr = [...arr];
    let keyboard = new Array();
    const firstLetterSecondRow = 12;
    const firstLetterThirdRow = 24;
    keyboard[0] = makeArr.slice(0, firstLetterSecondRow);
    keyboard[1] = makeArr.slice(firstLetterSecondRow, firstLetterThirdRow);
    keyboard[2] = makeArr.slice(firstLetterThirdRow);
    return keyboard;
  }
  const engAlphabet = addKeyboardLayout("qwertyuiop[]asdfghjkl;'\\zxcvbnm,./");
  const uaAlphabet = addKeyboardLayout("йцукенгшщзхїфівапролджє\\ячсмитьбю.");
  const ruAlphabet = addKeyboardLayout("йцукенгшщзхъфывапролджэ\\ячсмитьбю.")
  console.log(keyboard);
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
      langs: ['en', 'ru', 'ua'],
      currentLang: localStorage.getItem('lang')
  };
  
  function keyboardCreate () {
     const current = keyboard.layouts.currentLang;
    const row1 = keyboard.layouts.current[topRow].reduce((n, i) => n +'<button class="keyboard-btn">' + i + '</button>', '');
    const row2 = keyboard.layouts.current[middleRow].reduce((n, i) => n +'<button class="keyboard-btn">' + i + '</button>', '');
    const row3 = keyboard.layouts.current[bottomRow].reduce((n, i) => n +'<button class="keyboard-btn">' + i + '</button>', '');
    const space = '<button class="keyboard-btn space"> SPACE </button>'
    firstRow.innerHTML = row1;
    secondRow.innerHTML = row2;
    thirdRow.innerHTML = row3;
    spaceBtn.innerHTML = space;
  }
  keyboardCreate();


