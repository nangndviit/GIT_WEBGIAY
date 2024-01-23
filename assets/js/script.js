'use strict';

/**
 * add event on element
 */

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

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

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



let list = document.querySelector('.slider .move');
let items = document.querySelectorAll('.slider .move .move_sli');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let dot_sli = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (dot_sli + 1 > lengthItems) {
    dot_sli = 0;
  } else {
    dot_sli = dot_sli + 1;
  }
  reloadSlider();
}
prev.onclick = function () {
  if (dot_sli - 1) {
    dot_sli = lengthItems;
  } else {
    dot_sli = dot_sli - 1;
  }
  reloadSlider();
}

let refreshSlider = setInterval(() => { next.click() }, 5000);

function reloadSlider() {
  let checkLeft = items[dot_sli].offsetLeft;
  list.style.left = -checkLeft + 'px';


  // document.querySelector('.dot_sli').classList.remove('dot_sli');
  // document.querySelector('index-item' + dot_sli).classList.add('index-item');

  let lastActiveDot = document.querySelector('.slider .dots li.dot_sli');
  lastActiveDot.classList.remove('dot_sli');
  dots[dot_sli].classList.add('dot_sli');
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => { next.click() }, 5000);

}

dots.forEach((li, key) => {
  li.addEventListener('click', function () {
    dot_sli = key;
    reloadSlider();
  })
})