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
   $("h1").fitText(.35, {maxFontSize: '158px'});
   
   var img = $("#banner > img");
   
   var imgH = img.height();
   var imgW = img.width();
   
   var ww = $(window).width();
   
   var wH = ww/2;
   
   if( wH < imgW ){
     img.css("height", "100%");
   }
   else if( wh > imgW ){
     img.css("width", "100%");
   }

});
