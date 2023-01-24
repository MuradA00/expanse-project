const header = document.querySelector('.header'),
      main = document.querySelector('main'),
      root = document.documentElement,
      menu = document.querySelector('.menu'),
      burger = document.querySelector('.header__burger'),
      closeIcon = document.querySelector('.menu__close'),
      body = document.body;

const setPosition = () => {
  root.style.setProperty('--headerSpacing', header.clientHeight + 'px')
};


function showMenu() {
  closeIcon.classList.remove('closed')
  burger.classList.toggle('active-burger');
  body.classList.add('body-locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('body-locked')
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('body-locked');
  }
}

function closeMenu() {
  closeIcon.classList.add('closed');
  menu.classList.remove('show-menu');
  burger.classList.remove('active-burger');
  body.classList.remove('body-locked');
}

if (burger) {
  closeIcon.addEventListener('click', closeMenu);
}

if (burger) {
  burger.addEventListener('click', showMenu);
}


setPosition();
