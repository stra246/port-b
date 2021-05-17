$(function(){

    var imgHeight = $(".fv__inner").outerHeight();
    var fvHeight = $(".fv").outerHeight();




    
    $('.burger-btn').on('click',function(){
      if ($(window).scrollTop() < imgHeight -50){
        $('.bars').toggleClass('close');
        $('nav').toggleClass('slide-in');
        $('body').toggleClass('nonscroll');
        $('.burger-musk').fadeToggle(300);
      }else{
        $(this).toggleClass('black');
        $('.bars').toggleClass('close');
        $('nav').toggleClass('slide-in');
        $('body').toggleClass('nonscroll');
        $('.burger-musk').fadeToggle(300);
      }
      });

    $(window).on('load scroll', function(){
      if($(window).scrollTop() < imgHeight -50){
        $('.header-logo>a').removeClass('black');
      }else{
        $('.header-logo>a').addClass('black');
      }

      if($(window).scrollTop() < fvHeight -50){
        $('.bar ').removeClass('black');
        $('.menu').removeClass('font-black');
      }else{
        $('.bar').addClass('black');
        $('.menu').addClass('font-black');
      }
    }  );
    
    $('.copy--main').hide().fadeIn('slow');

    
    

    });
    