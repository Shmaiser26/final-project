!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){const n=document.querySelector(".lang-ctrls-body"),o=Array.from(document.querySelectorAll(".lang-ctrls-btn")),r={lang:""};n.addEventListener("click",function(t){Array.from(o,t=>t.classList.remove("btn-active")),t.target.classList.add("btn-active"),r.lang=t.target.textContent,localStorage.setItem("lang",r.lang)}),document.addEventListener("DOMContentLoaded",function(){if(localStorage.getItem("lang")){const t=localStorage.getItem("lang");Array.from(o,e=>e.textContent===t&&e.classList.add("btn-active"))}})},function(t,e){document.querySelector(".keyboard");const n=document.querySelector("#first-row"),o=document.querySelector("#second-row"),r=document.querySelector("#third-row"),c=document.querySelector("#space");function a(t){const e=[...t];let n=new Array;return n[0]=e.slice(0,12),n[1]=e.slice(12,24),n[2]=e.slice(24),n}const u=a("qwertyuiop[]asdfghjkl;'\\zxcvbnm,./"),l=a("йцукенгшщзхїфівапролджє\\ячсмитьбю."),s=a("йцукенгшщзхъфывапролджэ\\ячсмитьбю."),d={layouts:{en:{topRow:u[0],middleRow:u[1],bottomRow:u[2]},ru:{topRow:s[0],middleRow:s[1],bottomRow:s[2]},ua:{topRow:l[0],middleRow:l[1],bottomRow:l[2]}},langs:["en","ru","ua"],currentLang:localStorage.getItem("lang")};!function(){const t=d.currentLang,e=d.layouts[t].topRow.reduce((t,e)=>t+'<button class="keyboard-btn">'+e+"</button>",""),a=d.layouts[t].middleRow.reduce((t,e)=>t+'<button class="keyboard-btn">'+e+"</button>",""),u=d.layouts[t].bottomRow.reduce((t,e)=>t+'<button class="keyboard-btn">'+e+"</button>","");"en"===t?c.innerHTML="<button class='keyboard-btn space'>SPACE</button>":"ru"===t?c.innerHTML="<button class='keyboard-btn space'>ПРОБЕЛ</button>":"ua"===t&&(c.innerHTML="<button class='keyboard-btn space'>ПРОБIЛ</button>"),n.innerHTML=e,o.innerHTML=a,r.innerHTML=u}()},function(t,e,n){"use strict";n.r(e);n(1),n(0)}]);