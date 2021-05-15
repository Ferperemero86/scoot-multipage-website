$(document).ready(function() {
  
  // Panel //

  // Panel boddy display toggle
  $('.panel .icon').click(function() {
    $(this).closest('.panel').find('.panel-body').slideToggle();

    if ($(this).hasClass('arrow-up')) {
      $(this).addClass('arrow-down');
      $(this).removeClass('arrow-up');

    } else {
      $(this).addClass('arrow-up');
      $(this).removeClass('arrow-down');

    }

  });


})