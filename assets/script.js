document.addEventListener('DOMContentLoaded', function () {
  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Product / cert sliders with arrow controls
  document.querySelectorAll('.product-slider-wrap').forEach(function (wrap) {
    var track = wrap.querySelector('.product-slider');
    var prev = wrap.querySelector('.slider-arrow.prev');
    var next = wrap.querySelector('.slider-arrow.next');
    if (!track) return;
    function step() {
      var card = track.querySelector('.product-card');
      return card ? card.getBoundingClientRect().width + 1 : 260;
    }
    if (prev) prev.addEventListener('click', function () {
      track.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    if (next) next.addEventListener('click', function () {
      track.scrollBy({ left: step(), behavior: 'smooth' });
    });
  });

  // Mobile nav
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
    });
  }
});
