var html = {
    index: require('./index.html')
};

var css = {
    style: require('./scss/style.scss'),
    style: require('../node_modules/slick-carousel/slick/slick.css')
};

var $ = require('jquery');
require('chart.js');
require('slick-carousel');

//chart
function chartView(){
  var barChartData = {
      labels: ['2015/09', '2015/12', '2016/03', '2016/06', '2016/09', '2016/12', '2017/03', '2017/06'],
      datasets: [{
          label: '業務委託',
          backgroundColor: "rgba(249, 182, 48, 1)",
          data: [2, 2, 3, 3, 4, 4, 5, 5],
      }, {
          label: '正社員',
          backgroundColor: "rgba(249, 182, 48, .5)",
          data: [0, 0, 0, 8, 7, 6, 7, 8],
      }]
  };
  var ctx = $('.js-chart').get(0).getContext("2d");
  var graph = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: true,
          gridLines:{
            color: "#cacaca",
          },
          ticks: {
            fontColor: "#888888",
            fontSize: 10,
          }
        }],
        yAxes: [{
          stacked: true,
          gridLines:{
            color: "#cacaca",
          },
          ticks: {
            fontColor: "#888888",
            fontSize: 10,
          }
        }]
      }
    }
  });
}

//parallax
$(function(){

　var timer = null;
  var $cardDirector = $('.js-card-director');
  var $cardCorder = $('.js-card-corder');

  $cardDirector.addClass('is-move');
  $cardCorder.addClass('is-move');

  $(window).on('load scroll', function () {

    var scrollPx = $(this).scrollTop();
    var aboutTop = $('#about').offset().top;
    var directionTop = $('#direction').offset().top;
    var meritTop = $('#merit').offset().top;
    var cordingTop = $('#cording').offset().top;
    var planTop = $('#plan').offset().top;
    var flag = $('.js-graph').hasClass('is-view');

    if(scrollPx >= planTop) {
      $cardCorder.addClass('is-move');
    } else if (scrollPx >= cordingTop - 150) {
      $cardCorder.removeClass('is-move');
    } else if (scrollPx >= meritTop - 150 && !flag) {
      $('.js-graph').addClass('is-view');
      chartView();
    } else if (scrollPx >= meritTop) {
      $cardDirector.addClass('is-move');
      $cardCorder.addClass('is-move');
    } else if (scrollPx >= directionTop - 300) {
      $cardDirector.removeClass('is-move');
    } else if (scrollPx >= aboutTop) {
      $cardDirector.addClass('is-move');
    }

  });

  $(window).on('resize', function () {

    clearTimeout(timer);
		timer = setTimeout(function() {
        chartView();
		}, 300 );

  });

});

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

  $('.js-carousel-detail').click (function(){
    $(this).toggleClass('is-view');
  });

});



//tab
$(function(){

  var $plan = $('.js-plan');
  var $planFirst = $('.js-plan:first');
  var $tab = $('.js-toggle');
  var $tabFirst = $('.js-toggle:first');

  $planFirst.addClass('is-show');
  $tabFirst.addClass('is-active');

  $tab.on('click' , function() {

    $tab.removeClass('is-active');
    $(this).addClass('is-active');
    $plan.removeClass('is-show');

    $($(this).find('a').attr('href')).addClass('is-show');
    return false;

  });
});
