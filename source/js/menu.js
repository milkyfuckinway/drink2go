const menuButton = document.querySelector('.menu-button');
const menuIcon = menuButton.querySelector('.menu-button__icon');
const nav = document.querySelector('.nav');

nav.classList.remove('nav--nojs');
nav.classList.add('nav--closed');
menuButton.classList.remove('menu-button--nojs');

menuButton.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-button__icon--active');
  toggleNav();
});

const toggleNav = () => {
  if (nav.classList.contains('nav--opened')) {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  } else {
    nav.classList.add('nav--opened');
    nav.classList.remove('nav--closed');
  }
};
