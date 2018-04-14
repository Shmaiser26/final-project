function checkLang() {
    if (localStorage.getItem('lang')) {
      const res = localStorage.getItem('lang');
      Array.from(buttons, el => el.textContent === res ? el.classList.add("btn-active") : false)
    };
  }