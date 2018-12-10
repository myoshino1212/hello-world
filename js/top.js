$(function(){
  $(".menu-table").css('display', 'none');
  $(".navToggle").css('display', 'none');
  var mySVG = $('#logo-svg').drawsvg({
  callback: function() {
   //コールバックの処理を記述
   $(".svg-image").fadeIn(5300);
   $("#logo-svg").fadeTo(1100, 0);
   $(".menu-logo").fadeIn(5300, 0);
   $('.menu-bar-t').animate({'background-color':'#FAF5EC'},5300);
   $(".top-background").fadeIn(5300, 0);
   $('.top-font').addClass('fluffy');

   var w = $(window).width();
   if (w <= 740) {
     $(".navToggle").fadeIn(5300, 0);
   } else{
     $(".menu-table").fadeIn(5300, 0);
   }

  }
  });

  mySVG.drawsvg('animate');



var checkWidth = function(){

    function backFadeIn(background,selected,other){
        $(background).stop(true, false).addClass('active-t');
        $(background).stop(true, false).css('opacity','0.0').animate({'opacity':'1.0'},500,);
        $(other).stop(true, false).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        $('.and').stop(true, false).html('&nbsp;');
        $(selected).stop(true, false).css({color:"#FAF5EC"});
        $(".svg-image").stop(true,false).fadeOut(1000);
        $('.top-font').removeClass('fluffy');
    }

    function backFadeOut(background,selected,other){
        $(background).stop(true, false).removeClass('active-t');
        $(background).stop(true, false).css('opacity','1.0').animate({'opacity':'0.0'},500,);
        if(other == '.eng-hover'){
          $(other).stop(true, false).html('Engineer');
        }else{
          $(other).stop(true, false).html('Rapper');
        }
        $('.and').stop(true, false).html('/');
        $(selected).stop(true, false).css({color:"#AD6816"});
        $(".svg-image").stop(true,false).fadeIn(1000);
        $('.top-font').addClass('fluffy');
    };

    var browserWidth = $(window).width();

    if(browserWidth > 1030){
          $('.eng-hover').hover(function(){
                backFadeIn('.eng-background','.eng-hover','.rap-hover');
              },function(){
                backFadeOut('.eng-background','.eng-hover','.rap-hover');
            });

          $('.rap-hover').hover(function(){
                backFadeIn ('.rap-background','.rap-hover','.eng-hover');
              },function(){
                backFadeOut('.rap-background','.rap-hover','.eng-hover');
          });
        } else{
            $('.eng-hover').click(function() {
                if ($('.eng-background').hasClass('active-t')) {
                  backFadeOut('.eng-background','.eng-hover','.rap-hover');
                } else {
                  backFadeIn('.eng-background','.eng-hover','.rap-hover');
                }
            });
          $('.rap-hover').click(function() {
              if ($('.rap-background').hasClass('active-t')){
                backFadeOut ('.rap-background','.rap-hover','.eng-hover');
              } else {
                backFadeIn ('.rap-background','.rap-hover','.eng-hover');
              }
          });
        }
  };

  $(function(){
    checkWidth();
    $(window).resize(checkWidth);
  });



  $(".body-t").on('touchmove.noScroll', function(e) {
    e.preventDefault();
});



});
