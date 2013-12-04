$(document).ready(function() {  
  $(function() {
        $('.direction a').bind('click',function(event){
            var $anchor = $(this);
            
            $('html, body').stop().animate({
                scrollLeft: $($anchor.attr('href')).offset().left
            }, 600);
            event.preventDefault();
        });
  });
  $("#one-page-wrap").onepage_scroll({
     sectionContainer: "section", 
     easing: "ease",
     animationTime: 600,
     pagination: false,
     updateURL: true
   });
   $("h1").fitText(.5, {maxFontSize: '158px'});
   
/* MAP STYLES */
var mapStyles = [
  {
    "featureType": "transit.station.rail",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#313131" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station.rail",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.medical",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#313131" },
      { "invert_lightness": true },
      { "lightness": 66 },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#313131" },
      { "weight": 0.3 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#313131" },
      { "lightness": 83 },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#313131" },
      { "visibility": "on" },
      { "weight": 0.2 }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#313131" },
      { "weight": 0.4 }
    ]
  },{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#313131" },
      { "lightness": 85 }
    ]
  },{
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#313131" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#313131" },
      { "lightness": 83 }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#313131" }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels.text"  }
];
/* MAP STYLES */
   var map;
    function initialize() {
        var myLatLang = new google.maps.LatLng(40.68860, -73.97861);
        var mapOptions = {
          zoom: 15,
          center: myLatLang,
          scrollwheel: false,
          disableDefaultUI: true,
          styles: mapStyles
        };
      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      var marker = new google.maps.Marker({
          position: myLatLang,
          map: map
      });
    }

google.maps.event.addDomListener(window, 'load', initialize);

});
