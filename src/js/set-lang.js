function setActive(event) {
  Array.from(buttons, el => el.classList.remove("btn-active"));
  event.target.classList.add("btn-active");
  active.lang = event.target.textContent;
  localStorage.setItem('lang', active.lang);
}

