$(document).ready(function() {

  // Menu //

  // Show menu
  $('.hamburger').click(function() {
    $('.mobile-menu').addClass('slide-right');
    $('.mobile-menu').removeClass('slide-left');
    $(this).addClass('hidden');
    $('.close-icon').removeClass('hidden');
  });


  // Hide menu
  $('.close-icon').click(function() {
    $('.mobile-menu').addClass('slide-left');
    $('.mobile-menu').removeClass('slide-right');
    $(this).addClass('hidden');
    $('.hamburger').removeClass('hidden');
  });

});