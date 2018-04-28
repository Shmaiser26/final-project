import {keyboard} from "./keyboard";



const keysArr = () => {
  const curr = localStorage.getItem("lang");
  const top = keyboard.layouts[curr].topRow.reduce((n, i) => n + i);
  const mid = keyboard.layouts[curr].middleRow.reduce((n, i) => n + i);
  const bottom = keyboard.layouts[curr].bottomRow.reduce((n, i) => n + i);
  return top + mid + bottom;
};

let keys = keysArr();




export {keys};