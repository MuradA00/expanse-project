const slides = document.querySelectorAll('.update__slider-item'),
      updateWrapper = document.querySelector('.update__wrapper'),
      videoSliders = document.querySelectorAll('.update__slider-item'),
      newsFilterBtn = document.querySelectorAll('.news__filter-btn');

const render = function(parent, index) {
  let renderParent = parent.querySelectorAll('.update__slider-item')[index].getAttribute('data-content');
  renderParent === '' ? renderParent = `Sliders info Number ${index + 1}` : renderParent;
  return renderParent;
}

const renderIcon = function(sliderWrapper, index) {
  let renderIcon = sliderWrapper.querySelectorAll('.update__slider-item')[index].getAttribute('data-url');
  renderIcon === '' ? renderIcon = `Slider Icon number ${index + 1}` : renderIcon;
  return renderIcon;
}

const newsRow = new Swiper('.news__wrapper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    1200: {
      spaceBetween: 80
    }
  }
})

const bulletRow = new Swiper('.update__bullet-wrapper', {
  slideToClickedSlide: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 20,
  breakpoints: {
    1200: {
      spaceBetween: 80
    },
    550: {
      spaceBetween: 60,
    }
  },
  watchSlidesProgress: true
})



const updateRow = new Swiper(updateWrapper, {
  slidesPerView: 'auto',
  effect: 'fade',
  thumbs: {
    swiper: bulletRow
  },
  fadeEffect: { crossFade: true },
  navigation: {
    nextEl: '.update__arrow_next',
    prevEl: '.update__arrow_prev'
  }
})

newsFilterBtn.forEach(btn => {
  btn.addEventListener('click', () => newsRow.slideTo(0, 400))
})

