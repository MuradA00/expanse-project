const newsRow = new Swiper('.news__wrapper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    1200: {
      spaceBetween: 65
    }
  }
})

const updateRow = new Swiper('.update__wrapper', {
  slidesPerView: 'auto',
  effect: 'fade'
})
