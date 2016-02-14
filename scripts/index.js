var resizeImage = function() {
  $('.imatge-header2').css( "height", $(window).innerHeight() + 'px');
  console.log($(window).innerHeight());
}

$(document).ready(resizeImage);
$(window).resize(resizeImage);
