// SuperSlide
var Slide = {
  init: function (op) {
    require(['js/swiper'], function (Swiper) {
      var mySwiper = new Swiper ('.swiper-container', {
        direction : 'vertical',
        // pagination: '.swiper-pagination',
        paginationClickable: true,
        // loop: true,
        centeredSlides: true,
        // autoplay: 2500,
        autoplayDisableOnInteraction: false
      })        
    })
  }
}

var Slide2 = {
  init: function (op) {
    require(['js/swiper'], function (Swiper) {
      var mySwiper = new Swiper ('.swiper-container2', {
        direction : 'vertical',
        paginationClickable: true,
        loop: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
      })        
    })
  }
}
//show
var Show = {
  init:function(ele,close,overlay){
    require(['zepto','zepto/touch'],function($,tap){
      $(ele).tap(function(){
        $(overlay).css('display','block');
      });
      $(close).tap(function(){
        $(overlay).css('display','none');
        // $(close).css('display','none');
      })
    })
  }
}
//Toggle
var Toggle = {
  init:function(control,box,cls,cls2){
    require(['zepto','zepto/touch'],function($,tap){
      $(control).on('tap',function(){
        $(this).children().toggleClass(cls2);
        $(this).next().toggleClass(cls);
      })
    })
  }
}
// Pikaday
var Datepicker = {
  init: function (op) {
    require(['pikaday/pikaday'], function (Pikaday) {
      var picker = new Pikaday(op);
    })
  }
}

// Tab
var Tab = {
  init: function(e,content) {
    require(['zepto', 'zepto/touch'], function ($, tap) {
      $(e).tap(function () {
        // console.log($(this).index());
        // $(e).children().eq($(this).index()).addClass('active').siblings().removeClass('active')
        $(e).eq($(this).index()).addClass('active').siblings().removeClass('active')
        $(content).eq($(this).index()).addClass('show').siblings().removeClass('show');
      })
    })
  }
}

//Alert
var Alert ={
  init : function (open ,overlay,block,close) {
    require(['zepto','zepto/touch'],function($,tap){
      $(open).tap(function(){
        $(overlay).addClass('fadeIn');
        $(block).addClass('mySilderdown');
        $(close).addClass('mySilderdown');
      })
      $(close).tap(function(){
        $(overlay).removeClass('fadeIn');
        $(block).removeClass('mySilderdown');
        $(close).removeClass('mySilderdown');
      })
    })
  }
}
//Offcanvas
var Offcanvas ={
  init: function(trigger,drawer){
    require(['zepto/zepto','js/drawer'],function($, draw){
      $(trigger).drawer({
        "model": $(drawer),

        "dimens": {
        "width": "50%"
        },
        "dir": "left"
    });
  
    })
  }
}


exports.Offcanvas =Offcanvas;
exports.Slide = Slide;
exports.Slide2 = Slide2;
exports.Show = Show;
exports.Datepicker = Datepicker;
exports.Tab = Tab;
exports.Alert = Alert;
exports.Toggle = Toggle;