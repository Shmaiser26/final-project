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
}

function checkLang() {
  if (localStorage.getItem("lang")) {
    const res = localStorage.getItem("lang");
    Array.from(
      buttons,
      el => (el.textContent === res ? el.classList.add("btn-active") : false)
    );
  }
}
document.addEventListener("DOMContentLoaded", checkLang);
langs.addEventListener("click", setActive);

console.log("fuck");