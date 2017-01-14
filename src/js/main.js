$(document).ready(function() {

	$('.nav-btn').on('click', function() {
      $('.main-head').toggleClass('nav-opened'); 
    });

	$('.close-icon').on('click', function() {
      $('.main-head').removeClass('nav-opened'); 
    });

    $('.main-head li a').on('click', function(e) {
        e.preventDefault();
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


});






