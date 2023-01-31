const descrRow = document.querySelector('.about-slider__wrapper');

const aboutServerBulletRow = new Swiper('.about-slider__bullet-wrapper', {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 40,
  breakpoints: {
    768: {
      spaceBetween: 89,
    }
  },
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
})


const descr = new Swiper(descrRow, {
  effect: 'fade',
  fadeEffect: { crossFade: true },
  slidesPerView: 'auto',
  allowTouchMove: false,
  thumbs: {
    swiper: aboutServerBulletRow
  },
  navigation: {
    nextEl: '.about-slider__arrow_next',
    prevEl: '.about-slider__arrow_prev'
  }
})

