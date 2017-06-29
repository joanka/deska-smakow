$(document).ready(function() {

  // Mobile nav
	$('.nav-btn').on('click', function() {
      $('.main-head').toggleClass('nav-opened'); 
    });

	$('.close-icon').on('click', function() {
      $('.main-head').removeClass('nav-opened'); 
    });

  $('.main-head li a').on('click', function(e) {
    $('.main-head').toggleClass('nav-opened');    
  });

  // Change mobile nav color on menu section and sticky nav
  $(window).scroll(function() {  
    var menusection = $('#menu').offset().top;
    var offersection = $('#oferta').offset().top;
    if ($(document).scrollTop() >= menusection && $(document).scrollTop() < offersection) {   
     $('.nav-btn span').addClass('black');
    } else {
      $('.nav-btn span').removeClass('black');
    } 
    if($(this).scrollTop() > 80 ) {
      $('.main-head').addClass('sticky-nav');
      $('.top-head .top-phone').addClass('sticky-head');
    } else {
      $('.main-head').removeClass('sticky-nav');
      $('.top-head .top-phone').removeClass('sticky-head');
    }
  });

  // Menu tabs
  var tabs = $('.tabs-menu');
  $('.tab').not(":first").hide();

  tabs.find('a').on('click', function(e){
  	e.preventDefault();
  	tabs.find('.current').removeClass('current');
  	$(this).addClass('current');
  	$(this.hash).fadeIn(400).siblings().hide();
  });

  // Slider oferta
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

  // Image change on hover
  $(".img-first img").on({
    "mouseenter":function() {
      $(this).attr('src', 'img/pyszne-logo-h.jpg');
    },
    "mouseleave": function() {
      $(this).attr('src','img/pyszne-logo.png');
    }
  });
  $(".img-second img").on({
    "mouseenter":function() {
      $(this).attr('src', 'img/pizza-portal-h.jpg');
    },
    "mouseleave": function() {
      $(this).attr('src','img/pizza-portal.png');
    }
  });

  // Google maps
  var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#948676"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

  function initMap() {
    var silverMapType = new google.maps.StyledMapType (
      styles, {name: 'Silver Map'});

    var mapContainer = document.getElementById("map");
    var map = new google.maps.Map(mapContainer, {
      center: { lat: 53.204799, lng: 23.207588 }, 
      zoom: 14,
      scrollwheel: false,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {style: google.maps.ZoomControlStyle.DEFAULT},
    });

    map.mapTypes.set('silver_map', silverMapType);
    map.setMapTypeId('silver_map');

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(53.204799, 23.207588),
      map: map,
      title: 'Deska Smaków',
      icon: new google.maps.MarkerImage("http://maps.google.com/mapfiles/kml/pal2/icon38.png")
    });

    marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

    var contentString = '<div style="height: auto; width: auto; padding:10px; background:#533834; color:#fff;">'+'<p>Deska Smaków</p>'+'</div>';

    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    infowindow.open(map,marker);

  }

  window.onload = initMap;

// Smooth scroll

$( '.main-nav-list a' ).on('click', function( e ) {
  e.preventDefault();
  console.log(e);
  console.log(String.fromCharCode(e.which));
} );


$(".main-nav-list").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    },500);
});

// Change active menu item on page scroll
    var lastId,
      topMenu = $(".main-nav"),
      topMenuHeight = topMenu.outerHeight()+15,     
      menuItems = topMenu.find("a"),      
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

    $(window).scroll(function(){
     var fromTop = $(this).scrollTop()+topMenuHeight; 
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
       if (lastId !== id) {
          lastId = id;
          menuItems
           .parent().removeClass("active")
           .end().filter("[href='#"+id+"']").parent().addClass("active");
       }                   
    }); 


});

