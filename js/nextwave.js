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
  $("body").onepage_scroll({
     sectionContainer: "section", 
     easing: "ease",
     animationTime: 1000,
     pagination: true,
     updateURL: false
   });
   $("h1").fitText(.4);
});