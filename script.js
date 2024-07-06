'use strict';
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

console.log(burger);

const handlerBurgerClick = function() {
  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    menu.classList.remove('active');
  } else {
    burger.classList.add('active');
    menu.classList.add('active');
  }
}

burger.addEventListener('click', handlerBurgerClick);
menu.addEventListener('click', handlerBurgerClick);
