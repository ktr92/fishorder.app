$(document).ready(function () {
  $('.menubutton').on('click', function() {
     $('.bglayer').toggle();
    $('.mainmenu').toggle('slide');
   
  });

  $('.mainmenu__close').on('click', function() {
    $('.mainmenu').hide();
    $('.bglayer').hide();
  });

  


});