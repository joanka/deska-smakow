$(document).ready(function() {

	$('.nav-btn').click(function() {
      $('.main-head').toggleClass('nav-opened'); 
    });

	$('.close-icon').click(function() {
      $('.main-head').removeClass('nav-opened'); 
    });

    $('.main-head li a').click(function() {
	      $('.main-head').toggleClass('nav-opened');    
    });


});

