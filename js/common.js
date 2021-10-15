$(document).ready(function () {
  new WOW().init();
  $(".scroll-btn").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $(".phone").mask("+7 (999) 999-9999");
  $('.qwiz-slider__inner').slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  swipe: false,
	  prevArrow: $('.qwiz-arrows__back'),
	  nextArrow: $('.qwiz-arrows__next'),
    adaptiveHeight: true,
    asNavFor: '.qwiz-text__slider'
   });	
  $('.qwiz-text__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipe: false,
    asNavFor: '.qwiz-slider__inner'
   });  
  $(".qwiz-slider__inner").on("afterChange", function (){
     if ($('.qwiz-arrows__next').hasClass('slick-disabled')) {
      $('.qwiz-arrows__back').addClass('slick-disabled');
     }
  })
  $('.rst-1').on("change", function (){
     let vl = $(this).val();
     $('.rng-1').val(vl)
     $('.rng-1').change(); 
  })

  $('.rst-2').on("change", function (){
     let vl = $(this).val();
     $('.rng-2').val(vl)
     $('.rng-2').change(); 
  })

   $('.qwiz-block').on('click', function() {
   	let parent = $(this).parent('.qwiz-row');
   	let childrens = $(parent).children('.qwiz-block');
   	$(childrens).removeClass('qwiz-block-active');
   	$(this).addClass('qwiz-block-active');

   	
   })
   $('.qwiz-nav-block').on('click', function() {
     $('.qwiz-nav-block').removeClass('qwiz-nav-block_active');
     $(this).addClass('qwiz-nav-block_active');
   })
   $('.btn-phn').on('click', function() {
   	$('.dark-window').addClass('dark-window-active');
   	$('.modal-window').addClass('modal-window-active');
   	return false;
   })
   $('.dark-window').on('click', function() {
   	$('.dark-window').removeClass('dark-window-active');
   	$('.modal-window').removeClass('modal-window-active');
    $('.modal-thank').removeClass('modal-window-active');
   	return false;
   })
   $('.rst-1').val($('.rng-1').val());
   $('.rng-1').rangeslider({
       polyfill : false,
       onSlide : function( position, value ) {
          $('.rst-1').val(value);
       },
   });
   $('.rng-2').val($('.rst-2').val());
   $('.rng-2').rangeslider({
       polyfill : false,
       onSlide : function( position, value ) {
          $('.rst-2').val(value);
       },
   });
   let input_1 = $('input[name=qwiz-color]')[0];
   let input_2 = $('input[name=qwiz-sm-1]')[0];
   let input_3 = $('input[name=qwiz-sm-2]')[0];
   let input_4 = $('input[name=qwiz-delivery]')[0];
   let input_5 = $('input[name=qwiz-final]')[0];
   let input_6 = $('input[name=qwiz-soc]')[0];

   $('#form-1').submit(function() {
     $.ajax({
       type: "POST",
       url: "mail.php",
       data: $(this).serialize()
     }).done(function() {
       $('.modal-thank').addClass('modal-window-active');
       $('.modal-window').removeClass('modal-window-active');
       $(this).find("input").val("");
       $("#form-1").trigger("reset");
     });
    return false;
   })
   $('#qwiz-form').submit(function() {
     
     let block_1 = $('.qwiz-block-active')[0];
     block_1 = $(block_1).children('.qwiz-block__title').text();
     $(input_1).val(block_1)
     
     let block_2 = $('.rst-1').val();
     $(input_2).val(block_2)

     let block_3 = $('.rst-2').val();
     $(input_3).val(block_3)

     let block_4 = $('.qwiz-block-active')[1];
     block_4 = $(block_4).children('.qwiz-block__title').text();
     $(input_4).val(block_4)

     let block_5 = $('.qwiz-block-active')[2];
     block_5 = $(block_5).children('.qwiz-block__title').text();
     $(input_5).val(block_5)

     $.ajax({
       type: "POST",
       url: "mail-qwiz.php",
       data: $(this).serialize()
     }).done(function() {
       $('.modal-thank').addClass('modal-window-active');
       $('.dark-window').addClass('dark-window-active');
       $(this).find("input").val("");
       $("#form-1").trigger("reset");
     });
    return false;
   })
})