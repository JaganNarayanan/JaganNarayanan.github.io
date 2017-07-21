$(".fa-rocket").click(function(){
  $('.fa-rocket').addClass('animated zoomOutUp');
  setTimeout(function () {
      $('.fa-rocket').removeClass('animated zoomOutUp');
  }, 2000);
});

$(".fa-rebel").click(function(){
  $('.kontakt').addClass('starwars');
  setTimeout(function () {
      $('.kontakt').removeClass('starwars');
  }, 2000);
});

$(".fa-play").click(function(){
  $('body').addClass('animated bounceInLeft');
  setTimeout(function () {
      $('body').removeClass('animated bounceInLeft');
  }, 2000);
});

$(".fa-pause").click(function(){
  $('body').addClass('animated wobble');
  setTimeout(function () {
      $('body').removeClass('animated wobble');
  }, 2000);
});

$(".fa-eject").click(function(){
  $('body').addClass('animated rubberBand');
  setTimeout(function () {
      $('body').removeClass('animated rubberBand');
  }, 2000);
});
