import {
    pressed,
    typingResult
} from "./typingResult";


const startBtn = document.querySelector(".start-btn");

function startTyping(event) {
typingResult();
    //window.addEventListener("keydown", typingResult);

}
startBtn.addEventListener("click", startTyping);