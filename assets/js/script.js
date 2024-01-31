// 'use strict';

// /**
//  * add event on element
//  */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * navbar toggle
 */

/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);




// sidebar moblie
const menuOpen = document.querySelector(".menu--open")
const menuClose = document.querySelector(".menu--close")
const menu = document.querySelector(".navbar2")
const body = document.querySelector("body")

menuOpen.addEventListener("click", function() {
  menu.classList.add("menu--active")
  menuClose.classList.add("show")
  body.classList.add("body--disable")
})

menuClose.addEventListener("click", function() {
  menu.classList.remove("menu--active")
  menuClose.classList.remove("show")
  body.classList.remove("body--disable")
})

