/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */

(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);
/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
/* ===========================================================
 * jquery-onepage-scroll.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create an Apple-like website that let user scroll
 * one page at a time
 *
 * Credit: Eike Send for the awesome swipe event
 * https://github.com/peachananr/onepage-scroll
 *
 * ========================================================== */


!function($){
  
  var defaults = {
    sectionContainer: "section",
    animationTime: 600,
    pagination: true,
    updateURL: false
	};
	
	/*------------------------------------------------*/
	/*  Credit: Eike Send for the awesome swipe event */    
	/*------------------------------------------------*/
	
	$.fn.swipeEvents = function() {
      return this.each(function() {

        var startX,
            startY,
            $this = $(this);

        $this.bind('touchstart', touchstart);

        function touchstart(event) {
          var touches = event.originalEvent.touches;
          if (touches && touches.length) {
            startX = touches[0].pageX;
            startY = touches[0].pageY;
            $this.bind('touchmove', touchmove);
          }
          event.preventDefault();
        }

        function touchmove(event) {
          var touches = event.originalEvent.touches;
          if (touches && touches.length) {
            var deltaX = startX - touches[0].pageX;
            var deltaY = startY - touches[0].pageY;

            if (deltaX >= 50) {
              $this.trigger("swipeLeft");
            }
            if (deltaX <= -50) {
              $this.trigger("swipeRight");
            }
            if (deltaY >= 50) {
              $this.trigger("swipeDown");
            }
            if (deltaY <= -50) {
              $this.trigger("swipeUp");
            }
            if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
              $this.unbind('touchmove', touchmove);
            }
          }
          event.preventDefault();
        }

      });
    };
  $.fn.onepage_scroll = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        sections = $(settings.sectionContainer)
        total = sections.length,
        status = "off",
        leftPos = 0,
        lastAnimation = 0,
        quietPeriod = 500,
        paginationList = "";
    
    $.fn.transformPage = function(settings, pos) {
      $(this).css({
        "-webkit-transform": "translate3d(" + pos + "%, 0 , 0)", 
        "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
        "-moz-transform": "translate3d(" + pos + "%, 0 , 0)",
        "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
        "-ms-transform": "translate3d(" + pos + "%, 0 , 0)",
        "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
        "transform": "translate3d(" + pos + "%, 0 , 0)",
        "transition": "all " + settings.animationTime + "ms " + settings.easing
      });
    }
    
    $.fn.moveDown = function() {
      var el = $(this)
      index = $(settings.sectionContainer +".active").data("index");
      if(index < total) {
        current = $(settings.sectionContainer + "[data-index='" + index + "']");
        next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']");
        if(next) {
          current.removeClass("active")
          next.addClass("active");
          if(settings.pagination == true) {
            $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
            $(".onepage-pagination li a" + "[data-index='" + (index + 1) + "']").addClass("active");
          }
          $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
          $("body").addClass("viewing-page-"+next.data("index"))
          
          /*
if (history.replaceState && settings.updateURL == true) {
            var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (index + 1);
            history.pushState( {}, document.title, href );
          }
*/
        }
        pos = (index * 25) * -1;
        el.transformPage(settings, pos);
      }
    }
    
    $.fn.moveUp = function() {
      var el = $(this)
      index = $(settings.sectionContainer +".active").data("index");
      if(index <= total && index > 1) {
        current = $(settings.sectionContainer + "[data-index='" + index + "']");
        next = $(settings.sectionContainer + "[data-index='" + (index - 1) + "']");

        if(next) {
          current.removeClass("active")
          next.addClass("active")
          if(settings.pagination == true) {
            $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
            $(".onepage-pagination li a" + "[data-index='" + (index - 1) + "']").addClass("active");
          }
          $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
          $("body").addClass("viewing-page-"+next.data("index"))
          
          /*
if (history.replaceState && settings.updateURL == true) {
            var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (index - 1);
            history.pushState( {}, document.title, href );
          }
*/
        }
        pos = ((next.data("index") - 1) * 25) * -1;
        el.transformPage(settings, pos);
      }
    }
    
    function init_scroll(event, delta) {
        deltaOfInterest = delta;
        var timeNow = new Date().getTime();
        // Cancel scroll if currently animating or within quiet period
        if(timeNow - lastAnimation < quietPeriod + settings.animationTime) {
            event.preventDefault();
            return;
        }

        if (deltaOfInterest < 0) {
          el.moveDown()
        } else {
          el.moveUp()
        }
        lastAnimation = timeNow;
    }
    
    // Prepare everything before binding wheel scroll
    
    el.addClass("onepage-wrapper").css("position","relative");
    $.each( sections, function(i) {
      $(this).css({
        position: "absolute",
        left: leftPos + "%"
      }).addClass("section").attr("data-index", i+1);
      leftPos = leftPos + 25;
      if(settings.pagination == true) {
        paginationList += "<li><a data-index='"+(i+1)+"' href='#" + (i+1) + "'></a></li>"
      }
    });
    
    el.swipeEvents().bind("swipeDown",  function(){ 
      el.moveUp();
    }).bind("swipeUp", function(){ 
      el.moveDown(); 
    });
    
    // Create Pagination and Display Them
    if(settings.pagination == true) {
      $("<ul class='onepage-pagination'>" + paginationList + "</ul>").prependTo("body");
      posleft = (el.find(".onepage-pagination").height() / 2) * -1;
      el.find(".onepage-pagination").css("margin-left", posleft);
    }
    
    if(window.location.hash != "" && window.location.hash != "#1") {
      init_index =  window.location.hash.replace("#", "")
      $(settings.sectionContainer + "[data-index='" + init_index + "']").addClass("active")
      $("body").addClass("viewing-page-"+ init_index)
      if(settings.pagination == true) $(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
      
      next = $(settings.sectionContainer + "[data-index='" + (init_index) + "']");
      if(next) {
        next.addClass("active")
        if(settings.pagination == true) $(".onepage-pagination li a" + "[data-index='" + (init_index) + "']").addClass("active");
        $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
        $("body").addClass("viewing-page-"+next.data("index"))
        /*
if (history.replaceState && settings.updateURL == true) {
          var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (init_index);
          history.pushState( {}, document.title, href );
        }
*/
      }
      pos = ((init_index - 1) * 100) * -1;
      el.transformPage(settings, pos);
      
    }else{
      $(settings.sectionContainer + "[data-index='1']").addClass("active")
      $("body").addClass("viewing-page-1")
      if(settings.pagination == true) $(".onepage-pagination li a" + "[data-index='1']").addClass("active");
    }
    if(settings.pagination == true)  {
      $(".onepage-pagination li a").click(function (){
        var page_index = $(this).data("index");
        if (!$(this).hasClass("active")) {
          current = $(settings.sectionContainer + ".active")
          next = $(settings.sectionContainer + "[data-index='" + (page_index) + "']");
          if(next) {
            current.removeClass("active")
            next.addClass("active")
            $(".onepage-pagination li a" + ".active").removeClass("active");
            $(".onepage-pagination li a" + "[data-index='" + (page_index) + "']").addClass("active");
            $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
            $("body").addClass("viewing-page-"+next.data("index"))
          }
          pos = ((page_index - 1) * 25) * -1;
          el.transformPage(settings, pos);
        }
        if (settings.updateURL == false) return false;
      });
    }
    
    
    
    $(document).bind('mousewheel DOMMouseScroll', function(event) {
      event.preventDefault();
      var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
      init_scroll(event, delta);
    });
    return false;
    
  }
      $('.direction').click(function(){
      if ($(this).attr('data-direction') === 'next'){
        el.moveDown();
      }
      else if ($(this).attr('data-direction') === 'prev'){
        el.moveUp();
      }
    });

  
}(window.jQuery);


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
