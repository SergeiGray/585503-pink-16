var menuContainer = document.querySelector('.menu__container');
var menuToggle = document.querySelector('.menu__menu-toggle');
var menuToggleCross = document.querySelector('.menu__cross');
var menuToggleBurger = document.querySelector('.menu__burger');
var menuHead = document.querySelector('.menu__head');
menuContainer.classList.add('menu__container--script-on');
menuToggleBurger.classList.remove('menu__burger--script-off');
menuHead.classList.add('menu__head--script-on');
menuToggle.addEventListener('click', function() {
  menuContainer.classList.toggle('menu__container--script-on');
  menuToggleCross.classList.toggle('menu__cross--script-off');
  menuToggleBurger.classList.toggle('menu__burger--script-off');
  menuHead.classList.toggle('menu__head--script-on');
})
