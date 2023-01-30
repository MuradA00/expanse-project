const header = document.querySelector('.header'),
      main = document.querySelector('main'),
      root = document.documentElement,
      menu = document.querySelector('.menu'),
      burger = document.querySelector('.header__burger'),
      closeIcon = document.querySelector('.menu__close'),
      body = document.body,
      sections = document.querySelectorAll('section'),
      sectionLinks = document.querySelectorAll('.side__list-link'),
      navLinks = document.querySelectorAll('.nav-link'),
      newsSliders = document.querySelectorAll('.news__row-item');

const setPosition = () => {
  root.style.setProperty('--headerSpacing', header.clientHeight + 'px')
};

setPosition();

function closeMenuByClick() {
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    })
  }
}
closeMenuByClick();

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sectionLinks.forEach((link) => {
        const linkOrder = link.getAttribute('href').replace('#', '');
        if (linkOrder == entry.target.id) {
          link.classList.add('--active-number')
        } else {
          link.classList.remove('--active-number')
        }
      })
    }
  })
}, {
  threshold: 0.6
})

sections.forEach(section => {
  observer.observe(section)
})

menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('.side__list-link')) {
    e.preventDefault();
    const sectionId = e.target.getAttribute('href').replace('#', '')
    window.scrollTo({
      top: document.getElementById(sectionId).offsetTop,
      smooth: 'smooth'
    })
  }
})

