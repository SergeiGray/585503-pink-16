let menuContainer = document.querySelector('.menu__container');
let menuToggle = document.querySelector('.menu__menu-toggle');
let menu = document.querySelector('.menu');
let menuHead = document.querySelector('.menu__head');
menuContainer.classList.add('menu__script-on');
menuToggle.classList.add('menu__script-on--menu-toggle');
menu.classList.add('menu__script-on--menu');
menuHead.classList.add('menu__script-on--menu-head');
menuToggle.addEventListener('click', function() {
  menuContainer.classList.toggle('menu__script-on');
  menuToggle.classList.toggle('menu__script-on--menu-toggle');
  menu.classList.toggle('menu__script-on--menu');
  menuHead.classList.toggle('menu__script-on--menu-head');
})
