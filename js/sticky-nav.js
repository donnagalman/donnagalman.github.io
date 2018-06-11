$(window).scroll(function() {
  var $win = $(window);
  var winH = $win.height();

  if ($(this).scrollTop() > winH) {
    return $('.menu').addClass('fixed-top');
  } else {
    return $('.menu').removeClass('fixed-top');
  }
});
