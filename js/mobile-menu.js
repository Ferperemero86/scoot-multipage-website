$(document).ready(function() {

  // Menu //
  const mainMenu = $('.main-menu');
  const mobileMenu = $('.mobile-menu');
  const closeIcon =  $('.close-icon');
  const hamburger = $('.hamburger');

  // Show menu
  hamburger.click(function() {
    mobileMenu.addClass('slide-right');
    mobileMenu.removeClass('slide-left');
    $(this).addClass('hidden');
    closeIcon.removeClass('hidden');
  });


  // Hide menu
  closeIcon.click(function() {
    mobileMenu.addClass('slide-left');
    mobileMenu.removeClass('slide-right');
    $(this).addClass('hidden');
    hamburger.removeClass('hidden');
  });

  // Fixed menu on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 125) {
      mainMenu.addClass('fixed');

    } else {
      mainMenu.removeClass('fixed');
    }
  });

});