const langs = document.querySelector(".lang-ctrls-body");
const buttons = Array.from(document.querySelectorAll(".lang-ctrls-btn"));
const active = {
  lang: ""
};

langs.addEventListener("click", setActive);
document.addEventListener("DOMContentLoaded", checkLang);
