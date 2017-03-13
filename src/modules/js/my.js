jQuery(".slideTxtBox").slide({
	mainCell:".bd ",
	titCell:".hd li",
	triger:"click",
	effect:"fold",
	autoPlay:true,
	easing:"swing"
});



var mySwiper = new Swiper ('.swiper-container11', {
    direction: 'horizontal',
    loop: true,
    autoplay:2000,
    slidesPerView: 1,
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
  }) 
var mySwiper2 = new Swiper ('.swiper-container1', {
    // direction: 'vertical',
    loop: true,
    // autoplay:2000,
    slidesPerView: 3,
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
  }) 

$(document).ready(function(){
    $(".plan-content li").css("display","none");
    $(".plan-content li").eq(0).css("display","block");

    $(".plan-header li").click(function() {
        var index = $(this).index();
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        // alert($(this).index());
        $(".plan-content .tripCon").css("display","none");
        $(".plan-content li").eq(index).css("display","block");
    });

    $(".latest-show a:first-child").css({
      'margin-top':'0',
      'margin-left':'0',
      'width':'592px',
    })
    $(".latest-show a:first-child .pic").css({
      'height':'487px'
    })
})

$("ul.quanziTab").mouseover(function () {
  $(this).addClass("active").siblings().removeClass("active");
})
// jQuery(document).ready(function ($) {    
//     var jssor_1_SlideshowTransitions = [
//       {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
//       {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
//     ];
    
//     var jssor_1_options = {
//       $AutoPlay: true,
//       $SlideshowOptions: {
//         $Class: $JssorSlideshowRunner$,
//         $Transitions: jssor_1_SlideshowTransitions,
//         $TransitionsOrder: 1
//       },
//       $ArrowNavigatorOptions: {
//         $Class: $JssorArrowNavigator$
//       },
//       $ThumbnailNavigatorOptions: {
//         $Class: $JssorThumbnailNavigator$,
//         $Cols: 10,
//         $SpacingX: 8,
//         $SpacingY: 8,
//         $Align: 360
//       }
//     };
    
