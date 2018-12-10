$(function(){
  $('.fa-arrow-up').click(function(){
    $('html,body').animate({'scrollTop':0},500);
  });

});

$(window).on('load scroll resize',function(){
       if($(window).scrollTop() >= 50){
           $('.up-btn').fadeIn('normal');
       } else if($(window).scrollTop() < 50){
           $('.up-btn').fadeOut('normal');
       }
   });

$('.menu-icon').click(function(){
    $('this').find_by('nav').Slidetoggle();
});

$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});
