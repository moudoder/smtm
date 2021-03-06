$(document).ready(function () {
  new WOW().init();
  
  $(".scrol-to").on("click", function (event) {
    event.preventDefault();
    $('.modal-menu').removeClass('modal-menu-active');
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.about_btn_more').on('click', function() {
    $('.about__text').addClass('about-active');
    $(this).addClass('btn-active-more');
    return false;
  })
  

  $('.sport-menu_btn').on('click', function() {
    $('.modal-menu').removeClass('modal-menu-active');
    $('#section-slider').slick('slickGoTo',4);
  })

  $(".phone").mask("+7 (999) 999-9999");

  	
  
  $('#section-slider').on('init reInit',function(event,slick){
    var amount = slick.slideCount;
    $('#range').attr('max',amount);
  })

  $('#section-slider').on('afterChange',function(e,slick,currentSlide){
    $('#range').val(currentSlide+1);
  })

  $('#range').on('input change',function(){
    $('#section-slider').slick('slickGoTo',this.value-1);
  });


  $('.section-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
        {
          breakpoint: 500,
          settings: {
            arrows: true,
            prevArrow: $('.section-arrow__prev'),
            nextArrow: $('.section-arrow__next'),
          }
        },
    ]
   });
  $('.sport-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    cssEase: 'linear'
   });

  $('#range').rangeslider({
      polyfill : false,
  });

  $('.modern-block-1').on('click', function() {
    $('#section-slider').slick('slickGoTo',0);
    return false;
  })
  $('.modern-block-2').on('click', function() {
    $('#section-slider').slick('slickGoTo',1);
    return false;
  })
  $('.modern-block-3').on('click', function() {
    $('#section-slider').slick('slickGoTo',2);
    return false;
  })
  $('.modern-block-4').on('click', function() {
    $('#section-slider').slick('slickGoTo',3);
    return false;
  })
  $('.modern-block-5').on('click', function() {
    $('#section-slider').slick('slickGoTo',4);
    return false;
  })

  $('.header-menu').on('click', function() {
    $('.modal-menu').addClass('modal-menu-active');
    return false;
  })
  $('.modal-menu__close').on('click', function() {
    $('.modal-menu').removeClass('modal-menu-active');
    return false;
  })

})