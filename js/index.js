$(function () {
  const imgHeight = $('.js-header').outerHeight();
  const header = $('.js-header');
  $(window).on('load scroll', function(){
      if ($(window).scrollTop() < imgHeight) {
        header.removeClass('header--default');
      }else {
        header.addClass('header--default');
      }
  });

  $('.drawer').drawer();
});