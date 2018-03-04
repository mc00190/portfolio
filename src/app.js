var html = {
    index: require('./index.html')
};

var css = {
    style: require('./scss/style.scss'),
    style: require('../node_modules/slick-carousel/slick/slick.css')
};

var $ = require('jquery');
require('slick-carousel');

//carousel
$(window).on('load' , function(){
  $('.js-carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    cssEase: 'ease',
    infinite: true,
    centerMode: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});

//carouselHover
$(function(){
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    $('.js-carousel-detail').click (function(){
    $(this).toggleClass('is-view');
  });
} else {
  $('.js-carousel-detail').hover (function(){
    $(this).toggleClass('is-view');
  });
}
});
