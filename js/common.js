$(document).ready(function () {
  new WOW().init();
  
  $('.header-list__item a').on('click', function() {
    return false;
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
})