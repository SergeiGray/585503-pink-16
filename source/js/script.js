let menuContainer = document.querySelector('.menu__container');
let menuToggle = document.querySelector('.menu__menu-toggle');
let menuToggleCross = document.querySelector('.menu__cross');
let menuToggleBurger = document.querySelector('.menu__burger');
let menuHead = document.querySelector('.menu__head');
menuContainer.classList.add('menu__script-on');
menuToggleCross.classList.add('menu__script-on--menu-toggle-off');
menuToggleBurger.classList.remove('menu__script-on--menu-toggle-off');
menuHead.classList.add('menu__script-on--menu-head');
menuToggle.addEventListener('click', function() {
  menuContainer.classList.toggle('menu__script-on');
  menuToggleCross.classList.toggle('menu__script-on--menu-toggle-off');
  menuToggleBurger.classList.toggle('menu__script-on--menu-toggle-off');
  menuHead.classList.toggle('menu__script-on--menu-head');
})
