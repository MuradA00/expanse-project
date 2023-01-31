var allNewsMixer = mixitup('.every-news__row', {
  selectors: {
    target: '.news__row-item'
},
    animation: {
        duration: 400
    }
});

const filterBtns = document.querySelectorAll('.news__filter-btn');

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[0].classList.add('mixitup-control-active')
}
