$(document).ready(function () {

 $('.mainslider__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      /*autoplay: true,*/
      autoplaySpeed: 4000,
      arrows: false,
      fade: false,
      dots: true,
      

  });
 $('.productimage__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      /*autoplay: true,*/
      autoplaySpeed: 4000,
      arrows: false,
      fade: false,
      dots: true,
      

  });

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

  $('.menubutton').on('click', function() {

     $('.bglayer').toggle();
    $('.mainmenu').toggle('slide');
   
  });

  $('.mainmenu__close').on('click', function() {
    $('.mainmenu').hide();
    $('.bglayer').hide();
  });

  $('.productssort__button').on('click', function() {
    $('.productssort__content').slideToggle();
  });

  $('.popup__close').on('click', function() {
    $(this).closest('.popup').hide();
    $('.bglayer').hide();
  });

  $('a[data-modal="popup_mail"]').on('click', function(e) {
    e.preventDefault();
    $(".popup_mail").slideToggle();
    $('.bglayer').show();
  });

   $('a[data-modal="popup_review"]').on('click', function(e) {
    e.preventDefault();
    $(".popup_review").slideToggle();
    $('.bglayer').show();
  });

   $('.rating').each(function()
    {
      if($(this).parent().hasClass("small")){
        $(this).find('span').css('width',$(this).text()*13.5);
      }else{
        $(this).find('span').css('width',$(this).text()*20);
      }
    });
    $('#review .rating').mousemove(function(e)
    {
      var stars = parseInt((e.pageX-$(this).offset().left)/20)*20+20;
      $(this).children('span').css('width',stars);
    });
    $('#review .rating').mouseout(function(e)
    {
      $(this).children('span').css('width',$(this).text()*20);
    });
    $('#review .rating').click(function(e)
    {
      var stars = parseInt((e.pageX-$(this).offset().left)/20)+1;
      $('#review input[name="rating"]').val(stars);
      $('#review .rating span').html(stars);
    });

  

  jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".productssort__wrapper"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.find('.productssort__content').hide(); // скрываем его
      }
    });
  }); 


  
  $('.catalogmenu__items li.parent').on('click', function() {
    $(this).find('ul.submenu').slideToggle();
    $(this).toggleClass('active');
  });

  function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
    if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
    parent.find('input[name=' + fieldName + ']').val(1);
    }
  }
  function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
    if (!isNaN(currentVal) && currentVal > 1) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
    parent.find('input[name=' + fieldName + ']').val(1);
    }
  }
  $('.quantity').on('click', '.quantity-plus', function(e) {
    incrementValue(e);
  });
  $('.quantity').on('click', '.quantity-minus', function(e) {
    decrementValue(e);
  });



});