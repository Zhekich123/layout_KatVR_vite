'use strict';

const burgerIcon = document.querySelector('.navbar-toggler--icon');
const burgerTogler = document.querySelector('.navbar-toggler');
const logo = document.querySelector('.navbar-brand');

function onBurger() {
  console.log('Script is working!')
  burgerIcon.classList.toggle('open');
  burgerIcon.classList.toggle('active');
  logo.classList.toggle('inactive');
}

burgerTogler.addEventListener('click', onBurger);

