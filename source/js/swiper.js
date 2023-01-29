const slides = document.querySelectorAll('.update__slider-item'),
      updateWrapper = document.querySelector('.update__wrapper'),
      videoSliders = document.querySelectorAll('.update__slider-item');

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
      spaceBetween: 65
    }
  }
})

const updateRow = new Swiper(updateWrapper, {
  slidesPerView: 'auto',
  effect: 'fade',
  autoplay: {
    delay: 3000
  },
  fadeEffect: { crossFade: true },
  navigation: {
    nextEl: '.update__arrow_next',
    prevEl: '.update__arrow_prev'
  },
  pagination: {
    el: '.update__bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return `
      <div class="${className} update__bullet-block">
          <img src="${renderIcon(updateWrapper, index)}">
        <span class="" > ${render(updateWrapper, index)}
      </span>
      </div>
      `;
    },
  }
})

let videoBlocks = document.querySelectorAll('.update__video');

videoBlocks.forEach(videoBlock => {
  videoBlock.pause();
})

updateRow.on('slideChange', function() {
  videoBlocks.forEach(video => {
    video.play();
  })
})
