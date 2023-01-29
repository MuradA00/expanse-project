const descrRow = document.querySelector('.about-slider__wrapper');

const render = function(parent, index) {
  let renderParent = parent.querySelectorAll('.about-slider__item')[index].getAttribute('data-name');
  renderParent === '' ? renderParent = `Sliders info Number ${index + 1}` : renderParent;
  return renderParent;
}

const renderIcon = function(sliderWrapper, index) {
  let renderIcon = sliderWrapper.querySelectorAll('.about-slider__item')[index].getAttribute('data-image');
  renderIcon === '' ? renderIcon = `Slider Icon number ${index + 1}` : renderIcon;
  return renderIcon;
}

const descr = new Swiper(descrRow, {
  effect: 'fade',
  fadeEffect: { crossFade: true },
  slidesPerView: 'auto',
  allowTouchMove: false,
  navigation: {
    nextEl: '.about-slider__arrow_next',
    prevEl: '.about-slider__arrow_prev'
  },
  pagination: {
    el: '.about-slider__navigation',
    clickable: true,
    renderBullet: function (index, className) {
      return `
      <div class="${className} about-slider__bullet-block">
          <img src="${renderIcon(descrRow, index)}">
        <span> ${render(descrRow, index)}
      </span>
      </div>
      `;
    }
  }
})

