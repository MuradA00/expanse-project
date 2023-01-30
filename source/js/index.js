AOS.init({
  once: true
})

var mixer = mixitup('.news__row', {
  selectors: {
    target: '.news__row-item'
},
    animation: {
        duration: 400
    }
});