//     var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    
//     //responsive code begin
//     //you can remove responsive code if you don't want the slider scales while window resizing
//     function ScaleSlider() {
//         var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
//         if (refSize) {
//             refSize = Math.min(refSize, 1200);
//             jssor_1_slider.$ScaleWidth(refSize);
//         }
//         else {
//             window.setTimeout(ScaleSlider, 30);
//         }
//     }
//     ScaleSlider();
//     $(window).bind("load", ScaleSlider);
//     $(window).bind("resize", ScaleSlider);
//     $(window).bind("orientationchange", ScaleSlider);
//     //responsive code end
// });

  $(document).ready(function() {
    // 图片上下滚动
    var count = $("#imageMenu li").length - 5; /* 显示 6 个 li标签内容 */
    var interval = $("#imageMenu li:first").width();
    var curIndex = 0;
    $('.scrollbutton').click(function() {
      if ($(this).hasClass('disabled')) return false;
      if ($(this).hasClass('smallImgUp')) {
        --curIndex;
      } else ++curIndex;
      $('.scrollbutton').removeClass('disabled');

      if (curIndex == 0) $('.smallImgUp').addClass('disabled');

      if (curIndex == count - 1) $('.smallImgDown').addClass('disabled');



      $("#imageMenu ul").stop(false, true).animate({
        "marginTop": -curIndex * interval + "px"
      }, 600);

    });

    // 解决 ie6 select框 问题

    $.fn.decorateIframe = function(options) {

      if ($.browser.msie && $.browser.version < 7) {

        var opts = $.extend({}, $.fn.decorateIframe.defaults, options);

        $(this).each(function() {

          var $myThis = $(this);

          //创建一个IFRAME

          var divIframe = $("<iframe />");
          divIframe.attr("id", opts.iframeId);
          divIframe.css("position", "absolute");
          divIframe.css("display", "none");
          divIframe.css("display", "block");
          divIframe.css("z-index", opts.iframeZIndex);
          divIframe.css("border");
          divIframe.css("top", "0");
          divIframe.css("left", "0");
          if (opts.width == 0) {
            divIframe.css("width", $myThis.width() + parseInt($myThis.css("padding")) * 2 + "px");
          }
          if (opts.height == 0) {
            divIframe.css("height", $myThis.height() + parseInt($myThis.css("padding")) * 2 + "px");
          }
          divIframe.css("filter", "mask(color=#fff)");
          $myThis.append(divIframe);
        });
      }
    }
    $.fn.decorateIframe.defaults = {
      iframeId: "decorateIframe1",
      iframeZIndex: -1,
      width: 0,
      height: 0
    }

    //放大镜视窗

    $("#bigView").decorateIframe();
    //点击到中图
    var midChangeHandler = null;
    $("#imageMenu li img").bind("click", function() {
      if ($(this).attr("id") != "onlickImg") {
        midChange($(this).attr("src").replace("small", "mid"));
        $("#imageMenu li").removeAttr("id");
        $(this).parent().attr("id", "onlickImg");
      }
    }).bind("mouseover", function() {
      if ($(this).attr("id") != "onlickImg") {
        window.clearTimeout(midChangeHandler);
        midChange($(this).attr("src").replace("small", "mid"));
        $(this).css({
          // "border": "3px solid #959595"
          "opacity": "1"
        });
      }

    }).bind("mouseout", function() {
      if ($(this).attr("id") != "onlickImg") {
        $(this).removeAttr("style");
        midChangeHandler = window.setTimeout(function() {
          midChange($("#onlickImg img").attr("src").replace("small", "mid"));
        }, 1000);
      }
    });

    function midChange(src) {
      $("#midimg").attr("src", src).load(function() {
        changeViewImg();
      });
    }

    //大视窗看图
    function mouseover(e) {
      if ($("#winSelector").css("display") == "none") {
        $("#winSelector,#bigView").show();
      }
      $("#winSelector").css(fixedPosition(e));
      e.stopPropagation();
    }

    function mouseOut(e) {

      if ($("#winSelector").css("display") != "none") {

        $("#winSelector,#bigView").hide();

      }

      e.stopPropagation();

    }

    $("#midimg").mouseover(mouseover); //中图事件

    $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件



    var $divWidth = $("#winSelector").width(); //选择器宽度

    var $divHeight = $("#winSelector").height(); //选择器高度

    var $imgWidth = $("#midimg").width(); //中图宽度

    var $imgHeight = $("#midimg").height(); //中图高度

    var $viewImgWidth = $viewImgHeight = $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度



    function changeViewImg() {

      $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "mid"));

    }

    changeViewImg();

    $("#bigView").scrollLeft(0).scrollTop(0);

    function fixedPosition(e) {

      if (e == null) {

        return;

      }

      var $imgLeft = $("#midimg").offset().left; //中图左边距

      var $imgTop = $("#midimg").offset().top; //中图上边距

      X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X

      Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y

      X = X < 0 ? 0 : X;

      Y = Y < 0 ? 0 : Y;

      X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;

      Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;



      if ($viewImgWidth == null) {

        $viewImgWidth = $("#bigView img").outerWidth();

        $viewImgHeight = $("#bigView img").height();

        if ($viewImgWidth < 200 || $viewImgHeight < 200) {

          $viewImgWidth = $viewImgHeight = 800;

        }

        $height = $divHeight * $viewImgHeight / $imgHeight;

        $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);

        $("#bigView").height($height);

      }

      var scrollX = X * $viewImgWidth / $imgWidth;

      var scrollY = Y * $viewImgHeight / $imgHeight;

      $("#bigView img").css({
        "left": scrollX * -1,
        "top": scrollY * -1
      });

      $("#bigView").css({
        "top": 75,
        "left": $(".preview").offset().left + $(".preview").width() + 15
      });
      return { left: X, top: Y };
    }
  });
