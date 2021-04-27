$(document).ready(function () {
  $('.menubutton').on('click', function() {
     $('.bglayer').toggle();
    $('.mainmenu').toggle('slide');
   
  });

  $('.mainmenu__close').on('click', function() {
    $('.mainmenu').hide();
    $('.bglayer').hide();
  });

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
  
  $('.catalogmenu__items li.parent').on('click', function() {
    $(this).find('ul.submenu').slideToggle();
    $(this).toggleClass('active');
  });


});