const header = document.querySelector('.header'),
      main = document.querySelector('main');

const setPosition = () => {main.firstElementChild.style.paddingTop = `${header.clientHeight}px`};

setPosition();
