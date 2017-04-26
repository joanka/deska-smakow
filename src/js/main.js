$(document).ready(function() {

  //mobile nav
	$('.nav-btn').on('click', function() {
      $('.main-head').toggleClass('nav-opened'); 
    });

	$('.close-icon').on('click', function() {
      $('.main-head').removeClass('nav-opened'); 
    });

  $('.main-head li a').on('click', function(e) {
    $('.main-head').toggleClass('nav-opened');    
  });

  // menu tabs
  var tabs = $('.tabs-menu');
  $('.tab').not(":first").hide();

  tabs.find('a').on('click', function(e){
  	e.preventDefault();
  	tabs.find('.current').removeClass('current');
  	$(this).addClass('current');
  	$(this.hash).fadeIn(400).siblings().hide();
  });

  // slider oferta
  $('.control-next, .control-prev').on('click', function() {
    var activeItem = $('.offer-items').find('.active-item'),
        position = $('.offer-items').children().index(activeItem),
        itemNum = $('.offer-item').length;

        if ($(this).hasClass('control-next')) {
          if (position < itemNum - 1) {            
            $('.active-item').removeClass('active-item').next().addClass('active-item');
          } else {
            $('.offer-item').removeClass('active-item').first().addClass('active-item');
            $('.dot-buttons li').removeClass('active-item').first().addClass('active-item');
          }
       } else {
          if (position === 0) {
            $('.offer-item').removeClass('active-item').last().addClass('active-item');
            $('.dot-buttons li').removeClass('active-item').last().addClass('active-item');
          } else {
            $('.active-item').removeClass('active-item').prev().addClass('active-item');
          }
       }              
  });

  $('.dot-buttons li').on('click', function() {
    var $this = $(this), 
    $siblings = $this.parent().children(),
    position = $siblings.index($this);
    $('.offer-item').removeClass('active-item').eq(position).addClass('active-item');
    $siblings.removeClass('active-item');
    $this.addClass('active-item');
  });

  

});










  