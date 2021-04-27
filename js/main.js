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


});