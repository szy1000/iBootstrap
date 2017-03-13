var CountUp = {
  init: function (Id, Start, End, Decimals, Duration, option) {
    var d=require(['jquery','js/countUp.min'], function ($, countUp) {
      var option = {
        useEasing : true, 
      useGrouping : true, 
      separator : '', 
      decimal : '.', 
      prefix : '', 
      suffix : '' 
      }
      var demo = new countUp(Id, Start, End, Decimals, Duration, option);

      $(window).on('scroll', function () {
        $('.app-date').each(function () {
            var elmentPosition = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + $(window).height() > elmentPosition) {
                demo.start();
            }
        });
      });
    })
  }
}

var $=require('jquery');

/* Loading buttons */
var loading = {
   $(function(loading-button,load) { "use strict";

    $(loading-button).click(function() {
        var btn = $(this)
        btn.button(load);
    });

  });
}
exports.loading =loading;

exports.CountUp = CountUp;