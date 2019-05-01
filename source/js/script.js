let menuContainer = document.querySelector('.menu__container');
let menuToggle = document.querySelector('.menu__menu-toggle');
let menuToggleCross = document.querySelector('.menu__menu-toggle--cross');
let menuToggleBurger = document.querySelector('.menu__menu-toggle--burger');
let menu = document.querySelector('.menu');
let menuHead = document.querySelector('.menu__head');
menuContainer.classList.add('menu__script-on');
menuToggleCross.classList.add('menu__script-on--menu-toggle-off');
menuToggleBurger.classList.remove('menu__script-on--menu-toggle-off');
menu.classList.add('menu__script-on--menu');
menuHead.classList.add('menu__script-on--menu-head');
menuToggle.addEventListener('click', function() {
  menuContainer.classList.toggle('menu__script-on');
  menuToggleCross.classList.toggle('menu__script-on--menu-toggle-off');
  menuToggleBurger.classList.toggle('menu__script-on--menu-toggle-off');
  menu.classList.toggle('menu__script-on--menu');
  menuHead.classList.toggle('menu__script-on--menu-head');
})
